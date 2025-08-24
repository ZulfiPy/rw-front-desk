export function convertArrayToDate(dateArray: number[]): Date {
  if (dateArray.length === 3) {
    const [year, month, day] = dateArray;
    return new Date(year, month - 1, day);
  } else if (dateArray.length === 7) {
    const [year, month, day, hour, minute, second, nanoseconds] = dateArray;
    const milliseconds = Math.floor(nanoseconds / 1000000);
    return new Date(year, month - 1, day, hour, minute, second, milliseconds);
  }

  throw new Error("Unsupported date array format");
}

export function formatDateArray(dateArray: number[]): string {
  const [year, month, day] = dateArray;

  if (dateArray.length === 3) {
    // DD/MM/YYYY format
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
  } else {
    const [, , , hour, minute, second] = dateArray;
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year} ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  }
}

export function formatTimestampArray(dateArray: number[]): string {
  const [year = 0, month = 1, day = 1, hour = 0, minute = 0, second = 0] =
    dateArray;

  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year} ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}
