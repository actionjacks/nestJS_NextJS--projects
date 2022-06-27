import {createRouter, createWebHistory} from "vue-router";
import Event from "@/Event";
import EventList from "@/EventList";
import Login from "@/Login";
import Register from "@/Register";
import Account from "@/Account";
import CreateEvent from "@/CreateEvent";
import EditEvent from "@/EditEvent";

const routes = [
    {
        path: "/",
        name: "event-list",
        component: EventList,
    },
    {
        path: "/event/:id",
        name: "event",
        component: Event,
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/account",
        name: "account",
        component: Account
    },
    {
        path: "/account/create-event",
        name: "account-create-event",
        component: CreateEvent
    },
    {
        path: "/account/edit-event/:id",
        name: "account-edit-event",
        component: EditEvent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
