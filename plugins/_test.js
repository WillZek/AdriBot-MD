/* Tiktok Search By WillZek 
- Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
- https://github.com/WillZek 
*/

// 【🔎】𝗧𝗜𝗞𝗧𝗢𝗞 𝗦𝗘𝗔𝗥𝗖𝗛

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

m.react('🕑');

let txt = 'Pack🔥🔥🔥\n> Pon De Nuevo .pack para mirar el siguiente ✨';

let img = 'https://delirius-apiofc.vercel.app/nsfw/girls';

m.react('✅');
conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
};

handler.command = ['pack'];

export default handler;