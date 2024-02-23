import { identity } from "deso-protocol";
import { useContext, useState } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";
import { Link } from "react-router-dom";
import { getDisplayName,shortenAddress } from "../helpers";

export const Nav = () => {
  const { currentUser, isLoading } = useContext(DeSoIdentityContext);
  const [logoutModal, setLogooutModal] = useState(false)

  // BC1YLhLeffbyiBkHHgzTLbuEZTMFHCT3a4GCJvWpJPgpji6vq1GyrxP

//   function shortenAddress(address) {
//     // Check if the address is valid
//     if (!address || address.length !== 42) {
//         return "Invalid Address";
//     }
//     // Shorten the address
//     return address.slice(0, 6) + "..." + address.slice(-4);
// }

  // console.log(currentUser)


  return (
    <>
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/sign-and-submit-tx">Sign and Submit Transaction</Link>
      <Link to="switch-account">Switch Accounts</Link>
      <div className="main-nav__user-actions">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
                {!currentUser && (
                  <button onClick={() => identity.login()}>Login</button>
              )}


                {!!currentUser && (
                  <div>
                      <button className="main-nav__username" onClick={() => setLogooutModal(true)}>
                          {currentUser.PublicKeyBase58Check.slice(0, 6) +
                              '...' +
                              currentUser.PublicKeyBase58Check.slice(-4)}
                      </button>
                  
                  </div>
              ) }   
              
              {/* MODAL */}
                  {/* {logoutModal && (
            <div className="flex flex-col border z-20">
                <button onClick={() => identity.login()} className="">Add an account</button>
                <button onClick={() => identity.logout()}>Logout</button>
            </div>
        )} */}
{/* 
            {!!currentUser && (
              <span className="main-nav__username">
                {     currentUser.PublicKeyBase58Check.slice(0, 6) +
              '...' +
              currentUser.PublicKeyBase58Check.slice(-4)}
              </span>
            )}

              
              <div>

                {!!currentUser && (
                  <>
               <button onClick={() => identity.login()}>Add an account</button>

              <button onClick={() => identity.logout()}>Logout</button>
                  </>
              )}
              </div> */}
          </>
        )}

      </div>
      </nav>
      <div className="flex justify-end z-10">

                {logoutModal && (
                  <div className="flex flex-col border m-2">
                <button onClick={() => identity.login()} className="">Add an account</button>
                <button onClick={() => identity.logout()}>Logout</button>
            </div>
        )}
        </div>
      </>
  );
};
