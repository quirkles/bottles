const bottleOrBottles = quantity => quantity === 1 ? 'bottle' : 'bottles';

const bottleProto = {
  verse(verseNumber) {
    return `${verseNumber} ${bottleOrBottles(verseNumber)} of beer on the wall, ${verseNumber} ${bottleOrBottles(verseNumber)} of beer.
Take one down and pass it around, ${verseNumber -1} ${bottleOrBottles(verseNumber - 1)} of beer on the wall.
`;
  }
};

export function Bottles() {
  return Object.assign(Object.create(bottleProto), {});
}

