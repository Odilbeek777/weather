<template>
    <div class="main__content">
        <div class="main__content-left">
            <div class="main__content-left-img">
                <img :src=getImg alt="">
            </div>
            <p class="main__content-left-degree">{{ Math.round(weather.current.temp) }}°</p>
            <p class="main__content-left-today">Сегодня</p>
            <p class="main__content-left-time">Время: {{ getTime }}</p>
            <p class="main__content-left-city">Город: {{ weather.name.toUpperCase() }}</p>
        </div>
        <div class="main__content-right">
            <img src="@assets/images/headerBg.svg" class="main__content-right-bg" alt="">
            <div class="main__content-right-item">
                <div class="main__content-right-img">
                    <img src="@assets/images/temp.svg" alt="">
                </div> <span>Температура</span>
                <p>{{ Math.round(weather.current.temp) }}° - ощущается как {{ Math.round(weather.current.feels_like) }}°</p>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-img">
                    <img src="@assets/images/davlenie.svg" alt="">
                </div> <span>Давление </span>
                <p>{{ weather.current.pressure }} мм ртутного столба - нормальное</p>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-img">
                    <img src="@assets/images/osadki.svg" alt="">
                </div><span>Осадки</span>
                <p>{{ weather.current.clouds }} %</p>
            </div>
            <div class="main__content-right-item">
                <div class="main__content-right-img">
                    <img src="@assets/images/wind.svg" alt="">
                </div> <span>Ветер</span>
                <p>{{ weather.current.wind_speed }} м/с юго-запад - легкий ветер</p>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { weatherName } from '@/icons'
export default {
    computed: {
        ...mapState(['weather']),
        getTime() {
            return new Date().toLocaleString('en-Us', {
                timeZone: this.weather.timeZone,
                timeStyle: 'short',
                hourCycle: 'h23'
            })
        },
        description() {
            return this.weather.current.weather[0].description
        },
        getImg() {
            return weatherName[this.description] || weatherName['ясно']
        }
    }
}
</script>

<style lang="scss" scoped></style>