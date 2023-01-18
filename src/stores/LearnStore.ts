import { ref } from 'vue';
import { Learn } from '../models/Learn';

const currentWords = ref<Learn[]>([]);

const remainingWords = ref<Learn[]>([]);
const allAnswers = ref<string[]>([]);
const randomAnswers = ref<string[]>([]);

const percentage = ref(0);
const correctCount = ref(0);
const totalCount = ref(0);

const correctWords = ref<Learn[]>([]);
const wrongWords = ref<Learn[]>([]);
const lastPercentage = ref(0);

const repeatingWord = ref(false);
const qurrentWord = ref<Learn>();

export default function useLearn() {

    const StartLearn = (allWords: Learn[]) => {
        currentWords.value = allWords;
        remainingWords.value = allWords.map(w => w)
        allAnswers.value = allWords.map(w => w.answer)
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
        randomAnswers.value = [];

        let randomIndex = Math.floor(Math.random() * remainingWords.value.length);
        qurrentWord.value = remainingWords.value[randomIndex];

        if (wrongWords.value.indexOf(qurrentWord.value!) != -1) repeatingWord.value = true

        while (randomAnswers.value.length != 3) {
            randomIndex = Math.floor(Math.random() * allAnswers.value.length);
            const randomAnswer = allAnswers.value[randomIndex];
            if (randomAnswers.value.indexOf(randomAnswer) == -1 && randomAnswer != qurrentWord.value.answer) randomAnswers.value.push(randomAnswer);
        }
        randomAnswers.value.push(qurrentWord.value.answer);

        randomAnswers.value = shuffle(randomAnswers.value);
    }

    const SubmitResult = async (status: boolean) => {
        if (status)
        {
            if (wrongWords.value.indexOf(qurrentWord.value!) == -1) correctWords.value.push(qurrentWord.value!)
            removeQuestion(qurrentWord.value ?? { question: '', answer: '' });
            await delay(1000);
            NextQuestion();
        }
        else 
        {
            wrongWords.value.push(qurrentWord.value!)
        }
    }

    return { StartLearn, currentWords, qurrentWord, randomAnswers, SubmitResult, NextQuestion, percentage, correctCount, totalCount, lastPercentage, repeatingWord };
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
