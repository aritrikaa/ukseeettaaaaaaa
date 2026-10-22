/* =====================================================================
   VAGISHA'S LEVEL 16 — script.js
   ---------------------------------------------------------------------
   SAFE TO EDIT (Section A, the CONTENT object + NOTES array):
     - Login text & wrong-login message ......... CONTENT.login
     - Quest titles, intros, questions .......... CONTENT.quests[n]
     - Puzzle answers ........................... CONTENT.quests[n].answer
     - Correct / incorrect messages ............. .ok / .bad
     - The FIVE letters ......................... CONTENT.quests[n].letter.text
     - The SIXTEEN notes ........................ NOTES array
     - Button labels ............................ CONTENT.buttons
     - Sound settings ........................... SOUND_DEFAULT_ON (keep false)
   DO NOT EDIT (Section B onward) unless you understand JavaScript.

   NOTE: Username/password are checked in the browser, so anyone can read them
   via "View Source". This is a playful gate, NOT real security.
===================================================================== */

/* ========================= SECTION A: EDIT HERE ========================= */
const CONTENT = {
  login: {
    username: "VAGISHA",   // EDITABLE: correct username (case-sensitive)
    password: "vagisha",   // EDITABLE: correct password (case-sensitive)
    wrong: "EH?! Wrong password! Sahi me Shin Chan ho ka??", // EDITABLE
    ok: "MISSION ACCEPTED! 🎉"                                        // EDITABLE
  },
  buttons: {
    read: "I READ MY LETTER! 💌", // EDITABLE
    next: "NEXT QUEST ➡",         // EDITABLE
    back: "⬅ BACK",               // EDITABLE
    reread: "📖 REREAD MY LETTER",// EDITABLE
    openLetter: "💌 OPEN MY LETTER",// EDITABLE
    final: "UNLOCK MY 16 SURPRISES! 🎁", // EDITABLE
    restartAsk: "Restart the whole game? Your progress will be erased." // EDITABLE
  },
  quests: [
    { /* ---------- QUEST 1: choice puzzle ---------- */
      title: "QUEST 1: THE GADGET RESCUE",
      intro: "Psst! Doraemon ka gadget box thoda mess up ho gaya. The birthday girl must save the day 😝",
      question: "Which gadget would you use to travel to another place instantly?",
      type: "choice", guide: "cat", bg: "q1",
      options: [ // EDITABLE: labels/icons (answer must match a label exactly)
        { label: "Anywhere Door", icon: "🚪" },
        { label: "Bamboo Copter", icon: "🚁" },
        { label: "Time Machine", icon: "⏳" },
        { label: "Invisible Cloak", icon: "🧥" }
      ],
      answer: "Anywhere Door", // EDITABLE: correct answer
      ok: "DING DING DING! OMZ tere me dimaag hai! 🎉",
      bad: "Oh chaar dimaagi, pagla gaye ho??? That gadget won't take you there! Waapsi kar",
      letter: { theme: "pink", heading: "A LITTLE NOTE FOR MY FAVOURITE HUMAN 💗",
        // EDITABLE LETTER 1 — replace everything between the quotes (use \n for new lines)
        text: "Darling ka happy bday hai ommmzzzz I LOVE MY SWEET 16 SM MWAH, meri 3 mahine ki mehnat hai ye tere and uksita dono ke liye banayi hai. sem sem hai but thoda diff cuz ek banane me hi thodi haalat tight hogayi. i made this parents safe just in case lol. thoda phone lelia so no story :( kal party pr milega phone tb lagaungi. ab talo zaldi se Kwik Kwik next quests complete kro and mere 16 bday notes padho 😝😝😝" }
    },
    { /* ---------- QUEST 2: snack detective ---------- */
      title: "QUEST 2: THE GREAT SNACK MYSTERY",
      intro: "SHIN CHAN NE SNACK DEPARTMENT SE CHORI KRLI (waapis). THE EVIDENCE IS MISSING. HELP. 🚨",
      question: "CLUE: Shin Chan ate the snack that is round, has chocolate chips, and is definitely not ice cream.",
      type: "choice", guide: "kid", bg: "q2", snack: true,
      options: [
        { label: "Chocolate biscuits", icon: "🍫" },
        { label: "Strawberry candy", icon: "🍬" },
        { label: "Vanilla ice cream", icon: "🍨" },
        { label: "Chocolate chip cookies", icon: "🍪" }
      ],
      answer: "Chocolate chip cookies", // EDITABLE
      ok: "CASE CLOSED! SHIN CHAN LWK SUSSY BAKA, BUT YOU DID IT. 🍪",
      bad: "DETECTIVE FAIL! Shin Chan has eaten the evidence. WAAPSI KAR!",
      letter: { theme: "cookie", heading: "CHOCOLATE LANA HAI AAJ🍪",
        text: "ARE WAO CUTIE ZI dimaag hai tumme haaiinn???? yaar i genuinely wish this is your sweetest and best bday ever yaawwwwrrrrr. may this yr and the next ones be the happiest you ever have shonaaaaa" }
    },
    { /* ---------- QUEST 3: memory match ---------- */
      title: "QUEST 3: THE MEMORY MIX-UP",
      intro: "DORAEMON'S MEMORY MACHINE HAS MIXED UP THE UNIVERSE'S MOST IMPORTANT THINGS. FIX IT BEFORE EVERYTHING TURNS INTO CAKE. 🎂",
      question: "Match all six pairs of cards!",
      type: "memory", guide: "cat", bg: "q3",
      ok: "MEMORY RESTORED! Are ye cartooni insaan me to kaafi patience hai gng",
      bad: "",
      letter: { theme: "memory", heading: "GOOD MORNING 📸",
        text: "honestly this shi took me A LOT of tem and mera matlb A LOT. Even ai couldn't help me in ts bhai. but worth it anyways lol if it makes u happy and smile and shimmer and shine, pretty dancer" }
    },
    { /* ---------- QUEST 4: riddle ---------- */
      title: "QUEST 4: THE NONSENSE ESCAPE",
      intro: "SHIN CHAN HAS INVENTED A MACHINE. UNFORTUNATELY, ISS GAWAR NE EXIT LOCK KRDI. SOLVE THE RIDDLE TO ESCAPE. 😭",
      question: "I appear once every year, bring candles and cake, and make everyone say you're getting older. What am I?",
      type: "choice", guide: "kid", bg: "q4", cake: true,
      options: [
        { label: "A birthday", icon: "🎂" },
        { label: "A school exam", icon: "📝" },
        { label: "A rainy afternoon", icon: "🌧️" },
        { label: "A refrigerator", icon: "🧊" }
      ],
      answer: "A birthday", // EDITABLE
      ok: "ARE WAH MERE SHER 🎉",
      bad: "dimaag ni hai tum me??? 💀",
      letter: { theme: "notebook", heading: "ZYADA CHALAK? 🤡💗",
        text: "oh zyada easy krdia kya maine???? (bol to aese rahi hu jaise ki tuff wala coding meko aata ho lol. i only know html and java and thoda sa css bhai 🙏🏼🙏🏼" }
    },
    { /* ---------- QUEST 5: sixteen candles ---------- */
      title: "QUEST 5: LEVEL 16 UNLOCKED!",
      intro: "OH WAO LAADLI, YOU SURVIVED THE GADGETS, THE SNACK CRIME, THE MEMORY MACHINE, AND SHIN CHAN'S NONSENSE. AB YE LO",
      question: "Click all sixteen candles to light them!",
      type: "candles", guide: "both", bg: "q5",
      ok: "HAPPY SWEET SIXTEEN, VAGISHA! 🎂💗",
      okSub: "You have officially unlocked sixteen little pieces of birthday happiness.",
      bad: "",
      letter: { theme: "party", heading: "HAPPY BIRTHDAY, BIRTHDAY GIRL! 🎉",
        text: "oh yo hell naw, u did 'em all so Kwik, gng. dayumn bro. but then meri bestie hai to chant chalak to hogi hiiii heheheheheheh" }
    }
  ]
};

