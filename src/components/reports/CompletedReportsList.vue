<template>
    <v-btn color="" to="/">
        &lt; Back To Menu
    </v-btn>
    <h2>Completed Reports</h2>
    <v-expansion-panels>
        <v-expansion-panel v-for="item in items" :key="item.location">
            <v-expansion-panel-title>
                <v-row align="center" class="spacer" no-gutters>
                    <v-col cols="4" sm="2" md="1">
                        <v-avatar>
                            <v-img alt="Avatar" :src=getUser(item.inspector).avatar></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col>{{ getUser(item.inspector).firstName + " " + getUser(item.inspector).lastName }}</v-col>
                    <v-col>{{ item.location }}</v-col>
                    <v-col>{{ item.date }}</v-col>
                </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <CompletedReportComponent :report="item"></CompletedReportComponent>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <FooterComponent></FooterComponent>
</template>

<script>

import FooterComponent from '../Footer.vue';
import CompletedReportComponent from './CompletedReport.vue'
export default {
    name: "CompletedReportsList",
    components: {
        FooterComponent,
        CompletedReportComponent
    },
    computed: {
        items() {
            return this.$store.state.model.completedReports
        },
    },
    methods: {
        getUser(user_id) {
            return this.$store.state.users[user_id];
        },
    }
}
</script>

<style scoped>
.h2 {
    text-align: left;
}
</style>