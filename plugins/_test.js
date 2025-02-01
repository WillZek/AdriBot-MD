/* Wallpaper By WillZek 
- Free Codes Titan 
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('🎩 Ingrese Una Url De Tiktok\n*Ejemplo:* ${usedPrefix + command} https://vm.tiktok.com/ZMh3KL31o/');

try {
let api = `https://eliasar-yt-api.vercel.app/api/search/tiktok?query=${args[0]}`;
let response = await fetch(api);
let json = await response.json();
let res = json.results[0];

m.react('🕑');
let ttt = `> Vídeo Descargado Con Exito`;
let aud = res.audio;

await conn.sendMessage(m.chat, { audio: { url: aud }, caption: ttt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.command = ['test'];

export default handler;