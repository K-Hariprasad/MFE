const text = document.getElementById('msg')
const btn = document.getElementById('btn')
let isRednow = false

btn.addEventListener('click', ()=>{
    if(!isRednow){
        text.style.color = 'red'
    }else{
        text.style.color = 'black'
    }
    isRednow = !isRednow
})