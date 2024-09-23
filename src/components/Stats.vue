<template>
    <div>
        <div class="stat-bars">
            <StatsBar progress="50" color="#FF5F61" :icon="HeartIcon" />
            <StatsBar progress="60" color="#FEBD5F" :icon="StarFourIcon" />
        </div>
        <div class="coins">
            <CoinIcon fill="#FEBD5F" />
            <span>10</span>
        </div>
    </div>

</template>

<script lang="ts" setup>
import StatsBar from './StatsBar.vue';
import HeartIcon from './icons/HeartIcon.vue';
import StarFourIcon from './icons/StarFourIcon.vue';
import CoinIcon from './icons/CoinIcon.vue';

</script>

<style scoped>
span{
    color: #4e4d53;
}
</style>