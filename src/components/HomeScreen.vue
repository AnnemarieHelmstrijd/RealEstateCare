<template>
    <v-card v-if="loggedIn" height="100%">
        <MenuGrid :darkMode="loggedIn.darkMode"></MenuGrid>
    </v-card>
    <v-card v-else height="100%">
        <LoginComponent></LoginComponent>
    </v-card>
</template>

<script>
// import HeaderComponent from './Header.vue'
import MenuGrid from './MenuGrid.vue';
// import FooterComponent from './Footer.vue';
import LoginComponent from './Login.vue'

export default {
    name: 'HomeScreen',
    computed: {
        loggedIn() {
            return this.$store.state.user
        }
    },
    components: {
        // HeaderComponent,
        MenuGrid,
        // FooterComponent,
        LoginComponent,
    }
}
</script>