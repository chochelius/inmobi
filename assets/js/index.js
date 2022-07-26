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
let minm2 = document.getElementById("minm2");
let maxm2 = document.getElementById("maxm2");
let boton = document.getElementById("btn");
let propiedades = document.querySelector(".propiedades");
let propiedad = document.querySelectorAll(".propiedad");

// clear inputs
function clearInputs() {
    rooms.value = "";
    minm2.value = "";
    maxm2.value = "";
}

let cantidad = document.getElementById("cantidad");


// Función que se ejecuta al cargar la página

function init() {
    //clear propiedades
    propiedades.innerHTML = "";
    propiedadesJSON.forEach((propiedad) => {
        let div = document.createElement("div");
        div.classList.add("propiedad");
        div.innerHTML = `
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

        num = propiedades.childElementCount;
        // count all propiedades
        cantidad.innerHTML = num;

        clearInputs();
    });
}

init();



function filtrar() {
    // get values from inputs
    roomsValue = rooms.value;
    minm2Value = minm2.value;
    maxvalue = maxm2.value;

    // clear propiedades
    propiedades.innerHTML = "";
    //validar inputs
    valido();
    // filter propiedades
    filtrar2();
    // clear inputs
    clearInputs();
    // debug errors
    console.log(propiedades);
    

}

//validate inputs as numbers

function valido () {
    if (isNaN(rooms.value) || isNaN(minm2.value) || isNaN(maxm2.value)){
        alert("Ingrese un número válido en los campos");
    }
    else if (rooms.value == "" || minm2.value == "" || maxm2.value == ""){
        alert("Ingrese un número válido en los campos");
    }
    else if (rooms.value <= 0 || minm2.value <= 0 || maxm2.value <= 0){
        alert("Ingrese un número válido en los campos");
    }
}

// 

// filter propiedades
function filtrar2() {

    try {
        propiedadesJSON.forEach((propiedad) => {
            if (
                propiedad.rooms >= roomsValue &&
                propiedad.m >= minm2Value &&
                propiedad.m <= maxvalue
            ) {
                let div = document.createElement("div");
                div.classList.add("propiedad");
                div.innerHTML = `
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
                num = propiedades.childElementCount;
                // count all propiedades
                cantidad.innerHTML = num;
            }
            else if ( roomsValue > propiedadesJSON.count) {
                alert("No hay propiedades con esa cantidad de cuartos");
            };
            console.log(propiedades.length);
        });
    } catch (error) {
        console.log(error);
        init();
    }
}



boton.addEventListener("click", filtrar);

