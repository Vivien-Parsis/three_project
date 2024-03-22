const move = (threeObject, camera) => {
    console.log("move", listKey)
    if(listKey["z"] || listKey["ArrowUp"]){
        threeObject.translateX(-.1)
        camera.position.x+=-.1
    }
    if(listKey["s"] || listKey["ArrowDown"]){
        threeObject.translateX(.1)
        camera.position.x+=.1
    }
    if(listKey["q"] || listKey["ArrowLeft"]){
        threeObject.translateZ(.1)
        camera.position.z+=.1
    }
    if(listKey["d"] || listKey["ArrowRight"]){
        threeObject.translateZ(-.1)
        camera.position.z+=-.1
    }
}
let listKey = {}
const authorizedKey = ["z","q","s","d","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]
export const addControl = (threeObject, camera) => {
    document.addEventListener("keydown",(event)=>{
        if(!authorizedKey.includes(event.key)){
            return
        }
        console.log(listKey, event.key, "down")
        listKey[event.key] = true
        move(threeObject, camera)
    })
    document.addEventListener("keyup",(event)=>{
        if(!authorizedKey.includes(event.key)){
            return
        }
        //console.log(listKey, event.key, "up")
        listKey[event.key] = false
        console.log("a")
        move(threeObject, camera)
    })
}