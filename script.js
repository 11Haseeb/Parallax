// #########################   Landing-Page   ##########################
const landingPage = document.querySelector(".landing-page");
const countDown = document.querySelector(".inner-box span");
const result = document.querySelector(".result");

const landingPromise = (callBack, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(callBack){
                callBack();
            }
        }, time);
        resolve("Solved !!");
    });
}

const counterFunc = () => {
    let i = 0;
    const id = setInterval(()=>{
        if(i>=100){
            clearInterval(id);
        }else{
            i++;
            countDown.innerHTML = `${i}%`;
        }
    }, 20);
}

const landingDone = () => {
    landingPage.style.top = "-100vh";
}

const resultFunc = () => {
    result.innerHTML = "WELCOME";
}

const landingAsync = async () => {
    await landingPromise(counterFunc, 0);
    await landingPromise(resultFunc, 3000);
    await landingPromise(landingDone, 4000);
}
landingAsync();
// ######################   Add Navbar Class   ########################
const navBar = document.querySelector(".navbar");
window.onscroll = () => {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        navBar.classList.add("navbar-bg");
    }else{
        navBar.classList.remove("navbar-bg");
    }
}
// #########################   Big Img   ###########@##################
const imgBoxes = document.querySelectorAll(".img-boxes .demo");
for(let imgBox of imgBoxes){
    imgBox.addEventListener("click", ()=>{
        const bigBox = imgBox.nextElementSibling;
        bigBox.style.display = "flex";
    })
}
const closeBtn = document.querySelectorAll(".portfolio-images span");
for(let btn of closeBtn){
    btn.addEventListener("click", ()=>{
        btn.parentElement.style.display = "none";
    })
}
// ###########################   Go To Top   ##########################
const topBtn = document.querySelector(".footer .topBtn");

topBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// ###########################   Mobile Navbar   ########################
const hamMenu = document.querySelector(".hamburger-lines");
const secondGroup = document.querySelector(".second-group");
hamMenu.addEventListener("click", ()=>{
    secondGroup.classList.toggle("show");
})
window.onclick = e => {
    if(e.target === secondGroup){
        secondGroup.classList.remove("show");
    }
}