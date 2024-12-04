// Só funciona 1 componente por página
// Alterar a classe para cada cópia desse componente e criar uma nova classe no sass herdando

export default {
  name: "CarouselSst02",
  data() {
    return {
      carousel: {
        class: "carousel-sst-02",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },
      instances: null, // Declare instances as a reactive variable
      items: [
        {
          id: 1,
          img: "src/img/aula/limites-01.webp",
          alt: "Limites de tolerância do ruído ",

          
          html://html 
            `
            <p>
            Entender o limite de tolerância para o ruído e conhecer as regras que tratam desse assunto é essencial para identificar o risco e para adotar medidas que atenuem ou eliminem a exposição do trabalhador a ele.

            </p>
            `,
        },
        {
          id: 2,
          img: "src/img/aula/limites-02.webp",
          alt: "Limites de tolerância do ruído ",

          
          html://html 
            `
            <p>
            No Brasil, os limites de exposição ocupacional são estabelecidos pela Norma Regulamentadora 15 (NR 15) de 1978. Entende-se por limite de tolerância a concentração ou intensidade máxima ou mínima relacionada com a natureza e com o tempo de exposição ao agente, que não causará danos à saúde do trabalhador durante a sua vida laboral.																
            </p>
            `,
        },
        {
          id: 3,
          img: "src/img/aula/limites-03.webp",
          alt: "Limites de tolerância do ruído ",

          
          html://html 
            `
            <p>
            Quando não é possível reduzir os níveis de ruído com métodos técnicos e organizacionais, o uso de EPAs previsto na Norma Regulamentadora 06 (NR 06) é a melhor alternativa de proteção auditiva.																
            </p>
            `,
        },
        
        
      ],
    };
  },
  methods: {
    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      onCycleTo: (slide) => {
        this.carousel.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;
       


        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        } else if (this.carousel.qtdSlides == this.carousel.ordem){
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
          this.carousel.elemento.querySelector(".next").style.display =
          "none";
        }else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  
  template: //html  
  `
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
      <div v-for="item in items" :key="item.id" class="carousel-item  white-text center-align">
        <img :src="item.img" :alt="item.alt" loading="lazy">
        <div class="gradient"></div>
        <div class="text white-text center-align" v-html="item.html"></div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
