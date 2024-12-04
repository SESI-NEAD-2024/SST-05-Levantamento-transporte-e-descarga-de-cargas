// Alterar as variáveis de data() e o numero da questao no HTML de acordo com a questão

// Não confere a questão

export default {
  data() {
    return {
      gabaritoQuestoes: { q1: ["b", "c", "e"] },
      formData: {
        q1: [],
      },
    };
  },

  methods: {
    conferir(classe){
      document.querySelector(`.${classe}`).classList.toggle("scale-in");
    },
    verificaQuestao(questao) {
      let qtdGabarito = this.gabaritoQuestoes[questao].length;
      let qtdSelecionadas = this.formData[questao].length;

      // Verifica se as opções selecionadas são iguais do gabarito

      const acertou =
        qtdSelecionadas === qtdGabarito &&
        this.formData[questao].every((resposta) =>
          this.gabaritoQuestoes[questao].includes(resposta)
        );

      console.log("acertou", acertou);

      let correto = //html 
      `
        <div class="mb-40 question-result question-result__correto">
        <img src="src/img/correct.webp" alt="correto">
        <p class="body1 flex--align-center">
          <b>Sim, essas são as características associadas ao conto.
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="mb-40 question-result question-result__incorreto">
        <img src="src/img/error.webp" alt="correto">
          <p class="body1 flex--align-center">
             
            <b>Algumas das opções selecionadas estão incorretas.</b>
            <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `;
      if (acertou) {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = incorreto;
      }
    },
  },

 
  template:  //html
  `
<!-- Question 1 -->
<div class="question question--checkbox" id="q1">
<h3 class="blue-deep-text">Que tal fazer um pequeno exercício? </h3>
<h5>Clique nos itens a seguir e reflita sobre como você se sente.</h5>
<form action="get" >

  <p>
    <label>
      <input name="q1[]"  type="checkbox" value="a" v-model="formData.q1"  />
      <span>
      Tenho dificuldade para adormecer, manter o sono ou ter um sono reparador, muitas vezes por causa de uma mente ativa ou de preocupações constantes.</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q1[]"  type="checkbox" value="b" v-model="formData.q1"  />
      <span>
      Sinto-me facilmente irritado(a) ou frustrado(a), muitas vezes sem uma razão aparente.</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q1[]" type="checkbox" value="c" v-model="formData.q1"  />
      <span>
      Sinto-me frequentemente cansado(a) ou esgotado(a), mesmo após atividades leves ou um sono aparentemente adequado.</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q1[]" type="checkbox" value="d" v-model="formData.q1"  />
      <span>
      Sinto-me constantemente preocupado(a), até com situações cotidianas ou que não justificam esse nível de preocupação.</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q1[]" type="checkbox" value="e" v-model="formData.q1"  />
      <span>
      Sinto constantemente meus músculos tensos, sinto dores e/ou desconforto, especialmente no pescoço, ombros e costas.</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q1[]" type="checkbox" value="f" v-model="formData.q1"  />
      <span>
      Tenho dificuldade para relaxar ou ficar parado(a), sentindo-me constantemente "à flor da pele".</span
      >
    </label>
  </p>
  <div class="feedback"></div>
  
</form>
<div class="center-align">
<a class=" mt-24 btn filled" href="javascript:void(0);" @click="conferir('response')">Conferir</a>

</div>
<div class="mt-60 response scale-transition scale-out">
<p>
                  Se você se identificou com duas ou mais alternativas, talvez
                  seja o momento de parar, respirar fundo e começar a cuidar
                  melhor de suas emoções. Muitos estudos mostram que tentar
                  "controlar" o que sentimos pode, na verdade, aumentar nosso
                  sofrimento. Já reparou que, quanto mais tentamos afastar um
                  pensamento ou emoção, mais eles insistem em voltar? Esse modo
                  automático de agir pode gerar insatisfação, nos levando a
                  ruminar pensamentos e nos preocupar ainda mais. É como tentar
                  segurar água nas mãos: quanto mais apertamos, mais ela escapa.
                </p>

                <p>
                  Quando tentamos nos livrar dessas emoções desagradáveis,
                  muitas vezes criamos uma bola de neve de sofrimento que só
                  cresce à medida que resistimos. Por isso, é importante
                  perceber que lutar contra esses sentimentos pode apenas
                  intensificá-los.​
                </p>

                <p>
                  Uma forma saudável de cuidar da sua saúde emocional é praticar
                  a atenção plena. Que tal explorarmos mais esse tema? Siga em
                  frente, porque esse será o nosso próximo tópico.
</div>
</div>
`,
};

// <form action="get"  @submit.prevent="verificaQuestao('q1')">
// <input class="mt-24 btn filled" type="submit" value="Responder 👀" />