export async function fetchUser() {
  try {
    const sessionPromise = await fetch("/api/session");
    const sessionData = await sessionPromise.json();

    console.log(sessionData);
    const userData = sessionData.body.account.user;

    if (sessionData.authenticated) {
      return { userId: userData.id, stateId: userData.stateID };
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}
