import { getUserLocation } from "./getLocation.js";

const imageInput = document.getElementById("edit-bg-icon");
const imageInput2 = document.getElementById("edit-bg-icon2");
const imageInput3 = document.getElementById("edit-bg-icon3");
const imagePreview = document.getElementById('preview');
const imagePreview2 = document.getElementById('preview2');

imageInput.style.display = "none";
imageInput2.style.display = "none";
imageInput3.style.display = "none";

imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '#';
    }
})

imageInput2.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview2.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview2.src = '#';
    }
})

document.getElementById("address").addEventListener("click", () => {
    getUserLocation();
});