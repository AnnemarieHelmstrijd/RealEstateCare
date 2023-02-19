<template>
    <router-link to="/">Home</router-link>
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