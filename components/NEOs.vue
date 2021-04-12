<template>
      <div class="d-block">
        <p>Nome: {{name}}</p>
        <p>Risco de colisão: {{hazard}}</p>
        <p>Diâmetro maior {{minDiameter}}</p>
        <p>Diâmetro menor {{maxDiameter}}</p>
        <b-button v-if="!exists()" class="mt-3" variant="outline-dark" block @click="toggleFavorites">Favorito</b-button>
        <b-button v-else class="mt-3" variant="outline-dark" block @click="toggleFavorites">Desfavoritar</b-button>
    </div>
    
</template>

<script>
export default {
  props: ['neoInfo', 'fav'],
  data(){
    return {
      id: this.neoInfo.id,
      name: this.neoInfo.name,
      minDiameter: this.neoInfo.minDiameter,
      maxDiameter: this.neoInfo.maxDiameter,
      hazard: this.neoInfo.hazard,
      favorites: this.fav
    }
  },
  methods: {
    exists(){
      if(this.favorites.indexOf(this.id) !== -1){
        return true;
      } else {
        return false;
      }
    },
    toggleFavorites(){
      let index = this.favorites.indexOf(this.id);
      if(index !== -1){
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(this.id);
      }
      this.$emit('update:favorites', this.favorites);
    }
  }
}

</script>