'use strict';


let format = document.querySelector('#form-example');
let obj = {};
    format.addEventListener('submit', (e) =>{
          e.preventDefault();

          let allInput = e.target.querySelectorAll('input,textarea,select');
              for(let elem of allInput){
                obj[elem.name] = elem.value;
    }
              localStorage.setItem('obj',JSON.stringify(obj));
});

function a () {
    
       let allInput = format.querySelectorAll('input');
       let b = JSON.parse(localStorage.obj);
    
        for(let elem of allInput){
           elem.value = b[elem.name];
        }  
      }
a();
localStorage.clear();