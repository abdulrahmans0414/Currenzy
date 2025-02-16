import { useEffect, useState } from "react";

// Many hooks accept optional arguments, but I don't want my hook to take optional arguments.
// My hook will strictly take a `currency` argument (it is required).
function useCurrencyInfo(currency) {

    // This hook will return data, but what will it do with the data?
    // Actually, I want to call an API.
    // We can directly call the API using fetch,
    // but I want the API call to happen only when this hook is loaded or used.
    // For this, we need something that can trigger the API call when the component mounts or unmounts.
    // When a component mounts, its lifecycle is triggered, and for this, we have a hook called `useEffect`.

    // State to store the fetched currency data
    const [data, setData] = useState({});

    // Fetch data from API when the currency changes
    useEffect(() => {
        // API call to get currency data
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) // Convert response to JSON
            .then((res) => setData(res[currency])) // Update state with fetched data
            .catch((error) => {
                console.error("Error fetching currency data:", error); // Handle errors
            });
    }, [currency]); // Re-run effect when currency changes

    // Return the fetched currency data
    return data;
}

export default useCurrencyInfo;