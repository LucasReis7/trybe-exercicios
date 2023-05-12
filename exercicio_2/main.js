const getDogButton = document.querySelector('#random-dog');
const petImage = document.querySelector("random-pet-image");

getDogButton.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        const petUrl = data.message;
        petImage.src = petUrl;
    })
});