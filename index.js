const start = document.getElementById("start")
const letters = document.getElementById("userLetters")
const word = document.getElementById("wordContainer")
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
ctx.canvas.width = 0;
ctx.canvas.height = 0;



let header = document.getElementById('nav')
let list = document.getElementById("Estados")

const estados = [
    { "url": "https://www.aguascalientes.gob.mx/transparencia/", "nombre": "AGUASCALIENTES" },
    { "url": "http://www.transparenciabc.gob.mx/",  "nombre": "BAJA CALIFORNIA" },
    { "url": "https://transparencia.bcs.gob.mx/", "nombre": "BAJA CALIFORNIA SUR" },
    { "url": "https://transparencia.chihuahua.gob.mx/", "nombre": "CHIHUAHUA" },
    { "url": "http://transparencia.chiapas.gob.mx/", "nombre": "CHIAPAS" },
    { "url": "http://www.transparencia.campeche.gob.mx/", "nombre": "CAMPECHE" },
    { "url": "https://www.transparencia.cdmx.gob.mx/", "nombre": "CIUDAD DE MEXICO" },
    { "url": "http://www.coahuilatransparente.gob.mx/", "nombre": "COAHUILA" },
    { "url": "https://www.col.gob.mx/transparencia/", "nombre": "COLIMA" },
    { "url": "https://transparencia.durango.gob.mx/", "nombre": "DURANGO" },
    { "url": "https://transparencia.guerrero.gob.mx/", "nombre": "GUERRERO" },
    { "url": "https://transparencia.guanajuato.gob.mx/", "nombre": "GUANAJUATO" },
    { "url": "http://transparencia.hidalgo.gob.mx/", "nombre": "HIDALGO" },
    { "url": "https://transparencia.jalisco.gob.mx/", "nombre": "JALISCO" },
    { "url": "http://laip.michoacan.gob.mx/", "nombre": "MICHOACAN" },
    { "url": "https://edomex.gob.mx/transparencia", "nombre": "ESTADO DE MEXICO" },
    { "url": "http://www.transparenciamorelos.mx/", "nombre": "MORELOS" },
    { "url": "https://transparencia.nayarit.gob.mx/", "nombre": "NAYARIT" },
    { "url": "https://www.nl.gob.mx/transparencia",  "nombre": "NUEVO LEON" },
    { "url": "https://www.oaxaca.gob.mx/transparencia/", "nombre": "OAXACA" },
    { "url": "https://transparencia.puebla.gob.mx/", "nombre": "PUEBLA" },
    { "url": "https://qroo.gob.mx/transparencia",  "nombre": "QUINTANA ROO" },
    { "url": "https://www.queretaro.gob.mx/transparencia/", "nombre": "QUERETARO" },
    { "url": "https://transparencia.sinaloa.gob.mx/", "nombre": "SINALOA" },
    { "url": "http://apps.slp.gob.mx/transparencia/", "nombre": "SAN LUIS POTOSI" },
    { "url": "https://transparencia.sonora.gob.mx/", "nombre": "SONORA" },
    { "url": "http://www.tcatab.gob.mx/portal/inicio-transparencia.html", "nombre": "TABASCO" },
    { "url": "https://transparencia.tlaxcala.gob.mx/", "nombre": "TLAXCALA" },
    { "url": "https://transparencia.tamaulipas.gob.mx/", "nombre": "TAMAULIPAS" },
    { "url": "http://www.veracruz.gob.mx/transparencia/", "nombre": "VERACRUZ" },
    { "url": "https://transparencia.yucatan.gob.mx/", "nombre": "YUCATAN" },
    { "url": "http://transparencia.zacatecas.gob.mx/", "nombre": "ZACATECAS" } 
]

function Abrir(id) {
    console.log(id);
    switch(id) {
        case 'Ley_General': 
            window.open("http://www.diputados.gob.mx/LeyesBiblio/pdf/LGTAIP_200521.pdf");
            break;
        case 'Ley_Transparencia': 
            window.open("https://media.transparencia.sinaloa.gob.mx/uploads/files/11335/Ley%20de%20Transparencia%20y%20Acceso%20a%20la%20Informaci%C3%B3n%20P%C3%BAblica%20del%20Estado.pdf");
            break;
        case 'Ley_Proteccion': 
            window.open("https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf");
            break;
        case 'Constitucion': 
            window.open("https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf");
            break;
        case 'Coordinacion_archivo': 
            window.open("https://drive.google.com/file/d/1UhXqw_x1oPujiaxBkOEhqfPVOPtEkFPn/view?usp=share_link");
            break;
        case 'Proteccion_datos': 
            window.open("https://drive.google.com/file/d/1cnBJg6CFSgoyRXQYHiQZIa8Li8MH1Ls0/view?usp=share_link");
            break;
        case 'Obligacion_transparencia': 
            window.open("https://drive.google.com/file/d/1xFs7CxvAoSur6braNaREXHTdq-JP0k3W/view?usp=share_link");
            break;
        case 'Ley_transparencia': 
            window.open("https://drive.google.com/file/d/1mK_UPs3HI6KXuHDUegM3Ccg83CYGlxPp/view?usp=share_link");
            break;
        case 'Precedimiento_solicitud': 
            window.open("https://drive.google.com/file/d/1r0K6JwxoStf0GIKrNZvrBAEUZnyLN5WN/view?usp=share_link");
            break;
        case 'Ninios_transparencia': 
            window.open("https://drive.google.com/file/d/18xiwvYbk10Q5gYtj4_sXzHv7uQIrJVZK/view?usp=share_link");
            break;
    }
}

/* function Buscar() {
    const nombre = document.getElementById("Buscador").value
    console.log(nombre);
    const filtrar = estados.find(x => x.nombre === nombre)
    console.log(filtrar);
} */


function CargarLista() {
    console.log(estados);
    for(let x = 0; x <= estados.length -1; x++) {
        $("#Estados").append("<li style='margin-bottom: 1rem;'><a class='estados_list_botton' target='_blank' href=" + estados[x].url + " >" + estados[x].nombre + "</a></li>")
    }
}



document.addEventListener('scroll' , function() {
    let scroll = window.pageYOffset;

    if(scroll > 1) {
        header.style.backgroundColor  = "#531326"
        header.style.boxShadow  = "4px 4px 4px 2px rgba(0, 0, 0, 0.2)"
    } else {
        header.style.backgroundColor  = "Transparent"
        header.style.boxShadow  = "none"
    }
});

CargarLista()