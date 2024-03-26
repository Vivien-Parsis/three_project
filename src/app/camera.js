import * as THREE from "three"
import {car} from "./object"

const viewportSize = {
    width: window.innerWidth,
    height: window.innerHeight,
}
const cameraOffset = new THREE.Vector3(10, 3, 0)
const camera = new THREE.PerspectiveCamera(
    75,
    viewportSize.width / viewportSize.height
)
camera.position.copy(car.position).add(cameraOffset)
camera.lookAt(car.position)

export { camera }