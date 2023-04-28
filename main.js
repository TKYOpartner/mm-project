const quotes = [
    "If your dreams do not scare you, they are too small.",
    "Every accomplishment starts with the decision to try.",
    "Those who say it cannot be done should not interrupt those doing it.",
    "Never put off until tomorrow what you can do the day after tomorrow.",
    "We are what we repeatedly do. Excellence then, is not an act, but a habit."
];

const authors = [
    "Richard Branson",
    "John F Kennedy",
    "Chinese proverb",
    "Mark Twain",
    "Aristotle"
];

function generateMessage() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    return `"${quote}" - ${author}`;
}


console.log(generateMessage());
