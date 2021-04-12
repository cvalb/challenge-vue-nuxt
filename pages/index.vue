<template>
  <div class="container">
    <b-modal ref="my-modal" hide-footer title="Informações do NEO" class="modal">
      <NEOs :neoInfo="info" :fav="favorites"/>
    </b-modal>
    <section id="Neos">
      <h1 class="title">
        Near-Earth Object (NEO)
      </h1>
      <p>Traduzindo literalmente o site do projeto da NASA, "Near-Earth Objects (NEOs) são cometas e asteróides que foram deslocados pela atração gravitacional de planetas próximos para órbitas que os permitem entrar na vizinhança da Terra".</p>
      <p>O <a target= "_blank" href="https://cneos.jpl.nasa.gov/">Center for Near Earth Objects Studies (CNEOS)</a> calcula as órbitas destes objetos, em apoio à NASA, com a finalidade de prever encontros próximos com a Terra, que acontecem diariamente.</p>
      
    </section>
    <section id="Pesquisar">
      <EscolheData :date.sync="date" :records.sync="records"/>
    </section>
    <section id="Recordes">
      <Recordes :date="date" :records.sync="records"/>
    </section>
    <section id="Favoritos">
      <Favoritos :fav="favorites"/>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        date: '',
        info: {},
        favorites: [],
        records: []
      }
    },
    // searches session for previous favorites
    mounted(){
      if(sessionStorage.getItem("favorites")){
        this.favorites = JSON.parse(sessionStorage.favorites);
      } else {
        sessionStorage.setItem("favorites", this.favorites);
      }
    },
    watch: {
      favorites(newFavorite) {
        sessionStorage.setItem("favorites", JSON.stringify(newFavorite));
      },
      records(newRecord){
        console.log(newRecord);
      },
      date(newDate){
        console.log(newDate)
      }
    },
    methods: {
      showModal(neoInfo) {
        this.info = neoInfo;
        this.$refs['my-modal'].show();
      }
    }
  }
</script>

<style>
body {
  background: #eee;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: left;
  background: #fff;
  padding-bottom: 15px;
}

.container a{
  color: black;
  font-weight: 600;
}

.title {
  display: block;
  font-weight: 350;
  font-size: 36px;
  letter-spacing: 1px;
  margin: 70px 0 30px 0;
}

.idle{
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 170px;
  font-weight: 350;
  color: #bbb;
  font-size: 24px;
  border: 1px #ddd solid;
  border-radius: 5px;
}

.idle p{
  text-align: center;
  margin: auto 0;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
