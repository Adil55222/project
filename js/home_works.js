const input = document.querySelector('#gmail_input')
const button = document.querySelector("#gmail_button")
const  span = document.querySelector("#gmail_result")



const regExp = /@gmail.com$/
button.onclick=function (){
    console.log(regExp.test(input.value))
    if (regExp.test(input.value)){
        span.innerHTML="OK"
        span.style.color="green"
    }else {
        span.innerHTML= "false"
        span.style.color= "red"
    }
}


//todo block

const child_block =document.querySelector(".child_block")
const parent_block = document.querySelector(".parent_block")
const width  = parent_block.clientWidth - child_block.clientWidth
const height = parent_block.clientHeight - child_block.clientHeight

let x = 0
let y = 0

function move() {

    if (x < width && y === 0) {
        x+=1
        child_block.style.left = x+"px"
        requestAnimationFrame(move)

    }else if ( x === width && y < height ) {
        y+=1
        child_block.style.top = y+"px"
        requestAnimationFrame(move)
    }else if ( x > 0 && y === height) {
        x-=1
        child_block.style.left = x+"px"
        requestAnimationFrame(move)
    }else if ( x===0 && y >0 ) {
        y -=1
        child_block.style.top = y+"px"
        requestAnimationFrame(move)
    }
}
move()

// todo StopWatch

const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let count = 0
let interval



start.onclick = function(){
    if(!interval){
        interval = setInterval(()=>{
            count++
            seconds.innerHTML = count
        }, 1000)
    }

}

stop.onclick = function(){
    clearInterval(interval)
}

reset.onclick = function(){
    clearInterval(interval)
    count = 0
    seconds.innerHTML = count
}