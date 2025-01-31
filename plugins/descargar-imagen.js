/* Imagen Search By WillZek 
- Free Codes Titan  
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply('🎩 Ingresa Un Texto Para Buscar Una Imagen');

try {
let api = `https://delirius-apiofc.vercel.app/search/gimage?query=${text}`;
let response = await fetch(api);
let json = await response.json();
let data = json.data[0];

let txt = `*Resultado De:* ${text}`;
let img = data.url;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (e) {
console.error(e);
m.reply(`*Error:* ${e.message}`);
m.react('✖️');
 }
};

handler.command = ['imagen', 'image'];

export default handler;