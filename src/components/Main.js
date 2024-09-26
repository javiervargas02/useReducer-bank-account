import { useReducer } from "react";
import Button from "./Button";
import AccountInformation from "./AccountInformation";
import { reducer } from "../utils/reducer";
import Amounts from "./Amounts";

const initialState = {
  balance: 0,
  loan: 0,
  account: "closed",
  withdrawAmount: 50,
  depositAmount: 100,
  loanAmount: 5000,
  depositError: "",
  withdrawError: "",
  loanError: "",
};

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    balance,
    loan,
    account,
    withdrawAmount,
    depositAmount,
    loanAmount,
    depositError,
    loanError,
    withdrawError,
  } = state;

  return (
    <main className="w-full flex flex-col space-y-4 md:max-w-xl md:mx-auto">
      <Amounts dispatch={dispatch} state={state} />
      <div className="border-2 border-white w-full rounded-full opacity-10" />
      <AccountInformation balance={balance} loan={loan} />
      <div className="border-2 border-white w-full rounded-full opacity-10" />
      <div className="space-y-4">
        <Button
          dispatch={() => dispatch({ type: "open" })}
          disabled={account === "open"}>
          Open Account
        </Button>
        <Button
          dispatch={() => dispatch({ type: "deposit" })}
          disabled={account === "closed" || depositError}>
          Deposit {isNaN(depositAmount) ? 0 : depositAmount}
        </Button>
        <Button
          dispatch={() => dispatch({ type: "withdraw" })}
          disabled={
            account === "closed" || balance < withdrawAmount || withdrawError
          }>
          Withdraw {isNaN(withdrawAmount) ? 0 : withdrawAmount}
        </Button>
        <Button
          dispatch={() => dispatch({ type: "loan" })}
          disabled={account === "closed" || loan > 0 || loanError}>
          Request Loan of {isNaN(loanAmount) ? 0 : loanAmount}
        </Button>
        <Button
          dispatch={() => dispatch({ type: "pay" })}
          disabled={account === "closed" || loan === 0}>
          Pay Loan
        </Button>
        <Button
          dispatch={() => dispatch({ type: "close" })}
          disabled={account === "closed"}>
          Close Account
        </Button>
      </div>
    </main>
  );
}
