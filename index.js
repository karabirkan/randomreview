// elements

const container = document.createElement("div");
const header = document.createElement("h1");
const reviewBox = document.createElement("div");
const clientImg = document.createElement("img")
const clientName = document.createElement("p");
const clientJob = document.createElement("p");
const randomReview = document.createElement("p");
const randomButton = document.createElement("button");

// append childs

document.body.appendChild(container);
container.appendChild(header);
container.appendChild(reviewBox);
reviewBox.appendChild(clientImg);
reviewBox.appendChild(clientName);
reviewBox.appendChild(clientJob);
reviewBox.appendChild(randomReview);
reviewBox.appendChild(randomButton);

// element text

header.innerHTML = "Random Review";
clientName.innerHTML = "Birkan Kara";
clientJob.innerHTML = "Developer";
randomReview.innerHTML = "I like your job!";
randomButton.innerHTML = "Random"


// client photo attribute
clientImg.setAttribute("width", "170");
clientImg.setAttribute("height", "180");
clientImg.style.borderRadius = '30%';

//element attribute
container.setAttribute("class", "container");
clientName.setAttribute("id", "clientName");
clientJob.setAttribute("id", "clientJob");
header.setAttribute("id", "header");
clientImg.setAttribute("id", "clientImg");
reviewBox.setAttribute("class", "reviewBox");
randomButton.setAttribute("id", "randomButton");

// random comments
const obj = [
    {
        id: 1,
        username: "Birkan",
        userjob: "Developer",
        review: "I can't express how much you are helping my learning journey. I was feeling so frustrated not being able to grasp JavaScript concepts.",
        img: "/images/birkan.jpg"

    },
    {
        id: 2,
        username: "Nino ",
        userjob: "Marketing",
        review: "What you've done for us here is incredible. You've made me more confident to try writing some javascript on my own and helped me progress so much.",
        img: "https://m.media-amazon.com/images/I/71CPNYUJQnL.jpg"
    },
    {
        id: 3,
        username: "Brian ",
        userjob: "Sales man",
        review: "Really versatile lessons here. Thanks for the resource",
        img: "https://styles.redditmedia.com/t5_2tc6s/styles/communityIcon_vn92glo5ugy51.png?width=256&s=d6094f5c1ee7b4af8c030fce7278164b7a6ea560"
    },
    {
        id: 4,
        username: "Drake",
        userjob: "Rapper",
        review: "Exactly what I was looking for!",
        img: "https://i.stack.imgur.com/AcfLu.jpg?s=256&g=1"
    },



];



// random reivew functions.

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function () {

    reviewFunction();


});



function reviewFunction() {

    const randomComments = obj[currentReview];
    clientImg.src = randomComments.img;
    clientName.innerHTML = randomComments.username;
    clientJob.innerHTML = randomComments.userjob;
    randomReview.innerHTML = randomComments.review;

}


randomButton.addEventListener("click", function () {


    currentReview = Math.floor(Math.random() * obj.length);

    reviewFunction();

})






