const { downTo } = require('./helpers');

const bottleOrBottles = quantity => quantity === 1 ? 'bottle' : 'bottles';

const bottleProto = {
  song() {
    return this.verses(99, 0);
  },

  verses(...args) {
    return downTo.apply(null, args).map(this.verse).join('\n');
  },

  verse(verseNumber) {
    if(verseNumber === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    return `${verseNumber} ${bottleOrBottles(verseNumber)} of beer on the wall, ${verseNumber} ${bottleOrBottles(verseNumber)} of beer.
Take ${verseNumber === 1 ? 'it' : 'one'} down and pass it around, ${verseNumber === 1 ? 'no more' : verseNumber - 1} ${bottleOrBottles(verseNumber - 1)} of beer on the wall.
`;
  }
};

export function Bottles() {
  return Object.assign(Object.create(bottleProto), {});
}

