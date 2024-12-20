class AthleteInfos {
    private height: string;
    private weight: string;
    private trainingsByWeak: string;
    private trainingsGoal: string;

    constructor(height: string, weight: string, trainingsByWeak: string, trainingsGoal: string) {
        this.height = height;
        this.weight = weight;
        this.trainingsByWeak = trainingsByWeak;
        this.trainingsGoal = trainingsGoal;
    }

    // Getter para altura
    getHeight() {
        return this.height;
    }

    // Setter para altura
    setHeight(height: string) {
        this.height = height;
    }

    // Getter para peso
    getWeight() {
        return this.weight;
    }

    // Setter para peso
    setWeight(weight: string) {
        this.weight = weight;
    }

    // Getter para treinos por semana
    getTrainingsByWeak() {
        return this.trainingsByWeak;
    }

    // Setter para treinos por semana
    setTrainingsByWeak(trainingsByWeak: string) {
        this.trainingsByWeak = trainingsByWeak;
    }

    // Getter para meta de treinos
    getTrainingsGoal() {
        return this.trainingsGoal;
    }

    // Setter para meta de treinos
    setTrainingsGoal(trainingsGoal: string) {
        this.trainingsGoal = trainingsGoal;
    }
}

export default AthleteInfos;