import {readonly, ref} from "@vue/reactivity";

export function useEventSaving(api) {
    const esLoading = ref(false);
    const esErrors = ref([]);
    const storeEvent = async (data, id = null) => {
        esErrors.value = [];
        esLoading.value = true;
        try {
            return id ? (await api.put(`/events/${id}`, data)).data :
                (await api.post(`/events`, data)).data;
        } catch (e) {
            if ([401, 403, 500].includes(e.response?.status)) {
                esErrors.value = [e.response?.data?.message] || [];
            } else if (400 === e.response?.status) {
                esErrors.value = e.response?.data?.message || [];
            }
        } finally {
            esLoading.value = false;
        }
    }
    return {
        esLoading: readonly(esLoading),
        storeEvent,
        esErrors: readonly(esErrors)
    };
}
