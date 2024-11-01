/**
 * @description takes a date and returns the time difference from that date in hours
 * @param dateTime the date to compare to
 * @returns the difference in hours between now and the given date
 */
function getHoursUntil(dateTime: number): number {
  const now = Date.now();
  const future = new Date(dateTime).getTime();

  if (now >= future) {
    return 0;
  }

  return Math.floor((future - now) / 1000 / 60 / 60);
}

export { getHoursUntil };
