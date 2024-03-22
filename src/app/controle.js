const speed = .3

export const move = (threeObject, camera, checkCollision) => {
    if((listKey["z"] || listKey["ArrowUp"]) && !(checkCollision.down&&!checkCollision.left&&!checkCollision.right)){
        threeObject.translateX(-speed)
        camera.position.x+=-speed
    }
    if((listKey["s"] || listKey["ArrowDown"]) && !(checkCollision.up&&!checkCollision.left&&!checkCollision.right)){
        threeObject.translateX(speed)
        camera.position.x+=speed
    }
    if((listKey["q"] || listKey["ArrowLeft"]) && !(checkCollision.right&&!checkCollision.up&&!checkCollision.down)){
        threeObject.translateZ(speed)
        camera.position.z+=speed
    }
    if((listKey["d"] || listKey["ArrowRight"]) && !(checkCollision.left&&!checkCollision.up&&!checkCollision.down)){
        threeObject.translateZ(-speed)
        camera.position.z+=-speed
    }
}
let listKey = {}
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

