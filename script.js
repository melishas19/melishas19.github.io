window.onscroll = function() {scrolling()};

function scrolling() {
    

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topnav").style.backgroundColor = "rgba(255, 255, 255, 0.548)";
        document.getElementById("topnav").style.color = "rgb(0,0,0, .7)";
        tags=document.getElementsByTagName("a")
        for (var i = 0; i<tags.length; i++) {
            tags[i].style.color= "rgb(0,0,0, .7)";
        }
        document.getElementById("mobile_topnav").style.backgroundColor = "rgba(255, 255, 255, 0.548)";
        document.getElementById("mobile_topnav").style.color = "rgb(0,0,0, .7)";
        document.getElementById("mobile_nav").style.color="rgb(255,255,255)";
        document.getElementById("mx").style.color="rgb(255,255,255)";
        document.getElementById("mhome_active").style.color="rgb(255,255,255)";
        document.getElementById("mabout_active").style.color="rgb(255,255,255)";
        document.getElementById("mproject_active").style.color="rgb(255,255,255)";
        document.getElementById("mcontact_active").style.color="rgb(255,255,255)";
        
        document.getElementById("home_active").style.color = "rgb(255, 255, 255)";
        /*document.getElementById("topnav").style.top = "0";
        document.getElementById("topnav").style.position = "sticky";*/
    }
    else {
        document.getElementById("topnav").style.backgroundColor = "rgb(255, 255, 255, .2)";
        document.getElementById("topnav").style.color = "rgb(255,255,255)";
        document.getElementById("topnav").style.color = "rgb(255,255,255)";
        tags=document.getElementsByTagName("a")
        for (var i = 0; i<tags.length; i++) {
            tags[i].style.color= "rgb(255,255,255)";
        }
        tags=document.getElementsByClassName("active")
        for (var i = 0; i<tags.length; i++) {
            tags[i].style.color= "rgb(94 38 38)";
        }
        document.getElementById("home_active").style.color = "rgb(16,202,219)";

        document.getElementById("mobile_topnav").style.backgroundColor = "rgb(255, 255, 255, .2)";
        document.getElementById("mobile_topnav").style.color = "rgb(255,255,255)";
        document.getElementById("mobile_topnav").style.color = "rgb(255,255,255)";
        
        /*document.getElementById("topnav").style.top = "-50px";
        document.getElementById("topnav").style.position = "unset";*/
    }

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("about").style.opacity="1";
        document.getElementById("about").style.transition="1s all ease-in-out"
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 500) {
        document.getElementById("project").style.opacity="1";
        document.getElementById("project").style.transition="1s all ease-in-out"
    }
    /*if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("contact").style.opacity="1";
        document.getElementById("contact").style.transition="1s all ease-in-out"
    }*/
    if ((document.body.offsetHeight - document.documentElement.scrollTop)<= (window.innerHeight+6)) {
        document.getElementById("contact").style.opacity="1";
        document.getElementById("contact").style.transition="1s all ease-in-out"
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        document.getElementById("about_active").style.color = "rgb(255, 255, 255)";
        document.getElementById("project_active").style.color = "rgb(0,0,0)";
        document.getElementById("contact_active").style.color = "rgb(0,0,0)";
    }
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        document.getElementById("about_active").style.color = "rgb(0,0,0)";
        document.getElementById("project_active").style.color = "rgb(255, 255, 255)";
        document.getElementById("contact_active").style.color = "rgb(0,0,0)";
        

        
    }
    if((document.body.offsetHeight - document.documentElement.scrollTop)<= (window.innerHeight+4)){
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        document.getElementById("about_active").style.color = "rgb(0,0,0)";
        document.getElementById("project_active").style.color = "rgb(0,0,0)";
        document.getElementById("contact_active").style.color = "rgb(255, 255, 255)";
    }
}

function openNav() {
    document.getElementById("mobile_nav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile_nav").style.width = "0";
  }
