window.onscroll = function() {scrolling()};

function scrolling() {
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topnav").style.backgroundColor = "rgb(255, 255, 255, .9)";
        document.getElementById("topnav").style.color = "rgb(0,0,0, .7)";
        tags=document.getElementsByTagName("a")
        for (var i = 0; i<tags.length; i++) {
            tags[i].style.color= "rgb(0,0,0, .7)";
        }
        document.getElementById("home_active").style.color = "rgb(145 155 217)";
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
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        /*document.getElementById("topnav").style.top = "-50px";
        document.getElementById("topnav").style.position = "unset";*/
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("about_slide").style.animation = "right_to_left 5s ease";
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("project_slide").style.animation = "left_to_right 5s ease";
    }
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("contact_slide").style.animation = "right_to_left 5s ease";
    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        document.getElementById("about_active").style.color = "rgb(145 155 217)";
        document.getElementById("project_active").style.color = "rgb(0,0,0)";
        document.getElementById("contact_active").style.color = "rgb(0,0,0)";
    }
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        document.getElementById("about_active").style.color = "rgb(0,0,0)";
        document.getElementById("project_active").style.color = "rgb(145 155 217)";
        document.getElementById("contact_active").style.color = "rgb(0,0,0)";
        

        
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById("home_active").style.color = "rgb(0,0,0)";
        document.getElementById("about_active").style.color = "rgb(0,0,0)";
        document.getElementById("project_active").style.color = "rgb(0,0,0)";
        document.getElementById("contact_active").style.color = "rgb(145 155 217)";

        
    }
}