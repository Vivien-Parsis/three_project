import * as THREE from 'three'
import { plane, car, obstacleGroup, ambientLight } from './src/app/object'
import { move, addEvent } from './src/app/controle'
import { camera } from './src/app/camera'
import { detectCollision } from './src/app/collision'

const scene = new THREE.Scene()

const viewportSize = {
    width: window.innerWidth,
    height: window.innerHeight,
}

window.addEventListener('resize',() => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

const canvas = document.querySelector('#webgl')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(viewportSize.width, viewportSize.height)

scene.add(car, plane, ambientLight, camera)
scene.add(obstacleGroup)

addEvent()

const tick = () => {
    move(car, camera, detectCollision())
    renderer.render(scene, camera)
    requestAnimationFrame(tick)
}
tick()