let switchModeBtn = document.getElementById("switch-mode-btn");
let darkMode = false;
let lightDarkTitle = document.querySelector("[light-dark-title]");
let lightDarkIcon = document.querySelector("[light-dark-icon]");
let wrapper = document.getElementsByClassName("wrapper");
let devDetectiveHeading = document.getElementById("dev-detective-heading");
let SearchBoxForm = document.getElementsByClassName("search-box-form");
let searchBoxPlaceholder = document.getElementById("placeholderr");
let xMark = document.getElementById("x-mark");
let profileSection = document.getElementsByClassName("profile-section");
let textPara = document.getElementsByClassName("text-para");
let followingBar = document.getElementsByClassName("following-bar");
let userId = document.querySelector("[userid]");
let bio = document.getElementById("bio");

switchModeBtn.addEventListener("click", () => {
    if (darkMode) {
        darkMode = false;
        lightDarkTitle.innerText = "DARK";
        lightDarkIcon.src = "./assets/images/moon-icon.svg"

        wrapper[0].classList.remove("wrapper1");
        devDetectiveHeading.style.color = "#4B6A9B";
        lightDarkTitle.style.color = "#4B6A9B";
        SearchBoxForm[0].style.backgroundColor = "#FEFEFE";

        xMark.style.color = "black";
        profileSection[0].style.backgroundColor = "#FEFEFE";
        for (let i = 0; i < textPara.length; i++) {
            textPara[i].style.color = "#2B3442";
        }
        followingBar[0].style.backgroundColor = "#F6F8FF";
        bio.style.color = "#4B6A9B";


    } else {
        darkMode = true;
        lightDarkTitle.innerText = "LIGHT";
        lightDarkIcon.src = "./assets/images/sun-icon.svg";
        // adding classes for eanble dark mode 
        wrapper[0].classList.add("wrapper1");
        devDetectiveHeading.style.color = "white";
        lightDarkTitle.style.color = "white";
        SearchBoxForm[0].style.backgroundColor = "#1E2A47";
        SearchBoxForm[0].style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.2)";

        // searchBoxPlaceholder.placeholder.style.color="red";
        // add place holder color try agein 

        xMark.style.color = "white";
        profileSection[0].style.backgroundColor = "#1E2A47";
        for (let i = 0; i < textPara.length; i++) {
            textPara[i].style.color = "white";
        }
        followingBar[0].style.backgroundColor = "#141D2F";
        userId.style.color = "#0079ff";
        bio.style.color = "rgb(230, 229, 229,0.8)";

    }
}
);

