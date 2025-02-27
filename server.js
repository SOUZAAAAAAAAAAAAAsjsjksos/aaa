require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const axios = require("axios");

const app = express();
const PORT = 3000;

const dbConfig = {
    host: 'sp-01.magnohost.com.br',
    user: 'u1828_Ks6Bi75rzt',
    password: 'm!g^rNe!IaCGDMNJu.k2OCLx',
    port: '3306',
    database: 's1828_bot',
};

let lastBanId = 0;

async function checkForNewBans() {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
        "SELECT * FROM leafpunish_punishments WHERE type = 'Ban' AND active = true ORDER BY id DESC LIMIT 1"
    );

    if (rows.length > 0 && rows[0].id > lastBanId) {
        lastBanId = rows[0].id;
        notifyDiscord(rows[0]);
    }

    connection.end();
}

async function notifyDiscord(ban) {
    const webhookURL = 'https://discord.com/api/webhooks/1333470999039049890/D-FTCvjuBirFe47q16MwhDz0d-KgXRogmIfNNYXgcvfb6P1ycBkLF-agM0yqbVh0Klar';
    const embed = {
        embeds: [{
            title: "🚨 Jogador Banido!",
            color: 15158332,
            fields: [
                { name: "Jogador", value: `\`${ban.player}\``, inline: true },
                { name: "Motivo", value: ban.reason, inline: true },
                { name: "Banido por", value: ban.author, inline: true },
                { name: "Servidor", value: ban.server || "Não especificado", inline: true },
                { name: "Prova", value: ban.proof || "Nenhuma", inline: false },
                { name: "Duração", value: ban.expires ? `Expira em ${ban.expires}` : "Permanente", inline: true }
            ],
            timestamp: new Date()
        }]
    };

    await axios.post(webhookURL, embed);
}

// Checa novos bans a cada 10 segundos
setInterval(checkForNewBans, 10000);

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});