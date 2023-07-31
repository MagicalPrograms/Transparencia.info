<template>
  <div class="home">
    <!-- Nav bar -->
    <section id="nav">
        <div class="row">
            <div class="col-sm-6 icon">
                <h3 class="title">TRANSPARENCIA<span>.INFO</span></h3>
            </div>
            <div class="col-sm-6 menu">
                <ul class="menu-options">
                    <li><a href="#" @click="goToSection('inicio')">Inicio</a></li>
                    <li><a href="#" @click="goToSection('leyes')">Leyes</a></li>
                    <li><a href="#" @click="goToSection('estados')">Estados</a></li>
                    <li><a href="#" @click="goToSection('material')">Material</a></li>
                    <li><a href="#" @click="goToSection('juegos')">Juegos</a></li>
                </ul>
            </div>
        </div>
    </section>

    <section id="inicio" ref="inicio">
        <div class="row">
            <div class="col-sm-6 info-area">
                <h3 class="good-vibes">¡Bienvenido!</h3>
                <h2 class="question">¿Quieres Conocer Mas Sobre Transparencia?</h2>
                <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                pariatur ut officia.</p>
            </div>
            <div class="col-sm-6 img-area">
                <img src="https://edeal.cl/assets/img/backgrounds/free-image.webp" alt="img">
            </div>
        </div>
    </section>

    <section id="leyes" ref="leyes">
        <div class="row">
            <div class="col-sm-12">
                <h1>Leyes</h1>
                <p>Estas son las leyes de Transparencia las cuales dictan cada uno de las obligaciones que deben cumplir los sujetos obligados</p>
            </div>
        </div>
        <div class="row">
          <div class="col-sm-3" style="flex-direction: column;">
              <img id="Ley_General" src="../assets/img/Ley_General.jpg" @click="Abrir($event)" class="legal_img"  alt="Ley general">
          </div>
          <div class="col-sm-3" style="flex-direction: column;">
              <img id="Ley_Transparencia" src="../assets/img/Ley.png" @click="Abrir($event)" class="legal_img"  alt="Ley general">
          </div>
          <div class="col-sm-3" style="flex-direction: column;">
              <img id="Ley_Proteccion" src="../assets/img/Screenshot_4.png" @click="Abrir($event)" class="legal_img"  alt="Ley general">
          </div>
          <div class="col-sm-3" style="flex-direction: column;">
              <img id="Constitucion" src="../assets/img/Constitucion.jpg" @click="Abrir($event)" class="legal_img" alt="Ley general">
          </div>
      </div>
    </section>

    <section id="estados" ref="estados">
        <div class="row">
            <div class="col-sm-12">
                <h1>La Trnsparencia en tu estado</h1>
                <p>Es considerado de buenas practicas que cada sujeto obligado cuente con un portal de <span>Transparencia.</span> es por eso que acontinuación te dejamos algunos de ellos</p>
                <input v-model="search" class="form-control" placeholder="Buscar..."/>
                <div>
                    <ul id="Estados" class="list">
                      <li v-for="item in buscar" :key="item.nombre"><a :href="item.url" target="_blank" class="estados_list_botton">{{ item.nombre }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="Material" ref="material">
        <div class="row">
            <div class="col-sm-12">
                <h1>Material de apoyo</h1>
                <div class="material-container">
                    <div id="Coordinacion_archivo" @click="Abrir($event)" class="material">
                        <img src="../assets/Doc/Coordinacion_archivo.png" alt="">
                        <a class="link-material" href="">Coordinacion de Arcivos</a>
                    </div>
                    <div id="Proteccion_datos" @click="Abrir($event)"  class="material">
                        <img src="../assets/Doc/Datos_Personales.png" alt="">
                        <a class="link-material" href="">Protección de datos presonales</a>
                    </div>
                    <div id="Obligacion_transparencia" @click="Abrir($event)" class="material">
                        <img src="../assets/Doc/Obligaciones_transparencia.png" alt="">
                        <a class="link-material" href="">Obligaciones de Transparencia</a>
                    </div>
                    <div id="Ley_transparencia" @click="Abrir($event)" class="material">
                        <img src="../assets/Doc/Presentacion_base.png" alt="">
                        <a class="link-material" href="">Ley de Transparencia y Acceso a la Información Pública</a>
                    </div>
                    <div id="Precedimiento_solicitud" @click="Abrir($event)" class="material">
                        <img src="../assets/Doc/Procedimeintos_recursos_plazos.png" alt="">
                        <a class="link-material" href="">Procedimientos para atender Solcitudes de Información, recursos de revisión y sus plazos</a>
                    </div>
                    <div id="Ninios_transparencia" @click="Abrir($event)" class="material">
                        <img src="../assets/Doc/Tambien_es_cosa_de_ninio.png" alt="">
                        <a class="link-material" href="">La Transparencia tambien es cosa de niños</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="Juegos" style="background-color: aliceblue;">
        <h2>Juegos</h2>
        <p>Selecciona algunos de los juegos interactivos de transparencia que tenemos para aprender y divertirnos al mismo tiempo</p>
        <juego />       
    </section>

    <section id="footer">
        <div class="row">
            <div class="col-sm-12">
                <img src="https://transparencia.ahome.gob.mx/wp-content/uploads/2021/12/cropped-Ahome-1.png" style="width: 15rem;" alt="Ahome img">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <p style="color: #FFF;">Este es un portal creado por el municipio de <span>AHOME</span></p>
            </div>
        </div>
        <div class="row" style="display: flex; justify-content: flex-start; color: #FFF;">
            <div class="col-sm-3" >
                <p class="title-list">Conoce sobre</p>
                 <ul style="padding-left: 2rem;">
                    <li>Transparencia</li>
                    <li>Datos Personales</li>
                    <li>Articulos</li>
                    <li>Ley de tranpsarnencia</li>
                    <li>Ley General de Transparencia</li>
                </ul>
            </div>
            <div class="col-sm-3">
                <p class="title-list">Paginas</p>
                <ul style="padding-left: 2rem;">
                    <li>Transparencia Ahome</li>
                </ul>
            </div>
            <div class="col-sm-3">
                <p class="title-list">Contactos</p>
                <ul style="padding-left: 2rem;">
                    <li>unidad.transparencia@ahome.gob.mx</li>
                    <li>oficialia.transparencia@ahome.gob.mx</li>
                    <li>preteciondatos.transparenica@ahome.gob.mx</li>
                    <li>Ext. 1234, Tel:(6681) 12-34-56</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="Copy">
        <div>
            <p>Copyright @ Ahome, Sinaloa, México 2023</p>
        </div>
    </section>

  </div>
</template>


<script>
import juego from "@/views/components/JuegoMemorama.vue"

document.addEventListener("scroll", function() {
  const header = document.getElementById("nav")
  const scroll = window.pageYOffset

  if(scroll > 1) {
        header.style.backgroundColor  = "#531326"
        header.style.boxShadow  = "4px 4px 4px 2px rgba(0, 0, 0, 0.2)"
    } else {
        header.style.backgroundColor  = "Transparent"
        header.style.boxShadow  = "none"
    }
})

export default {
  name: 'HomeView',
  data() {
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
    let search = ''
    return {
      estados,
      search
    }
  },
  components: {
    juego
  },
  computed: {
    buscar() {
      if(this.search.length === 0) return this.estados
      return this.estados.filter(x => x.nombre.toLowerCase().includes(this.search.toLocaleLowerCase()))
    },
  },
  methods: {
    goToSection(value) {
      const top = this.$refs[(value)].offsetTop
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
    },

    Abrir: function(event) {
      const id = event.currentTarget.id;
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
          default:
            console.log("Error:" + id);
            break;
      }
    }
  }
}
</script>

