   'use strict';
 

 document.querySelector('.ls').onclick = () => {
      let res = localStorage.getItem('obj');
     let  b = JSON.parse(res);
      let out = '';
   

       if(res){

       
        for(let key in b){
            out += `${key} : ${b[key]}<br>`;
        }
         localStorage.clear();
      document.querySelector('.li').innerHTML = out;
      document.querySelector('.li').style.fontSize = '30px';
       }else{
           alert('nothing to see');
       }

 };