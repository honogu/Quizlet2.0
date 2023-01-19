<template>
  <div class="over">
    <Navbar :address="'/words'" :title="'Learn'" />
    <div class="bar-container">
      <div class="bar" :style="{ width: percentage + '%'}"></div>
    </div>
  </div>
  <div class="form-container" v-if="percentage != 100">
    <form>
      <div>
        <div class="def">
          <section>Definition</section>
          <section :style="!repeatingWord ? {display: 'none'} : ''" id="repeat">Let's try again</section>
        </div>
        <h3>{{ currentWord?.question }}</h3>
      </div>
      <div>
        <h3 class="motivate-wr" v-if="clicked && currentWord?.answer != selectedAnswer">{{ wrongMessage }}</h3>
        <h3 class="motivate-co" v-else-if="clicked && currentWord?.answer == selectedAnswer">{{ correctMessage }}</h3>
        <h2 class="motivate" v-else>Choose matching term</h2>
        <div class="button-container">
          <button
            :class="clicked && (currentWord?.answer == randomAnswers[0] || selectedAnswer == randomAnswers[0])
              ? currentWord?.answer == randomAnswers[0] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[0])" :disabled="clicked" type="button">
            <h2 id="nr">{{ clicked && (currentWord?.answer == randomAnswers[0] || selectedAnswer == randomAnswers[0])
              ? currentWord?.answer == randomAnswers[0] ? '✔️' : '❌' : '1' }}</h2>
            <h2>{{ randomAnswers[0] }}</h2>
          </button>

          <button
            :class="clicked && (currentWord?.answer == randomAnswers[1] || selectedAnswer == randomAnswers[1])
              ? currentWord?.answer == randomAnswers[1] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[1])" :disabled="clicked" type="button">
            <h2 id="nr">{{ clicked && (currentWord?.answer == randomAnswers[1] || selectedAnswer == randomAnswers[1])
              ? currentWord?.answer == randomAnswers[1] ? '✔️' : '❌' : '2' }}</h2>
            <h2>{{ randomAnswers[1] }}</h2>
          </button>

          <button
            :class="clicked && (currentWord?.answer == randomAnswers[2] || selectedAnswer == randomAnswers[2])
              ? currentWord?.answer == randomAnswers[2] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[2])" :disabled="clicked" type="button">
            <h2 id="nr">{{ clicked && (currentWord?.answer == randomAnswers[2] || selectedAnswer == randomAnswers[2])
              ? currentWord?.answer == randomAnswers[2] ? '✔️' : '❌' : '3' }}</h2>
            <h2>{{ randomAnswers[2] }}</h2>
          </button>

          <button
            :class="clicked && (currentWord?.answer == randomAnswers[3] || selectedAnswer == randomAnswers[3])
              ? currentWord?.answer == randomAnswers[3] ? 'correct' : 'wrong' : ''" 
            v-on:click="submitAnswer(randomAnswers[3])" :disabled="clicked" type="button">
            <h2 id="nr">{{ clicked && (currentWord?.answer == randomAnswers[3] || selectedAnswer == randomAnswers[3])
              ? currentWord?.answer == randomAnswers[3] ? '✔️' : '❌' : '4' }}</h2>
            <h2>{{ randomAnswers[3] }}</h2>
          </button>
        </div>
      </div>
    </form>
    <button class="next" type="button" v-if="!status" v-on:click="Next()"><h1>Continue</h1></button>
  </div>
  <div class="form-container-end" v-else>
    <h1 id="title">Nice work, you’re crushing it.</h1>
    <h2>{{ correctCount + ' / ' + totalCount + ' terms'}}</h2>
    <div class="answer-bar-container">
      <div class="answer-bar" :style="{ width: lastPercentage + '%'}"></div>
    </div>
    <button class="next" type="button" v-on:click="StartLearn()"><h1>Start over</h1></button>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComp.vue";
import useLearn from '../stores/LearnStore';
import { onMounted, ref, watch } from 'vue';
import router from "@/router";
const { StartLearn, words, currentWord, randomAnswers, SubmitResult, NextQuestion, percentage, correctCount, totalCount, lastPercentage, repeatingWord, correctMessage, wrongMessage } = useLearn();
const status = ref<boolean>(true);
const clicked = ref<boolean>(false);
const selectedAnswer = ref();

onMounted(() => setUp());
watch(currentWord, setUp);
function setUp()
{
  if (words.value.length == 0) router.push('/')
  status.value = true;
  clicked.value = false;
  selectedAnswer.value = undefined;
}

const submitAnswer = (answer: string) => {
  clicked.value = true;
  selectedAnswer.value = answer;
  if (answer === currentWord.value?.answer)
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
  padding: 30px;
  min-height: 350px;
  border-radius: 5px;
  background-color: #2f3857;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-container {
  margin-top: 100px;
}
.form-container-end {
  padding: 0 15px;
}
.button-container {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 2%;
  row-gap: 20px;
}
.button-container button {
  background-color: transparent;
  border: 2px solid #748dcd94;
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
  display: flex;
  align-items: center;
  min-height: 60px;
}
button h2 {
  margin: 0;
}
button #nr {
  margin-right: 16px;
  width: 25px;
  min-width: 25px;
  border-radius: 15px;
  text-align: center;
  background-color: #313546;
}
.next {
  margin-top: 50px;
  width: 120px;
  background-color: #445aff;
  border: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px;
}
.next h1 {
  margin: 0;
  text-align: center;
  font-size: 15px;
}
#title {
  margin-top: 85px;
}
.next:hover {
  background-color: #5a6dfa;
}
.button-container button:disabled {
  opacity: 0.5;
  transition: opacity 500ms;
  border-color: #748dcd;
}
.button-container .correct {
  transition: opacity 500ms;
  transition: border-color 500ms;
  transition: background-color 500ms;
  opacity: 1 !important;
  border-color: white !important;
  background-color: #327f4e !important;
}
.button-container .wrong {
  transition: opacity 500ms;
  transition: border-color 500ms;
  transition: background-color 500ms;
  opacity: 1 !important;
  border-color: #ee706a !important;
}
.motivate {
  font-weight: 200;
}
.motivate-wr {
  color: #ee706a;
}
.motivate-co {
  color: #20b858;
}

.bar-container {
  margin-top: 60px;
  height: 3px;
  width: 100%;
}
.bar {
  background-color: #748dcd;
  height: 3px;
  width: 0%;
  transition: width 500ms;
}

.def {
  display: flex;
}
#repeat {
  margin-left: 17px;
  opacity: 0.7;
  background-color: #803900;
  font-weight: 100;
  color: white;
  border-radius: 10px;
  padding: 0 8px;
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
  .form-container {
    margin-top: 63px;
  }
  form {
    padding: 15px;
    border-radius: 0;
  }
  .button-container {
    grid-template-columns: auto;
  }
  .next {
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
  .answer-bar-container {
    margin-bottom: 20px;
  }
}
</style>