<template>
  <div class="over">
    <Navbar />
    <div class="bar-container">
      <div class="bar" :style="{ width: percentage + '%'}"></div>
    </div>
  </div>
  <div v-if="percentage != 100">
    <form>
      <div>
        <section>Definition</section>
        <h3>{{ qurrentWord?.question }}</h3>
      </div>
      <div>
        <h3 class="motivate-wr" v-if="clicked && qurrentWord?.answer != selectedAnswer">Sa suudad seda!</h3>
        <h3 class="motivate-co" v-else-if="clicked && qurrentWord?.answer == selectedAnswer">Hea töö!</h3>
        <h3 class="motivate" v-else>Choose matching term</h3>
        <div class="button-container">
          <button
            :class="clicked && (qurrentWord?.answer == randomAnswers[0] || selectedAnswer == randomAnswers[0])
              ? qurrentWord?.answer == randomAnswers[0] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[0])" :disabled="clicked" type="button">
            {{ randomAnswers[0] }}
          </button>
          <button 
            :class="clicked && (qurrentWord?.answer == randomAnswers[1] || selectedAnswer == randomAnswers[1])
              ? qurrentWord?.answer == randomAnswers[1] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[1])" :disabled="clicked" type="button">
            {{ randomAnswers[1] }}
          </button>
          <button 
            :class="clicked && (qurrentWord?.answer == randomAnswers[2] || selectedAnswer == randomAnswers[2])
              ? qurrentWord?.answer == randomAnswers[2] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[2])" :disabled="clicked" type="button">
            {{ randomAnswers[2] }}
          </button>
          <button 
            :class="clicked && (qurrentWord?.answer == randomAnswers[3] || selectedAnswer == randomAnswers[3])
              ? qurrentWord?.answer == randomAnswers[3] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[3])" :disabled="clicked" type="button">
            {{ randomAnswers[3] }}
          </button>
        </div>
      </div>
    </form>
    <button class="next" type="button" v-if="!status" v-on:click="Next()">Continue</button>
  </div>
  <div v-else>
    <h1>Nice work, you’re crushing it.</h1>
    <h1>{{ correctCount + ' / ' + totalCount + ' terms'}}</h1>
    <div class="answer-bar-container">
      <div class="answer-bar" :style="{ width: lastPercentage + '%'}"></div>
    </div>
    <button class="next" type="button" v-on:click="StartLearn(currentWords)">Start over</button>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComp.vue";
import useLearn from '../stores/LearnStore';
import { onMounted, ref, watch } from 'vue';
const { qurrentWord, randomAnswers, SubmitResult, StartLearn, currentWords, NextQuestion, percentage, correctCount, totalCount, lastPercentage } = useLearn();
const status = ref<boolean>(true);
const clicked = ref<boolean>(false);
const selectedAnswer = ref();

onMounted(() => setUp());
watch(qurrentWord, setUp);
function setUp()
{
  status.value = true;
  clicked.value = false;
  selectedAnswer.value = undefined;
}

const submitAnswer = (answer: string) => {
  clicked.value = true;
  selectedAnswer.value = answer;
  if (answer === qurrentWord.value?.answer)
  {
    status.value = true;
    SubmitResult(true);
  }
  else 
  {
    status.value = false;
    SubmitResult(false);
  }
};

const Next = () => {
  setUp();
  NextQuestion();
  status.value = true;
  clicked.value = false;
  selectedAnswer.value = undefined;
};

</script>

<style scoped>
form {
  margin-top: 100px;
  padding: 30px;
  min-height: 350px;
  border-radius: 5px;
  background-color: #2f3857;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.button-container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 2%;
}
button {
  background-color: transparent;
  border: 2px solid #748dcd;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  letter-spacing: normal;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
  font-weight: 550;
  padding: 16px;
  text-align: left;
}
.next {
  margin-top: 50px;
  width: 120px;
  text-align: center;
  background-color: #445aff;
  border: none;
}
.button-container button:hover {
  border-color: white;
}
.button-container button:disabled {
  opacity: 0.5;
}
.button-container .correct {
  opacity: 1 !important;
  border-color: white !important;
  background-color: #327f4e !important;
}
.button-container .wrong {
  opacity: 1 !important;
  border-color: #ee706a !important;
}
.motivate-wr {
  color: #ee706a;
}
.motivate-co {
  color: #20b858;
}

.bar-container {
  height: 3px;
  width: 100%;
}
.bar {
  background-color: #748dcd;
  height: 3px;
  width: 0%;
  transition: width 500ms;
}

.answer-bar-container {
  border-radius: 10px;
  height: 10px;
  background-color: white;
  width: 100%;
}
.answer-bar {
  border-radius: 10px;
  background-color: #45cf45;
  height: 10px;
  width: 0%;
  transition: width 500ms;
}

.over {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

@media only screen and (max-width: 800px) {
  .button-container {
    grid-template-columns: auto;
  }
}
</style>