async function fetchCharacter(id) {

    const response = await fetch(`/api/characters/${id}`);

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return response.json().then(data => data)
}

export default fetchCharacter