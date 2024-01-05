const data = [
    {
        id:1,
        name:"mahsa ashghari",
        job : "front-end developer",
        img: "2-user.jpg",
        text: "lorem ipsum dolor sit amet, consectetur adipisicing v az injor injor injor harfa ye chert o pert"

    },
    {
        id:2,
        name:"taha musapoor",
        job : "front-end designer",
        img: "3-user.jpg",
        text: "lorem ipsum dolor sit amet, consectetur adipisicing v az injor harfa harfa harfa ye chert o pert"

    },
    {
        id:3,
        name:"manosha kiani",
        job : "Ui Ux Designer",
        img: "4-user.jpg",
        text: "lorem ipsum dolor sit amet, consectetur adipisicing v az injor harfa ye chert chert chert chert o pert"

    },
    {
        id:4,
        name:"hassan alizade",
        job : "back-end developer",
        img: "1-user.jpg",
        text: "lorem ipsum dolor sit amet, consectetur adipisicing v az injor harfa ye chert o pert pert pert pert"

    },
]

const shuffledData =  data.sort(()=> Math.random() - 0.5);

// ELEMENTS
const commentBox = document.querySelector(".comment-info-box");
const prevBtn= document.querySelector(".prev-btn");
const nextBtn= document.querySelector(".next-btn");
const randomBtn= document.querySelector(".random-btn");
// EVENT
window.addEventListener("DOMContentLoaded", showComment);
prevBtn.addEventListener("click",setPrevComment);
nextBtn.addEventListener("click",setNextComment);
randomBtn.addEventListener("click",setRandomComment);

let currentIndex = 0;
// SHOW  CURRENT COMMENT
function showComment(){
    const comment = shuffledData[currentIndex];
    const commentItem = `
        <div class="comment-img-wrapper">
            <img src=${comment.img} alt=${comment.name} class="comment-img">
            <i class="fa fa-heart comment-img-icon"></i>
        </div>

        <div class="comment-info">
            <h2 class="comment-name">${comment.name}</h2>
            <p class="comment-job">${comment.job}</p>
            <p class="comment-text">
            ${comment.text}
            </p>
        </div>
    `;
    commentBox.innerHTML = commentItem;
}
// BACK TO PREVIOUS COMMENT
function setPrevComment() {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = 3 ;
    }
    showComment();
};
// GO TO NEXT COMMENT
function setNextComment() {
    currentIndex++;
    if(currentIndex > 3){
        currentIndex = 0 ;
    }
    showComment();
};
// SET RANDOM COMMENT
function setRandomComment() {
const randomIndex = Math.floor(Math.random() * shuffledData.length );
currentIndex = randomIndex;
showComment()
console.log(randomIndex);
};

