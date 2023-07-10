import * as THREE from 'three';
import './styles.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Planet from './Planet';

//Scene
const scene = new THREE.Scene();

//The sun
const sunGeometry = new THREE.SphereGeometry(8, 100, 100);
const sunTexture = new THREE.TextureLoader().load("/assets/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
const solarSystem = new THREE.Group();

solarSystem.add(sunMesh);
scene.add(solarSystem);

//All planets
//Distance from each other and size of planets is adjusted for better visualization
const mercury = new Planet(1.5, 16, "/assets/mercury.jpg");
const mercuryMesh = mercury.getMesh();
const mercurySystem = new THREE.Group();
mercurySystem.add(mercuryMesh);

const venus = new Planet(3.8, 32, "/assets/venus.jpg");
const venusMesh = venus.getMesh();
const venusSystem = new THREE.Group();
venusSystem.add(venusMesh);

const earth = new Planet(4, 48, "/assets/earth.jpg");
const earthMesh = earth.getMesh();
const earthSystem = new THREE.Group();
earthSystem.add(earthMesh);

const mars = new Planet(2, 64, "/assets/mars.jpg");
const marsMesh = mars.getMesh();
const marsSystem = new THREE.Group();
marsSystem.add(marsMesh);

const jupiter = new Planet(10, 90, "/assets/jupiter.jpg");
const jupiterMesh = jupiter.getMesh();
const jupiterSystem = new THREE.Group();
jupiterSystem.add(jupiterMesh);

const saturn = new Planet(8, 132, "/assets/saturn.jpg");
const saturnMesh = saturn.getMesh();
const saturnSystem = new THREE.Group();
saturnSystem.add(saturnMesh);

const uranus = new Planet(5, 164, "/assets/uranus.jpg");
const uranusMesh = uranus.getMesh();
const uranusSystem = new THREE.Group();
uranusSystem.add(uranusMesh);

const neptune = new Planet(5, 200, "/assets/neptune.jpg");
const neptuneMesh = neptune.getMesh();
const neptuneSystem = new THREE.Group();
neptuneSystem.add(neptuneMesh);


solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem, jupiterSystem, saturnSystem, uranusSystem, neptuneSystem);

//Importing 3D Object stars
const loader = new GLTFLoader();
loader.load( './assets/stars/extracted_minecraft_java_editions_stars.glb', function ( glb ) {
	const root = glb.scene
	root.scale.set(10, 10, 10)
	scene.add( root );
}, undefined, function ( error ) {
	console.error( error );
} );

//Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

//Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height)
camera.position.z = 128;
scene.add(camera);

//Light
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 5, 5)
scene.add(light)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)


//Calculating full rotation around the sun for all planets
//Adjusted orbit speeds for better visualization
const EARTH_YEAR = 2*Math.PI*(1/60)*(1/60);
const planets = [
	{
	  system: mercurySystem,
	  mesh: mercuryMesh,
	  orbitSpeed: EARTH_YEAR * 4,
	  selfRotationSpeed: 0.01,
	  reverseRotation: false,
	},
	{
	  system: venusSystem,
	  mesh: venusMesh,
	  orbitSpeed: EARTH_YEAR * 2,
	  selfRotationSpeed: 0.02,
	  reverseRotation: true, //Venus' rotation around itself is in the opposite direction of the rest of the planets
	},
	{
	  system: earthSystem,
	  mesh: earthMesh,
	  orbitSpeed: EARTH_YEAR,
	  selfRotationSpeed: 0.03,
	  reverseRotation: false,
	},
	{
	  system: marsSystem,
	  mesh: marsMesh,
	  orbitSpeed: EARTH_YEAR * 0.5,
	  selfRotationSpeed: 0.04,
	  reverseRotation: false,
	},
	{
	  system: jupiterSystem,
	  mesh: jupiterMesh,
	  orbitSpeed: EARTH_YEAR / 2,
	  selfRotationSpeed: 0.05,
	  reverseRotation: false,
	},
	{
	  system: saturnSystem,
	  mesh: saturnMesh,
	  orbitSpeed: EARTH_YEAR / 5,
	  selfRotationSpeed: 0.06,
	  reverseRotation: false,
	},
	{
	  system: uranusSystem,
	  mesh: uranusMesh,
	  orbitSpeed: EARTH_YEAR / 10,
	  selfRotationSpeed: 0.07,
	  reverseRotation: false,
	},
	{
	  system: neptuneSystem,
	  mesh: neptuneMesh,
	  orbitSpeed: EARTH_YEAR / 15,
	  selfRotationSpeed: 0.08,
	  reverseRotation: false,
	},
  ];


  function animate() {
	sunMesh.rotation.y += 0.001;
  
	planets.forEach((planet) => {
		planet.system.rotation.y += planet.orbitSpeed;
		
		if (planet.reverseRotation) {
		  planet.mesh.rotation.y -= planet.selfRotationSpeed;
		} else {
		  planet.mesh.rotation.y += planet.selfRotationSpeed;
		}
	  });
  
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
  }
  
  animate();
  

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

//Resize
window.addEventListener("resize", () => {
	//Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	//Update camera
	camera.aspect = sizes.width/sizes.height
	camera.updateProjectionMatrix()
	renderer.setSize(sizes.width, sizes.height)
})

const loop = () => {
	controls.update()
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
}
loop()
