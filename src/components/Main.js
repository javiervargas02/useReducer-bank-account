import { useReducer } from "react";
import Button from "./Button";
import AccountInformation from "./AccountInformation";
import { reducer } from "../utils/reducer";

const initialState = {
  balance: 0,
  loan: 0,
  account: "closed",
};

export default function Main() {
  const [{ balance, loan, account }, dispatch] = useReducer( reducer, initialState );
  return (
    <main className="w-full flex flex-col space-y-4 md:max-w-xl md:mx-auto">
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
          disabled={account === "closed"}>
          Deposit 100
        </Button>
        <Button
          dispatch={() => dispatch({ type: "withdraw" })}
          disabled={account === "closed" || balance === 0}>
          Withdraw 50
        </Button>
        <Button
          dispatch={() => dispatch({ type: "loan" })}
          disabled={account === "closed" || loan === 5000}>
          Request Loan of 5000
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
