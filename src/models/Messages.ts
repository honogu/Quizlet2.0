import { ref } from 'vue';

export const correctMessages = ref<string[]>([
    'Hea töö!',
    'Tore, said aru!',
    'Vinge!',
    'Suurepärane!',
    'See on sul käes!',
    'Sa oled väga tubli!',
    'Jätka samas vaimus!'
]);

export const wrongMessages = ref<string[]>([
    'Ära muretse, sa alles õpid!',
    'Mitte päris, sa alles õpid!',
    'Ära muretse, õppimine on protsess!',
    'Vaikselt tuleb!',
    'Iz okay!',
    'Pole hullu!'
]);
