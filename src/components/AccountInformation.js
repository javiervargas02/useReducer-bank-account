export default function AccountInformation({ balance, loan }) {
  return (
    <div className="space-y-4">
      <p className="text-white text-xl md:text-2xl text-center">
        Balance: {balance}
      </p>
      <p className="text-white text-xl md:text-2xl text-center">Loan: {loan}</p>
    </div>
  );
}
