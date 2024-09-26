import AmountInput from "./AmountInput";

export default function Amounts({ dispatch, state }) {
  return (
    <div className="space-y-4">
      <AmountInput
        label="Deposit"
        type={"setDepositAmount"}
        value={state.depositAmount}
        dispatch={dispatch}
        error={state.depositError}
        disabled={state.account === "closed"}
      />
      <AmountInput
        label="Withdraw"
        type={"setWithdrawAmount"}
        value={state.withdrawAmount}
        dispatch={dispatch}
        error={state.withdrawError}
        disabled={state.account === "closed"}
      />
      <AmountInput
        label="Loan"
        type={"setLoanAmount"}
        value={state.loanAmount}
        dispatch={dispatch}
        error={state.loanError}
        disabled={state.account === "closed"}
      />
    </div>
  );
}
