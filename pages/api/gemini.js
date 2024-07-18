import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai'

export default async function handler(req, res) {
  const { message } = req.body;

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  const safetySettings = [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
        ];
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",safetySettings})
  const chat = model.startChat()

  const result = await chat.sendMessage(message)
  const response = await result.response
  const text = response.text()

  res.send(text)
}