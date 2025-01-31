/* Twitterdl by WillZek 
- Free Codes Titan 
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingrese Un Texto Para Buscar Una Imagen En Google');

try {
let api = `https://api.dorratz.com/v3/ai-image?prompt=${text}`;
let response = await fetch(api);
let json = await response.json();
let arch = json.result[0];

/* if (!args[0].match(/x/gi)) return m.reply(m.chat, '✖️ Verifica El Link Para Poder Descargar Tu Archivo ', m, rcanal) */

m.react('🕑');
let txt = `> *Resultado De: ${text}*`;
let link = arch.image_link;

await conn.sendMessage(m.chat, { image: { url: link }, caption: txt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['test', 'gimaget'];

export default handler;