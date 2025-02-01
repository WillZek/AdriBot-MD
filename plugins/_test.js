/* Stickerlydl By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Texto Para Buscar Su Sticker');
m.react('🕑');

let api = `https://delirius-apiofc.vercel.app/tools/htmlextract?url=${args[0]}`;
let resp = await fetch(api);
let json = await resp.json();
let data = json.result;

let html = `*HTML EXTRAIDO DE LA WEB:*`

conn.sendMessage(m.chat, { caption: html }, { quoted: fkontak });
};

handler.command = ['test'];

export default handler;