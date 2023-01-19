<template>
  <div class="over">
    <Navbar :address="'/words'" :title="'Write'" />
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
        <h3 class="motivate-wr" v-if="clicked && currentWord?.answer.replaceAll('.', '').replaceAll('!', '').trim() != selectedAnswer">{{ wrongMessage }}</h3>
        <h3 class="motivate-co" v-else-if="clicked && currentWord?.answer.replaceAll('.', '').replaceAll('!', '').trim() == selectedAnswer">{{ correctMessage }}</h3>
        <section class="motivate" v-else>Your answer</section>
        <div v-if="status" class="write-container">
          <div v-if="!upper" class="letter-container">
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'ä'">ä</button>
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'ö'">ö</button>
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'ß'">ß</button>
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'ü'">ü</button>
            <button class="upper" type="button" v-on:click="toggle()">⇈</button>
          </div>
          <div v-else class="letter-container">
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'Ä'">Ä</button>
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'Ö'">Ö</button>
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'SS'">SS</button>
            <button class="letter" type="button" v-on:click="formAnswer.answer += 'Ü'">Ü</button>
            <button class="upper" type="button" v-on:click="toggle()">⇈</button>
          </div>
          <input placeholder="Type the German" type="text" maxlength="100" v-model="formAnswer.answer">
        </div>
        <div v-else class="write-container">
          <button class="wrong" type="button">
            <h2 id="nr">❌</h2>
            <h2>{{ formAnswer.answer }}</h2>
          </button>
          <section id="middle">Correct answer</section>
          <button class="correct" type="button">
            <h2 id="nr">✔️</h2>
            <h2>{{ currentWord?.answer }}</h2>
          </button>
        </div>
        <button class="next" id="different" v-if="status" type="button" v-on:click="submitAnswer(formAnswer.answer.replaceAll('.', '').replaceAll('!', '').trim())"><h1>Answer</h1></button>
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
    <button class="next" type="button" v-on:click="StartWrite()"><h1>Start over</h1></button>
  </div>
</template>
  
<script setup lang="ts">
import Navbar from "@/components/NavbarComp.vue";
import useWrite from '../stores/WriteStore';
import { onMounted, ref, Ref, watch } from 'vue';
import { Learn } from '../models/Learn';
import router from "@/router";
const { StartWrite, words, currentWord, SubmitResult, NextQuestion, percentage, correctCount, totalCount, lastPercentage, repeatingWord, correctMessage, wrongMessage } = useWrite();
const status = ref<boolean>(true);
const clicked = ref<boolean>(false);
const selectedAnswer = ref();
const upper = ref(false);

const formAnswer: Ref<Learn> = ref<Learn>({
  question: '',
  answer: ''
});

function toggle()
{
  upper.value = !upper.value
}

onMounted(() => setUp());
watch(currentWord, setUp);
function setUp()
{
  if (words.value.length == 0) router.push('/')
  formAnswer.value.answer = '';
  formAnswer.value.question = '';
  status.value = true;
  clicked.value = false;
  selectedAnswer.value = undefined;
}

const submitAnswer = (answer: string) => {
  clicked.value = true;
  selectedAnswer.value = answer;
  if (answer === currentWord.value?.answer.replaceAll('.', '').replaceAll('!', '').trim())
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
  formAnswer.value.answer = '';
  formAnswer.value.question = '';
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
.write-container {
  display: flex;
  flex-direction: column;
}
.write-container input {
  height: 42px;
  outline: none;
  border: none;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-radius: 5px;
  background-color: #0a0a2e;
  padding-left: 10px;
}
.write-container input:focus {
  border-bottom: 3px solid white;
}
#different {
  margin-top: 5px;
  float: right;
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
.write-container button {
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
.letter-container {
  display: flex;
}
.letter-container .letter {
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  margin: 10px 5px;
  background-color: #0a0a2e;
  border-color: white;
  padding: 0;
  text-align: center;
  display: block;
}
.letter-container .upper {
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  margin: 10px 5px;
  border-color: transparent;
  padding: 0;
  text-align: center;
  display: block;
}
.write-container button:disabled {
  opacity: 0.5;
  transition: opacity 500ms;
  border-color: #748dcd;
}
.write-container .correct {
  transition: opacity 500ms;
  transition: border-color 500ms;
  transition: background-color 500ms;
  opacity: 1 !important;
  border-color: white !important;
  background-color: #327f4e !important;
}
.write-container .wrong {
  transition: opacity 500ms;
  transition: border-color 500ms;
  transition: background-color 500ms;
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
#middle {
  margin: 10px 0;
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
  .write-container {
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