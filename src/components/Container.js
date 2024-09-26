export default function Container({ children }) {
  return (
    <main className="inset-0 -z-10 w-full min-h-screen items-center px-4 py-12 space-y-8 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {children}
    </main>
  );
}
