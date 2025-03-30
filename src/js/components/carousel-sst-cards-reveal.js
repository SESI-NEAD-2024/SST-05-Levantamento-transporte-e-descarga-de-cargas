export default{name:"CarouselSstCardsReveal",data(){return{carousel:{class:"carousel-sst-cards-reveal",key:0,elemento:null,qtdSlides:0,ordem:1,ordemAnterior:99},instances:null,items:[{id:1,img:"src/img/aula/limites-01.webp",alt:"Limites de tolerância do ruído ",html:`
            <p>
            Entender o limite de tolerância para o ruído e conhecer as regras que tratam desse assunto é essencial para identificar o risco e para adotar medidas que atenuem ou eliminem a exposição do trabalhador a ele.

            </p>
            `},{id:2,img:"src/img/aula/limites-02.webp",alt:"Limites de tolerância do ruído ",html:`
            <p>
            No Brasil, os limites de exposição ocupacional são estabelecidos pela Norma Regulamentadora 15 (NR 15) de 1978. Entende-se por limite de tolerância a concentração ou intensidade máxima ou mínima relacionada com a natureza e com o tempo de exposição ao agente, que não causará danos à saúde do trabalhador durante a sua vida laboral.																
            </p>
            `},{id:3,img:"src/img/aula/limites-03.webp",alt:"Limites de tolerância do ruído ",html:`
            <p>
            Quando não é possível reduzir os níveis de ruído com métodos técnicos e organizacionais, o uso de EPAs previsto na Norma Regulamentadora 06 (NR 06) é a melhor alternativa de proteção auditiva.																
            </p>
            `}]}},methods:{next(){this.carousel.elemento.querySelector(".previous").style.display="flex",this.instances[this.carousel.key].next()},previous(){this.instances[this.carousel.key].prev()}},mounted(){this.carousel.elemento=document.querySelector("."+this.carousel.class);var e=document.querySelectorAll(".carousel."+this.carousel.class);this.instances=M.Carousel.init(e,{fullWidth:!0,indicators:!0,shift:20,numVisible:1,onCycleTo:e=>{this.carousel.qtdSlides=e.parentNode.querySelectorAll(".carousel-item").length;e=[...e.parentNode.children].indexOf(e);this.carousel.ordem=e,this.carousel.ordemAnterior=this.ordem-1,1==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="none",this.carousel.elemento.querySelector(".next").style.display="flex"):this.carousel.qtdSlides==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="none"):(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="flex")}}),this.carousel.elemento.querySelector(".previous").style.display="none"},template:`
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card to-left">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card to-right">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item">
        
        <div class="row">
          
          <!-- Col -->
          <div class="col m4 s12">
            <div class="card" data-aos="fade-up" data-aos-delay="250">
              <div class="card-image activator">
                <img
                  src="src/img/aula/Hero.webp"
                  loading="lazy"
                  alt="Mulher sorridente"
                />
                <div
                  class="activator waves-effect waves-light"
                  style="position: absolute; top: 0; bottom: 0; right: 0; left: 0"
                ></div>
              </div>
              <div class="card-content activator">
                <span
                  class="card-title activator blue-light-text flex--justify-between"
                >
                  <h5>O que é a NR7?</h5>

                  <span class="material-symbols-rounded"> arrow_upward </span>
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title blue-light-text flex--justify-between">
                  <h5>O que é a NR7?</h5>
                  <span class="material-symbols-rounded"> close </span>
                </span>

                <p>
                  A Norma Regulamentadora nº 7 (NR 7) é uma regra estabelecida pelo
                  Ministério do Trabalho que visa orientar como as empresas devem cuidar
                  da saúde dos trabalhadores em relação aos riscos ocupacionais
                  presentes no ambiente de trabalho.
                </p>
              </div>
            </div>
          </div>
        
        </div>

      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `};