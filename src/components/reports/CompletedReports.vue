<template>
    <div v-if="loaded">
        <CompletedReportsList></CompletedReportsList>
    </div>
    <div v-else>
        <v-card height="100%">
            <v-progress-circular color="blue-lighten-3" indeterminate :size="62" :width="12">
            </v-progress-circular>
        </v-card>
    </div>
</template>

<script>
import CompletedReportsList from './CompletedReportsList.vue';

export default {
    name: 'CompletedReportsComponent',
    components: {
        CompletedReportsList,
    },
    computed: {
        loaded() {
            return this.$store.state.loaded;
        },
        loadingStatus() {
            return this.$store.state.loadingStatus;
        },
    }
}
</script>