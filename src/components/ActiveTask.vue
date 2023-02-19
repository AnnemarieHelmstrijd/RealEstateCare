<template>
    <v-btn color="" to="/">
        &lt; Back To Menu
    </v-btn>
    <MutableReportComponent></MutableReportComponent>
</template>

<script>

import MutableReportComponent from './reports/mutable/MutableReport.vue';

export default {
    name: "ActiveTaskComponent",
    computed: {
        data() {
            return this.$store.state.model.activeTask
        }
    },
    components: {
        MutableReportComponent,
    }
}
</script>