import { useNavigate } from "react-router-dom";

import s from "./HomePage.module.css";

const HomePage = () => {
  const navigete = useNavigate();

  const handleClick = () => {
    navigete("/catalog");
  };

  return (
    <section className={s.content}>
      <div className={s.container}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={s.btn} onClick={handleClick}>
          View Catalog
        </button>
      </div>
    </section>
  );
};

export default HomePage;
