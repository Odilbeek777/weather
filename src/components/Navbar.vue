<template>
    <nav class="nav">
        <a href="#" class="logo">
            <img src="@assets/images/logo.svg" alt="">
            <span class="logo__span">vue weather</span>
        </a>
        <div class="nav__search">
            <img src="@assets/images/kaplya.svg" alt="">
            <input type="text" class="nav__search-input" placeholder="Выбрать город" v-model="city"
                @keydown.enter="getWeather(city), city =''">
        </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            city: '',
        }
    },
    methods: {
        ...mapActions(['getWeather'])
    }
}
</script>
