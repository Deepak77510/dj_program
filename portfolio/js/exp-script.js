 //BlACK&WHITE
 const toggle = document.getElementById("drkbtn");
 toggle.addEventListener('click', function(){
     this.classList.toggle('bi-moon');
   // colorchange
       toggle.onclick = function(){
           this.classList.toggle("dark-btn-on");
           document.body.classList.toggle("dark-theme");
       }
 });