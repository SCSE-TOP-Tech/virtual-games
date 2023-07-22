export async function fetchUser() {
  const sessionPromise = await fetch("/api/session");
  const sessionData = await sessionPromise.json();

  if (sessionData.authenticated) {
    return sessionData.body;
  } else {
    return null;
  }
}
