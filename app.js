// 1
const containsOnlyDigits = (str) => {
    const regExp = new RegExp(/^\d+$/);
    return regExp.test(str);
}
console.log(containsOnlyDigits("12345"))
console.log(containsOnlyDigits("12a45"))

2
setInterval(() => {
    console.log("Прошла секунда");
}, 1000);

// 3
const count = (str) => {
    let i = 0;
    const interval = setInterval(() => {
        console.log(i)
        if (i === 10){
            clearInterval(interval);
        }
        i++
    }, 1000);
}
count(2);

//4
const block = document.getElementById("block");
 block.appendChild("click",() =>{
     block.classList.toggle("active");
 });

 const style = document.createElement("style");
 style.id = "style";
 .active{
}
