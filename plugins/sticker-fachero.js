let handler = async(m, { conn, usedPrefix, command }) => {
    try {
        const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 

        const groupMetadata = await conn.groupMetadata(m.chat);
        const participants = groupMetadata.participants;
        let mentions = participants.map(p => p.id).join(' ');

        m.react('😎');
        await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', { mentions: participants.map(p => p.id) }, m, null);
    } catch (error) {
        console.error('Error en el handler:', error);
m.reply(`Error: ${error.message}`);
m.react('✖️');
    }
};

handler.command = ['fachero'];

export default handler;