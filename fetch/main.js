const logJSONData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataJson = await response.json();
    console.log(dataJson);

    if (!response.ok) {
      throw new Error(`Error Code: ${response.status} Error Message: It Broken`);
    }

  } catch (err) {
    console.error('Error:', err.message);
  }
};

logJSONData();

const logPokeData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const dataJson = await response.json();
    console.log(dataJson);
  } catch (err) {
    console.error(err);
  }
};

logPokeData();
