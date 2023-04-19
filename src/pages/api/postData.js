export default async function handler(req, res) {
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