import { Viewer, Terrain, Ion, IonImageryProvider } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhYzExZGQyNi1hNGY3LTRmMGUtYjM1NS1kZDc0M2IwZDM1MjEiLCJpZCI6MjQzNTU2LCJpYXQiOjE3MjcxMjY1Mjd9._u2nbQUxjj2Qo4L8bMbbzWWXsBhARZ80y9JtJF_MqqU";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

viewer.imageryLayers.addImageryProvider(
  await IonImageryProvider.fromAssetId(2744484),
);

const imageryLayer2 = viewer.imageryLayers.addImageryProvider(
  await IonImageryProvider.fromAssetId(2744530),
);

await viewer.zoomTo(imageryLayer2);
