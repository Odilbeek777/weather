<template>
    <div class="main__week">
        <MainDay v-for="(day, i) in weather.daily" :key="i" :day="day" />
    </div>
</template>

<script>
import MainDay from './MainDay.vue';
import { mapState } from 'vuex'
export default {
    components: {
        MainDay
    },
    computed: {
        ...mapState(['weather'])
    }
}
</script>

<style lang="scss" scoped></style>