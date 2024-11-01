export const QUOTES = [
  {
    text: 'To be, or not to be, that is the question.',
    author: 'William Shakespeare',
  },
  {
    text: 'I think, therefore I am.',
    author: 'René Descartes',
  },
  {
    text: 'The only thing we have to fear is fear itself.',
    author: 'Franklin D. Roosevelt',
  },
  {
    text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King Jr.',
  },
  {
    text: "That's one small step for man, one giant leap for mankind.",
    author: 'Neil Armstrong',
  },
  {
    text: 'The unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    text: 'You must be the change you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    text: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston S. Churchill',
  },
  {
    text: 'Imagination is more important than knowledge.',
    author: 'Albert Einstein',
  },
  {
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'We cannot solve our problems with the same thinking we used when we created them.',
    author: 'Albert Einstein',
  },
];

export const createQuote = () =>
  QUOTES[Math.floor(Math.random() * QUOTES.length)];
