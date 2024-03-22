import * as THREE from "three"

const textureLoader = new THREE.TextureLoader()
const mapTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_basecolor.jpg')
const aoTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_ambientOcclusion.jpg')
const displacementTexture = textureLoader.load('./src/assets/texture/Wood_Metal_Platform_01_SD-20240220T164131Z-001/Wood_Metal_Platform_01_SD/Substance_graph_height.jpg')
mapTexture.repeat.x = 1
mapTexture.repeat.y = 1
mapTexture.wrapS = THREE.RepeatWrapping
mapTexture.wrapT = THREE.RepeatWrapping
//dimension
const planeDimension = {
    x : 200,
    z : 20
}
const carDimension = {
    x : 3,
    y : 1,
    z : 2
}
const obstacleDimension = {
    x : carDimension.x,
    y : carDimension.y,
    z : carDimension.z
}
//object
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(planeDimension.x, planeDimension.z, 64, 64, 64),
    new THREE.MeshStandardMaterial({ color: 0x009900 })
)

const car = new THREE.Mesh(
    new THREE.BoxGeometry(carDimension.x,carDimension.y,carDimension.z),
    new THREE.MeshStandardMaterial({ color: 0x000099 })    
)

let obstacleGroup = new THREE.Group()
for(let i = 0; i < 50; i++){
    const currentObstacle = new THREE.Mesh(
        new THREE.BoxGeometry(obstacleDimension.x,obstacleDimension.y,obstacleDimension.z),
        new THREE.MeshStandardMaterial({ color: 0x990000 }))
    currentObstacle.position.set((Math.random()*(planeDimension.x - obstacleDimension.x /2))+1, 0,(Math.random()*(planeDimension.z - obstacleDimension.z / 2))+1);
    obstacleGroup.add(currentObstacle )
}

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 3)

plane.rotation.x = -Math.PI * 0.5
plane.position.y -= carDimension.z / 2
obstacleGroup.position.x -= planeDimension.x / 2
obstacleGroup.position.z -= planeDimension.z / 2
car.position.x += planeDimension.x / 2 - carDimension.x / 2

export { car, plane, obstacleGroup , ambientLight }