import {readonly, ref} from "@vue/reactivity";

export function useEventFetching(api) {
    const efLoading = ref(false);
    const fetchEvent = async (id) => {
        efLoading.value = true;
        try {
            return (await api.get(`/events/${id}`)).data;
        } catch (e) {
            return null;
        } finally {
            efLoading.value = false;
        }
    }
    return {
        efLoading: readonly(efLoading),
        fetchEvent
    };
}
