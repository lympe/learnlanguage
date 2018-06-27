import {
  LETTER_NUMBER,
  LOOSE_HEART,
  WON_HEART,
  GOOD_ANSWER,
  NEXT_WORD,
  WORD_NUMBER,
  ADD_LETTER,
  PLAY,
  REMOVE_LETTER,
  NOT_LAST_CHANCE,
  CHANGE_ANSWER
} from '../actions/types';
const EMPTY_ARRAY = [];
const INITIAL_STATE = {
  heart: 3,
  list: [{ fr: 'Bonjour', eng: 'Good morning' }, { fr: 'Salut', eng: 'Hi' }],
  propositions: [
    { letter: 'o' },
    { letter: 'j' },
    { letter: 'o' },
    { letter: 'B' },
    { letter: 'n' },
    { letter: 'r' },
    { letter: 'u' },
    { letter: 'a' },
    { letter: 'n' }
  ],
  lastChance: true,
  removedLetter: null,
  letters: [],
  wordNumber: 0,
  letterNumber: 1,
  prop: [],
  wordsKnown: 0,
  answer: 'réponse',
  goodAnswer: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        list: action.payload.list,
        prop: [],
        letters: [],
        letterNumber: 1,
        wordNumber: 0,
        wordsKnown: 0,
        propositions: action.payload.propositions
      };
    case REMOVE_LETTER:
      return {
        ...state,
        letters: action.payload.letters,
        letterNumber: action.payload.letterNumber,
        removedLetter: action.payload.removedLetter,
        reshowProp: action.payload.reshowProp
      };
    case NOT_LAST_CHANCE:
      return { ...state, lastChance: false };
    case CHANGE_ANSWER:
      return { ...state, answer: action.payload };
    case GOOD_ANSWER:
      return { ...state, goodAnswer: action.payload };
    case LOOSE_HEART:
      return {
        ...state,
        heart: action.payload,
        letters: [],
        letterNumber: 1,
        prop: []
      };
    case ADD_LETTER:
      return {
        ...state,
        list: action.payload.list,
        letters: action.payload.letters,
        letterNumber: action.payload.letterNumber,
        prop: action.payload.prop
      };
    case NEXT_WORD:
      return {
        ...state,
        letters: [null],
        prop: [],
        lastChance: true,
        letterNumber: 1,
        heart: 3,
        wordNumber: action.payload.wordNumber,
        list: action.payload.list,
        propositions: action.payload.propositions
      };
    default:
      return state;
  }
};
