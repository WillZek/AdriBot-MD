let handler = async(m, { conn, usedPrefix, command, participants }) => {
    try {
        if (!participants || participants.length === 0) return m.reply('🎩 ¡No hay participantes para mencionar!');

        let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
        const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
        m.react('😎');
        await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', { mentions: users }, m, null);
    } catch (error) {
        console.error(error);
        m.reply(`Ocurrió un error: ${error.message}`);
    }
};

handler.command = ['fachero'];

export default handler;