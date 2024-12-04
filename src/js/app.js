import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Esse dá erro
// import {
//   createApp,
// } from "https://unpkg.com/vue@3.4.35/dist/vue.esm-browser.prod.js";
import CarouselSst from "./components/carousel-sst.js";
import Sidebar from "./components/sidebar.js";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import AppFooter from "./components/app-footer.js";
import Concluir from "./components/concluir.js";
import carouselSst02 from "./components/carousel-sst-02.js";
import carouselSstCardsReveal from "./components/carousel-sst-cards-reveal.js";
import QuestionCheckbox from "./components/question-checkbox.js";

const app = createApp({
  components: {
    Sidebar,
    Navbar,
    Hero,
    AppFooter,
    Concluir,
    CarouselSst,
    carouselSst02,
    carouselSstCardsReveal,
    QuestionCheckbox,
    
  },

  // Quando o componente estiver montado, executa o código
  /**
   * Inicializa a funcionalidade de scrollspy e adiciona um ouvinte de evento de scroll.
   *
   * Esta função é chamada quando o componente é montado. Ela seleciona todos os elementos
   * com a classe "scrollspy" usando `document.querySelectorAll` e inicializa o scrollspy
   * usando `M.ScrollSpy.init`. A função `M.ScrollSpy.init` recebe dois parâmetros: os elementos
   * a serem inicializados e um objeto de opções opcional.
   *
   * Após inicializar o scrollspy, a função adiciona um ouvinte de evento de scroll à janela
   * usando `window.addEventListener`. O ouvinte de evento chama o método `handleScroll`
   * do componente atual.
   *
   * @return {void} Esta função não retorna um valor.
   */
  mounted() {
    /**
     * Oculta o elemento com id "loading" e exibe o elemento com id "content"
     * quando a página está totalmente carregada.
     *
     * @return {void} Esta função não retorna um valor.
     */
      document.getElementById("loading").style.display = "none";
      document.getElementById("content").style.opacity = "1";
    
    

   
    // Adiciona o evento de scroll
    window.addEventListener("scroll", this.handleScroll);

    // AOS Animation -------------------------------------
    AOS.init({
      delay: 50,
    });

    // Colapsible
    var elems = document.querySelectorAll(".collapsible");
    var Collapsible = M.Collapsible.init(elems, {
      // specify options here
    });

    // Toolltip
    var tooltipes = document.querySelectorAll('.tooltipped');
    var mTooltip = M.Tooltip.init(tooltipes, {
      // specify options here
    });

    var materialboxed = document.querySelectorAll('.materialboxed');
    var mMaterialbox = M.Materialbox.init(materialboxed, {
      // specify options here
    });


    // Drag Slide Cards
    // const container = document.querySelector('.slide-cards');

    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // container.addEventListener('mousedown', (e) => {
    //     isDown = true;
    //     container.classList.add('active');
    //     startX = e.pageX - container.offsetLeft;
    //     scrollLeft = container.scrollLeft;
    //     container.style.cursor = 'grabbing';
    // });

    // container.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     container.classList.remove('active');
    //     container.style.cursor = 'grab';
    // });

    // container.addEventListener('mouseup', () => {
    //     isDown = false;
    //     container.classList.remove('active');
    //     container.style.cursor = 'grab';
    // });

    // container.addEventListener('mousemove', (e) => {
    //     if (!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - container.offsetLeft;
    //     const walk = (x - startX) * 3; // Velocidade do scroll
    //     container.scrollLeft = scrollLeft - walk;
    // });

  },
  methods: {
    // Barra de progresso Scroll -----------------------------------------------------

    /**
     * Atualiza a barra de progresso e exibe a porcentagem rolada.
     *
     * Esta função calcula a porcentagem rolada com base na posição de rolagem do usuário. Em seguida, atualiza a largura da barra de progresso e exibe a porcentagem rolada na caixa de progresso.
     *
     * @return {void} Esta função não retorna nenhum valor.
     */
    handleScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var barras = document.querySelectorAll(".determinate");

      barras.forEach((barra) => {
        barra.style.width = scrolled + "%";
      });

      document.querySelector(".progress-box__number").innerHTML =
        Math.round(scrolled) + "%";
    },

    pulseReview(event) {
      event.target.parentElement.querySelector('.scale-transition').classList.toggle("scale-in");
      
      
    },
  },
});

app.mount("#app");
