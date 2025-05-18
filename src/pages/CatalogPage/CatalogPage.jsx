import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./CatalogPage.module.css";
import Catalog from "../../components/Catalog/Catalog";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";

import { selectCars, selectIsLoading } from "../../redux/car/selectors";
import { fetchCars } from "../../redux/car/operations";
import { clearCars, incrementPage, resetPage } from "../../redux/car/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetPage());
    dispatch(clearCars());
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCars());
  };

  return (
    <section>
      <Container>
        <SearchBar />
        {isLoading ? (
          <Loader />
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

        {!isLoading && (
          <div className={s.containerBtm}>
            <button onClick={handleLoadMore} className={s.btn}>
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