/* EDITABLE: THE SIXTEEN FINAL NOTES. Replace each message between the quotes.
   theme options: pink, blue, yellow, mint, lavender, peach, red.  \n = new line. */
const NOTES = [
  // NOTE 1 — idea: a simple birthday wish
  { id: 1,  title: "NOTE 01", message: "CHOCOLATE CHAAHIYE",  theme: "pink" },
  // NOTE 2 — idea: how special she is
  { id: 2,  title: "NOTE 02", message: "meri bestie ho tum, and i am so so so so grateful to have met you aywwr, you make everything so good and fun",  theme: "blue" },
  // NOTE 3 — idea: a funny friendship memory
  { id: 3,  title: "NOTE 03", message: "i freaking LOVE u singing and dancing yawr, please keep on slayying",  theme: "yellow" },
  // NOTE 4 — idea: an appreciation note
  { id: 4,  title: "NOTE 04", message: "I'LL MISS U SM NEXT YR if i make it out of here lol U DA BEST",  theme: "mint" },
  // NOTE 5 — idea: her strengths
  { id: 5,  title: "NOTE 05", message: "plij don't die soon, welp",  theme: "lavender" },
  // NOTE 6 — idea: a wish for her dreams
  { id: 6,  title: "NOTE 06", message: "I LOVE YOUUUUU",  theme: "peach" },
  // NOTE 7 — idea: silly inside joke
  { id: 7,  title: "NOTE 07", message: "wait mai thodi si thak gayi hu 🙏🏼",  theme: "red" },
  // NOTE 8 — idea: she deserves happiness
  { id: 8,  title: "NOTE 08", message: "HAPPY BDAYYY TOO YOUUUUUUUUU HAPPY BDAY TOO YOUUUUUUUUU",  theme: "pink" },
  // NOTE 9 — idea: celebrating her individuality
  { id: 9,  title: "NOTE 09", message: "HAPPY BDAY DEAR BAGISAAAAAAAAA HAPPY BDAY TO YOU",  theme: "blue" },
  // NOTE 10 — idea: friendship appreciation
  { id: 10, title: "NOTE 10", message: "YAWR AAP SO CUTU MAY U BE BLESSED WITH ALL THE STRENGTH REQUIRED TO OVERCOME AL YOUR FUTURE OBSTCALES AND PROBELMS", theme: "yellow" },
  // NOTE 11 — idea: future adventures
  { id: 11, title: "NOTE 11", message: "BOARDS ME SLAAYYYYY", theme: "mint" },
  // NOTE 12 — idea: encouragement for difficult days
  { id: 12, title: "NOTE 12", message: "love u hai yar", theme: "lavender" },
  // NOTE 13 — idea: funny cartoon-themed message
  { id: 13, title: "NOTE 13", message: "ragebaiting u is fun", theme: "peach" },
  // NOTE 14 — idea: sixteen years of life
  { id: 14, title: "NOTE 14", message: "I REMEMBER U IN KG UNIFORM WAVI G AT OUR BUS lol so pyara", theme: "red" },
  // NOTE 15 — idea: promise of friendship
  { id: 15, title: "NOTE 15", message: "happy bday yawr", theme: "pink" },
  // NOTE 16 — idea: the biggest, most emotional final wish (gets the special big-envelope treatment)
  { id: 16, title: "NOTE 16", message: "I love you so much ion have anything more to say. KAL LETTER DUNGI VO PADHNA, EMO EMO SA SUNDAR SUNDAR SA", theme: "red" }
];

