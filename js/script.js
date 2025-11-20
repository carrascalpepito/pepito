// =====================
// LIGHTBOX PARA FOTOS
// =====================

const fotos = document.querySelectorAll(".foto");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("light-img");

fotos.forEach(foto => {
    foto.addEventListener("click", () => {
        lightImg.src = foto.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// =====================
// ANIMACIÓN TIPO TIKTOK
// =====================

const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("play", () => {
        video.style.transform = "scale(1.03)";
        video.style.transition = "0.3s";
    });

    video.addEventListener("pause", () => {
        video.style.transform = "scale(1)";
    });
});

// =====================
// GALERÍA INFINITA (CARGA FOTOS)
// =====================

let cargando = false;

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        
        if (!cargando) {
            cargando = true;

            const gallery = document.querySelector(".gallery");

            for (let i = 1; i <= 4; i++) {
                let img = document.createElement("img");
                img.src = "img/foto" + (Math.floor(Math.random() * 10) + 1) + ".jpeg";
                img.classList.add("foto");

                img.addEventListener("click", () => {
                    lightImg.src = img.src;
                    lightbox.style.display = "flex";
                });

                gallery.appendChild(img);
            }

            setTimeout(() => {
                cargando = false;
            }, 1200);
        }
    }
});
