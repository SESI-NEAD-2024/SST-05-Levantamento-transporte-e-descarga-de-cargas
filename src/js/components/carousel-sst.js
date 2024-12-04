// Só funciona 1 componente por página

// Alterar a classe para cada cópia desse componente e criar uma nova classe no sass herdando
export default {
  name: "CarouselSst",
  data() {
    return {
      carousel: {
        class: "carousel-sst",
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
          img: "src/img/carousel01.png",
          alt: "Carga",

          
          html://html 
            `
            <p>
            Mantenha a carga próxima ao corpo, com uma distância aproximada de 25 cm entre você e a carga.​
            </p>

            <p>
            Segure a carga com as duas mãos (simetricamente), dividindo o peso de forma equilibrada.
            </p>
            `,
        },
        {
          id: 2,
          img: "src/img/carousel02.png",
          alt: "Carga",

          
          html://html 
            `
            <p>
            A carga deve ter espaços adequados para o encaixe dos dedos e permitir uma boa preensão.​
            </p>
            `,
        },
        {
          id: 3,
          img: "src/img/carousel03.png",
          alt: "Carga",

          
          html://html 
            `
            <p>
            A carga deve estar posicionada sobre uma bancada de aproximadamente 75 cm de altura antes do levantamento.
            </p>
            <p>
            Deve haver espaço suficiente para aproximar a carga do corpo, bem como espaço para os pés e pernas, permitindo uma postura estável e o alcance adequado.

            </p>
            <p>
            O deslocamento vertical da carga não deve exceder 25 cm a partir da bancada.
            </p>
            `,
        },
        {
          id: 4,
          img: "src/img/carousel04.png",
          alt: "Carga",

          
          html://html 
            `
            <p>
            Defina o caminho para o transporte de cargas, eliminando obstáculos e evitando desníveis no piso que possam causar quedas.​

            </p>
            <p>
            A frequência de levantamentos não deve exceder um por minuto. 
            </p>
            `,
        },
        {
          id: 5,
          img: "src/img/carousel05.png",
          alt: "Carga",

          
          html://html 
            `
            <p>
            Se a carga estiver posicionada abaixo de 75 cm, use os músculos das pernas para se levantar, evitando curvaturas ou torções na coluna vertebral.. ​
            </p>
​
            `,
        },
        {
          id: 6,
          img: "src/img/carousel06.png",
          alt: "Carga",

          
          html://html 
            `
            <p>
            Se a carga pesar mais de 23 kg, peça ajuda ou utilize equipamentos e ferramentas adequados para o levantamento e transporte.
            </p>

​
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
