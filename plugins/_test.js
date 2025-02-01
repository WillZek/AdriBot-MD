/* Stickerlydl By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingresa Un Link De Stickerly`);
m.react('🕑');

let api = `https://delirius-apiofc.vercel.app/download/stickerly?url=${text}`;
let resp = await fetch(api);
let json = await resp.json();
let data = json.data;

let buffer = Buffer.from(data.stickers, 'base64');
let stiker = await sticker(buffer, false, global.packname, global.author);

m.react('✅');
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.command = ['test'];

export default handler;