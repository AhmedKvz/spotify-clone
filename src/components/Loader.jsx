import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1>{title}</h1>
    <img src={loader} alt="loading..." />
  </div>
);

export default Loader;