const SOUND_DEFAULT_ON = false; // keep false: browsers block sound before a click anyway

/* ========================= SECTION B: GAME CODE (don't edit) ========================= */
const $ = id => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const KEY = "vagisha16";
let S = { started: false, screen: "login", q: 0, done: [0,0,0,0,0], read: [0,0,0,0,0], notes: [], sound: SOUND_DEFAULT_ON };
try { const d = JSON.parse(sessionStorage.getItem(KEY)); if (d && d.done) S = d; } catch (e) {}
const save = () => { try { sessionStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

/* ---------- Original cartoon characters (inline SVG) ---------- */
const CHARS = {
  cat: `<svg viewBox="0 0 100 100"><circle cx="50" cy="52" r="42" fill="#3aa7ff" stroke="#fff" stroke-width="4"/><ellipse cx="50" cy="60" rx="30" ry="27" fill="#fff"/><circle cx="38" cy="38" r="9" fill="#fff"/><circle cx="62" cy="38" r="9" fill="#fff"/><circle cx="40" cy="39" r="3.5" fill="#222"/><circle cx="60" cy="39" r="3.5" fill="#222"/><circle cx="50" cy="48" r="6" fill="#e8283c"/><path d="M50 54v12M36 70q14 12 28 0" stroke="#222" stroke-width="2.5" fill="none"/><path d="M14 52l16 4M14 62l16-2M86 52l-16 4M86 62l-16-2" stroke="#222" stroke-width="2"/><rect x="26" y="86" width="48" height="8" rx="4" fill="#e8283c"/><circle cx="50" cy="96" r="5" fill="#ffd23f" stroke="#c9a000"/></svg>`,
  kid: `<svg viewBox="0 0 100 100"><circle cx="50" cy="55" r="38" fill="#ffd9b0" stroke="#fff" stroke-width="4"/><path d="M14 40q36-40 72 0q-36-14-72 0" fill="#222"/><path d="M26 38q8-6 20-2M54 36q12-4 20 2" stroke="#222" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="38" cy="52" r="4" fill="#222"/><circle cx="62" cy="52" r="4" fill="#222"/><path d="M38 70q12 10 24 0q-12-4-24 0" fill="#c0392b"/><circle cx="26" cy="64" r="5" fill="#ffb3b3" opacity=".8"/><circle cx="74" cy="64" r="5" fill="#ffb3b3" opacity=".8"/></svg>`
};
function charHTML(c) { return c === "both" ? CHARS.cat + CHARS.kid : CHARS[c]; }
document.querySelectorAll("[data-char]").forEach(e => e.innerHTML = charHTML(e.dataset.char));

/* ---------- Sound (WebAudio beeps, OFF until toggled) ---------- */
let ac = null;
function beep(kind) {
  if (!S.sound) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const seq = { click: [[660,.05]], ok: [[523,.1],[659,.1],[784,.18]], bad: [[220,.12],[170,.2]], party: [[523,.1],[659,.1],[784,.1],[1047,.3]] }[kind] || [];
    let t = ac.currentTime;
    seq.forEach(([f, d]) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = "triangle"; o.frequency.value = f; g.gain.value = .08; o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + d); t += d; });
  } catch (e) {}
}
function paintSound() { $("soundBtn").textContent = S.sound ? "🔊" : "🔇"; }
$("soundBtn").onclick = () => { S.sound = !S.sound; save(); paintSound(); beep("click"); };

