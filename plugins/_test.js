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
let txt = `*Titulo:*

let name = arch.name;
let url = arch.link;
let tipo = arch.mime;

await conn.sendMessage(m.chat, url, name, null, m, null, { mimetype: tipo, asDocument: true })
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['medtest'];

export default handler;