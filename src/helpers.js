export const getDisplayName = (user) =>
   user.ProfileEntryResponse?.Username ?? user.PublicKeyBase58Check;

// export const shortenAddress = (address) => {
//    // Check if the address is valid
//    if (!address || address.length !== 55) {
//       return 'Invalid Address';
//    }
//    // Shorten the address
//    return address.slice(0, 6) + '...' + address.slice(-4);
// };

// export const shortenAddress = (address) => {
//    // Check if the address is valid
//    if (!address || address.length !== 55) {
//       return 'Invalid Address';
//    }

//    // Attempt to access the "ProfileEntryResponse" and "Username"
//    const username = address.ProfileEntryResponse?.Username;

//    console.log(username);
//    // If "Username" exists, return it
//    if (username) {
//       return username;
//    }

//    // Otherwise, return the shortened version of "PublicKeyBase58Check"
//    return (
//       address.PublicKeyBase58Check.slice(0, 6) +
//       '...' +
//       address.PublicKeyBase58Check.slice(-4)
//    );
// };
