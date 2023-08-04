export async function fetchUser() {
  try {
    console.log('Try fetchUser()');
    const sessionPromise = await fetch("/api/session");
    const sessionData = await sessionPromise.json();
    const userData = sessionData.body.account.user;

    if (sessionData.authenticated) {
      return { userId: userData.id, stateId: userData.stateID };
    } else {
      return null;
    }
  } catch (e) {
    console.log(e)
    return null;
  }
}
