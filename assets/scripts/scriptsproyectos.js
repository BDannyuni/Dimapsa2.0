const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');

const projects = [
    {
        title: "Proyecto 1",
        description: "En este Proyecto lo que hicimos fue una reparación... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam deleniti autem, incidunt, earum officia quidem repudiandae nesciunt sed dolorem illo quaerat ex consectetur, libero nemo? Hic facilis libero accusamus."
    },
    {
        title: "Proyecto 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum. Illum ratione adipisci, maiores, sed eius accusamus repudiandae ipsa voluptate dicta id ipsam, neque a minima? Voluptas ullam perferendis totam."
    },
    {
        title: "Proyecto 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum. Illum ratione adipisci, maiores, sed eius accusamus repudiandae ipsa voluptate dicta id ipsam, neque a minima? Voluptas ullam perferendis totam."
    },
    {
        title: "Proyecto 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum. Illum ratione adipisci, maiores, sed eius accusamus repudiandae ipsa voluptate dicta id ipsam, neque a minima? Voluptas ullam perferendis totam."
    },
    {
        title: "Proyecto 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum. Illum ratione adipisci, maiores, sed eius accusamus repudiandae ipsa voluptate dicta id ipsam, neque a minima? Voluptas ullam perferendis totam."
    },
    {
        title: "Proyecto 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum. Illum ratione adipisci, maiores, sed eius accusamus repudiandae ipsa voluptate dicta id ipsam, neque a minima? Voluptas ullam perferendis totam."
    }
    // Agrega más proyectos aquí
];

let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.carousel-item');
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;
    carouselWrapper.style.transform = `translateX(-${index * 100}%)`;

    // Actualizar el contenido de la .text-container
    projectTitle.textContent = projects[index].title;
    projectDescription.textContent = projects[index].description;
}

prevButton.addEventListener('click', () => {
    index--;
    showSlide(index);
});

nextButton.addEventListener('click', () => {
    index++;
    showSlide(index);
});

// Inicia mostrando la primera slide
showSlide(index);


// Función para pasar a la siguiente slide automáticamente
function autoSlide() {
    index++;
    showSlide(index);
}

// Configura el intervalo para cambiar de slide automáticamente cada 5 segundos
let slideInterval = setInterval(autoSlide, 8000);

// Función para reiniciar el intervalo cuando el usuario navega manualmente
function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 9000);
}