<template>
  <v-app-bar id="my_app_bar" height="100">
    <Logo></Logo>
    <v-spacer></v-spacer>
    <v-icon id="top_icon" size="50">mdi-bell</v-icon>

    <v-btn to="Settings" :disabled="!loggedIn">
      <v-icon id="top_icon" size="50">mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

import Logo from './Logo.vue';

export default {
  name: 'HeaderComponent',
  components: {
    Logo,
  },
  computed: {
    loggedIn() {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
#top_icon {
  color: lightgrey;
}
</style>
