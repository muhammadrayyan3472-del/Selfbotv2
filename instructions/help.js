const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  async execute(message, args, config) {
    const prefix = config.prefix;

    const helpText = `
# HAROON INV PRIVATE $ELF-BOT
# CRIMINALS ON TOP

---

# BOT COMMANDS

${prefix}help  - SHOW BOT HELP MENU
${prefix}ping  - SHOW BOT CURRENT PING
${prefix}prefix  - SHOW BOT CURRENT PREFIX
${prefix}setprefix  - CHANGE BOT PREFIX

${prefix}nickall  - CHANGE NICKNAME OF ALL MEMBERS (ADMIN or NICKNAME PERM REQUIRED)
${prefix}unnickall  - CHNAGE NICKNAME OF ALL MEMBERS TO DEFAULT
${prefix}banall  - BAN ALL SERVER MEMBERS
${prefix}kickall  - KICK ALL SERVER MEMBERS
${prefix}channuke  - DELETE ALL CHANNELS OF SERVER
${prefix}rolenuke  - DELETE ALL ROLES OF THE SERVER
${prefix}muteall - MUTE ALL SERVER MEMBERS
${prefix}timeoutall - TIMEOUT ALL SERVER MEMBERS FOR 7 DAYS
${prefix}untimeoutall - UNTIMEOUT ALL SERVER MEMBERS
${prefix}emojinuke - DELETE ALL EMOJIS OF THE SERVER
${prefix}stickernuke - DELETE ALL STICKERS OF THE SERVER
${prefix}prune - PRUNE ALL SERVER MEMBERS
${prefix}fastprune - FAST PRUNE ALL SERVER MEMBERS

# MESSAGES COMMANDS

${prefix}spam  - <PREFIX> <AMOUNT> <MESSAGE>
${prefix}stop  - STOP SPAMMING / USELESS
${prefix}bump - BUMP MESSAGES
${prefix}copycat - START COPYING TARGET USER MESSAGES
${prefix}llm - LLM COMMANDS
${prefix}autoreact - AUTOREACT TO YOUR MESSAGES
${prefix}encrypt - ENCRYPT MESSAGES

# GC RAIDER COMMANDS

${prefix}start - STARTS GC RAIDER UNSTOPPABLE SPAM STOPS WHEN BOT IS OFF

# DELETE MESSAGES SERVER/DM BOTH WORKING

${prefix}purgeme  - PURGE <AMOUNT>
${prefix}purgeall  - PURGE ALL MESSAGES OF SERVER/DMS

# ABUSING/ROAST COMMANDS

${prefix}fuck  - HINDI ABUSE MESSAGES SPAM
${prefix}fuck2  - ROAST MESSAGES RANDOM
${prefix}fuck3  - ROAST MESSAGES RANDOM
${prefix}fuck4 - ROAST MESSAGES RANDOM
${prefix}fuck5 - ROAST MESSAGES RANDOM
${prefix}fuck6 - ROAST MESSAGES RANDOM
${prefix}fuck7 - ROAST MESSAGES RANDOM

# ACCOUNT COMMANDS

${prefix}activity  - SET ACTIVITY TO STREAMING/PLAYING/WATCHING
${prefix}afk  - DURING AFK BOT WILL AUTORESPOND DMS/SERVER MENTIONS
${prefix}av  - GET AVATAR/DP OF MENTIONED USER

 ! USE COMMANDS RESPONSIBLY !
`;

    await message.channel.send(`\`\`\`md\n${helpText}\`\`\``);
  }
};