<style>
span {
  color: #9f2241;
  font-family: 'Righteous', cursive !important;
}

#nav {
  z-index: 1;
  width: 100%;
  position: fixed;
}

#nav .row {
  display: flex;
  align-items: center;
  padding: 0.5rem 5rem;
}

#nav .row .icon .title {
  color: #FFFFFF;
  margin-bottom: 0px;
}

#nav .row .icon .title span{
  color: #9f2241;
  font-family: 'Righteous', cursive !important;
}

#nav .row .menu {
  display: flex;
  justify-content: flex-end;
}

#nav .row .menu .menu-options {
  margin-bottom: 0px;
}

#nav .row .menu .menu-options li a{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.363);
}

#nav .row .menu .menu-options li:hover a{
  color: #FFFFFF;
}

#nav .row .icon {
  display: flex;
  justify-content: flex-start;
}

#nav .col-sm-6 .menu-options{
  display: flex;
  list-style: none;
  column-gap: 1.3rem;
}


#inicio {
  padding: 5rem 5rem 0rem 5rem;
  height: 100vh;
  background-color: #691c32;
}

#inicio .row {
  display: flex;
  align-items: center;
  justify-items: center;
}

#inicio .row .info-area {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 15px;
  color: #FFFFFF;
}

#inicio .row .img-area {
  display: flex;
  align-items: center;
  justify-content: center;
}

#inicio .row .img-area img {
  width: 100%;
  height: 100%;
}

#leyes {
  padding: 5rem 5rem;
}

#leyes .row .col-sm-3 .legal_img {
  width: 100%;
  height: 22rem;
  transition: linear all .2s;
}

#leyes .row .col-sm-3:hover .legal_img {
  width: 100%;
  height: 22rem;
  transform: scale(1.1);
  rotate: 10deg;
  transition: linear all .2s;
}

#estados {
  padding: 5rem 5rem;
  height: 100vh;
  background-color: #691c32;
}

#estados .row{
  width: 100%;
  color: #FFFFFF;
}

#estados .row .col-sm-12{
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
}

#estados .list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 30px;
  column-gap: 1rem;
  list-style: none;
  margin-left: -30px;
}

#estados .row div .list li{
  margin-bottom: 1rem;
}

#estados .row div .list li .estados_list_botton{
  width: 100%;
  color: #FFF;
  padding: .3rem;
  display: block;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  border-radius: 3px;
  text-decoration: none;
  background-color: #9f2241;
}

#Material {
  display: grid;
  padding: 5rem 5rem;
}

#Material .row .col-sm-12 .material-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

#Material .row .col-sm-12 .material-container .material {
  overflow: hidden;
  background-color: rgb(239, 239, 239);
  padding: 10px;
  border-radius: 5px;
  transition: linear all .2s;
}

#Material .row .col-sm-12 .material-container .material:hover {
  transform: scale(0.9);
  transition: linear all .2s;
  cursor: pointer;
}

#Material .row .col-sm-12 .material-container .material img{
  width: 100%;
  height: 15rem;
  border-radius: 5px;
}

#Material .row .col-sm-12 .material-container .material a{
  text-decoration: none;
  color: #9f2241;
}

#Juegos {
  padding: 3rem 2.5rem;
  background-color: aliceblue;
}

#footer {
  display: flex; 
  row-gap: 2rem;
  padding: 5rem 5rem;
  flex-direction: column;
  background-color: #691c32;
}

#Copy {
  padding: 1rem; 
  display: flex; 
  color: white;
  justify-content: center; 
  background-color: #531326; 
}

#Copy p {
  margin-bottom: 0px; 
}
</style>
