<template>
    <div class="d-block">
      <h1 class="title">
        Favoritos
      </h1>
      <b-table id="favoritos" v-if="favorites.length > 0" striped hover :items="favorites" @row-clicked="updateModal" :fields="fields">
         <template slot="actions" slot-scope="environment">
          <b-btn size="sm" @click="log(environment.item)"></b-btn>
        </template>
      </b-table>
        <div v-else class="idle">
            <p id="idletext">Você ainda não possui favoritos</p>
        </div>
    </div>    
</template>

<script>
  import { apiRequest } from '@/services/neowsApi.js';
  export default {
    // gets the array of favorite IDs from sessionStorage
    props: ['fav'],
    data() {
      return {
        favorites: [],
        favs: this.fav,
        fields: [{
            key: "name", 
            label: "Nome", 
            sortable: true
            }, 
            {key: "minDiameter", 
            label: "Diâmetro menor", 
            sortable: true
            }, 
            {key: "maxDiameter", 
            label: "Diâmetro maior", 
            sortable: true
            }]
      }
    },
    methods: {
      updateModal(row){
          let modalInfo = this.favorites.find(neo => neo.id === row.id);
          this.$parent.showModal(modalInfo);
      }
    },
    watch: {
      favs: {
        immediate: true,
        async handler(favorites){

          let favData = [];
          //searches each id in favorites.
          //it's not optimal, but it's part of the challenge to use API requests in 2 components
          favorites.forEach(async (neo) => {
            let request = await apiRequest("object", neo);
            let id = request.id;
            let name = request.name;
            let minDiameter = "~" + parseFloat(request.estimated_diameter.meters.estimated_diameter_min).toFixed(2) + " m";
            let maxDiameter = "~" + parseFloat(request.estimated_diameter.meters.estimated_diameter_max).toFixed(2) + " m";
            let hazard = request.is_potentially_hazardous_asteroid;

            if (hazard == true){
                hazard = "Sim";
            } else if (hazard == false) {
                hazard = "Não";
            }

            let infoNeo = {id: id, name: name, minDiameter: minDiameter, maxDiameter: maxDiameter, hazard: hazard}
            favData.push(infoNeo)
          });
          this.favorites = favData;
        }
      }
    },
  }
</script>

<style>
#favoritos{
    margin-bottom: 50px;
}
</style>