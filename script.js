// Get the price elements
const napthaPriceElement = document.getElementById('napthaPrice');
const benzenePriceElement = document.getElementById('benzenePrice');
const chlorinePriceElement = document.getElementById('chlorinePrice');
const ammoniaPriceElement = document.getElementById('ammoniaPrice');
const coloringAgentPriceElement = document.getElementById('coloringAgentPrice');
const antioxidantPriceElement = document.getElementById('antioxidantPrice');
const catalystPriceElement = document.getElementById('catalystPrice');
const vaPriceElement = document.getElementById('vaPrice');

// Function to generate a random price change
function generateRandomPriceChange(price) {
  // Generate a random percentage change between -5% and 5%
  const changePercentage = (Math.random() * 10) - 2;
  return price * (1 + changePercentage / 100);
}

// Update prices every 2 seconds
setInterval(() => {
  napthaPriceElement.textContent = generateRandomPriceChange(parseFloat(napthaPriceElement.textContent)).toFixed(2) + ' KRW/KG';
  benzenePriceElement.textContent = generateRandomPriceChange(parseFloat(benzenePriceElement.textContent)).toFixed(2) + ' KRW/KG';
  chlorinePriceElement.textContent = generateRandomPriceChange(parseFloat(chlorinePriceElement.textContent)).toFixed(2) + ' KRW/KG';
  ammoniaPriceElement.textContent = generateRandomPriceChange(parseFloat(ammoniaPriceElement.textContent)).toFixed(2) + ' KRW/KG';
  coloringAgentPriceElement.textContent = generateRandomPriceChange(parseFloat(coloringAgentPriceElement.textContent)).toFixed(2) + ' KRW/KG';
  antioxidantPriceElement.textContent = generateRandomPriceChange(parseFloat(antioxidantPriceElement.textContent)).toFixed(2) + ' KRW/KG';
  catalystPriceElement.textContent = generateRandomPriceChange(parseFloat(catalystPriceElement.textContent)).toFixed(2) + ' KRW/KG';
  vaPriceElement.textContent = generateRandomPriceChange(parseFloat(vaPriceElement.textContent)).toFixed(2) + ' KRW/KG';
}, 5000); // Update every 2 seconds