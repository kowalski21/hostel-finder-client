import { DateTime } from "luxon";

export const getIsoDate = (dt) => {
  const parsedDt = DateTime.fromISO(dt);
  return parsedDt.toLocaleString(DateTime.DATETIME_FULL);
};
