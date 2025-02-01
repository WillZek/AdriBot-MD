/* Stickerlydl By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingresa Un Texto Para Buscar Su Sticker');
m.react('🕑');

let api = `https://api.diioffc.web.id/api/search/stickersearch?query=${text}`;
let resp = await fetch(api);
let json = await resp.json();
let data = json.result;

let stiker = false
let img = data.sticker;


let stickerUrl = img; 
m.react('😎');
stiker = await sticker(stickerUrl, false, global.packsticker, global.authsticker)

/*
await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);
*/

if (stiker) conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '🎩𝐂𝐫𝐨𝐰𝐁𝐨𝐭 - 𝐒𝐭𝐢𝐜𝐤𝐞𝐫✨', body: `CrowBot - ST ${emojis}`, mediaType: 2, sourceUrl: grupo, thumbnail: icons}}}, { quoted: m })
};

handler.command = ['test'];

export default handler;