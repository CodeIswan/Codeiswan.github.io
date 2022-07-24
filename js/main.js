const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');  
}
list.forEach((item)=>
item.addEventListener('click',activeLink));

// scroll

// window.addEventListener('scroll', reveal, revealtwo);

// function reveal() {
//     const reveals = document.querySelectorAll('.reveal');
    
//     for(var i =0;i < reveals.length; i++){
//         var windowheight =window.innerHeight;
//         var revealtop = reveals [i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');
//         }else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }


// scroll 2
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

function scrollToTop(){
    window.scrollTo(0,0);
    
}