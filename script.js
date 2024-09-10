function calculate() {
    const people = document.getElementById('people').value;
    
    if (people <= 0) {
        document.getElementById('result').innerHTML = "Please enter a valid number of people.";
        return;
    }

    // GialloZafferano Recipe for Pesto Alla Genovese (for 4 people)
    const recipe = {
        basil: 50,        // 50g of basil leaves
        parmesan: 35,     // 35g of grated Parmesan cheese
        pecorino: 15,     // 15g of Pecorino cheese
        pineNuts: 8,      // 8g of pine nuts
        garlic: 1,        // 1 clove of garlic
        salt: 0.5,        // 0.5 tsp of coarse salt
        oliveOil: 60      // 60ml of extra virgin olive oil
    };

    // Calculate ingredients per person
    const factor = people / 4;

    const basil = (recipe.basil * factor).toFixed(2);
    const parmesan = (recipe.parmesan * factor).toFixed(2);
    const pecorino = (recipe.pecorino * factor).toFixed(2);
    const pineNuts = (recipe.pineNuts * factor).toFixed(2);
    const garlic = (recipe.garlic * factor).toFixed(2);
    const salt = (recipe.salt * factor).toFixed(2);
    const oliveOil = (recipe.oliveOil * factor).toFixed(2);

    // Display the results
    document.getElementById('result').innerHTML = `
        <h2>Ingredients for ${people} servings:</h2>
        <ul>
            <li>${basil}g of basil leaves</li>
            <li>${parmesan}g of grated Parmesan cheese</li>
            <li>${pecorino}g of Pecorino cheese</li>
            <li>${pineNuts}g of pine nuts</li>
            <li>${garlic} clove(s) of garlic</li>
            <li>${salt} tsp of coarse salt</li>
            <li>${oliveOil} ml of extra virgin olive oil</li>
        </ul>
    `;
}
