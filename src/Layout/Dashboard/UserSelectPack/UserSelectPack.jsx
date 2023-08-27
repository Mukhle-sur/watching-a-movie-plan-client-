import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useShopCart from "../../../Hooks/useShopCart";

const UserSelectPack = () => {
  const [addPackage, refetch] = useShopCart();
  const totalPrice = addPackage.reduce((sum, item) => item.price + sum, 0);
  const total = parseFloat(totalPrice.toFixed(2));

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Package Is Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/userAddPackage/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full h-full p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold mb-5">
          Total Selected Package : {addPackage?.length}
        </h3>
        <h3 className="text-3xl font-bold mb-5">Total Price : $ {total}</h3>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-black">
            <tr>
              <th>##</th>
              <th>Package Image</th>
              <th>Package Name</th>
              <th>PRICE</th>
              <th>Payment</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {addPackage
              .filter((booked) => booked.paid !== "paid")
              .map((item, index) => (
                <tr key={item._id}>
                  <td className="text-lg font-bold">{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image || item?.name}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-lg font-medium">
                    {item?.name || item?.title}
                  </td>
                  <td className="text-lg font-medium ">$ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button className="btn btn-outline btn-sm">Pay</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-md bg-[#B91C1C] text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default UserSelectPack;
