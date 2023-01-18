<template>
    <Navbar :address="'/'" :learn="false" />
    <div class="words-container">
        <h1>Saksa k U1 sõnad | {{ terms }}</h1>
        <div class="learn-links">
            <div class="link">
                <router-link to="/learn" @click="StartLearn()"></router-link>
                <img alt="learn" :src="require('@/assets/Learn.svg')" /><button>Learn</button>
            </div> 
        </div>
        <h2>Terms in this set ({{ currentWords.length }})</h2>
        <div class="all-words">
            <div class="words" v-for="words in currentWords" :key="words.question">
                <div id="f">
                    <h3>{{ words.question }}</h3>
                </div>
                <div id="s">
                    <h3>{{ words.answer }}</h3>
                </div>
            </div>
        </div>
    </div>
  </template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComp.vue";
import useWords from '../stores/WordsStore';
import useLearn from '../stores/LearnStore';
import router from "@/router";
import { onMounted } from 'vue';
const { StartLearn, currentWords } = useLearn();
const { terms } = useWords();

onMounted(() => setUp());
function setUp()
{
  if (terms.value.length == 0) router.push('/')
}
</script>

<style scoped>
.words-container {
    margin-top: 100px;
}
a {
    min-width: 200px;
    height: 45px;
}
button {
    margin: 15px 0;
    border: none;
    text-align: left;
    min-width: 160px;
    color: white;
    font-size: 1rem;
    letter-spacing: normal;
    line-height: 1.5;
    cursor: pointer;
    text-decoration: none;
    font-weight: 550;
    background-color: transparent;
}
.learn-links {
    display: flex;
    flex-wrap: wrap;
}
.learn-links .link {
    position: relative;
    height: 45px;
    min-width: 200px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
    border-radius: 5px;
    background-color: #2f3857;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-right: 15px;
}
.link:hover{
    border-bottom: 5px solid #748dcd;
}
.learn-links .link a {
    position: absolute;
}
.learn-links img {
    top: 4px;
    height: 34px;
    padding-left: 10px;
}
.all-words {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}
.all-words .words {
    display: flex;
    height: auto;
    min-height: 50px;
    align-items: center;
    color: white;
    background-color: #2f3857;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
}
.all-words .words div {
    padding-left: 15px;
    width: 50%;
}
.all-words .words #f {
    border-right: 2px solid black;
}
.all-words .words #s {
    padding-left: 15px;
}

@media only screen and (max-width: 800px) {
    .words-container {
        margin-left: 15px;
        margin-right: 15px;
    }
    .all-words .words div {
        padding-left: 5px;
    }
}
</style>