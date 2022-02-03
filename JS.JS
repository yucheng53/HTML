//var mybutton = document.querySelecttor('button')
var testdiv = document.querySelector('#testdiv')
var reddivs = document.getElementsByClassName('reddivs')
console.log(reddivs)
console.log(reddivs.length)
var input = document.querySelector('#name')

testdiv.addEventListener('click',whoami)

function clickevent(){
    
    testdiv.innerText = input.value
    testdiv.style.backgroundColor = 'purple'    
}
function clickevent2(){
    console.log(reddivs)
    for(var i =0;i<reddivs.length;i++){

        reddivs[i].style.backgroundColor = 'green'
    }
}
function whoami(){
    console.log(this)

}
function help(){
    testdiv.whoami()
}