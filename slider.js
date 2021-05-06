counter = 1 

setInterval (()=>{
    counter = 5 ?
    counter = 1 :
    document.querySelector('img').style.backgroundImage = `url(./images.img_${++counter}.jpg)`
},2000)zzzzzz