import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}
