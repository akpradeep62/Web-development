let quotes;

// Fetch quotes from the JSON file
fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    quotes = data;
    getRandomQuote();
  })
  .catch(error => console.error('Error fetching quotes:', error));

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Display the quote and author in the HTML
  document.getElementById('quote').textContent = randomQuote.quote;
  document.getElementById('author').textContent = `— ${randomQuote.author}`;
}
