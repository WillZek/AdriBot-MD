/* HTML WEB By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Link De Alguna Web');
m.react('🕑');

let api = `https://delirius-apiofc.vercel.app/tools/htmlextract?url=${args[0]}`;
let resp = await fetch(api);
let json = await resp.json();
let data = json.html;

let xd = 'https://files.catbox.moe/v8q8y2.jpg';
let html = `*HTML EXTRAIDO DE LA WEB: ${data}*`

conn.sendMessage(m.chat, { image: { url: xd }, caption: html }, { quoted: fkontak });
};

handler.command = ['test', 'hweb'];

export default handler;