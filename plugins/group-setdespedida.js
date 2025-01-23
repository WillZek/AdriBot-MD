/* Código Hecho Por WillZek para CrowBot
- Tienen Que Definir El welcomeMessage también en el _welcome.js o no funcionará 
- también tienen que agregar ${despMessage} en el mensaje de bienvenida, eso sí, las comillas son `
- Espero Les Funcione uwu 
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) {
    return m.reply('🍭 Debes proporcionar el mensaje de despedida después del comando. Ejemplo: `.setdespedida ¡Se fue😹!`');
  }

  const despMessage = text.trim();

  try {
    global.db.data.chats[m.chat].despMessage = despMessage;

    m.reply(`🍭 El mensaje de despedida del grupo ha sido actualizado correctamente a: ${despMessage}`);
  } catch (error) {
    console.error(error);
    m.reply('🍭 Hubo un error al intentar cambiar el mensaje de bienvenida.');
  }
};

handler.help = ['setdespedida *<mensaje>*'];
handler.tags = ['group'];
handler.command = ['setdespedida', 'setdesp'];
handler.admin = true;
handler.group = true;

export default handler;