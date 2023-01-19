<template>
    <Navbar :address="'/'" :title="'Quizlet 2.0'" />
    <div class="words-container">
        <h1>{{ terms }}</h1>
        <div class="learn-links">
            <div class="link">
                <router-link to="/learn" @click="StartLearn()"></router-link>
                <img alt="learn" :src="require('@/assets/Learn.svg')" /><button>Learn</button>
            </div> 
            <div class="link">
                <router-link to="/write" @click="StartWrite()"></router-link>
                <img alt="write" :src="require('@/assets/Write.svg')" /><button>Write</button>
            </div> 
        </div>
        <h2>Terms in this set ({{ words.length }})</h2>
        <div class="all-words">
            <div class="words" v-for="word in words" :key="word.question">
                <div id="f">
                    <h2>{{ word.question }}</h2>
                </div>
                <div id="s">
                    <h2>{{ word.answer }}</h2>
                </div>
            </div>
        </div>
    </div>
  </template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComp.vue";
import useWords from '../stores/WordsStore';
import useLearn from '../stores/LearnStore';
import useWrite from '../stores/WriteStore';
import router from "@/router";
import { onMounted } from 'vue';
const { StartLearn } = useLearn();
const { StartWrite } = useWrite();
const { terms, words } = useWords();

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
h2 {
    font-weight: 200;
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
        padding-left: 0;
    }
}
</style>