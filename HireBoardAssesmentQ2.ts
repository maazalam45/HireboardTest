
type SpaceJunk = {
  name: string;
  dangerLevel: number;
};

function sortSpaceJunk(junk: SpaceJunk[]): SpaceJunk[] {
 const buckets: SpaceJunk[][] = Array.from({ length: 101 }, () => []);
 
   for (const item of junk) {
    buckets[item.dangerLevel].push(item);
  }

  const sortedJunk: SpaceJunk[] = [];

  for (let dangerLevel = 100; dangerLevel >= 1; dangerLevel -= 1) {
    buckets[dangerLevel].sort((a, b) => a.name.localeCompare(b.name));
    sortedJunk.push(...buckets[dangerLevel]);
  }

  return sortedJunk;
}

console.log(
  sortSpaceJunk([
    { name: "Satellite", dangerLevel: 80 },
    { name: "Rocket", dangerLevel: 95 },
  ]),
);

console.log(
  sortSpaceJunk([
    { name: "Satellite A", dangerLevel: 80 },
    { name: "Satellite B", dangerLevel: 80 },
  ]),
);
