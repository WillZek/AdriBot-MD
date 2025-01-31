/* Mediafire By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('⬇️ Ingresa Un Link De Mediafire\nEjemplo:');

try {
let api = `https://dark-core-api.vercel.app/api/download/mediafire?key=api&url=${args[0]}`;
let response = await fetch(api);
let json = await response.json();
let arch = json.result;

if (!args[0].match(/mediafire/gi)) return m.reply(m.chat, '✖️ Verifica El Link Para Poder Descargar Tu Archivo ', m, rcanal)

m.react('🕑');
m.reply('✨ Espere Un Momento Estamos Enviando Su Pedido\n> El Tiempo Puede Variar Depende el peso del archivo');

let name = arch.name;
let url = arch.link;
let tipo = arch.mime;

await conn.sendFile(m.chat, url, name, { caption: '🎩 Aqui Tienes!' }, null, m, null, { mimetype: tipo, asDocument: true })
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['medtest'];

export default handler;