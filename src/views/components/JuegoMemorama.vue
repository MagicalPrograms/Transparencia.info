<template>
    <div class="content-game">
        <div id="tablero">
            <!-- <div class="area-tarjeta">
                <div class="tarjeta">
                     <div class="cara trasera">
                        <i class="fa-solid fa-magnifying-glass"></i>
                     </div>
                     <div class="cara superior">
                        <i class="fa-regular fa-circle-question"></i>
                     </div>
                </div>
            </div> -->
        </div>
        <div class="btn-container">
            <div @click="generarTablero" id="nuevo">
                Nuevo Juego
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const iconos = []
            return {
                iconos,
            }
        },
        methods: {
            cargarIconos() {
                this.iconos = [
                    '<i titulo="Transparencia" valor="Es el deber de todo Gobierno informar, dar cuentas y poner a disposición de sus ciudadanos la información pública." class="fa-solid fa-magnifying-glass"></i>',
                    '<i titulo="Leyes de Transparencia" valor="Los datos personales es toda aquella información concerniente a una persona física identificada o identificable. Se considera que una persona es identificable cuando su identidad pueda determinarse directa o indirectamente a través de cualquier información. Por ejemplo: domicilio, edad, números telefónicos, correo electrónico personal, curp, entre otros." class="fa-solid fa-gavel"></i>',
                    '<i titulo="Informacion Pública" valor="a los contenidos o documentos, cualquiera que sea su soporte o formato, que obren en poder de la Administración Regional y sus organismos públicos que hayan sido elaborados o adquiridos en el ejercicio de sus funciones." class="fa-solid fa-info"></i>',
                    '<i titulo="Solicitud de Transparencia" valor="Es un escrito que las personas presentan ante las Unidades de Transparencia de los Sujetos Obligados, por el que pueden requerir el acceso a información pública que se encuentra en documentos que generen, obtengan, adquieran, transformen o conserven en sus archivos." class="fa-solid fa-file-pen"></i>',
                    '<i titulo="Datos Presonales" valor="Los datos personales es toda aquella información concerniente a una persona física identificada o identificable. Se considera que una persona es identificable cuando su identidad pueda determinarse directa o indirectamente a través de cualquier información. Por ejemplo: domicilio, edad, números telefónicos, correo electrónico personal, curp, entre otros." class="fa-solid fa-file-shield"></i>',
                    '<i titulo="Recurso de revision" valor="El recurso de revocación es un medio de defensa legal no jurisdiccional que tiene a su disposición el contribuyente para impugnar un acto o resolución ante la propia autoridad que lo emitió." class="fa-solid fa-triangle-exclamation"></i>',
                    '<img titulo="Plataforma Nacional de Transparencia" valor="es un instrumento que unifica y facilita el acceso a la información pública gubernamental y potencia el ejercicio del derecho a la información pública." src="require(https://www.plataformadetransparencia.org.mx/o/sisai-theme/images/logoheader.png)" />',
                    '<i titulo="INAI" valor="Derecho al acceso" class="fa-solid fa-building"></i>',
                    '<i titulo="CEAIP" valor="Derecho al acceso" class="fa-solid fa-clover"></i>',
                    '<i titulo="Sistema Nacional de Transparencia" valor="Derecho al acceso" class="fa-solid fa-clover"></i>',
                    '<i titulo="Corrupcion" valor="Derecho al acceso" class="fa-solid fa-clover"></i>',
                    '<i titulo="Sujeto Obligado" valor="Derecho al acceso" class="fa-solid fa-clover"></i>',
                ]
            },

            generarTablero() {
                this.cargarIconos()
                let tablero = document.getElementById("tablero")
                let tarjetas = [] 
                for(let x = 0; x < 24; x++) {
                    tarjetas.push(`<div class="area-tarjeta" onclick="select('${x}')" >
                        <div class="tarjeta" id="tarjeta${x}">
                            <div class="cara trasera" id="trasera${x}">
                                ${ this.iconos[0] }
                            </div>
                            <div class="cara superior">
                                <i class="fa-regular fa-circle-question"></i>
                            </div>
                        </div>
                    </div>`)
                    if(x % 2 == 1) {
                        this.iconos.splice(0, 1)
                    }
                }
                tarjetas.sort(() => Math.random() - 0.5)
                tablero.innerHTML = tarjetas.join(" ")
            },
        },

        /* computed: {
            select(x) {
            }
        }, */
    
        mounted() {
            this.generarTablero()
        }
    }
</script>

<style>
    :root {
        --w: calc(100% / 8);
        --h: calc(510px / 4);
    }

    * {
        transition: all 0.5s;
    }

    .content-game {
        display: flex;
        row-gap: 1rem;
        flex-direction: column;
    }

    #tablero {
        width: 100%;
        height: 400px;
        margin: 0px;
        padding: 1rem;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(8, 1fr);
    }

    .area-tarjeta, 
    .tarjeta, 
    .cara{
         width: var(--w);
         height: var(--h);
         min-width: 150px;
    }

    #tablero .area-tarjeta .tarjeta {
        position: relative;
        transform-style: preserve-3d;
        animation: iniciar 3s;
    }
    
    
    #tablero .area-tarjeta .tarjeta .cara {
        display: flex;
        font-size: 400%;
        position: absolute;
        align-items: center;
        justify-content: center;
        backface-visibility: hidden;
        box-shadow: inset 0 0 0 5px white;
        border-radius: 5px;
    }

    #tablero .area-tarjeta .tarjeta .trasera {
        transform: rotateY(180deg);
        background-color: lightcyan;
        box-shadow: inset 0 0 0 5px white;
    }
    
    #tablero .area-tarjeta .tarjeta .superior {
        color: white;
        background: linear-gradient(#9f2241, #691c32);
    }

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #nuevo {
        width: 10rem;
        padding: 1rem;
        color: #ffffff;
        text-align: center;
        border-radius: 10px;
        background: linear-gradient(#9f2241, #691c32);
    }
    
    #nuevo:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    @keyframes iniciar {
        20%, 90% {
            transform: rotateY(180deg);
        }
        0%, 100% {
            transform: rotateY(0deg);
        }
    }
</style>