// GRÁFICA
const ctx = document.getElementById('grafica').getContext('2d');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [
            'Cirugías',
            'Pacientes',
            'Tecnología'
        ],

        datasets: [{

            label: 'Nivel (%)',

            data: [
                95,
                88,
                98
            ],

            backgroundColor: [

                '#5DADE2', // azul médico

                '#F8F9F9', // blanco quirúrgico

                '#D5D8DC'  // gris claro elegante
            ]

        }]
    }
});

// CARRUSEL
new Swiper('.swiper', {

    loop:true,

    autoplay:{
        delay:2500
    },

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

    pagination:{
        el:'.swiper-pagination',
        clickable:true
    }
});

// BOTÓN INFORMACIÓN
document.getElementById("boton1").onclick = () => {

    alert("🫀 Cirugía cardiovascular avanzada");
};

// CAMBIAR AMBIENTE
document.getElementById("boton2").onclick = () => {

    document.body.style.background = `
    linear-gradient(
    135deg,
    #000000,
    #1a1f2b,
    #2c0012
    )`;
};