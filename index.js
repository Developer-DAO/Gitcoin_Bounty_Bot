require("dotenv").config();
const axios = require("axios");
const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("interactionCreate", async (interaction) => {
    console.log("Interaction logged: ", interaction);
    const response = await axios.get("https://aws.random.cat/meow");
});

client.once("ready", () => {
    console.log("Ready!");
});

// Login to Discord with your client's token
client.login(process.env.LOGIN_TOKEN);
