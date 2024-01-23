//configure all the Map URL and Service URL that can be used in all over the project..
// Define configuration settings for ArcGIS services
const config = {
    arcGIS: {
      // Add all ArcGIS service URLs below
      featureServiceUrl: 'https://services3.arcgis.com/mt1lsyaNmrtuVpyw/ArcGIS/rest/services/Cities/FeatureServer/0',
      
    },
    otherServices: {
      // Define all other service URLs here
      customServiceUrl: 'https://your-custom-service.com/api/data',
      // Add more service URLs as needed
    },
  };
  
  // Make the configuration object accessible to other modules
  export default config;
  