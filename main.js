import * as THREE from 'three'
import anime from 'animejs'
import { plane, car } from './src/app/object'
import { addControl } from './src/app/controle'

const scene = new THREE.Scene()

const viewportSize = {
    width: window.innerWidth,
    height: window.innerHeight,
}
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

const cameraOffset = new THREE.Vector3(5, 2, 0)
const camera = new THREE.PerspectiveCamera(
    75,
    viewportSize.width / viewportSize.height
)
camera.position.copy(car.position).add(cameraOffset)
camera.lookAt(car.position)
const canvas = document.querySelector('#webgl')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(viewportSize.width, viewportSize.height)

// Objects

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
const pointLight = new THREE.PointLight(0xFFFFFF, 1) 
pointLight.position.z = 4
pointLight.position.y = 2



scene.add(car, plane, ambientLight, pointLight,camera)

const clock = new THREE.Clock()
// const controls = new MapControls(camera, canvas);
// controls.targets = car.position
// controls.enableDamping

addControl(car, camera)

const tick = () => {
    renderer.render(scene, camera)
    // controls.update()
    // camera.lookAt(car.position)
    //camera.position.copy(car.position).add(cameraOffset)
    requestAnimationFrame(tick)
}
tick()
