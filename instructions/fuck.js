module.exports = {
  name: 'fuck',
  async execute(message, args, config) {
    if (args.length < 1) {
      return message.channel.send(`\Usage: ${config.prefix}fuck <mentionuser>`);
    }

    const user = message.mentions.users.first();
    if (!user) {
      return message.channel.send(`\`\`\`❗ Please mention a user.\`\`\``);
    }

    try {
      await message.delete();

      const insults = [
        `${user} teri maa ka bosra`,
        `${user} teri maa ki chut saaly`,
        `${user} apki mummy ko tail laghaky chodu maderchod mazdoor`,
        `${user} tumhari maa ko habshi kaa lun maruu`,
        `${user} karo hamary server mazdoori chutiya kar mazdoori dihari daar mazdoor ak beta`,
        `${user} ullu ke pathe`,
        `${user} bhadwe ki aulad`,
        `${user} teri aukaat kya hai`,
        `${user} tere jaise to hum jeb mein leke ghoomte`,
        `${user} jaa ke pehle apni shakal dekha`,
        `${user} dharti pe bojh`,
        `${user} kisi ne puchha nahi aur tu aa gaya`,
        `${user} tere jaise to roz aate hain`,
        `${user} kaunse god ke joke hai tu`,
        `${user} toh kis khet ki mooli hai`,
        `${user} tere dimaag ka GPS hi kharab hai`,
        `${user} tere jaise 2 rupey mein milte hain`,
        `${user} tu to sample hai sample`,
        `${user} tere jaise logon pe toh filter bhi kaam na kare`,
        `${user} gaaliyon ki dictionary tu hai kya?`
      ];

      for (const line of insults) {
        await message.channel.send(line);
      }

    } catch (error) {
      console.error('Error sending messages:', error);
      message.channel.send(`\`\`\`❌ An error occurred while trying to send messages.\`\`\``);
    }
  }
};
