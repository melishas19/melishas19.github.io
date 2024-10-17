const mediaQuery = window.matchMedia('(max-width: 550px)');
const mediaQuery2 = window.matchMedia('(min-width: 550px)');
let collapse=true;
// Check if the media query is true


/*
function handleTabletChange(e){
  if (e.matches) {
  // Then trigger an alert
  console.log("hehehe")
  document.getElementById("prj-img1").src="https://media.istockphoto.com/id/1367980878/vector/futuristic-geometric-deep-blue-gradation-background-illustration.jpg?s=612x612&w=0&k=20&c=3s7xQfMSUcBQq_ZNTruiz-qELXenAPGnGypj4Z-daAE=";;
  document.getElementById("prj-img2").src="https://media.istockphoto.com/id/1367980878/vector/futuristic-geometric-deep-blue-gradation-background-illustration.jpg?s=612x612&w=0&k=20&c=3s7xQfMSUcBQq_ZNTruiz-qELXenAPGnGypj4Z-daAE=";;
  document.getElementById("prj-img3").src="https://media.istockphoto.com/id/1367980878/vector/futuristic-geometric-deep-blue-gradation-background-illustration.jpg?s=612x612&w=0&k=20&c=3s7xQfMSUcBQq_ZNTruiz-qELXenAPGnGypj4Z-daAE=";;
  document.getElementById("prj-img4").src="https://media.istockphoto.com/id/1367980878/vector/futuristic-geometric-deep-blue-gradation-background-illustration.jpg?s=612x612&w=0&k=20&c=3s7xQfMSUcBQq_ZNTruiz-qELXenAPGnGypj4Z-daAE=";;
}else{
  document.getElementById("prj-img1").src="studyseeker.png";
  document.getElementById("prj-img2").src="producepong.png";
  document.getElementById("prj-img3").src="conways.png";
  document.getElementById("prj-img4").src="carpoolbull.png";
}
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
*/

function handleMenuBar(){
  if (collapse){
    collapse=false;
    document.getElementById("top_nav").style.height="150px";
    document.getElementById("mobile_nav").style.opacity="1";
    document.getElementById("mobile_nav").style.right="0px";
    document.getElementById("mobile_link").style.opacity="1";
    document.getElementById("mobile_link").style.right="0px";
  }
  else{
    collapse=true;
    document.getElementById("top_nav").style.height="50px";
    document.getElementById("mobile_nav").style.opacity="0";
    document.getElementById("mobile_nav").style.right="-100%";
    document.getElementById("mobile_link").style.opacity="0";
    document.getElementById("mobile_link").style.right="-100%";
  }
  
}

function handleNavChange(e){
  if (e.matches) {
    collapse=true;
    document.getElementById("top_nav").style.height="50px";
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
