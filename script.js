const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// //Import the THREE.js library
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// // To allow for the camera to move around the scene
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// // To allow for importing the .gltf file
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// //Create a Three.JS Scene
// const scene = new THREE.Scene();
// //create a new camera with positions and angles
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// //Keep track of the mouse position, so we can make the eye move
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// //Keep the 3D object on a global variable so we can access it later
// let object;

// //OrbitControls allow the camera to move around the scene
// let controls;

// //Set which object to render
// let objToRender = 'eye';

// //Instantiate a loader for the .gltf file
// const loader = new GLTFLoader();

// //Load the file
// loader.load(
//   `models/${objToRender}/scene.gltf`,
//   {
//     "accessors": [
//       {
//         "bufferView": 2,
//         "componentType": 5126,
//         "count": 2541,
//         "max": [
//           6.517942905426025,
//           6.517942428588867,
//           6.517942428588867
//         ],
//         "min": [
//           -6.517942905426025,
//           -6.517940521240234,
//           -6.517942905426025
//         ],
//         "type": "VEC3"
//       },
//       {
//         "bufferView": 2,
//         "byteOffset": 30492,
//         "componentType": 5126,
//         "count": 2541,
//         "max": [
//           1.0,
//           1.0,
//           1.0
//         ],
//         "min": [
//           -1.0,
//           -1.0,
//           -1.0
//         ],
//         "type": "VEC3"
//       },
//       {
//         "bufferView": 3,
//         "componentType": 5126,
//         "count": 2541,
//         "max": [
//           0.9999997019767761,
//           0.7088153958320618,
//           0.9999850392341614,
//           1.0
//         ],
//         "min": [
//           -0.707097053527832,
//           -0.7081753611564636,
//           -0.9999997615814209,
//           1.0
//         ],
//         "type": "VEC4"
//       },
//       {
//         "bufferView": 1,
//         "componentType": 5126,
//         "count": 2541,
//         "max": [
//           0.9690057039260864,
//           0.976699948310852
//         ],
//         "min": [
//           0.03334888815879822,
//           0.03169199824333191
//         ],
//         "type": "VEC2"
//       },
//       {
//         "bufferView": 0,
//         "componentType": 5125,
//         "count": 14400,
//         "type": "SCALAR"
//       },
//       {
//         "bufferView": 4,
//         "componentType": 5126,
//         "count": 2383,
//         "max": [
//           59.0
//         ],
//         "min": [
//           0.0
//         ],
//         "type": "SCALAR"
//       },
//       {
//         "bufferView": 5,
//         "componentType": 5126,
//         "count": 2383,
//         "max": [
//           0.4998249113559723,
//           0.7071067094802856,
//           0.7071068286895752,
//           0.7071067094802856
//         ],
//         "min": [
//           -0.7071068286895752,
//           -0.49928945302963257,
//           -0.49928954243659973,
//           -0.4998248219490051
//         ],
//         "type": "VEC4"
//       }
//     ],
//     "animations": [
//       {
//         "channels": [
//           {
//             "sampler": 0,
//             "target": {
//               "node": 4,
//               "path": "rotation"
//             }
//           }
//         ],
//         "name": "space_object_004_stone_planet_rotation",
//         "samplers": [
//           {
//             "input": 5,
//             "interpolation": "LINEAR",
//             "output": 6
//           }
//         ]
//       }
//     ],
//     "asset": {
//       "extras": {
//         "author": "Vaclav Marena (https://sketchfab.com/vaclavmarena)",
//         "license": "SKETCHFAB Standard (https://sketchfab.com/licenses)",
//         "source": "https://sketchfab.com/3d-models/space-object-004-stone-planet-a28b9f2c27024f78afab7dca9ae0cd5f",
//         "title": "Space Object 004 - Stone Planet"
//       },
//       "generator": "Sketchfab-16.45.0",
//       "version": "2.0"
//     },
//     "bufferViews": [
//       {
//         "buffer": 0,
//         "byteLength": 57600,
//         "name": "floatBufferViews",
//         "target": 34963
//       },
//       {
//         "buffer": 0,
//         "byteLength": 20328,
//         "byteOffset": 57600,
//         "byteStride": 8,
//         "name": "floatBufferViews",
//         "target": 34962
//       },
//       {
//         "buffer": 0,
//         "byteLength": 60984,
//         "byteOffset": 77928,
//         "byteStride": 12,
//         "name": "floatBufferViews",
//         "target": 34962
//       },
//       {
//         "buffer": 0,
//         "byteLength": 40656,
//         "byteOffset": 138912,
//         "byteStride": 16,
//         "name": "floatBufferViews",
//         "target": 34962
//       },
//       {
//         "buffer": 0,
//         "byteLength": 9532,
//         "byteOffset": 179568,
//         "name": "floatBufferViews"
//       },
//       {
//         "buffer": 0,
//         "byteLength": 38128,
//         "byteOffset": 189100,
//         "byteStride": 16,
//         "name": "floatBufferViews"
//       }
//     ],
//     "buffers": [
//       {
//         "byteLength": 227228,
//         "uri": "scene.bin"
//       }
//     ],
//     "extensionsRequired": [
//       "KHR_materials_pbrSpecularGlossiness"
//     ],
//     "extensionsUsed": [
//       "KHR_materials_pbrSpecularGlossiness"
//     ],
//     "images": [
//       {
//         "uri": "textures/space_object_004_stone_planet_diffuse.png"
//       },
//       {
//         "uri": "textures/space_object_004_stone_planet_specularGlossiness.png"
//       },
//       {
//         "uri": "textures/space_object_004_stone_planet_normal.png"
//       }
//     ],
//     "materials": [
//       {
//         "doubleSided": true,
//         "extensions": {
//           "KHR_materials_pbrSpecularGlossiness": {
//             "diffuseFactor": [
//               1.0,
//               1.0,
//               1.0,
//               1.0
//             ],
//             "diffuseTexture": {
//               "index": 0
//             },
//             "glossinessFactor": 1.0,
//             "specularFactor": [
//               0.2,
//               0.2,
//               0.2
//             ],
//             "specularGlossinessTexture": {
//               "index": 1
//             }
//           }
//         },
//         "name": "space_object_004_stone_planet",
//         "normalTexture": {
//           "index": 2
//         }
//       }
//     ],
//     "meshes": [
//       {
//         "name": "space_object_004_stone_planet_space_object_004_stone_planet_0",
//         "primitives": [
//           {
//             "attributes": {
//               "NORMAL": 1,
//               "POSITION": 0,
//               "TANGENT": 2,
//               "TEXCOORD_0": 3
//             },
//             "indices": 4,
//             "material": 0,
//             "mode": 4
//           }
//         ]
//       }
//     ],
//     "nodes": [
//       {
//         "children": [
//           1
//         ],
//         "matrix": [
//           0.963735044002533,
//           0.2668609917163849,
//           5.925504347556673e-17,
//           0.0,
//           0.0,
//           2.220446049250313e-16,
//           -1.0,
//           0.0,
//           -0.2668609917163849,
//           0.963735044002533,
//           2.139921670979501e-16,
//           0.0,
//           0.0,
//           0.0,
//           0.0,
//           1.0
//         ],
//         "name": "Sketchfab_model"
//       },
//       {
//         "children": [
//           2
//         ],
//         "matrix": [
//           1.0,
//           0.0,
//           0.0,
//           0.0,
//           0.0,
//           0.0,
//           1.0,
//           0.0,
//           0.0,
//           -1.0,
//           0.0,
//           0.0,
//           0.0,
//           0.0,
//           0.0,
//           1.0
//         ],
//         "name": "b1f7b593e91e44dd836e2eb8f2ea1240.fbx"
//       },
//       {
//         "children": [
//           3
//         ],
//         "name": "Object_2"
//       },
//       {
//         "children": [
//           4
//         ],
//         "name": "RootNode"
//       },
//       {
//         "children": [
//           5
//         ],
//         "name": "space_object_004_stone_planet",
//         "rotation": [
//           -0.6943454742431641,
//           0.13373294472694397,
//           0.13373295962810516,
//           0.6943453550338745
//         ]
//       },
//       {
//         "mesh": 0,
//         "name": "space_object_004_stone_planet_space_object_004_stone_planet_0"
//       }
//     ],
//     "samplers": [
//       {
//         "magFilter": 9729,
//         "minFilter": 9987,
//         "wrapS": 10497,
//         "wrapT": 10497
//       }
//     ],
//     "scene": 0,
//     "scenes": [
//       {
//         "name": "Sketchfab_Scene",
//         "nodes": [
//           0
//         ]
//       }
//     ],
//     "textures": [
//       {
//         "sampler": 0,
//         "source": 0
//       },
//       {
//         "sampler": 0,
//         "source": 1
//       },
//       {
//         "sampler": 0,
//         "source": 2
//       }
//     ]
//   }
  
// );

// //Instantiate a new renderer and set its size
// const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
// renderer.setSize(window.innerWidth, window.innerHeight);

// //Add the renderer to the DOM
// document.getElementById("container3D").appendChild(renderer.domElement);

// //Set how far the camera will be from the 3D model
// camera.position.z = objToRender === "space_object_004_-_stone_planet" ? 25 : 500;

// //Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(500, 500, 500) //top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "space_object_004_-_stone_planet" ? 5 : 1);
// scene.add(ambientLight);

// //This adds controls to the camera, so we can rotate / zoom it with the mouse
// if (objToRender === "space_object_004_-_stone_planet") {
//   controls = new OrbitControls(camera, renderer.domElement);
// }

// //Render the scene
// function animate() {
//   requestAnimationFrame(animate);
//   //Here we could add some code to update the scene, adding some automatic movement

//   //Make the eye move
//   if (object && objToRender === "eye") {
//     //I've played with the constants here until it looked good 
//     object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//     object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
//   }
//   renderer.render(scene, camera);
// }

// //Add a listener to the window, so we can resize the window and the camera
// window.addEventListener("resize", function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// //add mouse position listener, so we can make the eye move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

// //Start the 3D rendering
// animate();