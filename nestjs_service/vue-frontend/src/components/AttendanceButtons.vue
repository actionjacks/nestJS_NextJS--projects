<template>
  <div class="flex -space-x-px text-gray-600 items-center" v-if="!loading.attendance">
    <button
      :class="{'bg-indigo-100 hover:bg-gray-300 text-gray-800 border-gray-300': attendance && attendance.answer === 1}"
      @click="storeAttendanceAnswer(1)"
      class="outline-none focus:outline-none bg-gray-100 border border-gray-300 py-1 px-2 rounded-l-sm text-sm font-semibold hover:bg-gray-50"
    >Going</button>
    <button
      :class="{'bg-indigo-100 hover:bg-gray-300 text-gray-800 border-gray-300': attendance && attendance.answer === 2}"
      @click="storeAttendanceAnswer(2)"
      class="outline-none focus:outline-none bg-gray-100 border border-gray-300 py-1 px-2 text-sm font-semibold hover:bg-gray-50"
    >Maybe</button>
    <button
      :class="{'bg-indigo-100 hover:bg-gray-300 text-gray-800 border-gray-300': attendance && attendance.answer === 3}"
      @click="storeAttendanceAnswer(3)"
      class="outline-none focus:outline-none bg-gray-100 border border-gray-300 py-1 px-2 rounded-r-sm text-sm font-semibold hover:bg-gray-50"
    >Nope</button>
    <div v-if="loading.attendanceStore">
      <SpinLoader class="text-indigo-700 ml-2" :show="true"></SpinLoader>
    </div>
  </div>
  <div v-else>
    <Loader></Loader>
  </div>
</template>

<script>
import api from "@/api";
import { ref } from "@vue/reactivity";
import SpinLoader from "@/components/SpinLoader";
import Loader from "@/components/Loader";

export default {
  name: "AttendanceButtons",
  props: ["eventId"],
  components: { SpinLoader, Loader },
  setup(props) {
    const loading = ref({
      attendance: false,
      attendanceStore: false
    });
    const attendance = ref(null);

    const fetchAttendance = async () => {
      const t = setTimeout(() => (loading.value.attendance = true), 1000);

      try {
        attendance.value = (
          await api.get(`/events-attendance/${props.eventId}`)
        ).data;
      } catch (e) {
        attendance.value = null;
      } finally {
        clearTimeout(t);
        loading.value.attendance = false;
      }
    };
    const storeAttendanceAnswer = async answer => {
      loading.value.attendanceStore = true;

      try {
        attendance.value = (
          await api.put(`/events-attendance/${props.eventId}`, {
            name: "XXX",
            answer
          })
        ).data;
      } catch (e) {
        attendance.value = null;
      } finally {
        loading.value.attendanceStore = false;
      }
    };

    return { loading, attendance, fetchAttendance, storeAttendanceAnswer };
  },
  async created() {
    await this.fetchAttendance();
  }
};
</script>
