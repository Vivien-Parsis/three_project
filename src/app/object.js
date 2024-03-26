import * as THREE from "three"
const textureLoader = new THREE.TextureLoader()
const mapTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_basecolor.jpg')
const aoTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_ambientOcclusion.jpg')
const displacementTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_height.jpg')
mapTexture.repeat.x = 1
mapTexture.repeat.y = 1
mapTexture.wrapS = THREE.RepeatWrapping
mapTexture.wrapT = THREE.RepeatWrapping
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const gltfLoader = new GLTFLoader()


//dimension
const planeDimension = {
    x : 400,
    z : 20
}
const obstacleDimension = {
    x : 3,
    y : 1,
    z : 2
}
//object
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(planeDimension.x, planeDimension.z, 64, 64, 64),
    new THREE.MeshStandardMaterial({ color: 0x009900 })
)

// const car = new THREE.Mesh(
//     new THREE.BoxGeometry(carDimension.x,carDimension.y,carDimension.z),
//     new THREE.MeshStandardMaterial({ color: 0x000099 })    
// )

let obstacleGroup = new THREE.Group()
for(let i = 0; i < 20; i++){
    const currentObstacle = new THREE.Mesh(
        new THREE.BoxGeometry(obstacleDimension.x,obstacleDimension.y,obstacleDimension.z),
        new THREE.MeshStandardMaterial({ color: 0x990000 }))
    currentObstacle.position.set((Math.random()*(planeDimension.x - obstacleDimension.x /2))-10, 0,(Math.random()*(planeDimension.z - obstacleDimension.z))+1)
    currentObstacle.geometry.computeBoundingBox()
    obstacleGroup.add(currentObstacle )
}
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 3)

let car = await gltfLoader.loadAsync("nissan_gt-r/scene.gltf").then((gltf)=>{return gltf.scene.children[0]})
plane.rotation.x = -Math.PI * 0.5
obstacleGroup.position.x -= planeDimension.x / 2
obstacleGroup.position.z -= planeDimension.z / 2
plane.geometry.computeBoundingBox()
car.rotation.z = - Math.PI / 2
car.scale.set( 1 / planeDimension.z, 1 / planeDimension.z, 1 / planeDimension.z)
const boxCar = new THREE.Box3()
boxCar.setFromObject(car)
const carSize = boxCar.getSize(new THREE.Vector3())

car.position.x += planeDimension.x / 2 - carSize.x / 2
plane.position.y -= carSize.z / 2
export { car, plane, obstacleGroup , ambientLight, planeDimension }