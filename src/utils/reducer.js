import toast from "react-hot-toast";

export const reducer = (state, action) => {
  toast.dismiss();
  const { balance, loan } = state;
  switch (action.type) {
    case "open":
      toast.success("Account opened");
      return { ...state, account: "open", balance: 500 };
    case "deposit":
      return { ...state, balance: balance + 100 };
    case "withdraw":
      return {
        ...state,
        balance: balance >= 50 ? balance - 50 : balance,
      };
    case "loan":
      return {
        ...state,
        loan: loan === 5000 ? loan : loan + 5000,
        balance: balance + 5000,
      };
    case "pay":
      return { ...state, loan: 0, balance: balance - 5000 };
    case "close":
      if (loan !== 0) {
        toast.error("Loan must be payed to close account");
        return state;
      } else if (balance !== 0) {
        toast.error("Balance must be 0 to close account");
        return state;
      } else {
        return { ...state, account: "closed" };
      }
    default:
      return state;
  }
};
