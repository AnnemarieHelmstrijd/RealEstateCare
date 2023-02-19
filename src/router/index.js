'use strict';

import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from '../components/HomeScreen'
import CompletedReportsComponent from '../components/reports/CompletedReports'
import ScheduledReportsComponent from '../components/reports/ScheduledReportsList'
import ActiveTaskComponent from '../components/ActiveTask'
import SettingsComponent from '../components/Settings'

const knowlege = { template: '<div></div>' }

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeScreen,
    },
    {
        path: '/CompletedReports',
        name: 'Completed reports',
        component: CompletedReportsComponent,
    },
    {
        path: '/ScheduledReports',
        name: 'Scheduled reports',
        component: ScheduledReportsComponent,
    },
    {
        path: '/KnowledgeBase',
        beforeEnter() { location.href = 'https://www.remdal.com/blog/4-common-types-building-repair-maintenance-services/' },
        component: knowlege,
    },
    {
        path: '/ActiveTask',
        name: 'Active Task',
        component: ActiveTaskComponent,
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: SettingsComponent,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;