<template>
  <v-bottom-navigation id="bottom_navigation" :elevation="5" height="100" grow>
    <v-btn :disabled="!loggedIn || !activeTask" to="ActiveTask" value="active-task">
      <v-icon id="bottom_icon" size="30">mdi-wrench</v-icon>
      <h2>Active Task</h2>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn :disabled="!loggedIn" value="search">
      <v-icon size="30">mdi-magnify</v-icon>
      <h2>Search</h2>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn :disabled="!loggedIn" value="information">
      <v-icon size="30">mdi-exclamation</v-icon>
      <h2>Information</h2>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    loggedIn() {
      return this.$store.state.user
    },
    activeTask() {
      return this.$store.state.model.activeTask
    }
  }
}
</script>

<style scoped>
#bottom_navigation {
  display: flex;
  background-color: var(--secondary);
  color: whitesmoke;
}
</style>
