

export const speed = .1
export const configControl = {
    speed : .1
}
export const move = (threeObject, camera, checkCollision) => {
    if((listKey["z"] || listKey["ArrowUp"]) && !checkCollision.down){
        threeObject.translateX(-configControl.speed)
        camera.position.x+=-configControl.speed
    }
    if((listKey["s"] || listKey["ArrowDown"]) && !checkCollision.up){
        threeObject.translateX(configControl.speed)
        camera.position.x+=configControl.speed
    }
    if((listKey["q"] || listKey["ArrowLeft"]) && !checkCollision.right){
        threeObject.translateZ(configControl.speed)
        camera.position.z+=configControl.speed
    }
    if((listKey["d"] || listKey["ArrowRight"]) && !checkCollision.left){
        threeObject.translateZ(-configControl.speed)
        camera.position.z+=-configControl.speed
    }
    // console.log(listKey)
}
export let listKey = {}
export const addEvent = () => {
    const authorizedKey = ["z","q","s","d","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]
    document.addEventListener("keydown",(event)=>{
        if(!authorizedKey.includes(event.key)){
            return
        }
        listKey[event.key] = true
    })
    document.addEventListener("keyup",(event)=>{
        if(!authorizedKey.includes(event.key)){
            return
        }
        //console.log(listKey, event.key, "up")
        listKey[event.key] = false
    })
}

