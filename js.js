function ajson()
{
    let valornombre = document.querySelector("#nombre").value;
    let valorapellido = document.querySelector("#apellido").value;
    let valoredad = document.querySelector("#edad").value;
    let valoremail = document.querySelector("#email").value;

    let objeto ={
        nombre : valornombre,
        apellido : valorapellido,
        edad : valoredad,
        email : valoremail
    };
        document.querySelector("#PRODUCTO").value = JSON.stringify(objeto);
        console.log(objeto);
}

document.querySelector("#CREARJ").addEventListener("click",ajson);

function aformulario()
{
    let jsonstring = document.querySelector("#PRODUCTO").value;
    let objeto =  JSON.parse(jsonstring);

    document.querySelector("#nombre").value = objeto.nombre;
    document.querySelector("#apellido").value = objeto.apellido;
    document.querySelector("#edad").value = objeto.edad;
    document.querySelector("#email").value = objeto.email;

   
    console.log(objeto);
}

document.querySelector("#LLENARF").addEventListener("click",aformulario);