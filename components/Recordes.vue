<template>
    <div>
      <h1 class="title">
          Recordes do dia {{day}}
      </h1>
        <b-carousel v-if="this.records.length > 0"
        id="carousel-1"
        :interval="4000"
        controls
        background="#fff"
        img-width="1024"
        img-height="500"
        style="color: black;"
        class="carousel">
            <b-carousel-slide caption="Maior Objeto" class="item">
                <p><span>{{biggest.name}}:</span> ~{{biggest.diameter}} m</p>
            </b-carousel-slide>
            <b-carousel-slide caption="Mais rápido" class="item">
                <p><span>{{fastest.name}}:</span> {{fastest.velocity}} km/s</p>   
            </b-carousel-slide>
            <b-carousel-slide caption="Mais próximo" class="item">
                <p><span>{{closest.name}}:</span> {{closest.distance}} km</p>
            </b-carousel-slide>
        </b-carousel>
        <div v-else class="idle">
          <p>
            Escolha uma data para saber os recordes do dia
          </p>
        </div>
  </div>
</template>

<script>
  export default {
    props: ['date', 'records'],
    data() {
      return {
        slide: 0,
        sliding: null,
        day: this.date,
        biggest: [],
        fastest: [],
        closest: []
      }
    },
    watch: {
      records: {
        immediate: true,
        handler(recs){
          this.biggest = recs[0];
          this.fastest = recs[1];
          this.closest = recs[2];
        }
      },
      date: {
        immediate: true,
          handler(newDate){
          this.day = newDate;
        }
      }
    }
  }
</script>

<style>
.carousel .item{
    height: 170px;
    color: black;
    z-index: 1;
    min-height: 170px;
}

.item p{
    color: black;
}

.item span{
    font-weight: 700;
}

.carousel-caption {
    color: black !important;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1);
}

</style>