# Bank Account State Management with `useReducer`

## Overview

This project is a simplified implementation of a bank account system using React's `useReducer` hook. The main goal is to demonstrate state management through various account operations such as opening an account, depositing money, withdrawing funds, requesting a loan, paying off a loan, and closing the account.

The project simulates how a bank account works by modeling transitions and constraints through a reducer function, adhering to specific business logic and conditions.

## Features

- **Open Account:** Users can open an account with an initial deposit of at least $500. The account becomes active once opened.
- **Deposit:** Users can deposit funds if the account is active.
- **Withdraw:** Users can withdraw money if the account is active.
- **Request Loan:** Users can request a loan if no loan is currently active. The loan amount is added to the account balance.
- **Pay Loan:** Users can pay off an active loan. The loan amount is subtracted from the balance.
- **Close Account:** The account can only be closed if there is no active loan and the balance is zero. Closing the account deactivates it and resets the state to the initial values.

## State Transitions

The application models the following state transitions:

1. **`openAccount`**: Activates the account with a minimum balance of $500.
2. **`deposit`**: Adds funds to the account.
3. **`withdraw`**: Removes funds from the account.
4. **`requestLoan`**: Adds the loan amount to the balance if no active loan exists.
5. **`payLoan`**: Subtracts the loan amount from the balance and sets the loan state back to zero.
6. **`closeAccount`**: Deactivates the account, resets the state, and withdraws all remaining funds if no loan is active and the balance is zero.

## Business Logic

- **Account Activation:** All actions, except for opening the account, can only be performed if the account is active.
- **Loan Management:** A loan can only be requested if there is no active loan. Paying off a loan will reduce the balance, and loans must be paid off before the account can be closed.
- **Account Closure:** The account can only be closed if there are no active loans and the balance is zero.

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/javiervargas02/useReducer-bank-account.git
   ```

2. Navigate to the project directory:

   ```bash
   useReducer-bank-account
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
