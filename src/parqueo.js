function calculateFee(entry, exit) {
  const diffMs = exit.getTime() - entry.getTime();
    if (diffMs <= 0) throw new Error("exit-before-entry");

  const dayTotals = {};
  let cursor = new Date(entry);
  
  while (cursor < exit) {
    const daykey = cursor.toISOString().split('T')[0];
    const hour = cursor.getHours();
    const rate = (hour >= 22 || hour < 6) ? 6 : 10;
    dayTotals[daykey] = (dayTotals[daykey] || 0) + rate;
    cursor.setHours(cursor.getHours() + 1, 0, 0, 0);
  }
  let total = 0;
  for (const d in dayTotals) {
    total += Math.min(dayTotals[d], 50);
  }
  return { total };
}
export default calculateFee