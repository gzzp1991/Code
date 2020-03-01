"use strict";

function infiniteTimerGame(cb) {
  setTimeout(() => {
    cb && cb();

    setTimeout(() => {
      infiniteTimerGame(cb);
    }, 10000);
  }, 1000);
}

module.exports = infiniteTimerGame;
