'use strict';

const inputUzs = document.querySelector('#uzs'),
    inputUsd = document.querySelector('#usd');

inputUzs.addEventListener('input',()=>{
    let foo =new XMLHttpRequest()
 foo.open('GET','current.json')
 foo.setRequestHeader('content-type',"application/JSON")
foo.send()

foo.addEventListener('load',()=>{
   
    if(foo.status == 200){
        let data = JSON.parse(foo.response)
        inputUsd.value =  (inputUzs.value /  data.current.usd ).toFixed(2)
        console.log(data);
    }
})


})
    
    /*
inputUzs.addEventListener('input',()=>{
    let request = new XMLHttpRequest();
    request.open('GET','current.json');
    request.setRequestHeader('content-type','application/json');
    request.send();

    request.addEventListener('load',()=>{
        if( request.status === 200){
            console.log(request.response)
            let date = JSON.parse(request.response)
            inputUsd.value = (+inputUzs.value / date.current.usd).toFixed(2);
            
            
        }
        else{
            inputUsd.value = 'error';
        }
    })
})
*/