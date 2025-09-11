function calculateFee(entry, exit,lostTicket=false) {
  
  if (lostTicket) {
    return { total: 80 };
  }
  const diffMs = exit.getTime() - entry.getTime();
    if (diffMs <= 0) throw new Error("exit-before-entry");

  const dayTotals = {};
  let cursor = new Date(entry);
  
  while (cursor < exit) {
    const dayKey =cursor.getFullYear() + 
      "-" +
      String(cursor.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(cursor.getDate()).padStart(2, "0");
    
    const hour = cursor.getHours();
    const rate = (hour >= 22 || hour < 6) ? 6 : 10;
    
    dayTotals[dayKey] = (dayTotals[dayKey] || 0) + rate;
    cursor.setHours(cursor.getHours() + 1, 0, 0, 0);
  }
  let total = 0;
  for (const d in dayTotals) {
    total += Math.min(dayTotals[d], 50);
  }
  return { total };
}
export default calculateFee