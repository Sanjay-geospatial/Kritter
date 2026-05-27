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

### Methodology

The village-level development analysis was carried out by integrating satellite-derived indicators with socio-economic survey data. The workflow combines environmental, economic, infrastructure, and governance-related variables to create a Weighted Composite Development Index (WCDI) for villages across India.

1. Satellite-derived Indicators

A weighted NDVI index was developed using:

Mean NDVI (NDVIₘ) → average greenness over the last 5 years
NDVI Trend (NDVIₜ) → long-term vegetation trend over 5 years
NDVI Standard Deviation (NDVIₛd) → temporal variability

The weighted NDVI index was computed as:

NDVI Index=0.55×NDVIₘ+0.35×NDVIₜ+0.10×NDVIsd
	​

Night Light Index (Electrification & Economic Activity)

Mean Night Light (NLₘ)
Night Light Trend (NLₜ)
Night Light Standard Deviation (NLₛd)

The weighted Night Light Index was calculated as:

Night Light Index=0.55×NLₘ+0.35×NLₜ+0.10×NLₛd
	​

2. Mission Antyodaya Development Index

Village-level indicators from the Mission Antyodaya survey were grouped into six broad thematic categories:

Infrastructure Parameters (IP)
Water Availability Parameters (WP)
Health & Education Parameters (HEP)
Economic Parameters (EP)
Digital Parameters (DP)
Government Participation Parameters (GP)

A weighted development index was then created as:

Development Index=0.25×IP+0.20×WP+0.20×HEP+0.15×EP+0.10×DP+0.10×GP

3. Weighted Composite Development Index (WCDI)

Before combining the indices:

NDVI Index
Night Light Index
Development Index

were normalized using Min-Max scaling to bring all variables to a common range between 0 and 1.

The final Weighted Composite Development Index (WCDI) was calculated as:

WCDI=0.50×Development Index+0.35×Night Light Index+0.15×NDVI Index

Where:

50% weight → socio-economic development indicators
35% weight → night light intensity
15% weight → NDVI

4. Village Ranking

All villages were ranked based on WCDI values.

### Results

1. Spatial distribution of Developed villages

2. Top 5 states with developed villages

3. Top 5 states with villages having nearby hospitals

4. Top 5 states having computer lab in schools

5. Top 5 states with highest women representation

