console.log("hello there.");

var motd = [
    'Remember to brush your teeth!',
    'Hi there, would you like to sign my petition?',
    'The bodies will not be found.',
    'The fog is coming!',
    "Hey! Listen!",
    "Also try Terraria!",
    "Yeah.",
    "Nah.",
    "Stop reading these!",
    "Also try Minecraft!",
    "What?! Help me!",
    "It's longer than you think.",
    "Droopy likes your face!"
]

var motdText = document.getElementById("motd");
var motdNum = Math.floor(Math.random()*motd.length);
motdText.innerText = "MOTD: ".concat(motd[motdNum]);