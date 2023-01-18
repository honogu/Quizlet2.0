<template>
  <h1>Saksa k U1 sõnad</h1>
  <div class="learn-links">
    <router-link to="/learn" @click="StartLearn(U1_1)"><button>Learn 1-20</button></router-link>
    <router-link to="/learn" @click="StartLearn(U1_2)"><button>Learn 21-40</button></router-link>
    <router-link to="/learn" @click="StartLearn(U1_3)"><button>Learn 41-62</button></router-link>
  </div>
  <h1>Saksa k U2 sõnad</h1>
  <div class="learn-links">
    <router-link to="/learn" @click="StartLearn(U2_1)"><button>Learn 1-20</button></router-link>
    <router-link to="/learn" @click="StartLearn(U2_2)"><button>Learn 21-40</button></router-link>
    <router-link to="/learn" @click="StartLearn(U2_3)"><button>Learn 41-67</button></router-link>
  </div>
  <h1>Saksa k U3 sõnad</h1>
  <div class="learn-links">
    <router-link to="/learn" @click="StartLearn(U3_1)"><button>Learn 1-20</button></router-link>
    <router-link to="/learn" @click="StartLearn(U3_2)"><button>Learn 21-40</button></router-link>
    <router-link to="/learn" @click="StartLearn(U3_3)"><button>Learn 41-62</button></router-link>
  </div>
  <h1>Saksa k U4 sõnad</h1>
  <div class="learn-links">
    <router-link to="/learn" @click="StartLearn(U4_1)"><button>Learn 1-20</button></router-link>
    <router-link to="/learn" @click="StartLearn(U4_2)"><button>Learn 21-40</button></router-link>
    <router-link to="/learn" @click="StartLearn(U4_3)"><button>Learn 41-60</button></router-link>
    <router-link to="/learn" @click="StartLearn(U4_4)"><button>Learn 61-80</button></router-link>
    <router-link to="/learn" @click="StartLearn(U4_5)"><button>Learn 81-97</button></router-link>
    <router-link to="/learn" @click="StartLearn(U4_6)"><button>Learn 98-114</button></router-link>
  </div>
  <h1>Saksa k U5 sõnad</h1>
  <div class="learn-links">
    <router-link to="/learn" @click="StartLearn(U5_1)"><button>Learn 1-20</button></router-link>
    <router-link to="/learn" @click="StartLearn(U5_2)"><button>Learn 21-40</button></router-link>
    <router-link to="/learn" @click="StartLearn(U5_3)"><button>Learn 41-60</button></router-link>
    <router-link to="/learn" @click="StartLearn(U5_4)"><button>Learn 61-80</button></router-link>
    <router-link to="/learn" @click="StartLearn(U5_5)"><button>Learn 81-100</button></router-link>
    <router-link to="/learn" @click="StartLearn(U5_6)"><button>Learn 101-126</button></router-link>
  </div>
</template>

<script setup lang="ts">
import useLearn from '../stores/LearnStore';
import { U1_1, U1_2, U1_3 } from '../models/U1';
import { U2_1, U2_2, U2_3 } from '../models/U2';
import { U3_1, U3_2, U3_3 } from '../models/U3';
import { U4_1, U4_2, U4_3, U4_4, U4_5, U4_6 } from '../models/U4';
import { U5_1, U5_2, U5_3, U5_4, U5_5, U5_6 } from '../models/U5';
const { StartLearn } = useLearn();
</script>

<style scoped>
a {
  margin: 20px 0;
  margin-right: 5px;
  background-color: #2f3857;
  border-bottom: 5px solid #2f3857;
  border-top: 5px solid #2f3857;
  border-radius: 5px;
  min-width: 200px;
  padding: 8px 12px;
}
a:hover{
  border-bottom: 5px solid #748dcd;
}
button {
  margin: 15px 0;
  background-color: #2f3857;
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
}
.learn-links {
  height: auto;
}
</style>