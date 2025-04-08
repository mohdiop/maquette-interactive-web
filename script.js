document.addEventListener("DOMContentLoaded", () => {
    listeners();
});

function listeners(){
    if(document.getElementById("cvBody") == null){
        const voirCv = document.getElementById("voirCv");
        const buttonFrame = document.getElementById("buttonFrame");

        voirCv.addEventListener("mouseover", () => {
            voirCv.textContent = "Presque 😃";
            voirCv.style.backgroundColor = "rgba(62, 94, 72, 0.5)";
        });

        voirCv.addEventListener("mouseout", () => {
            voirCv.textContent = "Voir mon CV";
            voirCv.style.backgroundColor = "rgba(62, 94, 72, 1)";
        });

        voirCv.addEventListener("click", () => {
            voirCv.textContent = "LET'S GO 🚀🚀🚀";
            voirCv.style.backgroundColor = "rgba(62, 94, 72, 1)";
            setTimeout(() => {
                window.location.href = "cv.html";
            }, 1000);
        });
    }else{
        const homeButton = document.getElementById("homeButton");
        const colorButton = document.getElementById("colorButton");
        const downloadButton = document.getElementById("downloadButton");
        const cv = document.getElementById("mainContainer");
        let isVisibleColorZone = false;
        const mainColor = document.getElementById("mainColor");
        setMainColor(localStorage.getItem("colorChoosen"));
        
        homeButton.addEventListener("click", () => {
            window.location.href = "index.html";
        })

        homeButton.addEventListener("mouseout", () => {
            homeButton.style.backdropFilter = "none";
            homeButton.style.backgroundColor = "rgba(255,255,255,0)";
        });

        homeButton.addEventListener("mouseover", () => {
            homeButton.style.backdropFilter = "sepia(90%)";
            homeButton.style.backgroundColor = "#feeaa175";
        });

        colorButton.addEventListener("click", () => {
            if(isVisibleColorZone){
                isVisibleColorZone = false;
                mainColor.style.display = "none";
            } else {
                isVisibleColorZone = true;
                mainColor.style.display = "block";
            }
        });

        mainColor.addEventListener("change", () => {
            setMainColor(mainColor.value);
            localStorage.setItem("colorChoosen", mainColor.value);
        });

        colorButton.addEventListener("mouseout", () => {
            colorButton.style.backdropFilter = "none";
            colorButton.style.backgroundColor = "rgba(255,255,255,0)";
        });

        colorButton.addEventListener("mouseover", () => {
            colorButton.style.backdropFilter = "sepia(90%)";
            colorButton.style.backgroundColor = "#feeaa175";
        });

        downloadButton.addEventListener("click", () => {
            var opt = {
                margin: 0,
                filename: 'Mohamed Diop - CV.pdf',
                image: { type: 'jpeg', quality: 2},
                html2canvas: { scale: 2 },
                jsPDF: {  },
              };
              html2pdf().set(opt).from(cv).save();
        });

        downloadButton.addEventListener("mouseout", () => {
            downloadButton.style.backdropFilter = "none";
            downloadButton.style.backgroundColor = "rgba(255,255,255,0)";
        });

        downloadButton.addEventListener("mouseover", () => {
            downloadButton.style.backdropFilter = "sepia(90%)";
            downloadButton.style.backgroundColor = "#feeaa175";
        });

    }
}

function setMainColor(color){
    document.getElementById("leftContainer").style.backgroundColor = color;
    document.getElementById("nameBackShape").style.backgroundColor = color;
    document.getElementById("aboutMeIcone").style.backgroundColor = color;
    document.getElementById("experienceIcone").style.backgroundColor = color;
    document.getElementById("skillIcone").style.backgroundColor = color;
    document.getElementById("languageIcone").style.backgroundColor = color;
}