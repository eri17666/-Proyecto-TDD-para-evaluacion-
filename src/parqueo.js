function calculateFee(entry, exit) {
  const diffMs = exit.getTime() - entry.getTime();
    if (diffMs <= 0) throw new Error("exit-before-entry");

  let total = 0;
  let cursor = new Date(entry);
  
  while (cursor < exit) {
    const hour = cursor.getHours();
    const rate = (hour >= 22 || hour < 6) ? 6 : 10;
    total += rate;
    cursor.setHours(cursor.getHours() + 1, 0, 0, 0);
  }
  return { total };
}
export default calculateFee