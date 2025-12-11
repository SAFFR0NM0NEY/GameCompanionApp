function generateQuest() {
    const quests = [
        "Retrieve the lost artifact in the Crystal Caverns.",
        "Defeat the rogue AI in the abandoned data core.",
        "Escort the merchant caravan through the haunted forest.",
        "Solve the mystery of the disappearing villagers in the mountain town.",
        "Collect rare herbs from the enchanted meadow for the alchemist."
    ];

    const randomQuest = quests[Math.floor(Math.random() * quests.length)];
    document.getElementById("quest-output").innerText = randomQuest;
}

async function generateAIQuest() {
    const output = document.getElementById("ai-output");
    output.innerText = "Generating quest...";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();

        // Create AI-style text
        const aiQuest = `AI Quest: "${data.content}" — A clue from ${data.author}.`;

        // DISPLAY IT HERE
        output.innerText = aiQuest;

    } catch (error) {
        output.innerText = "Error loading AI quest.";
        console.error(error);
    }
}

function safeText(input) {
    return input.replace(/[<>]/g, "");
}