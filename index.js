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
clientImg.setAttribute("src", "/images/birkan.jpg");
clientImg.setAttribute("width", "180");
clientImg.setAttribute("height", "180");
clientImg.style.borderRadius = '50%';

//element attribute
container.setAttribute("class", "container");



//button event
randomButton.addEventListener("click", function () {


    randomReview.textContent = "You just clicked random button!"


})