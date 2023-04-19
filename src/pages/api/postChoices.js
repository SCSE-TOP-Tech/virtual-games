export default async function postChoices() {
    const response = await fetch("/api/choices", {
        method: "POST",
        body: JSON.stringify({
            // Input data fields 
            // id,
            // price,
            // description,
            // title,
        }),
    });
    const data = response.json();

    return data; 
}