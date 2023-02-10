const choices = document.querySelector("#select_choice");
const pass_length = document.querySelector(".pass_length");
const button = document.getElementById("generate_pass_btn");
const result = document.querySelector(".result");
const output = document.querySelector(".output");

// datasets
// funny password

let FunnyPasses = [
  "lastdudeisakeeper4real",
  "kittysoup",
  "2BBlue",
  "cadet",
  "youwontguessthisone",
  "marybakereddy",
  "jordannike",
  "i12kissu",
  "password123",
  "myonlypassword",
  "spanky",
  "cowboysvstexans",
  "vERtiOus",
  "chaunukkah",
  "IAmACompleteIdiot",
  "Click Here for Wifi",
  "The House of Black and WiFi",
  " WiFestores",
  "Useit@yourrisk*0",
  "yetanotherpassword",
  "youmoron",
  "doubleclick",
  "harley",
  "SmartToilet8000",
  " Not the Wifi You’re Looking For",
  " Whose Car Alarm is That",
  "The Internet",
  "  buster",
  "whatpassword",
  " AccessDenied4u",
  "House of Donald trump",
  "Silence of the LANwghfluffy72Is2Short",
  "gojihad",
  ,
  "omghi2u",
  "ghanta",
  "bond007",
  "mypassword",
  "Threetimes",
  "pinkfluffybunny",
  "iamnottellingyoumypw",
  "iloveme",
  "iamforgetful",
  "kwanzaa",
  "iforgotagain",
  "swordfish",
  "TheyRWatching",
  "iForgot",
  "qwertyui",
  "honeybump",
  "inSSIDer",
  "Byte Me",
  "You Fart Pretty Loud",
  "DoUthinkitsfree$0",
  "WiFi@40$dPH",
  "mateRIST",
  "lookatme",
  "Nothing",
  "MisterNasty12",
  "strucant",
  "giiglepig",
  "justkeepswimmin",
  "Dunder MiffLAN",
  "Bandwidth Together",
  "Girls Gone Wireless",
  " Drop It Like It’s Hotspot",
  "It Burns When IP",
  "Abraham Linksys",
  "I Did Your Wifi Last Night",
  "No LAN for the Wicked",
  "xxxxxxxx",
  "MickeyMinnieGoofyPluto",
  " Asd1234",
  "baseballandfootball",
  "123neverguess",
  "luckyFan",
  "EXgENiNg",
  "Itnowknow",
  "password",
  "Qwerty11",
  "I Slept With Your WiFi",
  "YouarenotAllowed2Use",
  " YourDogShitsInMyYard",
  "New England Clam Router",
  "killergirl",
  "hairyback",
  "turkey02",
  "cantremember",
  "dontaskdonttell",
  "batmanandrobbin",
  "batmanandrobbin",
  "Very slow internet",
  "Please Wait…",
  "Amish Rebel",
  "Pay for WiFi",
  "77777777",
  "Now you see me…",
  " Pay and use",
  "Shutting Down",
  "0000000000",
  "This is not Free",
  "Harley",
  "$10 an hour",
  "Searching for GF",
  "Wifi Fever",
  "coming soon!",
  "No Internet Access",
  "Open Sesame",
  " Let them use it",
  "jewishnipple",
  "I now know",
  "fluffy72Is2Short",
  "Go Go Gadget Internet",
  "Dont Snoop",
  " WiFi@40$dPH",
  "Ye old Internet",
  "Dont Snoop",
  "Matthew",
  "not working",
  "Pornonly@007",
  "Life on the Line",
  "AAAAAAAAAA",
  "Jordan",
  "DontEvenTry2Hack!",
  "Pay and use",
  "Hacker Here",
  " Wi-FI Fo Fum",
  "Net gear",
  " UnprotectedCex@18",
  "Connection timed out",
  "Robert",
  " Iam18@Loveyou",
  "Network is down",
  "I Stalk You",
  "Useit@yourrisk*0",
  "asshole",
  " Wi of the Figer",
  "Networkis2Slow@",
  "Printer Only",
  "adolftheclown",
  "I’m watching you",
  " giving",
  "Ye old In,ternet",
  "Wait4sometime@",
  "Please use me",
  "143@ILUILU",
  "GrEssatE",
  "I Love you ,my wifi",
  " Free wifi",
  "pwned you",
  "Nacho WiFi",
  "1234",
  "Infected Wifi",
  "Bring Bear & Women",
  "Call Me Darling",
  "Free Wifi",
  "Default",
  " NoWiFi4you",
  "Switch On WIFI",
  "654321",
  "Russian Hackers",
];

// medium
const numAndString =
  "1234567890abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// hard
const letters = "!@#$%^&*" + numAndString + "!@#$%^&*";

// generating index while calculating password
function generateIndex(length) {
  return Math.floor(Math.random() * length);
}

// for easy Password
function EasyPass(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (9 * Math.pow(10, length - 1))
  );
}

// for medium Password
function mediumPass(length) {
  let password = "";
  while (length--) {
    let index = generateIndex(numAndString.length);
    password += numAndString[index];
  }
  return password;
}

// for Hard Password
function hardPass(length) {
  let password = "";
  while (length--) {
    let index = generateIndex(letters.length);
    password += letters[index];
  }
  return password;
}

// Funny password
function funnyPass() {
  let index = generateIndex(FunnyPasses.length);
  return FunnyPasses[index];
}

// making passWord Visible

function MakeVisible() {
  output.classList.add("showPassword");
}

function display(value) {
  result.innerHTML = value;
  MakeVisible();
}

// main Function
function GeneratePassword() {
  let choice = choices.value;
  let passSize = pass_length.value;

  switch (choice) {
    case "easy":
      display(EasyPass(passSize));
      break;
    case "medium":
      display(mediumPass(passSize));
      break;
    case "hard":
      display(hardPass(passSize));
      break;
    case "funny":
      display(funnyPass());
      break;

    default:
      alert("Sorry to process.");
      break;
  }
}

button.addEventListener("click", GeneratePassword);
