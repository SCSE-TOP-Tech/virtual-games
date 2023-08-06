export async function fetchUser() {
  try {
    console.log("Try fetchUser");
    const sessionPromise = await fetch("/api/session");
    const sessionData = await sessionPromise.json();
    const userData = sessionData.body.account.user;

    if (sessionData.authenticated) {
      return {
        id: userData.id,
        name: userData.name,
        stateID: userData.stateID,
        transitionID: userData.transitionID,
      };
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}
