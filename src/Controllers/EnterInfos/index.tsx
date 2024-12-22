import OpenAI from "openai";

class EnterInfosController {
  public static async generateTraining(
    weight: string,
    height: string,
    trainingsByWeak: string,
    trainingGoal: string
  ) {
    const prompt = `Crie um cronograma de treino de academia para uma pessoa que pesa ${weight} kg, com ${height} cm de altura, que pretende treinar ${trainingsByWeak} vezes por semana com o objetivo de ${trainingGoal}`;

    console.log(process.env.EXPO_PUBLIC_API_KEY);
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        prompt: prompt,
        temperature: 0.7
      })
    }).then(response => response.json()).then((data) => {
      console.log(data);
    }).catch(error => {
      console.error('Error making request:', error.message, error.stack);
    });
  }

  // public static async generateTraining(
  //   weight: string,
  //   height: string,
  //   trainingsByWeak: string,
  //   trainingGoal: string
  // ) {
  //   const prompt = `Crie um cronograma de treino de academia para uma pessoa que pesa ${weight} kg, com ${height} de altura, que pretende treinar ${trainingsByWeak} vezes por semana com o objetivo de ${trainingGoal}`;

  //   const openai = new OpenAI({
  //     apiKey: `${API_KEY}`,
  //   });

  //   await openai.chat.completions
  //     .create({
  //       model: "gpt-4o-mini",
  //       messages: [
  //         {
  //           role: "user",
  //           content: prompt,
  //         },
  //       ],
  //       temperature: 0.7
  //     })
  //     .then((value) => console.log(value))
  //     .catch((err) => {
  //       console.log(`Erro: ${err}`);
  //     });
  // }
}

export default EnterInfosController;
