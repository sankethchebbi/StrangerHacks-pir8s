const express = require('express');
const openai = require('openai');
const cors = require('cors');

openai.apiKey = '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';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/ask', async (req, res) => {
  const question = req.body.question;
  const data = req.body.data;

  const dataStr = JSON.stringify(data, null, 2);
  const conversationInput = `Here is the JSON data:\n${dataStr}\n\nNow, I have a question about the data: ${question}`;

  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: conversationInput,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    res.json({ answer: response.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get answer from OpenAI API' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));