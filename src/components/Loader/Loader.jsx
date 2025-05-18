import { ClipLoader } from "react-spinners";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader size={120} color="#3498db" />
    </div>
  );
};

export default Loader;
