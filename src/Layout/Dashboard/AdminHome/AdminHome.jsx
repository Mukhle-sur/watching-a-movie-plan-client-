import { FaUsers, FaWallet } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth";

const AdminHome = () => {
  const { user } = useAuth();

  // const { data: stats = {} } = useQuery({
  //   queryKey: ["admin-stats"],
  //   queryFn: async () => {
  //     const res = await axiosSecure("/admin-stats");
  //     return res.data;
  //   },
  // });
  return (
    <div className="w-full h-full px-8">
      <h2 className="text-3xl font-semibold">
        HI WELCOME BACK! {user?.displayName}
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="py-9 px-14 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-lg flex items-center justify-center gap-6 text-white ">
          <div className="">
            <FaWallet className="w-12 h-12"></FaWallet>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-extrabold">$ 400</h4>
            <h5 className="text-2xl mt-1">Revenue</h5>
          </div>
        </div>
        <div className="py-9 px-14 bg-gradient-to-r from-[#D3A256] to- [#FDE8C0] rounded-lg flex items-center justify-center gap-6 text-white">
          <div className="">
            <FaUsers className="w-12 h-12"></FaUsers>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-extrabold">$500</h4>
            <h5 className="text-2xl mt-1">Customers</h5>
          </div>
        </div>
        <div className="py-9 px-14 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg flex items-center justify-center gap-6 text-white">
          <div className="">
            <FaWallet className="w-12 h-12"></FaWallet>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-extrabold">5111</h4>
            <h5 className="text-2xl mt-1">Products</h5>
          </div>
        </div>
        <div className="py-9 px-14 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg flex items-center justify-center gap-6 text-white">
          <div className="">
            <FaWallet className="w-12 h-12"></FaWallet>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-extrabold">50</h4>
            <h5 className="text-2xl mt-1">Orders</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
