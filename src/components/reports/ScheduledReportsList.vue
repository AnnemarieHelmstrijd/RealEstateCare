<template>
    <v-btn color="" to="/">
        &lt; Back To Menu
    </v-btn>

    <h2>Scheduled Reports</h2>
    <v-expansion-panels>
        <v-expansion-panel v-for="item in items" :key="item.location">
            <v-expansion-panel-title>
                <v-row align="center" class="spacer" no-gutters>
                    <v-col>{{ item.location }}</v-col>
                    <v-col>{{ item.date }}</v-col>
                </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row>
                    <v-col>
                        <router-link to="ActiveTask" style="text-decoration: none;">
                            <v-btn color="green" @click="startNewReport(item.location, item.date)">
                                Start
                            </v-btn>
                        </router-link>
                    </v-col>
                    <v-col>
                        <v-btn color="red" @click="deleteReport()">
                            Delete
                        </v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>

export default {
    name: "ScheduledReportsComponent",
    computed: {
        items() {
            return this.$store.state.model.scheduledReports
        },
    },
    methods: {
        startNewReport(location, date) {
            this.$store.dispatch("createActiveTask", { location: location, date: date });
        },
        deleteReport() { }
    }
}

</script>