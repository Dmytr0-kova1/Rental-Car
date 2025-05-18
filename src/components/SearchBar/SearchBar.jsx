import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import s from "./SearchBar.module.css";
import { selectBrands } from "../../redux/car/selectors";
import { fetchCars, searchCarBrands } from "../../redux/car/operations";
import { selectFilters } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";

const SearchBar = () => {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();
  const { brand, rentalPrice, minMileage, maxMileage } =
    useSelector(selectFilters);

  useEffect(() => {
    dispatch(searchCarBrands());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCars());
  };

  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Car brand
          <select
            className={s.select}
            name="brand"
            value={brand}
            onChange={handleChange}
          >
            <option value="">Choose a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label className={s.label}>
          Price/ 1 hour
          <select
            className={s.select}
            name="rentalPrice"
            value={rentalPrice}
            onChange={handleChange}
          >
            <option value="">Choose a price</option>
            {[30, 40, 50, 60, 70, 80].map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </label>

        <div className={s.containerInput}>
          <p className={s.label}> Сar mileage / km</p>
          <div className={s.mileageGroup}>
            <label className={s.label}>
              <input
                className={s.inputLeft}
                type="number"
                name="minMileage"
                value={minMileage}
                onChange={handleChange}
                placeholder="From"
              />
            </label>
            <label className={s.label}>
              <input
                className={s.inputRight}
                type="number"
                name="maxMileage"
                value={maxMileage}
                onChange={handleChange}
                placeholder="To"
              />
            </label>
          </div>
        </div>

        <div className={s.containerBtn}>
          <button className={s.btn}>Search</button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
