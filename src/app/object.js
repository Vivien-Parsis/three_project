import * as THREE from "three"

const textureLoader = new THREE.TextureLoader()
const mapTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_basecolor.jpg')
const aoTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_ambientOcclusion.jpg')
const displacementTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_height.jpg')
mapTexture.repeat.x = 1
mapTexture.repeat.y = 1
mapTexture.wrapS = THREE.RepeatWrapping
mapTexture.wrapT = THREE.RepeatWrapping

export const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 5, 64, 64, 64),
    new THREE.MeshStandardMaterial({map:mapTexture, aoMap:aoTexture, aoMapIntensity:1.5, displacementMap:displacementTexture, displacementScale:0.05})
)

export const car = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshStandardMaterial({map:mapTexture, aoMap:aoTexture, aoMapIntensity:1.5, displacementMap:displacementTexture, displacementScale:0.05})    
)

plane.rotation.x = -Math.PI * 0.5
plane.position.y = -0.5