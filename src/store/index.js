// This File contains all data mutation functions and an instance of the datamodel.

'use strict';

import { createStore } from "vuex";
import axios from "axios";
import { DataModel, ModificationsReport, DamageReport, MaintenanceReport, InstallationReport } from "./datamodel";

const database_url =
  "https://my-json-server.typicode.com/AnnemarieHelmstrijd/RealEstateCare/db";
const users_url =
  "https://my-json-server.typicode.com/AnnemarieHelmstrijd/RealEstateCare/users";

export default createStore({
  state: {
    loadingStatus: "Loading...",
    loadingErrors: [],
    loaded: false,
    model: null,
    user: null,
    users: [],
  },

  actions: {
    fetchReports(context, user) {
      context.commit("SET_LOADING_STATUS", "Loading...");
      axios
        .get(database_url)
        .then((result) => {
          context.commit("SET_LOADING_STATUS", "Done loading");
          context.commit("SET_LOADED", true);
          context.commit("SET_REPORTS", { user: user, data: result.data });
        })
        .catch((error) => {
          context.commit(
            "SET_LOADING_STATUS",
            "An error occured during loading"
          );
          console.log(error);
          context.commit("SET_LOADING_ERRORS", error);
        });
    },

    createNewDamageReport(context) {
      context.commit("ACTIVE_TASK_ADD_DAMAGE")
    },

    deleteDamageReport(context, index) {
      context.commit("ACTIVE_TASK_DELETE_DAMAGE", index);
    },

    setActiveTaskDamageReport(context, report) {
      context.commit("SET_ACTIVE_TASK_DAMAGE_REPORT", report);
    },

    createNewMaintenanceReport(context) {
      context.commit("SET_ACTIVE_TASK_MAINTENANCE_REPORT");
    },

    deleteMaintenanceReport(context, index) {
      context.commit("ACTIVE_TASK_DELETE_MAINTENANCE_REPORT", index);
    },

    setActiveTaskMaintenanceReport(context, report) {
      context.commit("SET_ACTIVE_TASK_MAINTENANCE_REPORT", report);
    },

    createNewInstallationReport(context) {
      context.commit("ACTIVE_TASK_ADD_INSTALLATION");
    },

    deleteInstallationReport(context, index) {
      context.commit("ACTIVE_TASK_DELETE_INSTALLATION_REPORT", index);
    },

    setActiveTaskInstallationReport(context, report) {
      let installation = new InstallationReport(report);
      context.commit("SET_ACTIVE_TASK_INSTALLATION_REPORT", installation);
    },

    createNewModificationsReport(context) {
      context.commit("SET_ACTIVE_TASK_MODIFICATIONS_REPORT");
    },

    deleteModificationsReport(context, index) {
      context.commit("ACTIVE_TASK_DELETE_MODIFICATIONS_REPORT", index);
    },

    setActiveTaskModificationsReport(context, report) {
      let modifications = new ModificationsReport(report);
      context.commit("SET_ACTIVE_TASK_MODIFICATIONS_REPORT", modifications);
    },

    createActiveTask(context, task) {
      context.commit("CREATE_ACTIVE_TASK", task)
    },

    saveActiveTask(context) {
      context.commit("SAVE_ACTIVE_TASK")
    },

    updateUserSettings(context, settings) {
      context.commit("UPDATE_USER_SETTINGS", settings)
      axios.get(users_url).then((response) => {
        const users = response.data;
        users.forEach((user, index) => {
          if (user.id == context.state.user.id) {
            users[index] = context.state.user;
          }
        })

        // Post new user data to server. This doesn't persist between calls on My JSON Server, but this would normally update the serverside data
        axios.post(users_url, users, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => console.log(response)).catch((error) => {
          console.log(error)
        });
      });
    }
  },

  mutations: {
    SET_REPORTS(state, reports) {
      state.reports = reports.data;
      state.users = reports.data.users;
      state.user = reports.user;
      state.model = new DataModel(reports.data);
    },

    SET_LOADING_STATUS(state, status) {
      state.loading = status;
    },

    SET_LOADED(state, loaded) {
      state.loaded = loaded;
    },

    SET_LOADING_ERRORS(state, errors) {
      state.loadingErrors = [...state.loadingErrors, errors];
    },

    CREATE_ACTIVE_TASK(state, task) {
      state.model.setActiveTask(task.location, task.date)
    },

    SAVE_ACTIVE_TASK(state) {
      state.model.activeTask.inspector = state.user.id;
      state.model.completedReports.push(state.model.activeTask)
      state.model.scheduledReports = state.model.scheduledReports.filter(function (item) { return item.location != state.model.activeTask.location })
      state.model.activeTask = null;
    },

    SET_ACTIVE_TASK_DAMAGE_REPORT(state, report) {
      let index = report.index;
      state.model.activeTask.damageReports[index] = new DamageReport(report);
    },

    ACTIVE_TASK_ADD_DAMAGE(state) {
      state.model.activeTask.damageReports.push(new DamageReport(null))
    },

    ACTIVE_TASK_DELETE_DAMAGE(state, index) {
      state.model.activeTask.damageReports.splice(index, 1)
    },

    SET_ACTIVE_TASK_MAINTENANCE_REPORT(state, report) {
      let index = report.index;
      state.model.activeTask.maintenanceReport[index] = new MaintenanceReport(report);
    },

    ACTIVE_TASK_ADD_MAINTENANCE(state) {
      state.model.activeTask.maintenanceReport.push(new MaintenanceReport(null))
    },

    ACTIVE_TASK_DELETE_MAINTENANCE(state, index) {
      state.model.activeTask.maintenanceReport.splice(index, 1)
    },

    SET_ACTIVE_TASK_INSTALLATION_REPORT(state, report) {
      let index = report.index;
      state.model.activeTask.installationReports[index] = new InstallationReport(report);
    },

    ACTIVE_TASK_ADD_INSTALLATION(state) {
      state.model.activeTask.installationReports.push(new InstallationReport(null))
    },

    ACTIVE_TASK_DELETE_INSTALLATION(state, index) {
      state.model.activeTask.installationReports.splice(index, 1)
    },

    SET_ACTIVE_TASK_MODIFICATIONS_REPORT(state, report) {
      let index = report.index;
      state.model.activeTask.modificationsReport[index] = new ModificationsReport(report);
    },

    ACTIVE_TASK_ADD_MODIFICATIONS(state) {
      state.model.activeTask.modificationsReport.push(new ModificationsReport(null))
    },

    ACTIVE_TASK_DELETE_MODIFICATIONS(state, index) {
      state.model.activeTask.modificationsReport.splice(index, 1)
    },

    SET_CURRENT_USER(state, user) {
      state.user = user;
    },

    UPDATE_USER_SETTINGS(state, settings) {
      state.user.darkMode = settings.darkMode;
      state.user.notifications = settings.notifications;
      state.user.sounds = settings.sounds;
    }
  },

  modules: {},
});
