import { car, carDimension, obstacleGroup, planeDimension } from './object'
import * as THREE from "three"

const detectCollision = () => {
    let checkCollision = {
        up : false,
        down : false,
        right : false,
        left : false,
        hit : false,
    }
    const currentCarPosition = new THREE.Vector3()
    car.getWorldPosition(currentCarPosition)
    const boxCar = new THREE.Box3()
    boxCar.copy(car.geometry.boundingBox)
    const carSize = boxCar.getSize(new THREE.Vector3())
    const obstacleList = []
    for(let item of obstacleGroup.children){
        const currentBoxItem = new THREE.Box3()
        currentBoxItem.copy(item.geometry.boundingBox)
        const target = new THREE.Vector3()
        item.getWorldPosition(target)
        obstacleList.push({
            position : target,
            dimension : currentBoxItem.getSize(new THREE.Vector3())
        })
    }
    if(currentCarPosition.z + carDimension.z/2 > planeDimension.z / 2){
        checkCollision.right = true
    }
    if(currentCarPosition.z - carDimension.z/2 < -planeDimension.z / 2){
        checkCollision.left = true
    }
    checkCollision.hit = false
    for(let obstacle of obstacleList){
        if((currentCarPosition.x <= obstacle.position.x + carSize.x && currentCarPosition.x >= obstacle.position.x - obstacle.dimension.x)
        &&(currentCarPosition.z <= obstacle.position.z + carSize.z && currentCarPosition.z >= obstacle.position.z - obstacle.dimension.z)){
            checkCollision.hit = true
            if(currentCarPosition.z - carSize.z > obstacle.position.z - obstacle.dimension.z*0.5){
                checkCollision.left = true
            }
            if(currentCarPosition.z < obstacle.position.z - obstacle.dimension.z*0.5){
                checkCollision.right = true
            }
            if(currentCarPosition.x - carSize.x > obstacle.position.x - obstacle.dimension.x*0.5){
                checkCollision.down = true
            }
            if(currentCarPosition.x < obstacle.position.x - obstacle.dimension.x*0.5){
                checkCollision.up = true
            }
        }
    }
    return checkCollision
}

export { detectCollision }