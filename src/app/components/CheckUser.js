/**
 * This function only works on the client-side after rendering.
 * @returns User ID
 */
const checkUser = () => {
  const userId = localStorage.getItem("userId")
  console.log("User ID: ", userId);

  if(userId)
    return userId;
  return ""
};

export default checkUser;
