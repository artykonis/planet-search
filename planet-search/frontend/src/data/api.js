export const computeResult = async (address, planet) => {
    const requestBody = {
        address,
        planet
    };

    try {
        const response = await fetch(`/compute_result`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error:', error)
    }
}
