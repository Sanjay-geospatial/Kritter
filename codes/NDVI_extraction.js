var years = [2021, 2022, 2023, 2024, 2025];
-
var annualNDVI = function(year){

  var start = ee.Date.fromYMD(year,1,1);
  var end   = start.advance(1,'year');

  // MODIS NDVI Import
  var ndvi = ee.ImageCollection("MODIS/061/MOD13Q1")
                .filterDate(start, end)
                .select('NDVI')
                .mean()
                .multiply(0.0001)   // scale factor
                .clip(india)
                .rename('NDVI_' + year);

  return ndvi;
};

// Create image collection
var annualImages = years.map(function(y){
  return annualNDVI(y);
});

//  Each image as band in an Image collection
var stacked = ee.ImageCollection.fromImages(
  annualImages
).toBands();

//  Band name suffix

var bandNames = years.map(function(y){
  return 'NDVI_' + y;
});

stacked = stacked.rename(bandNames);

print(stacked);

Map.centerObject(india, 5);

Map.addLayer(
  stacked.select('NDVI_2022'),
  {
    min: 0,
    max: 1,
    palette: [
      'brown',
      'yellow',
      'lightgreen',
      'green',
      'darkgreen'
    ]
  },
  'MODIS NDVI 2022'
);

//  Mean annual NDVI for each village

var villageStats = stacked.reduceRegions({
  collection: villages,
  reducer: ee.Reducer.mean(),
  scale: 250,     // MODIS resolution
  tileScale: 4
});

print(villageStats.limit(5));

// Export reduced feature collection as CSV

Export.table.toDrive({
  collection: villageStats,
  description: 'Village_MODIS_NDVI_2021_2025',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Village_MODIS_NDVI_2021_2025',
  fileFormat: 'CSV'
});
