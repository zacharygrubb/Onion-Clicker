let onionClicksStart = 1;
let onionClickPower = 10000000;
let onionFinalCalc = 0;
let onionFinalCalcDisplay = 0;
let onionFarmerPower = 0.1;
let onionFieldPower = 0.8;
let onionTruckPower = 7.5;
let onionStorePower = 53.0;
let onionMlmPower = 600.0;
let onionPrinterPower = 5200.0;
let onionRepublicPower = 36000.0;


const upgrades = {
    names : ['Reinforced Mouse', 'Double Click', 'Grippy Gloves', 'Safer Pestisides', 'Pit Stops', 'Farmers Markets', 'Seasonal Contracts'],
    costs : [100, 500, 1000, 60000, 700000, 8000000, 80000],
    start : [false, false, false, false, false, false, false],
    visible : [false, false, false, false, false, false, false]
};

const buildings = {
    names : ['Onion Farmer', 'Onion Field', 'Onion Truck', 'Onion Store', 'Onion MLM', 'Onion Printer', 'Onion Republic'],
    costs : [100, 1500, 17000, 200000, 3000000, 40000000, 500000000],
    start : [0, 0, 0, 0, 0, 0, 0],
    set : [false, false, false, false, false, false, false],
    price : [onionFarmerPrice, onionFieldPrice, onionTruckPrice, onionStorePrice, onionMlmPrice, onionPrinterPrice, onionRepublicPrice],
    count : [0, 0, 0, 0, 0, 0, 0]
};

function buyBuilding(index) {
    if ((buildings.costs[index] <= onionFinalCalc) && (buildings.set[index] == false)){
        onionFinalCalc -= buildings.costs[index];
        buildings.costs[index] = buildings.costs[index] * 1.15;
        onionTotal.textContent = `${onionFinalCalc} onions clicked`;
        buildings.start[index] = buildings.start[index] + 1;
        buildings.count[index] = buildings.count[index] + 1;
        buyBuildingSet(index);
        statsDisplay();
        buildings.set[index] = true;
    } else if ((buildings.costs[index] <= onionFinalCalc) && (buildings.set)) {
        onionFinalCalc -= buildings.costs[index];
        buildings.costs[index] = buildings.costs[index] * 1.15;
        buildings.start[index] = buildings.start[index] + 1;
        buildings.count[index] = buildings.count[index] + 1;
        statsDisplay();
    } else {
        alert('get your money up');
    }
}

function onionClickCounter() {
    let onionClicksAll = onionClicksStart++;
    clickCounter.textContent = `${onionClicksAll} onions clicked`;
    statsDisplay();
}

function onionFinal(onionAdd) {
    onionFinalCalc = onionFinalCalc + onionAdd;
}

onion.addEventListener('click', onionClickCounter);
onion.addEventListener('click', function () { 
    onionFinal(onionClickPower); });
onionFarmer.addEventListener('click', function () { 
    buyBuilding(0); });
onionField.addEventListener('click', function () { 
    buyBuilding(1); });
onionTruck.addEventListener('click', function () { 
    buyBuilding(2); });
onionStore.addEventListener('click', function () { 
    buyBuilding(3); });
onionMlm.addEventListener('click', function () { 
    buyBuilding(4); });
onionPrinter.addEventListener('click', function () { 
    buyBuilding(5); });
onionRepublic.addEventListener('click', function () { 
    buyBuilding(6); });