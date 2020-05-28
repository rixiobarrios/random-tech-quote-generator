// Data for quotes.
// This creates a variable called quotes. This variable is an array of objects. Each object includes a quote and the name of the person that quote is attributed to.

const quotes = [
    {
        quote:
            'That brain of mine is something more than merely mortal; as time will show.',
        name: 'Ada Lovelace, Founder of Scientific Computing'
    },
    {
        quote:
            'When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline.',
        name:
            'Margaret Hamilton, Mathematician and Pioneering Computer Scientist'
    },
    {
        quote:
            'We will always have STEM with us. Some things will drop out of the public eye and will go away, but there will always be science, engineering, and technology.And there will always, always be mathematics.',
        name: 'Katherine Johnson, NASA Mathematician'
    },
    {
        quote:
            'Innovation comes out of great human ingenuity and very personal passions.',
        name: 'Megan Smith, 3rd Chief Technology Officer of the United States'
    },
    {
        quote:
            'Sciences provide an understanding of a universal experience, Arts are a universal understanding of a personal experience...they are both a part of us and a manifestation of the same thing...the arts and sciences are avatars of human creativity',
        name: 'Mae Jemison'
    },
    {
        quote:
            'To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.',
        name: 'Grace Hopper'
    },
    {
        quote:
            'I was taught that the way of progress was neither swift nor easy.',
        name: 'Marie Curie'
    },
    {
        quote: 'Machines take me by surprise with great frequency.',
        name: 'Alan Turing, Mathematician and Computer Scientist'
    },
    {
        quote:
            'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        name: 'Benjamin Franklin, Founding Father and Inventor'
    },
    {
        quote:
            'The computer was born to solve problems that did not exist before.',
        name: 'Bill Gates, Microsoft Co-Founder'
    }
];

// Create a function to generate a random number.

function randomNumber() {
    // write code for random number here.
    return Math.floor(Math.random() * 10);
}

// Create a function that takes the random number and selects a quote from the quotes list above. This function should also build the HTML for the quote.
function generateRandomQuote() {
    // write code for function here.
    const randomQuote = quotes[randomNumber()];
    return `<p class="quote">${randomQuote.quote}<p><p class="name">${randomQuote.name}</p>`;
}

$('.generate-quote').on('click', function() {
    $('#quote').html(generateRandomQuote());
});
