const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
     modal.classList.add("open-modal");
    //    modal.style.display = "block";

});
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
    // modal.style.display = "none";
});