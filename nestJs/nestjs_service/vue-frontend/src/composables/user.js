import {inject, provide, ref} from "vue";
import api from "@/api";

const USER_CONTEXT = Symbol();
let user;

export const setUser = (payload) => {
    user.value = payload;
    localStorage.setItem('user', JSON.stringify(payload));
    api.defaults.headers.authorization = `Bearer ${payload.token}`;
}

export const logout = () => {
    setUser({userId: null, token: null});
}

export function useUserProvider(initial = {userId: null, token: null}) {
    user = ref(initial);
    provide(USER_CONTEXT, {user, setUser, logout});
}

export function useUserContext() {
    const context = inject(USER_CONTEXT);

    if (!context) {
        throw new Error('useUserContext must be used with useUserProvider');
    }

    return context;
}
