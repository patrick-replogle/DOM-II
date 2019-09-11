//mouseover with timer
let mouseover = document.querySelector('.text-content');
mouseover.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
}, false);

//mouseover && mouseleave
let allImg = document.querySelectorAll('img');
allImg.forEach((image) => {
    image.addEventListener('mouseenter', (event) => {
      image.style.transform = 'scale(1.2)';
      image.style.transition = 'transform 0.5s';
    });
    
    image.addEventListener('mouseleave', (event) => {
      image.style.transform = 'scale(1.0)';
      image.style.transition = 'transform 0.5s';
    });
})
//click plus stop propagation
let h2 = document.querySelector('#h2')
h2.addEventListener('click', (event) => {
    event.target.style.color = 'purple';
    event.stopPropagation();
})

let click = document.querySelector('.content-destination');
click.addEventListener('click', (event) => {
    event.target.style.background = "green";
}) 

//keydown
document.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
        alert('The M key was pressed!')
    }
});

//wheel
let wheel = document.querySelector('.logo-heading');

wheel.addEventListener('wheel', (event) => {
  event.target.style.fontSize = '7rem';
})

//drag && drop

let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", (event) => {

}, false);

document.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover",(event) => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


//load
window.addEventListener('load', (event) => {
    alert('Page is fully Loaded');
    console.log('page loaded')
});

//focus 
let textBox = document.getElementById('myTextField')
textBox.style.marginTop = "40px";
focusMethod = function getFocus() {           
    document.getElementById("myTextField").focus();
  }
   
//resize 
let resizeCounter = 0;
window.addEventListener('resize', (event) => {
  resizeCounter++;
  console.log(`This page has been resized ${resizeCounter} times`);
})

//dblclick
let buttons = document.querySelectorAll('.btn');
let btn1 = buttons[0];
btn1.addEventListener('dblclick', (event) => {
    event.target.style.background = 'brown';
})

//preventDefault of nav items
let a = document.querySelectorAll('a');
a.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('I prevented the default action');
    })
})

//select

document.getElementById("myTextField").addEventListener('select',(event) => {
  alert('you have selected this')
})

//scroll
let scrollCounter = 0;
window.addEventListener('scroll', (event) => {
  scrollCounter++;
  console.log(`This page has been scrolled ${scrollCounter} times.`)
})








