<template>
    <nav>
        <AchievementIcon fill="green" />
        <ul>
            <li v-for="navItem in navItems" :key="navItem.text">
                <img :src="navItem.icon" alt="">
                <p>{{ navItem.text }}</p>
            </li>
        </ul>
    </nav>

</template>

<script lang="ts" setup>
import AchievementIcon from '../icons/AchievementIcon.vue';

type navItemsd = {
    icon:string,
    text:string,
    href:string,
    active:boolean
}

const navItems: navItemsd[] = [
    {
        icon:"/daily-icon.svg",
        text:"Дейлики",
        href:"",
        active: true
    },
    {
        icon:"/shop-icon.svg",
        text:"Магазин",
        href:"",
        active: false
    },
    {
        icon:"/leaderboard-icon.svg",
        text:"Лидерборд",
        href:"",
        active: false
    },
    {
        icon:"/achievement-icon.svg",
        text:"Достижения",
        href:"",
        active: false
    }
]

</script>

<style>

nav{
    background: black;
}
</style>