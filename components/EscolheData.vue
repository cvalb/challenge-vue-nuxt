<template>
        <div>
        <h1 class="title">
        Pesquisar objetos
        </h1>
        <p>Para saber mais sobre os objetos que passaram próximo à Terra, selecione uma data abaixo.</p>
        <p>Clique em um objeto para saber mais informações</p>
        <b-form-datepicker id="example-datepicker" class="mb-2" v-model="value" @input="searchValue()"></b-form-datepicker>
        <div class="d-block" v-if="results.length > 0">
        <b-table id="favoritos"  striped hover :items="results" @row-clicked="updateModal" :fields="fields">
            <template slot="actions" slot-scope="environment">
            <b-btn size="sm" @click="log(environment.item)"></b-btn>
            </template>
        </b-table>
        </div>
        <div v-else class="idle d-flex justify-content-center mb-3">
            <p id="idletext">Sem resultados</p>
            <b-spinner label="Loading..." id="loading" style="display: none;"></b-spinner>
        </div>
    </div>
</template>

<script>
  import { apiRequest } from '@/services/neowsApi.js';
  import { formatResults,  calculateRecords } from '@/services/functions.js';
  export default {
    props: {date: String},
    data() {
      return {
        info: [],
        value: this.date,
        results: [],
        fields: [{
            key: "name", 
            label: "Nome", 
            sortable: true
            }, 
            {key: "distance", 
            label: "Distância", 
            sortable: true
            }, 
            {key: "velocity", 
            label: "Velocidade", 
            sortable: true
            }]
      }
    },
    methods: {
        updateModal(row){
            let modalInfo = this.info.find(neo => neo.id === row.id);
            this.$parent.showModal(modalInfo);
        },
        async searchValue() {
            if (document.getElementById("loading")){
                let load = document.getElementById("loading");
                let text = document.getElementById("idletext");
                text.style.display = "none";
                load.style.display = "flex";
            }

            let request = await apiRequest("date", this.value);
            request = request.near_earth_objects[this.value];

            let formatted = formatResults(request);

            this.results = formatted[0];
            this.info = formatted[1];

            let records = calculateRecords(formatted[2]);

            this.$emit('update:records', records);

            var arrayDate = this.value.split("-");
            arrayDate = [arrayDate[2], arrayDate[1], arrayDate[0]].join("/");
            this.$emit('update:date', arrayDate);
        },
    }
  }
</script>

