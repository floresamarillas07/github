document.addEventListener("DOMContentLoaded", function() {
    const flowers = document.querySelectorAll('.flower'); // Seleccionamos todas las flores
    
    // Función para animar una flor y sus pétalos
    function animateFlower(flower) {
        let angle = 0;
        let opacityFactor = 1;
        let increasing = true;
        const petals = flower.querySelectorAll('.petal'); // Seleccionamos los pétalos de esta flor
        
        // Función de animación para esta flor
        function animate() {
            angle += 0.5; // Aumenta el ángulo de rotación
            flower.style.transform = `rotate(${angle}deg)`; // Aplica la rotación

            // Animación de la pulsación de brillo
            if (increasing) {
                opacityFactor += 0.01;
                if (opacityFactor >= 1.5) increasing = false;
            } else {
                opacityFactor -= 0.01;
                if (opacityFactor <= 0.8) increasing = true;
            }

            // Aplicamos el efecto de pulsación y brillo a cada pétalo de esta flor
            petals.forEach((petal, index) => {
                const delay = index * 100;

                setTimeout(() => {
                    petal.style.boxShadow = `0 0 25px rgba(255, 255, 0, ${opacityFactor - 0.5})`;

                    const originalRotation = 30 * index;
                    const pulseScale = 1 + (opacityFactor - 1) * 0.2;
                    petal.style.transform = `rotate(${originalRotation}deg) translateY(-50px) scale(${pulseScale})`;
                }, delay);
            });

            requestAnimationFrame(animate); // Repite la animación para esta flor y pétalos
        }

        animate(); // Inicia la animación de esta flor
    }

    // Aplicamos la animación a cada flor de forma independiente
    flowers.forEach(flower => animateFlower(flower));
});