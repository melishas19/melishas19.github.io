


/*
window.addEventListener("scroll", () => {
      const images = document.querySelectorAll(".floating_img");
      const scrollTop = window.scrollY;
      let mql = window.matchMedia("(width >= 1050px)");
      if(mql.matches){
        images.forEach((img) => {
          const rect = img.getBoundingClientRect();
          const offsetTop = rect.top + scrollTop;
          const speed = 0.3;
          const distance = (scrollTop - offsetTop + window.innerHeight / 2) * speed;
          img.style.transform = `translate3d(0, ${distance}px, 0) scale(1)`;
      });
      }
      else{
        images.forEach((img) => {
          img.style.transform = `none`;
        });
      }

    });
*/

const mediaQuery = window.matchMedia('(max-width: 550px)');
const mediaQuery2 = window.matchMedia('(min-width: 550px)');
let collapse=true;

function handleMenuBar(){
  if (collapse){
    collapse=false;
    document.getElementById("top_nav").style.height="250px";
    document.getElementById("mobile_nav").style.opacity="1";
    document.getElementById("mobile_nav").style.right="0px";
    document.getElementById("mobile_link").style.opacity="1";
    document.getElementById("mobile_link").style.right="0px";
  }
  else{
    collapse=true;
    document.getElementById("top_nav").style.height="70px";
    document.getElementById("mobile_nav").style.opacity="0";
    document.getElementById("mobile_nav").style.right="-100%";
    document.getElementById("mobile_link").style.opacity="0";
    document.getElementById("mobile_link").style.right="-100%";
  }
  
}

function handleNavChange(e){
  if (e.matches) {
    collapse=true;
    document.getElementById("top_nav").style.height="70px";
    document.getElementById("mobile_nav").style.opacity="0";
    document.getElementById("mobile_nav").style.right="-100%";
    document.getElementById("mobile_link").style.opacity="0";
    document.getElementById("mobile_link").style.right="-100%";
  }
}



mediaQuery2.addListener(handleNavChange);
handleNavChange(mediaQuery2);

const menubar= document.getElementById("fa-bars");
menubar.addEventListener("click",handleMenuBar);

document.getElementById("mobile_link").addEventListener("click",handleMenuBar);

