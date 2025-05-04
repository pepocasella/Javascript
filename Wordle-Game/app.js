let keys = {
    'q': '', 'w': '', 'e': '', 'r': '', 't': '', 'y': '', 'u': '', 'i': '', 'o': '', 'p': '', 'break': '',
    'a': '', 's': '', 'd': '', 'f': '', 'g': '', 'h': '', 'j': '', 'k': '', 'l': '', 'break2': '',
    'enter': '', 'z': '', 'x': '', 'c': '', 'v': '', 'b': '', 'n': '', 'm': '', '⌫': ''
  };
  
  let guesses = [];
  let currentGuess = [];
  
  const NumberOfGuesses = 6;
  const Correct = 'correct';
  const Found = 'found';
  const Wrong = 'wrong';
  
  const fiveLettersList = [
    "amigo", "bravo", "claro", "dente", "exato",
    "forca", "gente", "honra", "idade", "jogar",
    "lento", "mundo", "nobre", "obvio", "prato",
    "quase", "risco", "sorte", "tempo", "unico",
    "vazio", "xampu", "zelar", "lugar", "leito",
    "noite", "pazem", "reino", "sinal", "verde",
    "colher"
  ];
  
  function getDay() {
    const hoje = new Date();
    return hoje.getDate();
  }

  function chooseWord() {
    let day = getDay()
    SecretWord = fiveLettersList[day];
    return SecretWord
  }

  var SecretWord = chooseWord();
  console.log(SecretWord)


  function initialize() {
    // monta a estrutura do GRID
    let guessGrid = document.getElementById("guessGrid");
    for (let i = 0; i < NumberOfGuesses; i++) {
      for (let j = 0; j < SecretWord.length; j++) {
        guessGrid.innerHTML += `<div id="${i}${j}" class="key-guess"></div>`
      }
      guessGrid.innerHTML += '<br/>'
    }
    
    // monta a estrutura do KEYBOARD
    let keyboard = document.getElementById("keyboard");
    Object.keys(keys).forEach((key) => {
      if (key.includes('break')) {
        keyboard.innerHTML += '<br/>';
      } else {
        keyboard.innerHTML += `<button id="${key}" class="key" onclick="keyClick('${key}')">` + key + '</button>';
      }
    });
  }
  initialize()


  function keyClick(key) {
    console.log(key)
    switch (key) {
      case '⌫':
        backspace();
        break;
      case 'enter':
        enter();
        break;
      default:
        if (currentGuess.length < SecretWord.length
          && guesses.length < NumberOfGuesses) {
          currentGuess.push({ key: key, result: '' });
          updateCurrentGuess();
        }
    }
  }


  function updateCurrentGuess(guessed = false) {
    let index = guesses.length;
    for (let i = 0; i < SecretWord.length; i++) {
      let guessGrid = document.getElementById(`${index}${i}`);
      if (currentGuess[i]) {
        guessGrid.innerHTML = currentGuess[i].key;
      } else {
        guessGrid.innerHTML = '';
      }
      if (guessed) {
        guessGrid.classList.add(currentGuess[i].result);
      }
    }
    if (guessed) {
      updateKeyboard();
    }
  }


  function backspace() {
    if (currentGuess.length > 0) {
      currentGuess.pop();
    }
    updateCurrentGuess();
  }
  
  function enter() {
    if (currentGuess.length < SecretWord.length || guesses.length >= NumberOfGuesses) {
      return;
    }
      
    currentGuess.forEach((keyGuess, index) => {
      if (SecretWord.charAt(index) == keyGuess.key) {
        keyGuess.result = Correct
      } else if (SecretWord.includes(keyGuess.key)) {
        keyGuess.result = Found
      } else {
        keyGuess.result = Wrong
      }
  
      if (keys[keyGuess.key] != Correct) {
        keys[keyGuess.key] = keyGuess.result
      }
    });
    updateCurrentGuess(true);
    guesses.push(currentGuess);
    currentGuess = [];
  }