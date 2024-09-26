import toast from "react-hot-toast";

export const reducer = (state, action) => {
  toast.dismiss();
  const { balance, loan, withdrawAmount, depositAmount, loanAmount } = state;
  switch (action.type) {
    case "open":
      toast.success("Account opened");
      return { ...state, account: "open", balance: 500 };
    case "deposit":
      return { ...state, balance: balance + depositAmount };
    case "withdraw":
      return {
        ...state,
        balance: balance >= withdrawAmount ? balance - withdrawAmount : balance,
      };
    case "loan":
      return {
        ...state,
        loan: loan === loanAmount ? loan : loan + loanAmount,
        balance: balance + loanAmount,
      };
    case "pay":
      return { ...state, loan: 0, balance: balance - loan };
    case "setDepositAmount":
      if (isNaN(action.payload) || action.payload <= 0) {
        return {
          ...state,
          depositAmount: action.payload,
          depositError: "Invalid amount",
        };
      }
      return { ...state, depositAmount: action.payload, depositError: "" };
    case "setWithdrawAmount":
      if (isNaN(action.payload) || action.payload <= 0) {
        return {
          ...state,
          withdrawAmount: action.payload,
          withdrawError: "Invalid amount",
        };
      }
      return { ...state, withdrawAmount: action.payload, withdrawError: "" };
    case "setLoanAmount":
      if (isNaN(action.payload) || action.payload <= 0) {
        return {
          ...state,
          loanAmount: action.payload,
          loanError: "Invalid amount",
        };
      }
      return { ...state, loanAmount: action.payload, loanError: "" };
    case "close":
      if (loan !== 0) {
        toast.error("Loan must be payed to close account");
        return state;
      } else if (balance !== 0) {
        toast.error("Balance must be 0 to close account");
        return state;
      }
      return { ...state, account: "closed" };
    default:
      return state;
  }
};
