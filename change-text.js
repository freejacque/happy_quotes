var count = 0;
var originalText = 'Press the button for a positive quote.';
var quotes = [
  {
    quote: '\"Happiness is the only thing that multiplies when you share it.\"',
    author: '- Albert Schweitzer'
  },
  {
    quote: '\"Keep your face to the sunshine and you cannot see a shadow.\"',
    author: '- Helen Keller'
  },
  {
    quote: '\"The happiness of your life depends upon the quality of your thoughts.\"',
    author: '- Marcus Aurelius'
  }
];

var changeText = function() {
  let pTag = document.getElementById('quote');
  let author = document.getElementById('author');
  let currentText = pTag.textContent;
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  if (currentText === originalText || count == 0 ) {
    pTag.textContent = randomQuote['quote'];
    author.textContent = randomQuote['author'];
    pTag.classList.add('blue-text');
    count++;
  } else {
    pTag.textContent = originalText;
    author.textContent = '';
    pTag.classList.remove('blue-text');
  };
};

document.querySelector('button').addEventListener('click', changeText);


module.exports = changeText;