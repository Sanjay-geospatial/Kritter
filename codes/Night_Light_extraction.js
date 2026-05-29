var years = [2021, 2022, 2023, 2024, 2025];

// Create annual NL

var annualNL = function(year){

  var start = ee.Date.fromYMD(year,1,1);
  var end   = start.advance(1,'year');

  var nl = ee.ImageCollection(
              "NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG"
            )
            .filterDate(start, end)
            .select('avg_rad')
            .mean()
            .clip(india)
            .rename('NL_' + year);

  return nl;
};

//  Map each year for annual NL

var annualImages = years.map(function(y){
  return annualNL(y);
});

//  Each year NL image as band in an Image collection

var stacked = ee.ImageCollection.fromImages(
  annualImages
).toBands();

// Year suffix to each column

var bandNames = years.map(function(y){
  return 'NL_' + y;
});

stacked = stacked.rename(bandNames);

print(stacked);

Map.centerObject(india, 5);

Map.addLayer(
  stacked.select('NL_2022'),
  {
    min: 0,
    max: 20,
    palette: [
      'black',
      'purple',
      'blue',
      'cyan',
      'yellow',
      'white'
    ]
  },
  'Night Lights 2022'
);

// Mean annual Night light for each village
var villageStats = stacked.reduceRegions({
  collection: villages,
  reducer: ee.Reducer.mean(),
  scale: 500,
  tileScale: 4
});

print(villageStats.limit(5));

// Export as table

Export.table.toDrive({
  collection: villageStats,
  description: 'Village_NightLights_2021_2025',
  folder: 'GEE_Exports',
  fileNamePrefix: 'Village_NightLights_2021_2025',
  fileFormat: 'CSV'
});
