import { BsArrowRight } from "react-icons/bs";
import {useLocation, useNavigate } from "react-router-dom";
import cardBg from "../../assets/Molti-background.jpg";
import useAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

let bannerBackground = {
  backgroundImage: `url(${cardBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AnotherShopCart = ({ singlePack }) => {
  const { name, price, date, _id } = singlePack;
  const { user } = useAuth;
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (singlePack) => {
    console.log(singlePack);
    if (user) {
      const cartItem = { shopId: _id, price, email: user?.email };
      console.log(cartItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("this Package is added");
          }
        });
    } else {
      Swal.fire({
        title: "Add to This Package ? Please Login",
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

  return (
    <div
      style={bannerBackground}
      className="text-center p-7 tem w-80 text-white rounded-lg  effect"
    >
      <div>
        <h4 className="text-sm uppercase font-bold mb-3">{name}</h4>
        <p className="text-[50px] font-extrabold">$ {price}</p>
        <p className="text-base font-medium">{date}</p>
        <button
          onClick={() => handleAddToCart(singlePack)}
          className="inline-flex items-center gap-1 text-[#ff8057] text-sm font-semibold md:font-bold bg-white rounded-md py-2 md:py-3 px-4 md:px-6 hover-btn mt-3 shadow-[0px 15px 30px -9px rgba(0,0,0,0.3)]"
        >
          Add To Cart <BsArrowRight size={16}></BsArrowRight>
        </button>
      </div>
    </div>
  );
};

export default AnotherShopCart;
