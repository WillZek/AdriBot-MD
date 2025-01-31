/* Mediafire By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, args, usedPrefix, command }) => {

if (!text) return m.reply('⬇️ Ingresa Un Texto Para Buscar En Happy Mod\n> Ejemplo: ${usedPrefix + command} Minecraft');

try {
let api = `https://dark-core-api.vercel.app/api/download/mediafire?key=api&url=${text}`;
let response = await fetch(api);
let json = await response.json();
let arch = json.result;

m.react('🕑');
let txt = `*Titulo:* ${arch.name}\n*Estrellas:* ${arch.stars}\n*Link:* ${arch.link}

let img = arch.image;

conn.sendMessage(m.chat, { image: { url: img, caption: txt }, { quoted: fkontak });
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['medtest'];

export default handler;