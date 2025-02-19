let compliments = [
    "💕 Baby don't worry 💕",
    "😍 you are my only 😍",
    "💖 You won't be lonely 💖",
    "🌟 even if the sky is falling down 🌟",
    "💘 You'll be my only 💘",
    "🌷 no need to worry 🌷",
    "🎵 Baby are you down 🎵",
    "💞 Down 💞",
    "💎 Down 💎",
    "💋 Down 💋"
];

let complimentIndex = 0;

function showImages() {
    let crushName = document.getElementById("crushName").value.trim().toLowerCase();
    let inputBox = document.getElementById("inputBox");
    let imageBox = document.getElementById("imageBox");
    let complimentBox = document.getElementById("complimentBox");

    let images = [];

    // let crushName = prompt("Enter your crush's name:");

    if (crushName === "shaista") {
        images = [
            "image1.jpg",
            "image2.jpg",
            "image3.jpg"
        ];
    } else if (crushName === "ashhad") {
        images = [
            "image4.jpg",
            "image5.jpg",
            "image6.jpg"
        ];
    }// else {
    //     alert("No images available for this name! Try Shaista or Ashhad.");
    // }
    

    inputBox.classList.add("hidden");

    setTimeout(() => {
        imageBox.innerHTML = ""; // Clear previous images
        images.forEach(imgSrc => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <figure class="image">
                    <img src="${imgSrc}" alt="Image">
                </figure>
            `;
            imageBox.appendChild(card);
        });

        imageBox.style.display = "flex";
        complimentBox.style.display = "block";

        setTimeout(() => {
            imageBox.classList.add("show");
            changeCompliments();
        }, 100);
    }, 500);
}

function changeCompliments() {
    let complimentBox = document.getElementById("complimentBox");
    setInterval(() => {
        complimentBox.classList.add("fade-out");
        setTimeout(() => {
            complimentIndex = (complimentIndex + 1) % compliments.length;
            complimentBox.innerHTML = compliments[complimentIndex];
            complimentBox.classList.remove("fade-out");
        }, 1000);
    }, 5000);
}