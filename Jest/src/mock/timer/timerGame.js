"use strict";

function timerGame(cb) {
  setTimeout(() => {
    cb && cb();
  }, 1000);
}

module.exports = timerGame;
