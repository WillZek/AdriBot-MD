let handler = async(m, { conn, usedPrefix, command }) => {
    const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
   
    const groupMetadata = await conn.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    let mentions = participants.map(p => p.id).join(' ');

    m.react('😎');
    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', { mentions: participants.map(p => p.id), m, null);

handler.command = ['fachero'];

export default handler;