import openai from 'openai';
var responseString 
export const chat  = (req,res)=>{
const config = new openai.Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
})


const openai2 = new openai.OpenAIApi(config);
   
const prompt = async(prompt)=>{
      
     const response = await openai2.createCompletion({
        model:"gpt-3.5-turbo",
        prompt:prompt+"talk to me as a doctor",
        max_tokens:1000,
        temperature:1.5
    })
    responseString = response.data.choices[0].text
    console.log(response.data.choices[0].text);
    
}


prompt(req.body.prompt)
}

export const chatgptData = (req,res)=>{
     res.json(responseString)
}