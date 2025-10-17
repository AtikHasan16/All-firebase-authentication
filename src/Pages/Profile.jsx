import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Container from "../Components/Container";
import { toast } from "react-toastify";

const Profile = () => {
  const { currentUser, deleteUserData } = useContext(AuthContext);
  const { displayName, email, reloadUserInfo, photoURL } = currentUser || {};

  const handleDelete = () => {
    deleteUserData()
      .then(() => {
        toast.success("successfully deleted the Account");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <Container className="p-5">
      <div>
        <div className="bg-gray-800  p-10  w-full  rounded-2xl overflow-hidden mx-auto mt-4">
          <div className="flex flex-col items-center">
            <img
              src={photoURL || "https://readymadeui.com/team-5.webp"}
              className="w-60 h-60 rounded-full object-cover"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl text-white font-semibold">
                Name: {displayName}
              </h3>
              <h3 className="text-xl text-white font-semibold">
                Email: {email}
              </h3>
              <p className="text-slate-300 text-base mt-3 leading-relaxed">
                {reloadUserInfo?.lastRefreshAt}
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => handleDelete()}
              className="btn rounded-xl btn-xl  mt-10"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
