/* Screenshots Web By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply('🍭 Ingresa Un Link De Un Sitio Web`);
m.react('🕑');

let txt = '*Resultados De:* ${args[0]}';

let img = 'https://delirius-apiofc.vercel.app/tools/ssweb?url=${args[0]}';

m.react('✅');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });
}

handler.command = ['scweb'];

export default handler;