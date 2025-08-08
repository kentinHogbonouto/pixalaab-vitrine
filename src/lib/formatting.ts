export function formatCurrency(
  amount: number,
  locale = "fr-FR",
  currency = "XOF"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}
