<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="banner">
      <b-navbar-brand href="#Neos">Near-Earth Objects</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#Pesquisar">Pesquisar</b-nav-item>
          <b-nav-item href="#Recordes">Recordes</b-nav-item>
          <b-nav-item href="#Favoritos">Favoritos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.banner {
    width: 100%;
    position: fixed;
    display: flex;
    z-index: 2;
}

.titulo {
    color: white !important;
}
</style>