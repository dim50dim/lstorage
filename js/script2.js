   'use strict';
 

 document.querySelector('.ls').onclick = () => {
      let res = localStorage.getItem('obj');
     let  b = JSON.parse(res);
      let ul = document.querySelector('.ul');
   
       if(res){

        for(let key in b){
          let li = document.createElement('li');
            li.innerHTML = `${key} : ${b[key]}`;
            li.style.fontSize = '30px';
           ul.prepend(li);
        }
     //    localStorage.clear();
       }else{
           alert('nothing to see');
       }

 };