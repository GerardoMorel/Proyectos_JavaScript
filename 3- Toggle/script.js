let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');
/*let content = document.querySelector('content');*/

toggleBtn.onclick=function(){
    container.classList.toggle('active');
}