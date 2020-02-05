import { ReactInstance, Location, Surface } from 'react-360-web';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();

// polyfill.getVRDisplays().then(displays => {
//   console.log(displays.length);
//   if (displays.length) {
//     vrDisplay = displays[0];
//     controls = new THREE.VRControls(camera);
//     vrDisplay.requestAnimationFrame(animate);
//   } else {
//     // If we don't have a VRDisplay, we're probably on
//     // a desktop environment, so set up desktop-oriented controls
//     controls = new THREE.OrbitControls(camera);
//     requestAnimationFrame(animate);
//   }
// });

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('MeetVR', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  const flatLeftSurface = new Surface(
    1000, /* width */
    600, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );
  
  /// To rotate a panel 90 degrees to your left:
  flatLeftSurface.setAngle(
    -Math.PI / 2, /* yaw angle */
    0 /* pitch angle */
  );

  r360.renderToSurface(
    r360.createRoot('PostIt'),
    flatLeftSurface,
    'PostIt' /* optional, a name to reference the surface */
  );

  // r360.renderToLocation(
  //   r360.createRoot('PersonalInfo'),
  //   new Location([-20, 10, -20]),
  // );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('milano-piazza.jpg'));
  // const player = r360.compositor.createVideoPlayer(VIDEO_PLAYER);
  // player.setLoop(true);
  // player.setVolume(1);
  // Set the video to be played, and its format
  // player.setSource('./static_assets/360_0076.mp4', '2D', 'mp4');
  // player.play();
  
  
  // r360.compositor.setBackgroundVideo(VIDEO_PLAYER);
}

window.React360 = {init};
