

export const GetRandomQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
}