/* ---------- Effects ---------- */
function confetti(n = 70) {
  n = reduced ? 8 : n;
  const cols = ["#ff6fa5","#ffd23f","#3aa7ff","#7be0b0","#b794f6","#e8283c","#ffa77a"];
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"); s.className = "cf";
    s.style.cssText = `left:${Math.random()*100}%;background:${cols[i%7]};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*.5}s;transform:rotate(${Math.random()*360}deg)`;
    $("fx").appendChild(s); setTimeout(() => s.remove(), 4800);
  }
}
function burst(el, emoji, n = 6) {
  if (reduced) return;
  const r = el.getBoundingClientRect();
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"); s.className = "pop"; s.textContent = emoji;
    s.style.cssText = `left:${r.left+r.width/2}px;top:${r.top+r.height/2}px;--dx:${(Math.random()-.5)*120}px;--dy:${-30-Math.random()*70}px`;
    $("fx").appendChild(s); setTimeout(() => s.remove(), 1000);
  }
}
const DECO = { login:"⭐💗☁️🎈🔑", q1:"⚙️🔧☁️⭐🛸", q2:"🧸🍪🖍️🍬⭐", q3:"✨🌀⭐🔮☁️", q4:"❓🎈🔺🎪⭐", q5:"🎈🎉💗🎁⭐", notes:"🎈💗⭐🎁✨" };
function setBg(k) {
  document.body.dataset.bg = k;
  const set = [...DECO[k]].filter(c => c.trim() && c !== "\uFE0F");
  $("deco").innerHTML = "";
  const n = reduced ? 6 : 14;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"); s.textContent = set[i % set.length];
    s.style.cssText = `left:${(i*83)%96}%;top:${(i*47)%90}%;font-size:${22+(i%4)*10}px;animation-delay:${-i*.7}s;animation-duration:${6+(i%5)*2}s`;
    $("deco").appendChild(s);
  }
}
let lastSp = 0;
addEventListener("pointermove", e => { // sparse cursor sparkles (desktop mouse only)
  if (reduced || e.pointerType !== "mouse" || Date.now() - lastSp < 120) return; lastSp = Date.now();
  const s = document.createElement("span"); s.className = "pop"; s.textContent = "✨";
  s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--dx:0px;--dy:20px;font-size:14px`;
  $("fx").appendChild(s); setTimeout(() => s.remove(), 800);
});

/* ---------- Screen switching ---------- */
function show(id) { document.querySelectorAll(".screen").forEach(s => s.hidden = s.id !== id); S.screen = id; save(); scrollTo(0, 0); }

/* ---------- LOGIN ---------- */
$("showPass").onclick = () => { const p = $("pass"); p.type = p.type === "password" ? "text" : "password"; };
$("loginForm").onsubmit = e => {
  e.preventDefault();
  const m = $("loginMsg"), c = $("loginCard");
  // exact, case-sensitive comparison
  if ($("user").value === CONTENT.login.username && $("pass").value === CONTENT.login.password) {
    m.textContent = CONTENT.login.ok; m.className = "msg good"; confetti(); beep("party");
    setTimeout(() => { S.started = true; S.q = 0; renderQuest(); }, 1400);
  } else {
    m.textContent = CONTENT.login.wrong; m.className = "msg"; beep("bad");
    c.classList.remove("wobble"); void c.offsetWidth; c.classList.add("wobble");
  }
};

/* ---------- QUEST SCREEN ---------- */
function renderStars() {
  $("stars").innerHTML = [0,1,2,3,4].map(i => `<span class="star ${S.read[i] ? "lit" : ""}">★</span>`).join("");
}
function setFb(msg, good) { const f = $("fb"); f.textContent = msg || ""; f.className = "fb " + (msg ? (good ? "ok" : "bad") : ""); }
function mood(cls) { const g = $("guide"); g.classList.remove("happy", "sad"); void g.offsetWidth; g.classList.add(cls); }

function renderQuest() {
  const i = S.q, Q = CONTENT.quests[i];
  show("quest"); setBg(Q.bg);
  $("qLabel").textContent = `QUEST ${i + 1}/5`;
  $("qTitle").textContent = Q.title;
  $("qIntro").textContent = Q.intro;
  $("qQuestion").textContent = Q.question;
  $("guide").innerHTML = charHTML(Q.guide);
  renderStars(); setFb(S.done[i] ? Q.ok : "", true);
  if (Q.type === "choice") buildChoice(i);
  if (Q.type === "memory") buildMemory(i);
  if (Q.type === "candles") buildCandles(i);
  renderNav();
}

/* Puzzle finished correctly (called once per quest) */
function complete(i) {
  if (S.done[i]) return;
  S.done[i] = 1; save();
  const Q = CONTENT.quests[i];
  setFb(Q.ok, true); mood("happy"); confetti(i === 4 ? 140 : 50); beep(i === 4 ? "party" : "ok");
  if (i === 4) $("stage").classList.add("finale");
  setTimeout(() => openLetter(i), i === 4 ? 2200 : 1500);
  renderNav();
}

/* --- Puzzle types 1 & 2 & 4: illustrated choice cards --- */
function candleRing(lit, interactive) {
  let h = `<div class="ring"><div class="cake">🎂<b>16</b></div>`;
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * 2 * Math.PI - Math.PI / 2;
    h += `<button class="candle ${lit ? "lit" : ""}" data-k="${k}" style="left:${50 + 44 * Math.cos(a)}%;top:${50 + 44 * Math.sin(a)}%" aria-label="Candle ${k + 1}" ${interactive ? "" : "tabindex='-1' disabled"}><i></i></button>`;
  }
  return h + "</div>";
}
function buildChoice(i) {
  const Q = CONTENT.quests[i], st = $("stage");
  st.className = "stage" + (Q.snack ? " shelf" : "");
  st.innerHTML = (Q.cake ? candleRing(S.done[i], false).replace("ring", "ring small") : "") +
    `<div class="choices">` + Q.options.map(o => `<button class="choice ${S.done[i] && o.label === Q.answer ? "right" : ""}" data-l="${o.label}"><span class="ico">${o.icon}</span><span>${o.label}</span></button>`).join("") + `</div>`;
  st.querySelectorAll(".choice").forEach(b => b.onclick = () => {
    if (S.done[i]) return;
    if (b.dataset.l === Q.answer) { b.classList.add("right"); burst(b, Q.snack ? "🍪" : "⭐", 8); if (Q.cake) st.querySelectorAll(".candle").forEach((c, n) => setTimeout(() => c.classList.add("lit"), n * 90)); complete(i); }
    else { b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); setFb(Q.bad, false); mood("sad"); beep("bad"); }
  });
}

/* --- Puzzle type 3: memory match (6 pairs) --- */
function buildMemory(i) {
  const st = $("stage"); st.className = "stage";
  const faces = [
    `<div class="mc">${CHARS.cat}</div>`, `<div class="mc">${CHARS.kid}</div>`,
    "🎂", "🎈", "🍪", "💗"
  ];
  const solved = !!S.done[i];
  let deck = [...faces, ...faces].map((f, n) => ({ f, id: faces.indexOf(f) }));
  for (let n = deck.length - 1; n > 0; n--) { const j = Math.floor(Math.random() * (n + 1)); [deck[n], deck[j]] = [deck[j], deck[n]]; }
  st.innerHTML = `<p class="moves" id="moves">MOVES: 0</p><div class="mem">` +
    deck.map((d, n) => `<button class="mcard ${solved ? "flip match" : ""}" data-id="${d.id}" aria-label="Memory card ${n + 1}"><span class="back">❓</span><span class="front">${d.f}</span></button>`).join("") + `</div>`;
  if (solved) return;
  let first = null, lock = false, moves = 0, matched = 0;
  st.querySelectorAll(".mcard").forEach(c => c.onclick = () => {
    if (lock || c.classList.contains("flip")) return;   // blocks rapid clicks / same card twice
    c.classList.add("flip"); beep("click");
    if (!first) { first = c; return; }
    moves++; $("moves").textContent = "MOVES: " + moves;
    if (first.dataset.id === c.dataset.id) {
      first.classList.add("match"); c.classList.add("match"); matched++; first = null; burst(c, "✨", 5);
      if (matched === 6) { complete(i); setFb(CONTENT.quests[i].ok + ` (Finished in ${moves} moves!)`, true); }
    } else {
      lock = true; const a = first; first = null; setFb("", true);
      setTimeout(() => { a.classList.remove("flip"); c.classList.remove("flip"); lock = false; }, 800);
    }
  });
}

/* --- Puzzle type 5: sixteen candles --- */
function buildCandles(i) {
  const st = $("stage"); st.className = "stage party";
  const solved = !!S.done[i];
  st.innerHTML = `<div class="bunting">🎉🎈🎊🎈🎉🎈🎊🎈🎉</div><p class="count" id="count">${solved ? 16 : 0}/16 CANDLES LIT</p>` + candleRing(solved, !solved) +
    `<div class="gifts">🎁 🎁 🎁</div><div class="finalmsg" id="finalMsg" ${solved ? "" : "hidden"}><h3>${CONTENT.quests[i].ok}</h3><p>${CONTENT.quests[i].okSub}</p></div>`;
  if (solved) { st.classList.add("finale"); return; }
  const lit = new Set();
  st.querySelectorAll(".candle").forEach(c => c.onclick = () => {
    if (lit.has(c.dataset.k)) return;                    // each candle counts once
    lit.add(c.dataset.k); c.classList.add("lit"); burst(c, "✨", 3); beep("click");
    $("count").textContent = `${lit.size}/16 CANDLES LIT`;
    if (lit.size === 16) { $("finalMsg").hidden = false; complete(i); }
  });
}

/* ---------- Navigation (locked until puzzle done AND letter marked read) ---------- */
function renderNav() {
  const i = S.q, n = $("nav"); n.innerHTML = ""; $("qLabel").textContent = `QUEST ${i + 1}/5`;
  const add = (txt, fn, cls = "") => { const b = document.createElement("button"); b.className = "btn " + cls; b.textContent = txt; b.onclick = fn; n.appendChild(b); };
  if (S.done[i] && !S.read[i]) add(CONTENT.buttons.openLetter, () => openLetter(i), "alt");
  if (S.read[i]) {
    if (i > 0) add(CONTENT.buttons.back, () => { S.q = i - 1; renderQuest(); }, "alt");
    add(CONTENT.buttons.reread, () => openLetter(i), "alt");
    if (i < 4) add(CONTENT.buttons.next, () => { if (S.read[i]) { S.q = i + 1; renderQuest(); } });
    else add(CONTENT.buttons.final, openNotes, "big");
  }
  renderStars();
}

/* ---------- Modal helpers ---------- */
let openModal = null;
function lockModal(m) { openModal = m; m.hidden = false; document.body.classList.add("lock"); const f = m.querySelector("button.btn,button.x"); f && f.focus(); }
function unlockModal() { if (!openModal) return; openModal.hidden = true; openModal = null; document.body.classList.remove("lock"); }

/* ---------- Letter popup ---------- */
let curLetter = 0;
function openLetter(i) {
  if (!S.done[i]) return;                                // can't open letter before solving puzzle
  curLetter = i; const L = CONTENT.quests[i].letter;
  $("letterBox").className = "letter t-" + L.theme;
  $("lHead").textContent = L.heading; $("lText").textContent = L.text; $("lText").scrollTop = 0;
  $("readBtn").textContent = CONTENT.buttons.read;
  lockModal($("letterModal")); beep("click");
}
$("readBtn").onclick = () => {
  S.read[curLetter] = 1; save(); unlockModal(); beep("ok");
  if (S.q === curLetter) renderNav();
};
$("letterClose").onclick = unlockModal;                  // closing does NOT mark as read

/* ---------- Final surprise room ---------- */
function openNotes() { if (!S.read[4]) return; show("notes"); setBg("notes"); renderGrid(); }
const EMO = ["🎁","💌","⭐","🎀","🧸","🍭"];
function renderGrid() {
  $("noteGrid").innerHTML = NOTES.map((n, k) => `<button class="gift th-${n.theme} ${S.notes.includes(n.id) ? "opened" : ""}" data-id="${n.id}"><span class="gi">${S.notes.includes(n.id) ? "💌" : EMO[k % 6]}</span><span>SURPRISE ${String(n.id).padStart(2, "0")}</span></button>`).join("");
  $("noteGrid").querySelectorAll(".gift").forEach(b => b.onclick = () => openNote(+b.dataset.id, b));
  $("noteCount").textContent = `${S.notes.length}/16 SURPRISES DISCOVERED`;
}
function openNote(id, btn) {
  const n = NOTES.find(x => x.id === id); if (!n) return;
  if (!S.notes.includes(id)) { S.notes.push(id); save(); }
  btn.classList.add("opening"); burst(btn, "💗", 6);
  const box = $("noteBox"); box.className = "notebox th-" + n.theme + (id === 16 ? " grand" : "");
  $("nHead").textContent = n.title; $("nText").textContent = n.message; $("nText").scrollTop = 0;
  $("nEnv").textContent = id === 16 ? "💌🎂" : "💌";
  $("floaters").innerHTML = reduced ? "" : Array.from({ length: id === 16 ? 18 : 9 }, (_, k) => `<span style="left:${(k * 37) % 95}%;animation-delay:${-k * .5}s">${id === 16 ? "✨💗🎈"[k % 3] : "💗⭐"[k % 2]}</span>`).join("");
  setTimeout(() => { renderGrid(); lockModal($("noteModal")); if (id === 16) { confetti(80); beep("party"); } else beep("ok"); }, reduced ? 0 : 350);
}
$("noteClose").onclick = $("noteOk").onclick = unlockModal;
$("backParty").onclick = () => { S.q = 4; renderQuest(); };

/* ---------- Restart & Escape key ---------- */
function restart() {
  if (!confirm(CONTENT.buttons.restartAsk)) return;
  try { sessionStorage.removeItem(KEY); } catch (e) {}
  location.reload();
}
$("restartBtn").onclick = $("restartBtn2").onclick = restart;
// Escape only closes the popup; it never marks a letter read, so it cannot skip a quest.
addEventListener("keydown", e => { if (e.key === "Escape") unlockModal(); });

/* ---------- Boot: resume saved progress safely ---------- */
paintSound(); setBg("login");
if (S.started) {
  S.q = Math.min(S.q, 4);
  // Safety: never land on a quest beyond what's unlocked
  let max = 0; while (max < 4 && S.read[max]) max++;
  if (S.q > max) S.q = max;
  if (S.screen === "notes" && S.read[4]) openNotes(); else renderQuest();
} else show("login");
