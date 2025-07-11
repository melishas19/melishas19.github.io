// Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]');
console.log(sections);
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each

  let counter=0;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      (scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight)
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
      counter++;
    }
  });

  //if the scroll is at the bottom of the page
  if(counter>=7){
    document.querySelector(".navigation a[href*=" + 't6' + "]").classList.add("active");
  }

  const activeElement=document.querySelector('.active');
  const topElement = document.querySelector(".navigation a[href*=t0");

  console.log("activeElement");
  console.log(activeElement);
  console.log("topElement");
  console.log(topElement);
  

  if(activeElement == topElement){
    document.getElementById('nav').style.opacity = '0';
    document.getElementById('nav').style.pointerEvents = 'none';
  }
  else{
    document.getElementById('nav').style.opacity = '1';
    document.getElementById('nav').style.pointerEvents = 'all';
  }
}
