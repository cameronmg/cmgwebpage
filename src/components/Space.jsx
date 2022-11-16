import React from 'react';
import '../styles.css'
import * as THREE from 'three';
import SpaceImage from '../assests/space.jpg';
import Cam from '../assests/cam.jpg'
import Moon from '../assests/moon.jpg'
import Normal from '../assests/normal.jpg'

export const Space = () => 
{
  const SCREEN_HEIGHT = 500;
  const CUBE_SIZE = 7;
  const ITEMS_POSITION_X = -3;
  const ITEMS_POSITION_Y = -2;
  //create new scene in camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //create a render for the scene
  const renderer = new THREE.WebGLRenderer();
  //renderer.setSize( window.innerWidth, SCREEN_HEIGHT);
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //set the size of the screen and the position of the camera
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  //renderer.setSize(window.innerWidth, SCREEN_HEIGHT)
  //set the position of the camera
  camera.position.setZ(30);
  camera.position.setX(-3);

  // creating a torus object
  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({ color: 0x1039a8 });
  const torus = new THREE.Mesh(geometry, material);

  //add the torus to the scene
  scene.add(torus);
  torus.position.x = ITEMS_POSITION_X;
  torus.position.y = ITEMS_POSITION_Y;

  // create the texture for the background
  const spaceTexture = new THREE.TextureLoader().load(SpaceImage);
  scene.background = spaceTexture;

  const camTexture = new THREE.TextureLoader().load(Cam);
  const cam = new THREE.Mesh(new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE), new THREE.MeshBasicMaterial({ map: camTexture }));
  //add the cube mesh to the scene
  scene.add(cam);

  cam.position.x = ITEMS_POSITION_X;
  cam.position.y = ITEMS_POSITION_Y;

  // creat the texture for the moon
  const moonTexture = new THREE.TextureLoader().load(Moon);
  const normalTexture = new THREE.TextureLoader().load(Normal);

  //create the mesh for moon object and appy the moon texture as well as normal texture for bumps on moon
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: normalTexture,
    })
  );

  //add the moon to the scene
  scene.add(moon);
  //set the position of the moon
  moon.position.z = 30;
  moon.position.setX(-10);

  function addStar() 
  {
  //create the mesh for a star
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  //fill the array with random coordinates
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  //set the position of the star
  star.position.set(x, y, z);
  //add the star to the scene
  scene.add(star);
  }

 

  // create a point light for the screne
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5)
  //create an ambient light for the scene
  const ambientLight = new THREE.AmbientLight(0xffffff);
  //add the lights to the scene
  scene.add(ambientLight);

  //const controls = new THREE.OrbitControls( camera, renderer.domElement );
  //create axes helper object
  //const axesHelper = new THREE.AxesHelper(5);
  //add axes helper to scene
  //scene.add(axesHelper)
  //controls.update()

  

  const animate = function () {
    requestAnimationFrame( animate );

    //rotate the torus constatly
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

     //rotate the cube when camera moves
    cam.rotation.y += 0.01;
    cam.rotation.z += 0.01;

    //controls.update()
    renderer.render( scene, camera );

    

    //resize the items in the window when window changes
    window.addEventListener('resize', function()
    {
      //width and height set to screen width and height
      var width = window.innerWidth;
      //var height = window.innerHeight;
      var height = SCREEN_HEIGHT;
      renderer.setSize(width, height);
      camera.aspect = width/height;
      camera.updateProjectionMatrix();

    })

  };

  //call function to animate object
  Array(200).fill().forEach(addStar);
  animate();

  return(
  <>
    
       
      
  </>
  );
  
}

export default Space;
