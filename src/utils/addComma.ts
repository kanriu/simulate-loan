export const addComma = (amount: string) => {
  const amountSplit = amount.split("");
  amountSplit.splice(amountSplit.length - 3, 0, ",");
  return amountSplit.join("");
};
