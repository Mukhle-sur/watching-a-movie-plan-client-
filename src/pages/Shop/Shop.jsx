import { useEffect, useState } from "react";
import ShopCart from "../../components/ShopCart/ShopCart";

const Shop = () => {
  const [shops, setShops] = useState([]);
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/shops")
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
      });
  }, []);
  return (
    <div className="container mx-auto flex items-center justify-between gap-5 my-20">
      {shops.map((shop) => (
        <ShopCart key={shop._id} shop={shop}></ShopCart>
      ))}
    </div>
  );
};

export default Shop;
