import { Learn } from '../models/Learn';
import { ref } from 'vue';

const terms = ref('');
const words = ref<Learn[]>([]);

export default function useWords() {
    const SetTerms = (allWords: Learn[], termsValue: string) => {
        words.value = allWords;
        terms.value = termsValue;
    }

    return { SetTerms, terms, words };
}