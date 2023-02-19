"use strict";

class DamageReport {
  constructor(json) {
    this.newDamage = json ? json["newDamage"] : false;
    this.location = json ? json["location"] : "";
    this.actionRequired = json ? json["actionRequired"] : false;
    this.type = json ? json["type"] : "Moedwillig";
    this.description = json ? json["description"] : "";
  }
}

class MaintenanceReport {
  constructor(json) {
    console.log(json);
    this.location = json ? json["location"] : "";
    this.actionRequired = json ? json["actionRequired"] : false;
    this.type = json ? json["type"] : -1;
    this.description = json ? json["description"] : "";
    this.costs = json ? json["costs"] : "";
  }
}

class ModificationsReport {
  constructor(json) {
    this.notes = json ? json["notes"] : false;
    this.location = json ? json["location"] : "";
    this.executor = json ? json["executor"] : false;
    this.actionRequired = json ? json["actionRequired"] : "";
    this.description = json ? json["description"] : "";
    this.action = json ? json["action"] : "";
  }
}

class InstallationReport {
  constructor(json) {
    this.location = json ? json["location"] : "";
    this.approved = json ? json["approved"] : false;
    this.type = json ? json["type"] : "";
    this.description = json ? json["description"] : "";
    this.malfunctions = json ? json["malfunctions"] : "";
    this.notes = json ? json["notes"] : "";
    this.test = json ? json["test"] : "";
  }
}

class Report {
  constructor(json) {
    console.log(json);
    this.inspector = json ? json["inspector"] : -1;
    this.location = json ? json["location"] : "";
    this.date = json ? json["date"] : "";
    this.damageReports = json["damage"] ? json["damage"] : [];
    this.maintenanceReports = json["maintenance"] ? json["maintenance"] : [];
    this.modificationsReports = json["modifications"] ? json["modifications"] : [];
    this.installationReports = json["installation"] ? json["installation"] : [];
  }
}

function buildReports(reportJson) {
  return new Report(reportJson);
}

class DataModel {
  constructor(database = null) {
    if (database) {
      this.completedReports = database["completedReports"].map(buildReports).sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      this.scheduledReports = database["scheduledReports"].map(buildReports);
    }
  }

  setActiveTask(location, date) {
    const json = {
      location: location,
      date: date,
    };

    this.activeTask = new Report(json);
  }
}

export {
  DamageReport,
  MaintenanceReport,
  InstallationReport,
  ModificationsReport,
  DataModel,
  Report,
}
