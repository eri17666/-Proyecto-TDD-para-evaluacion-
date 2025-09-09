function calculateFee(entry, exit) {
  const diffMs = exit.getTime() - entry.getTime();
    if (diffMs <= 0) {
    throw new Error("exit-before-entry");
  }
  const diffHours = diffMs / (1000 * 60 * 60);
  const hours = Math.ceil(diffHours);
  const total = hours * 10;
  return { total };
}
export default calculateFee