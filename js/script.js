'use strict';
window.addEventListener('storage', function (e) {

});

let format = document.querySelector('.format');
let obj = {};
    format.addEventListener('submit', (e) =>{
          e.preventDefault();

          let allInput = e.target.querySelectorAll('input');

              for(let elem of allInput){
                obj[elem.name] = elem.value;
    }
              localStorage.setItem('obj',JSON.stringify(obj));


});

function a () {
    if(localStorage.obj){
       let allInput = format.querySelectorAll('input');
       let b = JSON.parse(localStorage.obj);
    
        for(let elem of allInput){
           elem.value = b[elem.name];

        }
    }
}
a();

localStorage.clear();