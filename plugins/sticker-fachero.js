let handler = async(m, { conn, usedPrefix, command }) => {
    const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
    m.react('😎');

    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);
    
    const groupMetadata = await conn.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    let mentions = participants.map(p => p.id).join(' ');
    
    await conn.sendMessage(m.chat, { text: `Mod Fachero 😎`, mentions: participants.map(p => p.id) });
};

handler.customPrefix = /^(fachero)/

export default handler;