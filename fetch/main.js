const logJSONData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`Error Code: ${response.status} Error Message: It Broken`);
    const dataJson = await response.json();
    console.log(dataJson);
  } catch (err) {
    console.error('Error:', err.message);
  }
};

logJSONData();

const logPokeData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    if (!response.ok) throw new Error(`Error Code: ${response.status} Error Message: It Broken`);
    const dataJson = await response.json();
    console.log(dataJson);
  } catch (err) {
    console.error(err);
  }
};

logPokeData();
