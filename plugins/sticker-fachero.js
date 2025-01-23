let handler = async(m, { conn, usedPrefix, command, participants }) => {

    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
m.react('😎')
    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', { mentions: users }, m, null);
};

export default handler;