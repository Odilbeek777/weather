<template>
    <div class="main__week-item">
        <h2 class="main__week-item-title">{{ getWeekday }}</h2>
        <p class="main__week-item-date">{{ getDay }} {{ getMonth }}</p>
        <div class="main__week-item-img">
            <img :src="getImg" alt="">
        </div>
        <p class="main__week-item-temp">{{Math.round(day.temp.max)}}°</p>
        <p class="main__week-item-info">{{ description }}</p>
    </div>
</template>
  
<script>
import { unix } from '@/unix';
import { weatherName } from '@/icons';

export default {
    props: {
        day: Object
    },
    computed: {
        getWeekday() {
            return unix(this.day.dt, 'weekday')
        },
        getDay() {
            return unix(this.day.dt, 'day')
        },
        getMonth() {
            return unix(this.day.dt, 'month')
        },
        description() {
            return this.day.weather[0].description
        },
        getImg() {
            return weatherName[this.description] || weatherName['ясно']
        }

    }
}
</script>