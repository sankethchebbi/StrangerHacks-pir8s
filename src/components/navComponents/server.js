// const express = require("express");

// const cors = require("cors");

// const bodyParser = require("body-parser");

// const { Configuration, OpenAIApi } = require("openai");

// const config = new Configuration({
//   apiKey: "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",
// });

// const openai = new OpenAIApi(config);

// // Setup server

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // endpoint for ChatGPT

// app.post("/chat", async (req, res) => {
//   const { prompt } = req.body;

//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     max_tokens: 512,
//     temperature: 0,
//     prompt: prompt,
//   });
//   res.send(completion.data.choices[0].text);
// });

// const PORT = 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const data = require("./data.json");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  // Access data from data.json
  const categories = data.categories;
  const expenses = data.expenses;

  // Perform calculations using data
  const chartData = categories.map((category) => ({
    name: category.name,
    amount: expenses
      .filter((expense) => expense.category === category.id)
      .reduce((total, expense) => total + expense.amount, 0),
  }));

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
