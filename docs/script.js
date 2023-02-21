    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain(),
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: true,
      geocoder: false,
      homeButton: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      timeline: false,
    });    

    Cesium.GeoJsonDataSource.clampToGround = true;
    const wb = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("data/WatershedBoundary.geojson",{
      fill:Cesium.Color.DEEPSKYBLUE.withAlpha(0.1),
    }));
    const wboutline = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("data/wboutline.geojson",{
      stroke:Cesium.Color.DODGERBLUE.withAlpha(0.5),
      strokeWidth: 2,
    }));


    //const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   

    viewer.camera.setView({
      destination : Cesium.Cartesian3.fromDegrees(139.90, 36.47, 10000),
      orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-45.0),
      }
    });
