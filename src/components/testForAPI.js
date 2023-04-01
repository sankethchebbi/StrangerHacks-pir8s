import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: 'kt'
});

const openai = new OpenAIApi(config);
const runPrompt = async () => {
    const prompt = "Tell me a joke in 5 10 words";

    const response = await openai.completions({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
        temperature: 1,
    });
    console.log(response.data);

}

runPrompt();
