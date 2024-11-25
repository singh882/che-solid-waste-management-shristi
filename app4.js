// app.js

const quotes = [
    { text: "“The Earth is what we all have in common. Protect it through responsible waste management.”", author: "– Wendell Berry" },
    { text: "“We do not inherit the earth from our ancestors, we borrow it from our children.”", author: "– Native American Proverb" },
    { text: "“Waste not, want not.”", author: "– Benjamin Franklin" },
    { text: "“It is not about saving the planet. It's about saving ourselves.”", author: "– Paul Hawken" },
    { text: "“The greatest threat to our planet is the belief that someone else will save it.”", author: "– Robert Swan" }
];

const quoteTextElement = document.getElementById('quote-text');
const authorElement = document.querySelector('.author');
const changeQuoteButton = document.getElementById('change-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

changeQuoteButton.addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    quoteTextElement.textContent = randomQuote.text;
    authorElement.textContent = randomQuote.author;
});