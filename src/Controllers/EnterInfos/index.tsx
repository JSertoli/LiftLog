import { API_KEY } from "@env";

class EnterInfosController {
  public static async generateTraining(
    weight: string,
    height: string,
    trainingsByWeak: string,
    trainingGoal: string
  ) {
    const prompt = `Crie um cronograma de treino de academia para um pessoa que pesa ${weight} kg, com ${height} de altura, que pretende treinar ${trainingsByWeak} vezes por semana com o objetivo de ${trainingGoal}`;

    console.log(API_KEY);
    
   await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: [{"type": "text", "text": prompt}]
            }
        ], 
        temperature: 0.20,
      })
    }).then(response => response.json()).then((data) => {console.log(data);
    });
  }
}

export default EnterInfosController;