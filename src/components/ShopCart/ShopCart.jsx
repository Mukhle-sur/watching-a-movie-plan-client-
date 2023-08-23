import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ShopCart = ({ shop }) => {
  const { title, price, rating, description, image } = shop;
  console.log(shop);
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[600px]">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="w-32">
          <Rating value={rating} readOnly></Rating>
        </p>
        <p> {price}</p>
        <div className="card-actions justify-end">
          <Link
            to={"/signIn"}
            className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
