import useLearn from '../stores/LearnStore';
import { Learn } from '../models/Learn';
import { ref } from 'vue';

const { SetWords } = useLearn();

const terms = ref('');

export default function useWords() {
    const SetTerms = (allWords: Learn[], termsValue: string) => {
        SetWords(allWords)
        terms.value = termsValue;
    }

    return { SetTerms, terms };
}