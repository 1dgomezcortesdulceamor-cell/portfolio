// GRAFICA
const ctx = document.getElementById('grafica').getContext('2d');

new Chart(ctx, {

    type:'bar',

    data:{

        labels:[
            'Cirugías',
            'Pacientes',
            'Tecnología'
        ],

        datasets:[{

            label:'Nivel (%)',

            data:[
                95,
                88,
                98
            ],

            backgroundColor:[

                '#ff3366',

                '#ffd6df',

                '#8a001f'
            ]

        }]
    },

    options:{

        responsive:true,

        plugins:{

            legend:{
                labels:{
                    color:'white'
                }
            }
        },

        scales:{

            y:{
                ticks:{
                    color:'white'
                }
            },

            x:{
                ticks:{
                    color:'white'
                }
            }
        }
    }
});

// SWIPER
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

// BOTON INFORMACION
document.getElementById("boton1").onclick = () => {

    alert("🫀 La cirugía cardiovascular pediátrica combina precisión, tecnología y esperanza para salvar vidas desde los primeros latidos.");
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

// ANIMACIONES
gsap.from(".card", {

    opacity:0,

    y:40,

    duration:1,

    stagger:0.2
});

gsap.from(".menu-btn", {

    opacity:0,

    y:-20,

    duration:1,

    stagger:0.1
});
