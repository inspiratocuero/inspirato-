document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const beneficioCards = document.querySelectorAll(".beneficio-card");

    const handleScroll = () => {
        const scrollTop = window.scrollY + window.innerHeight;

        // biome-ignore lint/complexity/noForEach: <explanation>
        sections.forEach((section) => {
            if (section.offsetTop < scrollTop - 100) {
                section.classList.add("visible");
            }
        });

        beneficioCards.forEach((card, index) => {
            setTimeout(() => {
                if (card.offsetTop < scrollTop - 100) {
                    card.classList.add("visible");
                }
            }, index * 200);
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Contador de 24 horas
    const contadorElemento = document.getElementById("contador");
    let tiempoRestante = 24 * 60 * 60; // 24 horas en segundos

    const actualizarContador = () => {
        const horas = Math.floor(tiempoRestante / 3600);
        const minutos = Math.floor((tiempoRestante % 3600) / 60);
        const segundos = tiempoRestante % 60;
        contadorElemento.textContent = `${horas}h ${minutos}m ${segundos}s`;

        if (tiempoRestante > 0) {
            tiempoRestante--;
            setTimeout(actualizarContador, 1000);
        } else {
            document.getElementById("anuncio-flotante").style.display = "none";
        }
    };

    actualizarContador();
});
