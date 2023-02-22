Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5N2UyMjcwOS00MDY1LTQxYjEtYjZjMy00YTU0ZTg5MmViYWQiLCJpZCI6ODAzMDYsImlhdCI6MTY0Mjc0ODI2MX0.dkwAL1CcljUV7NA7fDbhXXnmyZQU_c-G5zRx8PtEcxE";
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: new Cesium.CesiumTerrainProvider({
        url: Cesium.IonResource.fromAssetId(770371)
      }),
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: true,
      geocoder: false,
      homeButton: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      timeline: false,
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        credit: '<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>'
      })
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
