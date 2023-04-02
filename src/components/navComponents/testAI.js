const openai = require('openai');
const fs = require('fs');

openai.apiKey = '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';

// Read the JSON data from the file
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

// Convert the JSON data to a string representation
const dataStr = JSON.stringify(data, null, 2);

// Compose the conversation input, including the JSON data
const conversationInput = `Here is the JSON data:\n${dataStr}\n\nNow, I have a question about the data: What is the value of key1?`;

openai.Completion.create({
  engine: 'text-davinci-002',
  prompt: conversationInput,
  max_tokens: 50,
  n: 1,
  stop: null,
  temperature: 0.5,
})
  .then((response) => {
    console.log(response.choices[0].text.trim());
  })
  .catch((error) => {
    console.error(error);
  });