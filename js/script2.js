   'use strict';
 

 document.querySelector('.ls').onclick = () => {
      let res = localStorage.getItem('obj');
     let  b = JSON.parse(res);
      let out = '';
        for(let key in b){
            out += `${key} : ${b[key]}<br>`;
        }
     //   out.style.fontSize = '30px';
      document.querySelector('.li').innerHTML = out;
      document.querySelector('.li').style.fontSize = '30px';
       

 }