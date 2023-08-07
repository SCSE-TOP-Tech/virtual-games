/**
 * This function only works on the client-side after rendering.
 * @returns User ID
 */
const checkUser = () => {
    console.log("User ID: ", localStorage.getItem("userId"));

    return localStorage.getItem("userId");
}

export default checkUser;