const bottleProto = {
  verse(verseNumber) {
    return `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.
Take one down and pass it around, ${verseNumber -1} bottles of beer on the wall.
`;
  }
};

export function Bottles() {
  return Object.assign(Object.create(bottleProto), {});
}

