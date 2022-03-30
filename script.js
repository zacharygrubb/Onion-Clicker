const onion = document.querySelector('#onion');
const onionTotal = document.querySelector('#onion-total');
const clickCounter = document.querySelector('#click-counter');
const reinforcedMouse = document.querySelector('#upgrades-reinforcedmouse');
const doubleClick = document.querySelector('#upgrades-doubleclick');
const grippyGloves = document.querySelector('#upgrades-grippygloves');
const saferPestisides = document.querySelector('#upgrades-saferpestisides');
const pitStops = document.querySelector('#upgrades-pitstops');
const farmersMarkets = document.querySelector('#upgrades-farmersmarkets');
const seasonalContracts = document.querySelector('#upgrades-seasonalcontracts');
const onionFarmer = document.querySelector('#buildings-onion-farmer');
const onionFarmerPrice = document.querySelector('#onion-farmer-price');
const onionFarmerCount = document.querySelector('#onion-farmer-count');
const buildingOpsFarmer = document.querySelector('#building-ops-farmer');
const onionField = document.querySelector('#buildings-onion-field');
const onionFieldPrice = document.querySelector('#onion-field-price');
const onionFieldCount = document.querySelector('#onion-field-count');
const buildingOpsField = document.querySelector('#building-ops-field');
const onionTruck = document.querySelector('#buildings-onion-truck');
const onionTruckPrice = document.querySelector('#onion-truck-price');
const onionTruckCount = document.querySelector('#onion-truck-count');
const buildingOpsTruck = document.querySelector('#building-ops-truck');
const onionStore = document.querySelector('#buildings-onion-store');
const onionStorePrice = document.querySelector('#onion-store-price');
const onionStoreCount = document.querySelector('#onion-store-count');
const buildingOpsStore = document.querySelector('#building-ops-store');
const onionMlm = document.querySelector('#buildings-onion-mlm');
const onionMlmPrice = document.querySelector('#onion-mlm-price');
const onionMlmCount = document.querySelector('#onion-mlm-count');
const buildingOpsMlm = document.querySelector('#building-ops-mlm');
const onionPrinter = document.querySelector('#buildings-onion-printer');
const onionPrinterPrice = document.querySelector('#onion-printer-price');
const onionPrinterCount = document.querySelector('#onion-printer-count');
const buildingOpsPrinter = document.querySelector('#building-ops-printer');
const onionRepublic = document.querySelector('#buildings-onion-republic');
const onionRepublicPrice = document.querySelector('#onion-republic-price');
const onionRepublicCount = document.querySelector('#onion-republic-count');
const buildingOpsRepublic = document.querySelector('#building-ops-republic');

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

function buyBuildingSet(index) {
    if (index == 0) {
        setInterval(onionFarmerEffect, 100);
    }
    if (index == 1) {
        setInterval(onionFieldEffect, 100);
    }
    if (index == 2) {
        setInterval(onionTruckEffect, 100);
    }
    if (index == 3) {
        setInterval(onionStoreEffect, 100);
    }
    if (index == 4) {
        setInterval(onionMlmEffect, 100);
    }
    if (index == 5) {
        setInterval(onionPrinterEffect, 100);
    }
    if (index == 6) {
        setInterval(onionRepublicEffect, 100);
    }
}

function onionFarmerEffect() {
    onionFinalCalc = onionFinalCalc + onionFarmerPower * buildings.start[0];
}
function onionFieldEffect() {
    onionFinalCalc = onionFinalCalc + onionFieldPower * buildings.start[1];
}
function onionTruckEffect() {
    onionFinalCalc = onionFinalCalc + onionTruckPower * buildings.start[2];
}
function onionStoreEffect() {
    onionFinalCalc = onionFinalCalc + onionStorePower * buildings.start[3];
}
function onionMlmEffect() {
    onionFinalCalc = onionFinalCalc + onionMlmPower * buildings.start[4];
}
function onionPrinterEffect() {
    onionFinalCalc = onionFinalCalc + onionPrinterPower * buildings.start[5];
}
function onionRepublicEffect() {
    onionFinalCalc = onionFinalCalc + onionRepublicPower * buildings.start[6];
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