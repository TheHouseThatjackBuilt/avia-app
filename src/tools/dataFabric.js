const travelTime = (minutes) => `${Math.round(minutes / 60)}ч ${minutes % 60}м`;

const dataFabric = ({
  origin, destination, date, duration, stops,
}) => ({
  origin,
  destination,
  departureTime: new Date(date).toTimeString().slice(0, 5),
  ArrivalTime: new Date(Date.parse(date) + duration * 1000 * 60).toTimeString().slice(0, 5),
  stopsNames: stops.join(', '),
  transfersCount: stops.length,
  travelTime: travelTime(duration),
});

export default dataFabric;
