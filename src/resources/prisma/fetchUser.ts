export async function fetchUser() {
  try {
    const sessionPromise = await fetch("/api/session");
    const sessionData = await sessionPromise.json();

    if (sessionData.authenticated) {
      return sessionData.body;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}
