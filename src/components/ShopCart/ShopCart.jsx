import { Rating } from "@smastrom/react-rating";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useShopCart from "../../Hooks/useShopCart";

const ShopCart = ({ item }) => {
  const { title, price, rating, description, image, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useShopCart();

  const handleAddToCart = () => {
    const addPackage = {
      addShopPack: _id,
      image,
      price,
      email: user?.email,
      title,
    };
    if (user) {
      fetch("http://localhost:5000/userAddPackage", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addPackage),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Your Package is Added to Cart");
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Buy This Package ? Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: { from: location } });
        }
      });
    }
  };

  //   console.log(item);
  //   if (user) {
  //     const cartItem = { shopId: _id, price, image, email: user?.email };
  //     console.log(cartItem);
  //     fetch("http://localhost:5000/carts", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(cartItem),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           toast.success("this Package is added");
  //         }
  //       });
  //   } else {
  //     Swal.fire({
  //       title: "Add to This Package ? Please Login",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, Login",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/SignIn", { state: { from: location } });
  //       }
  //     });
  //   }
  // };
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[600px]">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h5 className="text-base font-medium">{description}</h5>
        <p className="w-32">
          <Rating value={rating} readOnly></Rating>
        </p>
        <h4 className="text-lg font-semibold">${price}</h4>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="flex items-center gap-1 text-white text-sm font-semibold md:font-bold bg-gradient-to-r from-[#FF8057] to-[#ff5c26] rounded-md py-2 md:py-3 px-4 md:px-6"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
