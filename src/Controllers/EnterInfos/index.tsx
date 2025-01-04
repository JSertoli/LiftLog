class EnterInfosController {
  public static async generateTraining(
    weight: string,
    height: string,
    trainingsByWeak: string,
    trainingGoal: string
  ) {
    const prompt = `Crie um cronograma de treino de academia para uma pessoa que pesa ${weight} kg, com ${height} cm de altura, que pretende treinar ${trainingsByWeak} vezes por semana com o objetivo de ${trainingGoal}. Retorne somente o treino de cada dia, nada além disso!`;
    var apiResponse = "";

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        apiResponse = data.choices[0].message.content;
      })
      .catch((error) => {
        console.error("Error making request:", error.message, error.stack);
        return "Erro ao gerar resposta!";
      });
    return apiResponse;
  }
}

export default EnterInfosController;
