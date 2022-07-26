const propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170,
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130,
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80,
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6,
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200,
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500,
    },
];

let rooms = document.getElementById("rooms");
let minm2 = document.getElementById("minm2").value;
let maxm2 = document.getElementById("maxm2").value;
let filtrado = [];
let boton = document.getElementById("btn");
let propiedades = document.querySelector(".propiedades");
let propiedad = document.querySelectorAll(".propiedad");
let cantidad = document.getElementById("cantidad");

const clearInputs = () => {
    document.getElementById("rooms").value = "";
    document.getElementById("minm2").value = "";
    document.getElementById("maxm2").value = "";
}

//validate inputs as numbers

const valido = (e) => {
    let rooms = document.getElementById("rooms").value;
    let minm2 = document.getElementById("minm2").value;
    let maxm2 = document.getElementById("maxm2").value;
    if (isNaN(rooms) || isNaN(minm2) || isNaN(maxm2)) {
        alert("los campos deben ser números");
        init();
    } else if (rooms < 0 || minm2 < 0 || maxm2 < 0) {
        alert("los campos deben ser positivos");
        init();
    } else {
        console.log(e)
        return true;
    };

}


// clean inputs

// filter propiedades
const filtrar2 = () => {
    rooms = document.getElementById("rooms").value;
    minm2 = document.getElementById("minm2").value;
    maxm2 = document.getElementById("maxm2").value;
    // clear propiedades
    propiedades.innerHTML = "";
    
    //map array to filter by rooms and m2
    let filtrado = propiedadesJSON.map(propiedad => {
        if (propiedad.rooms >= rooms && propiedad.m >= minm2 && propiedad.m <= maxm2) {
            return propiedad;
        }
    }
    ).filter(propiedad => propiedad !== undefined);
    console.log(filtrado);

    //render each item of filtrado as a div

    filtrado.forEach(filtrada => {
        div = document.createElement("div");
        div.classList.add("propiedad");
        div.innerHTML = `
        <img src="${filtrada.src}" alt="" class="img-fluid">                
        <section>
            <h5>${filtrada.name}</h5>
            <div class="d-flex">
                <p>Cuartos: ${filtrada.rooms}</p>
                <br>
                <p>Metros: ${filtrada.m}</p>
            </div>
            <p class="my-3">${filtrada.description}</p>
            <button class="btn btn-info ">Ver más</button onclick(alert = "mas info proximamente")>

        </section>
    `;
        propiedades.appendChild(div);

        num = propiedades.childElementCount;
        cantidad.innerHTML = num;


    }   )
}

    

const filtrar = () => {
    // clear propiedades
    propiedades.innerHTML = "";
    // try to filter2 if valid and show error message if not
    try {
        valido();
        filtrar2();
    } catch (error) {
        alert("no hay propiedades que cumplan con los criterios");
        clearInputs();
        console.log(error);
        init();
    };
};



// Función que se ejecuta al cargar la página

function init() {
    // clear propiedades
    propiedades.innerHTML = "";



    propiedadesJSON.forEach((propiedad) => {
        let div = document.createElement("div");
        div.classList.add("propiedad");
        div.innerHTML = div.innerHTML = `
        <img src="${propiedad.src}" alt="" class="img-fluid">                
        <section>
            <h5>${propiedad.name}</h5>
            <div class="d-flex">
                <p>Cuartos: ${propiedad.rooms}</p>
                <br>
                <p>Metros: ${propiedad.m}</p>
            </div>
            <p class="my-3">${propiedad.description}</p>
            <button class="btn btn-info ">Ver más</button onclick(alert = "mas info proximamente")>

        </section>
    `;
        propiedades.appendChild(div);
        clearInputs();

        // count all propiedades
        num = propiedades.childElementCount;
        cantidad.innerHTML = num;

        boton = document.getElementById("btn");
        boton.addEventListener("click", filtrar);


    });
}


init();
