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
                    <v-text-field variant="solo" v-model="location"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Description: </td>
                <td class="text-left">
                    <v-text-field variant="solo" :model-value="description" v-model=description></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Action Required: </td>
                <td class="text-left">
                    <v-checkbox v-model="actionRequired"></v-checkbox>
                </td>
            </tr>
            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">
                    <v-select variant="solo" :items="damageTypeItems" label="Type" v-model="damageType"></v-select>
                </td>
            </tr>
            <tr>
                <td class="text-left">New Damage: </td>
                <td class="text-left">
                    <v-checkbox v-model="isNewDamage"></v-checkbox>
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
    name: "MutableDamageReportComponent",
    data() {
        return {
            damageTypeItems: ['Moedwillig', 'Slijtage', 'Geweld', 'Normaal gebruik', 'Calamiteit', 'Anders'],
            damageType: this.report.type,
            isNewDamage: this.report.newDamage,
            actionRequired: this.report.actionRequired,
            location: this.report.location,
            description: this.report.description,
            report_index: this.index,
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
            newReport.newDamage = this.isNewDamage;
            newReport.location = this.location;
            newReport.description = this.description;
            newReport.actionRequired = this.actionRequired
            this.$store.dispatch("setActiveTaskDamageReport", newReport)
        },

        deleteReport: function () {
            this.$store.dispatch("deleteDamageReport", this.report_index)
        }
    }
}
</script>