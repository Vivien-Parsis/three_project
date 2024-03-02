import * as THREE from 'three';
import anime from 'animejs';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const viewportSize = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const aspectRatio = viewportSize.width / viewportSize.height

window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})
// const camera = new THREE.OrthographicCamera(
//     -2* aspectRatio,
//     2 * aspectRatio,
//     2,
//     -2
// )

const cursor = {
    x:0,
    y:0
}

const textureLoader = new THREE.TextureLoader()
const mapTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_basecolor.jpg')
const aoTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_ambientOcclusion.jpg')
const displacementTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_height.jpg')
mapTexture.repeat.x = 2
mapTexture.repeat.y = 2
mapTexture.rotation = Math.PI / 2 
mapTexture.wrapS = THREE.RepeatWrapping
mapTexture.wrapT = THREE.RepeatWrapping

window.addEventListener("mousemove",(event)=>{
    cursor.x = (event.clientX / window.innerWidth) * 2 - 1
    cursor.y = -(event.clientY / window.innerHeight) * 2 + 1
    camera.position.x = Math.cos(cursor.x * Math.PI) * 5
    camera.position.z = Math.sin(cursor.x * Math.PI) * 5
    camera.position.y = cursor.y
    camera.lookAt(new THREE.Vector3())
})

const camera = new THREE.PerspectiveCamera(
    75,
    viewportSize.width / viewportSize.height
);
scene.add(camera);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
camera.lookAt(new THREE.Vector3());

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(viewportSize.width, viewportSize.height);

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32, 64, 64, 64),
    new THREE.MeshStandardMaterial({map:mapTexture, aoMap:aoTexture, aoMapIntensity:1.5, displacementMap:displacementTexture, displacementScale:0.05})
);
sphere.position.x = -1;

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64, 64, 64, 64,),
    new THREE.MeshStandardMaterial({map:mapTexture, aoMap:aoTexture, aoMapIntensity:1.5, displacementMap:displacementTexture, displacementScale:0.05})
);
torus.position.x = 1;

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 64, 64, 64),
    new THREE.MeshStandardMaterial({map:mapTexture, aoMap:aoTexture, aoMapIntensity:1.5, displacementMap:displacementTexture, displacementScale:0.05})
);

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
const pointLight = new THREE.PointLight(0xFFFFFF, 1) 
pointLight.position.z = 4
pointLight.position.y = 2

plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.65;

scene.add(sphere, torus, plane,ambientLight, pointLight);

const clock = new THREE.Clock()
const controls = new OrbitControls(camera,canvas)
controls.targets = torus.position
controls.enableDamping;

anime({
    targets:[sphere.scale, torus.scale],
    x:[1,2],
    y:[1,2],
    duration:1000,
    direction: 'alternate',
    easing: 'easeInOutQuart',
    loop:true
})

const tick = () => {
    // const delta = clock.getDelta()
    // torus.rotation.x += 0.1 * delta
    // torus.rotation.y += 0.1 * delta
    // torus.rotation.z += 0.1 * delta
    renderer.render(scene, camera)
    controls.update()
    requestAnimationFrame(tick)
}
tick()
