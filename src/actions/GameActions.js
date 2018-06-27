import {
  LETTER_NUMBER,
  LOOSE_HEART,
  WON_HEART,
  ADD_LETTER,
  NEXT_WORD,
  PLAY,
  REMOVE_LETTER,
  NOT_LAST_CHANCE,
  CHANGE_ANSWER,
  GOOD_ANSWER
} from './types';

const ALPHABET = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const LIST = [
  { fr: 'bonjour', eng: 'good morning' },
  { fr: 'salut', eng: 'hi' }
];
const PROPOSITIONS = [
  { letter: 'a' },
  { letter: 'b' },
  { letter: 'o' },
  { letter: 'B' },
  { letter: 'b' },
  { letter: 'r' },
  { letter: 'x' },
  { letter: 'y' },
  { letter: 'z' }
];

export const removeLetter = (letters, letterNumber, prop) => {
  if (letters[letterNumber]) {
    prop[letters[letterNumber].prop] = null;
    reshowProp = letters[letterNumber].prop;
  }
  letters[letterNumber] = null;
  removedLetter = letterNumber;

  for (i = letters.length; i > 0; i--) {
    if (!letters[i]) {
      letterNumber = i;
    }
  }
  return {
    type: REMOVE_LETTER,
    payload: {
      letters,
      letterNumber,
      removedLetter,
      reshowProp
    }
  };
};

export const nextWord = (wordNumber, list, lang) => {
  wordNumber++;
  var word, propositions, nb, arrayA, alea;
  word = list[wordNumber][lang];
  propositions = word.split('');
  nb = Math.round(propositions.length * 0.4);
  for (i = 0; i < nb; i++) {
    alea = Math.random();
    propositions.push(ALPHABET[Math.round(alea * (ALPHABET.length - 1))]);
  }
  propositions = shuffle(propositions);
  return {
    type: NEXT_WORD,
    payload: {
      wordNumber,
      list,
      propositions
    }
  };
};
export const looseHeart = heart => {
  heart--;
  return {
    type: LOOSE_HEART,
    payload: heart
  };
};
export const changeAnswer = answer => {
  return {
    type: CHANGE_ANSWER,
    payload: answer
  };
};
export const changeGoodAnswer = goodAnswer => {
  goodAnswer++;
  return {
    type: GOOD_ANSWER,
    payload: goodAnswer
  };
};
export const notLastChance = () => {
  return {
    type: NOT_LAST_CHANCE
  };
};
export const addLetter = (
  letterNumber,
  letter,
  letters,
  wordNumber,
  list,
  ind,
  prop
) => {
  var i;
  letters[letterNumber] = { prop: ind, letter };
  prop[ind] = true;
  for (i = letters.length; i > 0; i--) {
    if (!letters[i]) {
      letterNumber = i;
    }
  }
  return {
    type: ADD_LETTER,
    payload: {
      list,
      letters,
      letterNumber,
      prop
    }
  };
};

export const play = lang => {
  var word, propositions, nb, arrayA, alea, i;
  var word = LIST[0][lang];
  propositions = word.split('');
  nb = Math.round(propositions.length * 0.4);
  for (i = 0; i < nb; i++) {
    alea = Math.random();
    propositions.push(ALPHABET[Math.round(alea * (ALPHABET.length - 1))]);
  }
  propositions = shuffle(propositions);

  return {
    type: PLAY,
    payload: {
      list: LIST,
      propositions
    }
  };
};
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
