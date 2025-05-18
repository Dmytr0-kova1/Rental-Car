import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorite/slice";
import { selectAllFavorites } from "../../redux/favorite/selectors";
import icon from "../../img/icons.svg";
import s from "./Catalog.module.css";
import { useNavigate } from "react-router-dom";
import { imgDefault } from "../../utils/imgDefault";
import { formatMileage } from "../../utils/formatMileage";
import { getCityAndCountry } from "../../utils/getCityAndCountry";

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
  const navigete = useNavigate();

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

  const { city, country } = getCityAndCountry(address);

  const handleClick = () => {
    navigete(`/catalog/${id}`);
  };

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
        <h2 className={s.title}>
          {brand}
          <span className={s.span}> {model}</span>,{year}
          <span className={s.price}>${rentalPrice}</span>
        </h2>
        <div className={s.containerText}>
          <p className={s.text}>{city}</p>
          <p className={s.text}>{country}</p>
          <p className={s.text}>{rentalCompany}</p>
          <p className={s.text}>{type}</p>
          <p className={s.text}>{formatMileage(mileage)}km</p>
        </div>
      </div>

      <button className={s.btn} onClick={handleClick}>
        Read more
      </button>
    </li>
  );
};

export default Catalog;
