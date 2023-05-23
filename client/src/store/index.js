import { proxy } from "valtio";

const state = proxy({
  // are we on the homepage or not
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  //   default logo
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
export default state;
