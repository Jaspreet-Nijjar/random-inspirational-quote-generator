const quotes = [
  {
    quote: 'Today is your opportunity to build the tomorrow you want.',
    author: 'Ken Poirot',
  },
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    author: 'Carol Burnett',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote:
      "You define your own life. Don't let other people write your script.",
    author: 'Oprah Winfrey',
  },
  {
    quote: 'Someone once told me to never dream. I said NEVER SAY NEVER',
    author: 'Justin Bieber',
  },
];

const quote = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const container = document.querySelector('.container');
const button = document.querySelector('.btn');

function randomImage() {
  let randomId = Math.floor(Math.random() * 10000);
  container.style.background =
    "url('https://source.unsplash.com/random/?Landscape&" +
    randomId +
    "') center/cover no-repeat";
}

randomImage();

//Get a random quote and author
function random() {
  let random = Math.floor(Math.random() * quotes.length);

  for (let i = 0; i < quotes.length; i++) {
    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
  }
}

random();

button.addEventListener('click', () => {
  randomImage();
  random();
});
