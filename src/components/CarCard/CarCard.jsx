import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import s from "./CarCard.module.css";
import icon from "../../img/icons.svg";
import Container from "../Container/Container";

import { formatMileage } from "../../utils/formatMileage";
import { getCityAndCountry } from "../../utils/getCityAndCountry";
import { imgDefault } from "../../utils/imgDefault";

const CarCard = ({ car }) => {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const {
    img,
    description,
    brand,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    rentalConditions,
    fuelConsumption,
    engineSize,
    accessories,
  } = car;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Booking successful!");

    setName("");
    setEmail("");
    setStartDate(null);
    setComment("");
  };

  const { city, country } = getCityAndCountry(address);

  const iconSvg = (
    <svg className={s.svgList} width="16" height="16">
      <use href={`${icon}#icon-check-circle`} />
    </svg>
  );

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <div className={s.containerLeft}>
            <div className={s.containerImg}>
              <img
                className={s.img}
                src={img || imgDefault}
                alt={description}
              />
            </div>
            <div className={s.containerForm}>
              <div className={s.containerTitle}>
                <h2 className={s.titleForm}>Book your car now</h2>
                <p>Stay connected! We are always ready to help you.</p>
              </div>
              <div>
                <form className={s.form} onSubmit={handleSubmit}>
                  <label>
                    <input
                      className={s.input}
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      className={s.input}
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label>
                    <DatePicker
                      className={s.datePicke}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Booking date"
                      dateFormat="yyyy-MM-dd"
                    />
                  </label>
                  <textarea
                    className={s.textarea}
                    value={comment}
                    placeholder="Comment"
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>

                  <button className={s.btn} type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className={s.containerRight}>
            <h2 className={s.titleCar}>
              {brand}
              <span> {model}</span>, {year}
            </h2>
            <div className={s.location}>
              <p>
                <svg className={s.svg} width="16" height="15">
                  <use href={`${icon}#icon-Location`} />
                </svg>
                {city},{country}
              </p>
              <p>Mileage: {formatMileage(mileage)}km</p>
            </div>
            <p className={s.price}>${rentalPrice}</p>
            <p className={s.description}>{description}</p>

            <div className={s.containerList}>
              <div>
                <h3 className={s.title}>Rental Conditions:</h3>
                <ul className={s.list}>
                  <li className={s.item}>
                    {iconSvg} {rentalConditions[0]}
                  </li>
                  <li className={s.item}>
                    {iconSvg} {rentalConditions[1]}
                  </li>
                  <li className={s.item}>
                    {iconSvg} {rentalConditions[2]}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={s.title}>Car Specifications:</h3>
                <ul className={s.list}>
                  <li className={s.item}>
                    <svg className={s.svgList} width="16" height="16">
                      <use href={`${icon}#icon-calendar`} />
                    </svg>
                    Year: {year}
                  </li>
                  <li className={s.item}>
                    <svg className={s.svgList} width="16" height="16">
                      <use href={`${icon}#icon-car`} />
                    </svg>
                    Type: {type}
                  </li>
                  <li className={s.item}>
                    <svg className={s.svgList} width="16" height="16">
                      <use href={`${icon}#icon-check-circle`} />
                    </svg>
                    Fuel Consumption: {fuelConsumption}
                  </li>
                  <li className={s.item}>
                    <svg className={s.svgList} width="16" height="16">
                      <use href={`${icon}#icon-fuel-pump`} />
                    </svg>
                    Engine Size: {engineSize}
                  </li>
                </ul>
              </div>

              {accessories.length > 0 && (
                <div>
                  <h3 className={s.title}>Accessories and functionalities:</h3>
                  <ul className={s.list}>
                    {accessories.map((accessory, index) => (
                      <li key={index} className={s.item}>
                        {iconSvg} {accessory}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </Container>
    </section>
  );
};

export default CarCard;
