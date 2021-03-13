/**
 * @file helper functions to calculate the distance until
 * a certain date
 */

function getHoursUntil(dateTime: number): number {
  const now = Date.now();
  const future = new Date(dateTime).getTime();
  if (now >= future) return 0;

  const differenceInHours = Math.floor((future - now) / 1000 / 60 / 60);

  return differenceInHours;
}

export { getHoursUntil };
