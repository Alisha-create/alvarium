let animateItems = document.querySelectorAll('.anim-item')
if(animateItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll () {
        for (let index = 0; index < animateItems.length; index++) {
            const animateItem = animateItems[index]
            const animItemHeight =  animateItem.offsetHeight
            const animateItemOffset = offset(animateItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                let animItemPoint = window.innerHeight -  window.innerHeight / animStart 
            }

            if((pageYOffset > animateItemOffset - animItemPoint) && pageYOffset < (animateItemOffset + animItemHeight)) {
                animateItem.classList.add('active')
            } else {
                animateItem.classList.remove('active')
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect()
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
          scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}


//mobMenu close-open
function openbox(mobMenu){
    display = document.getElementById(mobMenu).style.display;
    if(display=='none'){
          document.getElementById(mobMenu).style.display='block';
    }else{
          document.getElementById(mobMenu).style.display='none';
    }
}

function openbox(secondMob){
  display = document.getElementById(secondMob).style.display;
  if(display=='none'){
        document.getElementById(secondMob).style.display='block';
  }else{
        document.getElementById(secondMob).style.display='none';
  }
}


let width = 560;
let count = 2; 

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0;
carousel.querySelector('.prev').onclick = function() {
  position += width * 1;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};
carousel.querySelector('.next').onclick = function() {
  position -= width * 1;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};



