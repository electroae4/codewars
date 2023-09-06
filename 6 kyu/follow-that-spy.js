// DESCRIPTION:
//   We are diligently pursuing our elusive operative, Matthew Knight, who also goes by the alias
//   Roy Miller. He employs a nomadic lifestyle to evade detection, constantly moving from one location
//   to another, with each of his journeys following a perplexing and non-standard sequence of itineraries.
//   Our mission is to decipher the routes he will undertake during each of his voyages.
//
//   Task
// You've been provided with an array of itinerary routes, decipher the precise destinations he will
// visit in the correct sequence according to his meticulously planned itineraries.
//
// Example
// Based on the provided routes:
//
//   [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
// The correct sequence of destinations is:
//
//   "USA, BRA, UAE, JPN, PHL"
// Note:
//
//   You can safely assume that there will be no duplicate locations with distinct routes.
//   All routes provided will have non-empty itineraries.
//   There will always be at least one (1) route connecting one waypoint to another.


// SOLUTION :
function findRoutes(routes) {
  let startLocation, indexStart;

  firstloop:for (let i = 0; i < routes.length; i++) {
    startLocation = routes[i][0];
    indexStart = i;

    for (let j = 0; j < routes.length; j++) {
      if (j === i) continue;
      if (routes[j].indexOf(startLocation) !== -1) break;
      if (j === routes.length - 1) break firstloop;
    }
  }

  let route = [routes[indexStart][0]];
  let nextLocation = routes[indexStart][1];
  route.push(nextLocation);

  while (true) {
    for (let i = 0; i < routes.length; i++) {
      if (i === indexStart) continue;
      if (routes[i][0] === nextLocation) {
        nextLocation = routes[i][1];
        route.push(nextLocation);
      }
    }
    if (route.length === routes.length + 1) break;
  }
  return route.join(', ');
}
