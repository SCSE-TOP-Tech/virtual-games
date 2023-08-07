/**
 * This function only works on the client-side after rendering.
 * @returns User ID and ID
 */
const checkUser = () => {
    console.log("User ID: ", localStorage.getItem("userId"));
    console.log("ID: ", localStorage.getItem("id"));

    return {
        userId: localStorage.getItem("userId"),
        id: localStorage.getItem("id")
    }
}

export default checkUser;