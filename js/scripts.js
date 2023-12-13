function checkPalindromo() {
      const inputElement = document.getElementById('inputWord');
      const resultElement = document.getElementById('result');
  
      // Ottieni la parola inserita dall'utente
      const inputWord = inputElement.value.toLowerCase(); // Converti la parola in minuscolo
  
      // Verifica se la parola è un palindromo
      if (isPalindromo(inputWord)) {
          resultElement.textContent = 'La parola è un palindromo!';
      } else {
          resultElement.textContent = 'La parola non è un palindromo.';
      }
  }
  
  // Funzione per verificare se una parola è un palindromo
  function isPalindromo(word) {
      // Rimuovi spazi e caratteri speciali dalla parola
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
  
      // Confronta la parola con la sua versione inversa
      const reversedWord = cleanedWord.split('').reverse().join('');
      return cleanedWord === reversedWord;
  }