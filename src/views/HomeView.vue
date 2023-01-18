<template>
  <div class="home-container">
    <h1>Saksa k U1 sõnad</h1>
    <div class="learn-links">
      <div class="link">
        <router-link to="/words" @click="SetTerms(U1_1, 'terms 1-20')"></router-link>
        <button>terms 1-20</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U1_2, 'terms 21-40')"></router-link>
        <button>terms 21-40</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U1_3, 'terms 41-62')"></router-link>
        <button>terms 41-62</button>
      </div>
    </div>
    <h1>Saksa k U2 sõnad</h1>
    <div class="learn-links">
      <div class="link">
        <router-link to="/words" @click="SetTerms(U2_1, 'terms 1-20')"></router-link>
        <button>terms 1-20</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U2_2, 'terms 21-40')"></router-link>
        <button>terms 21-40</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U2_3, 'terms 41-67')"></router-link>
        <button>terms 41-67</button>
      </div>
    </div>
    <h1>Saksa k U3 sõnad</h1>
    <div class="learn-links">
      <div class="link">
        <router-link to="/words" @click="SetTerms(U3_1, 'terms 1-20')"></router-link>
        <button>terms 1-20</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U3_2, 'terms 21-40')"></router-link>
        <button>terms 21-40</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U3_3, 'terms 41-62')"></router-link>
        <button>terms 41-62</button>
      </div>
    </div>
    <h1>Saksa k U4 sõnad</h1>
    <div class="learn-links">
      <div class="link">
        <router-link to="/words" @click="SetTerms(U4_1, 'terms 1-20')"></router-link>
        <button>terms 1-20</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U4_2, 'terms 21-40')"></router-link>
        <button>terms 21-40</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U4_3, 'terms 41-60')"></router-link>
        <button>terms 41-60</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U4_4, 'terms 61-80')"></router-link>
        <button>terms 61-80</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U4_5, 'terms 81-100')"></router-link>
        <button>terms 81-100</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U4_6, 'terms 101-114')"></router-link>
        <button>terms 101-114</button>
      </div>
    </div>
    <h1>Saksa k U5 sõnad</h1>
    <div class="learn-links">
      <div class="link">
        <router-link to="/words" @click="SetTerms(U5_1, 'terms 1-20')"></router-link>
        <button>terms 1-20</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U5_2, 'terms 21-40')"></router-link>
        <button>terms 21-40</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U5_3, 'terms 41-60')"></router-link>
        <button>terms 41-60</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U5_4, 'terms 61-80')"></router-link>
        <button>terms 61-80</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U5_5, 'terms 81-100')"></router-link>
        <button>terms 81-100</button>
      </div>
      <div class="link">
        <router-link to="/words" @click="SetTerms(U5_6, 'terms 101-126')"></router-link>
        <button>terms 101-126</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useWords from '../stores/WordsStore';
import { U1_1, U1_2, U1_3 } from '../models/U1';
import { U2_1, U2_2, U2_3 } from '../models/U2';
import { U3_1, U3_2, U3_3 } from '../models/U3';
import { U4_1, U4_2, U4_3, U4_4, U4_5, U4_6 } from '../models/U4';
import { U5_1, U5_2, U5_3, U5_4, U5_5, U5_6 } from '../models/U5';
const { SetTerms } = useWords();
</script>

<style scoped>
.home-container{
  margin-bottom: 50px;
  padding: 0 10px;
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
</style>