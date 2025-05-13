import Navigation from "../Navigation/Navigation";
import SvgLogo from "../SvgLogo/SvgLogo";
import Container from "../Container/Container";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <SvgLogo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
