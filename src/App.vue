<template>
  <head>
    <title>Real Estate Care</title>
  </head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400&family=Montserrat:wght@200;400&family=Roboto&family=Roboto+Flex:opsz,wght@8..144,200;8..144,400&display=swap"
    rel="stylesheet">
  <v-app title="Real Estate Care">
    <v-layout>
      <HeaderComponent />
      <v-main>
        <router-view></router-view>
      </v-main>
      <FooterComponent />
    </v-layout>
  </v-app>
</template>

<script>

import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
:root {
  --primary: #1E292F;
  --secondary: #00AAA2;
  --text: rgba(41, 52, 57, 255);
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  font-size: 18px;
}

#my_app_bar {
  background-color: var(--primary);
}
</style>
