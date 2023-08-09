export default async function fetchUserInfo(userId: string) {
  try {
    const res = await fetch("/api/fetch/user", {
      method: "POST",
      body: JSON.stringify(userId),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.status == 200) {
        return data.body;
      } else {
        return null;
      }
    } else {
      //error
      return null;
    }
  } catch ({ name, message }) {
    console.log(`${name} : ${message}`);
  }
}