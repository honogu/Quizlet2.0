import { correctMessages, wrongMessages } from '../models/Messages';
import useWords from '../stores/WordsStore';
import { Learn } from '../models/Learn';
import { ref } from 'vue';
const { words } = useWords();

const remainingWords = ref<Learn[]>([]);
const allAnswers = ref<string[]>([]);
const randomAnswers = ref<string[]>([]);

const percentage = ref(0);
const correctCount = ref(0);
const totalCount = ref(0);

const correctWords = ref<Learn[]>([]);
const wrongWords = ref<Learn[]>([]);
const lastPercentage = ref(0);

const correctMessage = ref('');
const wrongMessage = ref('');

const repeatingWord = ref(false);
const currentWord = ref<Learn>();

export default function useWrite() {
    const StartWrite = () => {
        remainingWords.value = words.value.map(w => w)
        allAnswers.value = words.value.map(w => w.answer)
        correctWords.value = [];
        wrongWords.value = [];
        totalCount.value = allAnswers.value.length;
        NextQuestion();
    }

    const NextQuestion = () => {
        repeatingWord.value = false
        correctCount.value = correctWords.value.length;
        lastPercentage.value = Math.round(correctCount.value / allAnswers.value.length * 100);
        percentage.value = Math.round((allAnswers.value.length - remainingWords.value.length) / allAnswers.value.length * 100);

        let randomIndex = Math.floor(Math.random() * remainingWords.value.length);
        currentWord.value = remainingWords.value[randomIndex];

        randomIndex = Math.floor(Math.random() * correctMessages.value.length);
        correctMessage.value = correctMessages.value[randomIndex];
        randomIndex = Math.floor(Math.random() * wrongMessages.value.length);
        wrongMessage.value = wrongMessages.value[randomIndex];

        if (wrongWords.value.indexOf(currentWord.value!) != -1) repeatingWord.value = true
    }

    const SubmitResult = async (status: boolean) => {
        if (status)
        {
            if (wrongWords.value.indexOf(currentWord.value!) == -1) correctWords.value.push(currentWord.value!)
            removeQuestion(currentWord.value ?? { question: '', answer: '' });
            await delay(1000);
            NextQuestion();
        }
        else 
        {
            wrongWords.value.push(currentWord.value!)
        }
    }

    return { StartWrite, words, currentWord, SubmitResult, NextQuestion, percentage, correctCount, totalCount, lastPercentage, repeatingWord, correctMessage, wrongMessage };
}

function shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function removeQuestion(key: Learn) {
    const index: number = remainingWords.value.indexOf(key, 0);
    if (index > -1) {
        remainingWords.value.splice(index, 1);
    }
}
