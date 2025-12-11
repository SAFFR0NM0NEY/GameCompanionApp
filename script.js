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
    document.getElementById("ai-output").innerText = "Generating quest...";

    // Using a public API as a stand-in for AI text
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();

    // simulating AI quest text
    const aiQuest = `AI Quest: ${data.value}`;
}

function safeText(input) {
    return input.replace(/[<>]/g, ""); // removes dangerous symbols
}