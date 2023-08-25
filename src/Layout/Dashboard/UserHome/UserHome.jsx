import useAuth from "../../../Hooks/UseAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full h-full p-8">
      <h2 className="text-4xl font-bold">
        HI WELCOME BACK! {user?.displayName}
      </h2>
    </div>
  );
};

export default UserHome;
