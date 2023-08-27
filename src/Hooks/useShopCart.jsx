import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";


const useShopCart = () => {
  const { user } = useAuth();
  const { refetch, data: addPackage = [] } = useQuery({
    queryKey: ["addClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/userAddPackage?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [addPackage, refetch];
};

export default useShopCart;
