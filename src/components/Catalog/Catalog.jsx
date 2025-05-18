import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorite/slice";
import { selectAllFavorites } from "../../redux/favorite/selectors";
import icon from "../../img/icons.svg";
import s from "./Catalog.module.css";

const imgDefault =
  "https://img.freepik.com/premium-vector/modern-car-vector-sketch-illustration-auto-hand-drawing_231873-6893.jpg";

const Catalog = ({
  id,
  img,
  description,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectAllFavorites);

  const isFavorite = favorites.some((item) => item.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          id,
          img,
          description,
          brand,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        })
      );
    }
  };

  const getCityAndCountry = (address) => {
    const parts = address.split(",");
    const city = parts[1].trim();
    const country = parts[2].trim();
    return { city, country };
  };

  const { city, country } = getCityAndCountry(address);

  return (
    <li className={s.item}>
      <button className={s.btnSvg} onClick={handleFavoriteClick}>
        {
          <svg className={s.svg} width="16" height="15">
            {!isFavorite ? (
              <use href={`${icon}#icon-like`} />
            ) : (
              <use className={s.svgBlue} href={`${icon}#icon-like-blue`} />
            )}
          </svg>
        }
      </button>

      <img className={s.img} src={img || imgDefault} alt={description} />
      <div className={s.container}>
        <h3 className={s.title}>
          {brand}
          <span className={s.span}> {model}</span>,{year}
          <span className={s.price}>${rentalPrice}</span>
        </h3>
        <div className={s.containerText}>
          <p className={s.text}>{city}</p>
          <p className={s.text}>{country}</p>
          <p className={s.text}>{rentalCompany}</p>
          <p className={s.text}>{type}</p>
          <p className={s.text}>{mileage}km</p>
        </div>
      </div>

      <button className={s.btn}>Read more</button>
    </li>
  );
};

export default Catalog;
