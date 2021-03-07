const PI = Math.PI;
const RADIUS_OF_EARTH = 6371e3;
/**
 *
 *
 * @param {*} options
 * @returns distance
 */
const greatDistance = options => {
  const { lat1, lng1, lat2, lng2 } = options;

  const φ1 = getRadians(lat1);
  const φ2 = getRadians(lat2);
  const Δφ = getRadians(lat2 - lat1);
  const Δλ = getRadians(Math.abs(lng2 - lng1));

 const c = Math.acos((Math.sin(φ1) * Math.sin(φ2)) + (Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)))
  const d = RADIUS_OF_EARTH * c;
  // distance in kms.
  return d / 1000;
};
/**
 *
 *
 * @param {*} coordinate
 * @returns coordinate in radians
 */
const getRadians = coordinate => {
  return (coordinate * PI) / 180;
};

module.exports = {
  greatDistance
};