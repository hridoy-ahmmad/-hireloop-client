











const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const serverMutations = async (path, data) => {
    const response = await fetch(
        `${baseUrl}${path}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result
}