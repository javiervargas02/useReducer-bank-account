# Bank Account State Management with `useReducer` (v1.1.0)

## Overview

This project is a simplified implementation of a bank account system using React's `useReducer` hook. It demonstrates state management through various account operations such as opening an account, depositing money, withdrawing funds, requesting a loan, paying off a loan, and closing the account.

### **New in v1.1.0:**

- Users can now input custom amounts for deposits, withdrawals, and loan requests using input fields, all controlled by the `useReducer` hook.
- Inputs and actions are dynamically enabled or disabled based on the current account state and input values.
- Error messages are displayed to guide the user when actions are not allowed, ensuring clarity and preventing confusion.

The project simulates how a bank account works by modeling transitions and constraints through a reducer function, adhering to specific business logic and conditions.

## Features

- **Open Account:** Users can open an account with an initial deposit of at least $500. The account becomes active once opened.
- **Deposit:** Users can input a custom amount to deposit if the account is active.
- **Withdraw:** Users can input a custom amount to withdraw if the account is active.
- **Request Loan:** Users can input a custom loan amount if no loan is currently active. The loan amount is added to the account balance.
- **Pay Loan:** Users can pay off an active loan. The loan amount is subtracted from the balance.
- **Close Account:** The account can only be closed if there is no active loan and the balance is zero. Closing the account deactivates it and resets the state to the initial values.
- **Error Handling:** Error messages guide the user if actions are invalid, such as attempting to request a loan when a loan is already active.

## State Transitions

The application models the following state transitions:

1. **`openAccount`**: Activates the account with a minimum balance of $500.
2. **`deposit`**: Adds custom inputted funds to the account.
3. **`withdraw`**: Removes custom inputted funds from the account.
4. **`requestLoan`**: Adds the custom inputted loan amount to the balance if no active loan exists.
5. **`payLoan`**: Subtracts the loan amount from the balance and sets the loan state back to zero.
6. **`closeAccount`**: Deactivates the account, resets the state, and withdraws all remaining funds if no loan is active and the balance is zero.

## Business Logic

- **Account Activation:** All actions, except for opening the account, can only be performed if the account is active.
- **Loan Management:** A loan can only be requested if there is no active loan. Paying off a loan will reduce the balance, and loans must be paid off before the account can be closed.
- **Account Closure:** The account can only be closed if there are no active loans and the balance is zero.
- **Input Validation:** Inputs for deposit, withdrawal, and loan amounts are enabled or disabled based on the account's state, and error messages are displayed when invalid actions are attempted.

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/javiervargas02/useReducer-bank-account.git
   ```

2. Navigate to the project directory:

   ```bash
   cd useReducer-bank-account
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Future Improvements

- Additional validation for edge cases in account operations, if needed.
- UI enhancements for better user experience.
- Further error message improvements for clearer guidance.
