import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import CarCard from "../../components/CarCard/CarCard";

import { searchCar } from "../../redux/car/operations";
import { selectIsLoading, selectSelectedCar } from "../../redux/car/selectors";

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(searchCar(id));
  }, [dispatch, id]);

  return <section>{isLoading ? <Loader /> : <CarCard car={car} />}</section>;
};

export default CarDetailsPage;
