let min =100
let max = 200
let numb
document.getElementById("rrr").onclick = function(){
    numb = Math.floor(Math.random() * (max - min +1)+min)
    document.getElementById("lll").textContent = numb
}