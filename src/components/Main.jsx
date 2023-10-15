import Logo from "../assets/images/logo.svg";
import { Form } from "./Form";

export default function Main() {
  return (
    <main>
      <img src={Logo} alt="logo" className="logo" />
      <Form />
    </main>
  );
}
