
let userName = "iamakr97";
let myApi = "https://api.github.com/users/";
start();



let submitBtn = document.getElementById("search-git-id");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (searchBoxPlaceholder.value === "") return;

    userName = searchBoxPlaceholder.value;
    getAccountDetails();
    searchBoxPlaceholder.value = "";
});


let loginName = document.getElementById("user-id-name");
let userIdname = document.getElementById("user--id");
let repo = document.getElementById("repos");
let folowerCount = document.getElementById("followers-count");
let followingCount = document.getElementById("following-count");
let locationName = document.getElementById("location-name");
let webLink = document.getElementById("web-link");
let twitterHandle = document.getElementById("twiter-handle");
let companyName = document.getElementById("company-name");
let joiningData = document.getElementById("joined-data");
let profilePic = document.getElementById("profile-pic");
let loadingContainer = document.getElementById("loading--container");
let profile_Sectionn = document.getElementById("profile--section");
let profilePic1 = document.getElementById("profile-pic1");
let notFound = document.getElementById("not-found-cnt");
async function start() {
    const responce = await fetch(myApi + userName);
    const data = await responce.json();
    setData(data);
    profile_Sectionn.classList.add("active");
}

async function getAccountDetails() {
    profile_Sectionn.classList.remove("active");
    notFound.classList.remove("active");
    loadingContainer.classList.add("active");

    const responce = await fetch(myApi + userName);
    const data = await responce.json();
    if (data.message === "Not Found") {
        loadingContainer.classList.remove("active");
        notFound.classList.add("active");
        return;
    }
    setData(data);
    loadingContainer.classList.remove("active");
    profile_Sectionn.classList.add("active");
}

function setData(data) {
    loginName.innerText = data.name;
    userIdname.innerHTML = data.login;
    userIdname.href = data.html_url;
    bio.innerText = data?.bio;
    repo.innerText = data.public_repos;
    folowerCount.innerText = data.followers;
    followingCount.innerText = data.following;
    locationName.innerText = data?.location;
    twitterHandle.innerText = data?.twitter_username;
    companyName.innerText = data?.company;

    webLink.href = data?.blog;

    let day = data.created_at.substring(8, 10);
    let month = data.created_at.substring(5, 7);
    let year = data.created_at.substring(0, 4);
    joiningData.innerText = `Joined ${day}/${month}/${year}`;
    profilePic.src = data.avatar_url;
    profilePic1.src = data.avatar_url;


}
xMark.addEventListener("click", () => {
    searchBoxPlaceholder.value = "";
});
