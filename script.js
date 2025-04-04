document.addEventListener("DOMContentLoaded", () => {
    listeners();
});

function listeners(){
    const voirCv = document.getElementById("voirCv");
    const buttonFrame = document.getElementById("buttonFrame");

    voirCv.addEventListener("mouseover", () => {
        voirCv.textContent = "Presque ☺️";
        voirCv.style.backgroundColor = "rgba(62, 94, 72, 0.5)";
    });

    voirCv.addEventListener("mouseout", () => {
        voirCv.textContent = "Voir mon CV";
        voirCv.style.backgroundColor = "rgba(62, 94, 72, 1)";
    });

    voirCv.addEventListener("click", () => {
        voirCv.textContent = "Ça charge ...";
        voirCv.style.backgroundColor = "rgba(62, 94, 72, 1)";
        setTimeout(() => {
            window.location.href = "cv.html";
        }, 1000);
    });
}