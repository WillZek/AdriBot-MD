let handler = async (m, { conn, text, participants }) => {
    let member = participants.map(u => u.id);
    if(!text) {
        var sum = member.length;
    } else {
        var sum = text;
    }
    var total = 0;
    var activos = [];

    for(let i = 0; i < sum; i++) {
        let users = m.isGroup ? participants.find(u => u.id == member[i]) : {};
        if (typeof global.db.data.users[member[i]] !== 'undefined') {
            // Verificamos que el usuario no sea admin y que tenga chat activo
            if (global.db.data.users[member[i]].chat > 0 && !users.isAdmin && !users.isSuperAdmin) {
                if (global.db.data.users[member[i]].whitelist == true) {
                    total++;
                    activos.push(member[i]);
                }
            }
        }
    }

    if(total == 0) return conn.reply(m.chat, `*[⚔️] En Este Grupo No Hay Miembros Activos✨🍷*`, m, rcanal);

    const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
    m.react('💫');
    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);

    m.reply(`[⚠ *MIEMBROS ACTIVOS* ⚠]\n\n𝙶𝚁𝚄𝙿𝙾: ${await conn.getName(m.chat)} & 𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂: \n${sum}\n\n[ ⇲ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂 ACTIVOS ⇱ ]\n${activos.map(v => '  ✔️ @' + v.replace(/@.+/, '')).join('\n')}\n\n𝙽𝙾𝚃𝙰: 𝙴𝚂𝚃𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝟷𝟶𝟶% 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝙴𝙻 𝙱𝙾𝚃 𝙸𝙽𝙸𝙲𝙸𝙰 𝙴𝙻 𝙲𝙾𝙽𝚃𝙴𝙾 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙳𝙴𝚂𝙳𝙴 𝙻𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙲𝙸Ó𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾`, null, { mentions: activos });
}

handler.help = ['activos'];
handler.tags = ['grupo'];
handler.command = /^(veractivos|activos)$/i;
handler.admin = true;
handler.botAdmin = true;
handler.register = true;

export default handler;