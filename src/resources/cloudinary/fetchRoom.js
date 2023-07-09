async function fetchRoom(id, isCharacter) {
  const response = isCharacter
    ? await fetch(`/api/characters/${id}`)
    : await fetch(`/api/rooms/${id}`);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = response.json();

  return isCharacter ? data.then((character) => character.room) : data;
}

export default fetchRoom;
