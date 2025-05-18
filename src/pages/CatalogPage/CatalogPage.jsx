import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import s from "./CatalogPage.module.css";
import Catalog from "../../components/Catalog/Catalog";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import { selectCars, selectIsLoading } from "../../redux/car/selectors";
import { fetchCars } from "../../redux/car/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars);

  return (
    <section>
      <Container>
        <SearchBar />
        {isLoading ? (
          <div className={s.loader}>
            <ClipLoader size={100} color="#3498db" />
          </div>
        ) : (
          <ul className={s.list}>
            {cars.map((car) => (
              <Catalog
                key={car.id}
                id={car.id}
                description={car.description}
                img={car.img}
                brand={car.brand}
                model={car.model}
                year={car.year}
                rentalPrice={car.rentalPrice}
                address={car.address}
                rentalCompany={car.rentalCompany}
                type={car.type}
                mileage={car.mileage}
              />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
