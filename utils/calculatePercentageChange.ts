export function calculatePercentageChange(previous: number, current: number) {
  if (previous === 0) {
    return current === 0 ? "0%" : "+100%";
  }

  const percentage = ((current - previous) / previous) * 100;
  const sign = percentage >= 0 ? "+" : "";

  return `${sign}${percentage.toFixed(1)}%`;
}
