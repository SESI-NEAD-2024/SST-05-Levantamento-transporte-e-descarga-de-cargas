export default{name:"CardReveal",props:{},template:`
    <div class="card mr-24">
                <div class="card-image activator">
                  <img
                    src="src/img/aula/Hero.webp"
                    loading="lazy"
                    alt="Mulher sorridente"
                  />
                  <div
                    class="activator waves-effect waves-light"
                    style="
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      right: 0;
                      left: 0;
                    "
                  ></div>
                </div>
                <div class="card-content activator">
                  <span
                    class="card-title activator blue-light-text flex--justify-between"
                  >
                    <h5>Ruído</h5>

                    <span class="material-symbols-rounded"> arrow_upward </span>
                  </span>
                </div>
                <div class="card-reveal">
                  <span
                    class="card-title blue-light-text flex--justify-between"
                  >
                    <h5>Ruído</h5>
                    <span class="material-symbols-rounded"> close </span>
                  </span>

                  <p>
                    O ruído é uma vibração que se propaga pelo ar em forma de
                    ondas e é percebido pela orelha humana. É uma sensação
                    desagradável. Ele pode ser mais ou menos perigoso,
                    dependendo da sua frequência e intensidade.
                  </p>
                </div>
              </div>
    `};