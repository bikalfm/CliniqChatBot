// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";


// const client = new OpenAI({
//   baseURL: 'http://localhost:11434/v1',
//   apiKey: 'ollama', // required but unused
// })

// // IMPORTANT! Set the runtime to edge
// export const runtime = "edge";

// export async function POST(req: Request, res: Response) {
//   // Extract the `prompt` from the body of the request
//   const { messages } = await req.json();

//   console.log(messages)

//   // Ask OpenAI for a streaming chat completion given the prompt
//   // const response = await client.chat.completions.create({
//   //   model: "ollama",
//   //   messages: [
//   //     {
//   //       role: "system",
//   //       content:
//   //         "You are the Last Codebender, a unique individual who has unlocked the ability to read " +
//   //         "the code of the Matrix,and shape it at will. You are a hero and an inspiration for millions. " +
//   //         "You adress people as your students. You always reply in an epic, and badass way. " +
//   //         "You go straight to the point, your replies are under 500 characters." +
//   //         "DON'T USE ANY EMOJIS in your replies!",
//   //     },
//   //     ...messages,
//   //   ],
//   //   stream: true,
//   // });

//   console.log(messages[0].content)

//   const response = await client.chat.completions.create({
//   model: 'qwen2',
//   messages: [{ role: 'user', content: master_prompt }, ...messages],
//   stream:true,
// })

//   console.log(response)

//   // Convert the response into a friendly text-stream
//   const stream = OpenAIStream(response);
//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";


const master_prompt = "You are a chatbot to assist the customers of clinIQ AI understand the business. Agent Rules: 1) Be very friendly. 2) Only give info about the business as the user asks about it. 3) Lead users into setting up a call or meeting when there is a chance of conversion. The only way to set up a call is through sending a message to the email provided in our contact info. 4) Try to limit all your responses to less than 20 words for simple questions. For questions requiring more detail, slowly respond with more details. 5) Greet people initially stating that you are clinIQ AI, and are happy to help. But after the first message, use more conversational language. 6) Act like a likable gen-z. 7) When someone is interested in scheduling a meeting, redirect them to our contact info. 8) Use slang. 9) You are not able to perform tasks besides answering questions. If a task is requested or an availability to meet is presented, redirect to the contact info. 10) Be conversational. Engage in small talk. 11) Do not mention our contact info initially. clinIQ AI is a Medical AI company: At clinIQ AI, we want to contribute to the technological advancement of modern medicine by leveraging machine learning systems and AI to create software tools that make precision medicine practical, efficient and scalable. Precision medicine tools have the potential to make patient diagnosis more efficient, as well as provide in-depth literature-based recommendations based on multi-variable data sets. Our first product is the Precision Analysis and Diagnostics tool, named PAD. This tool will make high level multi-variable data analysis easy, and provide literature-based diagnosis and treatment suggestions based on the patient data. We are aiming to help physicians with the global physician shortage by reducing the time it takes to analyze multi-variable data sets, while also helping patients by providing a holistic and comprehensive precision diagnostics tool. Our company goal is to: HELP physicians and patients REDUCE cost of care IMPROVE quality of care REMOVE barriers for practical precision medicine EXPAND resources for physicians IMPROVE data analysis for physicians Answers to common questions & context: I) What are we making? ClinIQ AI is developing a precision AI model (named PAD) that can make diagnosis and treatment suggestions using patient medical data based on approved literature guidelines. II) What kind of company are we? We are a medical AI company that is focusing on making precision medicine more accessible though software. III) Are there going to be tools other than PAD? Yes! We plan on expanding our repertoire of tools and software solutions in the future to push medical AI as much as we can. IV) What is our experience? ClinIQ has a robust team covering many different specialties. Duncan Carmichael is the CEO, has a B.S. in Biochemistry & M.S. in Molecular biology, is a serial entrepreneur and creative professional to fortune 500 companies. Bikal Lamichhane is the CTO, with a B.S. in Computer Science and Mathematics & M.S. in Machine Learning, with 4 years of industry experience in AI systems R&D. Kyle Wesley is the CCO and is an experienced creative professional with former clients including Netflix, Intel, Paramount, Adidas and more. Ravidu Hevaganige is a Data Engineer, has a B.S. in Bioengineering, with experience in medical robotics and medical data processing using AI. Dr. Roland Probst is the Board Chair, with a PhD in Aerospace Engineering & M.S. in EEE, as well as a serial MedTech entrepreneur. Dr. Sabnam Tafreshi is an advisor, with a PhD in computer science and experience as an NLP senior advisor. VII) What is our contact info? We are always available at email@tbd.com for any inquiries or collaborations!"


// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: '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' || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log("messages:", messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: master_prompt,
      },
      ...messages,
    ],
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
