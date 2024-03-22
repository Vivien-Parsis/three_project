const speed = .6

export const move = (threeObject, camera) => {
    if(listKey["z"] || listKey["ArrowUp"]){
        threeObject.translateX(-speed)
        camera.position.x+=-speed
    }
    if(listKey["s"] || listKey["ArrowDown"]){
        threeObject.translateX(speed)
        camera.position.x+=speed
    }
    if(listKey["q"] || listKey["ArrowLeft"]){
        threeObject.translateZ(speed)
        camera.position.z+=speed
    }
    if(listKey["d"] || listKey["ArrowRight"]){
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

