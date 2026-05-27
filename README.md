# Kritter

## Village Economic Growth Intelligence
Overview

This project develops a village-level composite development index for India by integrating satellite-derived indicators with socio-economic village census data. The objective is to identify and rank villages based on development status using a combination of environmental, economic, and infrastructure-related variables.

The analysis combines:

+ NDVI (Normalized Difference Vegetation Index) as a proxy for agricultural productivity and vegetation health
+ Night Light Intensity as a proxy for electrification and economic activity
+ Mission Antyodaya village-level indicators representing socio-economic conditions, infrastructure, public services, and governance

Using these datasets, a normalized and weighted Composite Development Index was created for villages across India, followed by national ranking and spatial visualization of the top-performing villages.

Key outputs include:
Village-level development index
National ranking of villages
State-wise comparison of top-performing villages
Spatial distribution maps of development hotspots
Analysis of relationships between satellite indicators and development outcomes

### Data Sources

This project integrates multiple open geospatial and socio-economic datasets to generate a village-level development index across India.

1. Village Boundary Shapefile

Source: National Water Informatics Centre / National Water Data Portal, Government of India

Used as the base administrative boundary layer for mapping and spatial aggregation of village-level indicators.

Link: [Insert link here]

2. MODIS NDVI Data

Source: Google Earth Engine Data Catalog
Link: [Insert link here]

3. Night Light Data

Source: Google Earth Engine Data Catalog
Link: [Insert link here]

4. Mission Antyodaya Survey Dataset

Source: Ministry of Rural Development, Government of India
Link: [Insert link here]
