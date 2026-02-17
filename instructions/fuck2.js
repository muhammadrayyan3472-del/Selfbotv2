module.exports = {
  name: 'fuck2',
  async execute(message, args, config) {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send("❗ Please mention a user.");

    await message.delete();

    const lines = [
      "YOU'RE A TYPO IN A DICTIONARY.",
      "YOU'RE A WIFI SIGNAL THAT NEVER CONNECTS.",
      "YOU'RE A MUTE BUTTON ON A RANT.",
      "YOU'RE A DEAD PIXEL ON A BLACK SCREEN.",
      "YOU'RE A SPINNER IN A STATIC WORLD.",
      "YOU'RE THE AUTO-UPDATE THAT BREAKS EVERYTHING.",
      "YOU'RE A POP-UP IN REAL LIFE.",
      "YOU'RE THE LAST SLICE NO ONE WANTS.",
      "YOU'RE A CAPTCHA THAT FAILS HUMANS.",
      "YOU'RE A SNOOZE BUTTON THAT DOESN'T WORK.",
      "YOU'RE THE BUFFERING ICON OF THIS GROUP.",
      "YOU'RE A CHARGER THAT ONLY WORKS UPSIDE DOWN.",
      "YOU'RE A MISSED CALL FROM UNKNOWN.",
      "YOU'RE A COOKED NOODLE IN A KNIFE FIGHT.",
      "YOU'RE A PASSWORD RESET LINK THAT EXPIRED.",
      "YOU'RE THE WALKING DEFINITION OF ‘HUH?’",
      "YOU'RE THE LAST TAB THAT CRASHES THE BROWSER.",
      "YOU'RE THE ‘SKIP AD’ THAT DOESN'T SKIP.",
      "YOU'RE THE SAND IN A KEYBOARD.",
      "YOU'RE THE SCROLLBAR THAT VANISHES.",
      "YOU'RE THE REPLY THAT NO ONE LIKES.",
      "YOU'RE THE AUTOCORRECT THAT FAILS MISERABLY.",
      "YOU'RE THE LAG SPIKE MID BOSS FIGHT.",
      "YOU'RE THE WRONG USB PLUG FIRST TRY.",
      "YOU'RE THE FIDGET SPINNER OF PERSONALITIES."
    ];

    for (const line of lines) {
      await message.channel.send(`# ${user} ${line.toUpperCase()}`);
    }
  }
};
