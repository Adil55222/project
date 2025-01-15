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
const parent = parent_block.clientWidth - child_block.clientWidth

let x = 0

function move() {
    x+=1
    child_block.style.left = x+"px"
    if (x<parent) {
        requestAnimationFrame(move)

    }
}
move()


