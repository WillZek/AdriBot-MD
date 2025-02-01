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

let img = data.sticker[0];
let sUrl = img; 

m.react('✅');
await conn.sendFile(m.chat, sUrl, 'sticker.webp', '', m, null);
 }
};

handler.command = ['test'];

export default handler;