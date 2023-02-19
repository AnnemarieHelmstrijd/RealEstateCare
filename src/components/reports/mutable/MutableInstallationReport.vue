<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left">
                    Subject
                </th>
                <th class="text-left">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-left">Location: </td>
                <td class="text-left">
                    <v-text-field label="Location" v-model="location"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Malfunctions: </td>
                <td class="text-left">
                    <v-text-field label="Malfunctions" v-model="malfunctions"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Approved: </td>
                <td class="text-left">
                    <v-checkbox v-model="approved"></v-checkbox>
                </td>
            </tr>
            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">
                    <v-select :items="installationTypeItems" label="Type" v-model="type"></v-select>
                </td>
            </tr>
            <tr>
                <td class="text-left">Test report: </td>
                <td class="text-left">
                    <v-btn icon href='https://www.youtube.com/watch?v=xm3YgoEiEDc'>
                        <v-icon id="bottom_icon" size="15">mdi-book-open</v-icon>
                    </v-btn>
                </td>
            </tr>
            <tr>
                <td class="text-left">Photo: </td>
                <td class="text-left">
                    <v-file-input prepend-icon="mdi-camera"></v-file-input>
                </td>
            </tr>
        </tbody>
    </v-table>
    <v-row :dense="true">
        <v-btn color="green" @click="save()">Save</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="deleteReport()">Delete</v-btn>
    </v-row>
</template>

<script>
export default {
    name: "MutableInstallationReportComponent",
    data() {
        return {
            installationTypeItems: ['Koeling', 'Verwarming', 'Luchtverversing', 'Electra', 'Beveiliging'],
            location: this.report.location,
            approved: this.report.approved,
            report_index: this.index,
            malfunctions: this.report.malfunctions,
            tests: this.report.tests,
            type: this.report.type,
        }
    },
    props: {
        report: {},
        index: -1,
    },
    methods: {
        save: function () {
            var newReport = this.report;
            if (!newReport) {
                newReport = {};
            }

            newReport.index = this.report_index;
            newReport.location = this.location;
            newReport.malfunctions = this.malfunctions;
            newReport.approved = this.approved;
            newReport.type = this.type;
            this.$store.dispatch("setActiveTaskInstallationReport", newReport)
        },

        deleteReport: function () {
            this.$store.dispatch("deleteInstallationReport", this.report_index)
        }
    }
}
</script>