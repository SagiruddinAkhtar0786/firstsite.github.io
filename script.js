burger = document.querySelector('.burger');
right = document.querySelector(".right");
navbar = document.querySelector(".navbar");
left = document.querySelector(".left");

burger.addEventListener('click',()=>{
    // console.log("its ok");
    // var list = document.querySelector(".nav-lis");

    if(navbar.style.display == "none")
    {
         navbar.style.display = "block";
        left.style.display = "block";
        right.style.display = "block";
    }
    else{
        navbar.style.display = "none";
        left.style.display = "none";
        right.style.display = "none";
    }
    

})