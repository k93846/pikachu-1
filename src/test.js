// import string from "./css.js";

// const player = {
//   id: undefined,
//   time: 10,
//   n: 1,
//   init: () => {
//     player.play();
//     player.bindEvents();
//   },
//   events: {
//     "#btnPause": "pause",
//     "#btnPlay": "play",
//     "#btnSlow": "slow",
//     "#btnNormal": "normal",
//     "#btnFast": "fast",
//   },
//   bindEvents: () => {
//     for (let key in player.events) {
//       if (player.events.hasOwnProperty(key)) {
//         const value = player.events[key];
//         document.querySelector(key).onclick = player[value];
//       }
//     }
//   },

//   x: () => {
//     if (player.n > string.length) {
//       window.clearInterval(player.id);
//       return;
//     }
//     demo1.innerHTML = string.substring(0, player.n);
//     demo2.innerText = string.substring(0, player.n);
//     player.n += 1;
//     demo2.scrollTop = demo2.scrollHeight;
//   },
//   play: () => {
//     player.id = setInterval(player.x, player.time);
//   },

//   pause: () => {
//     console.log("jjj");
//     window.clearInterval(player.id);
//   },
//   slow: () => {
//     player.pause();
//     player.time = 50;
//     player.play();
//   },
//   normal: () => {
//     player.pause();
//     player.time = 10;
//     player.play();
//   },
//   fast: () => {
//     player.pause();
//     player.time = 0;
//     player.play();
//   },
// };
// player.init();
