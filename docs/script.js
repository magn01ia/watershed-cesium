// Your access token can be found at: https://ion.cesium.com/tokens.
    // Replace `your_access_token` with your Cesium ion access token.


    //Cesium.Ion.defaultAccessToken = 'your_access_token';

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.

    const viewer = new Cesium.Viewer('cesiumContainer', {

      terrainProvider: Cesium.createWorldTerrain()

    });    

    // Add Cesium OSM Buildings, a global 3D buildings layer.

    //const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   

    // Fly the camera to San Francisco at the given longitude, latitude, and height.

    viewer.camera.flyTo({

      destination : Cesium.Cartesian3.fromDegrees(139.90, 36.47, 10000),

      orientation : {

        heading : Cesium.Math.toRadians(0.0),

        pitch : Cesium.Math.toRadians(-45.0),

      }

    });
