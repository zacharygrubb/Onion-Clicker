const onion = document.querySelector('#onion');
const onionTotal = document.querySelector('#onion-total');
const onionsPerSecond = document.querySelector('#ops');
const clickCounter = document.querySelector('#click-counter');
const allUpgradeCount = document.querySelector('#all-upgrade-count');
const allBuildingCount = document.querySelector('#all-building-count');
const allOnion = document.querySelector('#onion-alltime');
const reinforcedMouse = document.querySelector('#upgrades-reinforcedmouse');
const doubleClick = document.querySelector('#upgrades-doubleclick');
const grippyGloves = document.querySelector('#upgrades-grippygloves');
const saferPestisides = document.querySelector('#upgrades-saferpestisides');
const pitStops = document.querySelector('#upgrades-pitstops');
const farmersMarkets = document.querySelector('#upgrades-farmersmarkets');
const seasonalContracts = document.querySelector('#upgrades-seasonalcontracts');
const unpaidInternships = document.querySelector('#upgrades-unpaidinternships');
const cyborgFarmers = document.querySelector('#upgrades-cyborgfarmers');
const childLabor = document.querySelector('#upgrades-childlabor');
const gasLighting = document.querySelector('#upgrades-gaslighting');
const onionBush = document.querySelector('#upgrades-onionbush');
const gmos = document.querySelector('#upgrades-gmos');
const heatGeneration = document.querySelector('#upgrades-heatgeneration');
const verticalFarming = document.querySelector('#upgrades-verticalfarming');
const constantMutation = document.querySelector('#upgrades-constantmutation');
const cruiseControl = document.querySelector('#upgrades-cruisecontrol');
const carpalTunnel = document.querySelector('#upgrades-carpaltunnel');
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
const onionBiofuelConverter = document.querySelector('#buildings-onion-biofuel-converter');
const onionBiofuelConverterPrice = document.querySelector('#onion-biofuel-converter-price');
const onionBiofuelConverterCount = document.querySelector('#onion-biofuel-converter-count');
const buildingOpsBiofuelConverter = document.querySelector('#building-ops-biofuel-converter');

let upgradeStart = 0;
let onionAllTime = 0;
let onionClicksStart = 1;
let onionClickPower = 1234567;
let onionFinalCalc = 0;
let onionFinalCalcDisplay = 0;
let onionFarmerPower = 1;
let onionFieldPower = 1;
let onionTruckPower = 8;
let onionStorePower = 53;
let onionMlmPower = 600;
let onionPrinterPower = 5200;
let onionRepublicPower = 36000;
let onionBiofuelConverterPower = 350000;

const upgrades = {
    names : ['Reinforced Mouse', 'Double Click', 'Grippy Gloves', 'Safer Pestisides', 'Pit Stops', 'Farmers Markets', 'Seasonal Contracts', 'Unpaid Internships', 'Cyborg Farmers', 'Child Labor', 'Gaslighting', 'Onion Bush', 'GMOs', 'Heat Generation', 'Vertical Farming', 'Constant Mutation', 'Cruise Control', 'Carpal Tunnel'],
    costs : [100, 500, 1000, 60000, 700000, 8000000, 33000, 200000, 5400000, 11740000000, 19050000000000, 490000, 3000000, 16000000, 170000000000, 285000000000000, 5500000, 5000],
    start : [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    visible : [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
};

const buildings = {
    names : ['Onion Farmer', 'Onion Field', 'Onion Truck', 'Onion Store', 'Onion MLM', 'Onion Printer', 'Onion Republic', 'Onion Biofuel Converter'],
    costs : [100, 1500, 17000, 200000, 3000000, 40000000, 500000000, 6000000000],
    start : [0, 0, 0, 0, 0, 0, 0, 0],
    set : [false, false, false, false, false, false, false, false],
    price : [onionFarmerPrice, onionFieldPrice, onionTruckPrice, onionStorePrice, onionMlmPrice, onionPrinterPrice, onionRepublicPrice, onionBiofuelConverterPrice],
    count : [0, 0, 0, 0, 0, 0, 0, 0]
};

function effectsUpgrade() {
    if (upgrades.start[0]) {
        onionClickPower *= 2;
        console.log('bought reinforced mouse');
        reinforcedMouse.style.display = "none";
        upgrades.start[0] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[1]) {
        onionClickPower *= 2;
        console.log('bought double click');
        doubleClick.style.display = "none";
        upgrades.start[1] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[2]) {
        onionFarmerPower *= 2;
        console.log('bought grippy gloves');
        grippyGloves.style.display = "none";
        upgrades.start[2] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[3]) {
        onionFieldPower *= 2;
        console.log('bought safer pestisides');
        saferPestisides.style.display = "none";
        upgrades.start[3] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[4]) {
        onionTruckPower *= 2;
        console.log('bought pit stops');
        pitStops.style.display = "none";
        upgrades.start[4] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[5]) {
        onionStorePower *= 2;
        console.log('bought farmers markets');
        farmersMarkets.style.display = "none";
        upgrades.start[5] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[6]) {
        onionFarmerPower *= 2;
        console.log('bought seasonal contracts');
        seasonalContracts.style.display = "none";
        upgrades.start[6] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[7]) {
        onionFarmerPower *= 2;
        console.log('bought unpaid internships');
        unpaidInternships.style.display = "none";
        upgrades.start[7] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[8]) {
        onionFarmerPower *= 2;
        console.log('bought cyborg farmers');
        cyborgFarmers.style.display = "none";
        upgrades.start[8] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[9]) {
        onionFarmerPower *= 2;
        console.log('bought child labor');
        childLabor.style.display = "none";
        upgrades.start[9] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[10]) {
        onionFarmerPower *= 2;
        console.log('bought gaslighting');
        gasLighting.style.display = "none";
        upgrades.start[10] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[11]) {
        onionFieldPower *= 2;
        console.log('bought onion bush');
        onionBush.style.display = "none";
        upgrades.start[11] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[12]) {
        onionFieldPower *= 2;
        console.log('bought gmos');
        gmos.style.display = "none";
        upgrades.start[12] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[13]) {
        onionFieldPower *= 2;
        console.log('bought heat generation');
        heatGeneration.style.display = "none";
        upgrades.start[13] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[14]) {
        onionFieldPower *= 2;
        console.log('bought vertical farming');
        verticalFarming.style.display = "none";
        upgrades.start[14] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[15]) {
        onionFieldPower *= 2;
        console.log('bought constant mutation');
        constantMutation.style.display = "none";
        upgrades.start[15] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[16]) {
        onionTruckPower *= 2;
        console.log('bought cruise control');
        cruiseControl.style.display = "none";
        upgrades.start[16] = false;
        upgradeStart += 1;
    }
    if (upgrades.start[17]) {
        onionClickPower *= 2;
        console.log('bought carpal tunnel');
        carpalTunnel.style.display = "none";
        upgrades.start[17] = false;
        upgradeStart += 1;
    }
}

function buyUpgrade(index) {
    if (upgrades.costs[index] <= onionFinalCalc) {
        onionFinalCalc -= upgrades.costs[index];
        upgrades.start[index] = true;
        onionTotal.textContent = `${onionFinalCalc} onions clicked`;
        effectsUpgrade();
        statsDisplay();
    } else {
        alert('get your money up')
    }
}

function buyBuilding(index) {
    if ((buildings.costs[index] <= onionFinalCalc) && (buildings.set[index] == false)){
        onionFinalCalc -= buildings.costs[index];
        buildings.costs[index] = Math.round(buildings.costs[index] * 1.15);
        onionTotal.textContent = `${onionFinalCalc} onions clicked`;
        buildings.start[index] = buildings.start[index] + 1;
        buildings.count[index] = buildings.count[index] + 1;
        buyBuildingSet(index);
        statsDisplay();
        buildings.set[index] = true;
    } else if ((buildings.costs[index] <= onionFinalCalc) && (buildings.set)) {
        onionFinalCalc -= buildings.costs[index];
        buildings.costs[index] = Math.round(buildings.costs[index] * 1.15);
        buildings.start[index] = buildings.start[index] + 1;
        buildings.count[index] = buildings.count[index] + 1;
        statsDisplay();
    } else {
        alert('get your money up');
    }
}

function buyBuildingSet(index) {
    if (index == 0) {
        setInterval(onionFarmerEffect, 1000);
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
    if (index == 7) {
        setInterval(onionBiofuelConverterEffect, 100);
    }
}

function onionFarmerEffect() {
    onionFinalCalc = onionFinalCalc + onionFarmerPower * buildings.start[0];
    onionAllTime = onionAllTime + onionFarmerPower * buildings.start[0];
}
function onionFieldEffect() {
    onionFinalCalc = onionFinalCalc + onionFieldPower * buildings.start[1];
    onionAllTime = onionAllTime + onionFieldPower * buildings.start[1];
}
function onionTruckEffect() {
    onionFinalCalc = onionFinalCalc + onionTruckPower * buildings.start[2];
    onionAllTime = onionAllTime + onionTruckPower * buildings.start[2];
}
function onionStoreEffect() {
    onionFinalCalc = onionFinalCalc + onionStorePower * buildings.start[3];
    onionAllTime = onionAllTime + onionStorePower * buildings.start[3];
}
function onionMlmEffect() {
    onionFinalCalc = onionFinalCalc + onionMlmPower * buildings.start[4];
    onionAllTime = onionAllTime + onionMlmPower * buildings.start[4];
}
function onionPrinterEffect() {
    onionFinalCalc = onionFinalCalc + onionPrinterPower * buildings.start[5];
    onionAllTime = onionAllTime + onionPrinterPower * buildings.start[5];
}
function onionRepublicEffect() {
    onionFinalCalc = onionFinalCalc + onionRepublicPower * buildings.start[6];
    onionAllTime = onionAllTime + onionRepublicPower * buildings.start[6];
}
function onionBiofuelConverterEffect() {
    onionFinalCalc = onionFinalCalc + onionBiofuelConverterPower * buildings.start[7];
    onionAllTime = onionAllTime + onionBiofuelConverterPower * buildings.start[7];
}
    
function statsDisplay() {
    buildingOpsFarmer.innerHTML = `${buildings.start[0]} onion farmers producing ${numberDisplayer(onionFarmerPower * buildings.start[0])} onions per second`;
    onionFarmerCount.innerHTML = `${buildings.count[0]}`;
    buildings.price[0].innerHTML = `${numberDisplayer(buildings.costs[0])} &#129477;`;
    buildingOpsField.innerHTML = `${buildings.start[1]} onion farmers producing ${numberDisplayer(onionFieldPower * 10 * buildings.start[1])} onions per second`;
    onionFieldCount.innerHTML = `${buildings.count[1]}`;
    buildings.price[1].innerHTML = `${numberDisplayer(buildings.costs[1])} &#129477;`;
    buildingOpsTruck.innerHTML = `${buildings.start[2]} onion trucks producing ${numberDisplayer(onionTruckPower * 10 * buildings.start[2])} onions per second`;
    onionTruckCount.innerHTML = `${buildings.count[2]}`;
    buildings.price[2].innerHTML = `${numberDisplayer(buildings.costs[2])} &#129477;`;
    buildingOpsStore.innerHTML = `${buildings.start[3]} onion stores producing ${numberDisplayer(onionStorePower * 10 * buildings.start[3])} onions per second`;
    onionStoreCount.innerHTML = `${buildings.count[3]}`;
    buildings.price[3].innerHTML = `${numberDisplayer(buildings.costs[3])} &#129477;`;
    buildingOpsMlm.innerHTML = `${buildings.start[4]} onion mlms producing ${numberDisplayer(onionMlmPower * 10 * buildings.start[4])} onions per second`;
    onionMlmCount.innerHTML = `${buildings.count[4]}`;
    buildings.price[4].innerHTML = `${numberDisplayer(buildings.costs[4])} &#129477;`;
    buildingOpsPrinter.innerHTML = `${buildings.start[5]} onion printers producing ${numberDisplayer(onionPrinterPower * 10 * buildings.start[5])} onions per second`;
    onionPrinterCount.innerHTML = `${buildings.count[5]}`;
    buildings.price[5].innerHTML = `${numberDisplayer(buildings.costs[5])} &#129477;`;
    buildingOpsRepublic.innerHTML = `${buildings.start[6]} onion republics producing ${numberDisplayer(onionRepublicPower * 10 * buildings.start[6])} onions per second`;
    onionRepublicCount.innerHTML = `${buildings.count[6]}`;
    buildings.price[6].innerHTML = `${numberDisplayer(buildings.costs[6])} &#129477;`;
    buildingOpsBiofuelConverter.innerHTML = `${buildings.start[7]} onion biofuel converters producing ${numberDisplayer(onionBiofuelConverterPower * 10 * buildings.start[7])} onions per second`;
    onionBiofuelConverterCount.innerHTML = `${buildings.count[7]}`;
    buildings.price[7].innerHTML = `${numberDisplayer(buildings.costs[7])} &#129477;`;
    
    onionsPerSecond.innerHTML = `${numberDisplayer(onionFarmerPower * buildings.start[0] + onionFieldPower * 10 * buildings.start[1] + onionTruckPower * 10 * buildings.start[2] + onionStorePower * 10 * buildings.start[3] + onionMlmPower * 10 * buildings.start[4] + onionPrinterPower * 10 * buildings.start[5] + onionRepublicPower * 10 * buildings.start[6] + onionBiofuelConverterPower * 10 * buildings.start[7])} Onions Per Second`;
    allBuildingCount.innerHTML = `${buildings.count[0] + buildings.count[1] + buildings.count[2] + buildings.count[3] + buildings.count[4] + buildings.count[5] + buildings.count[6] + buildings.count[7]} Buildings`
    allUpgradeCount.innerHTML = `${upgradeStart} Upgrades`
    allOnion.innerHTML = `${numberDisplayer(onionAllTime)} Onions all-time`
    
    if ((buildings.count[0] >= 1) && (upgrades.visible[2] == false)) {
        grippyGloves.style.display = "flex";
        upgrades.visible[2] = true;
    }
    if ((buildings.count[1] >= 1) && (upgrades.visible[3] == false)) {
        saferPestisides.style.display = "flex";
        upgrades.visible[3] = true;
    }
    if ((buildings.count[2] >= 1) && (upgrades.visible[4] == false)) {
        pitStops.style.display = "flex";
        upgrades.visible[4] = true;
    }
    if ((buildings.count[3] >= 1) && (upgrades.visible[5] == false)) {
        farmersMarkets.style.display = "flex";
        upgrades.visible[5] = true;
    }
    if ((buildings.count[0] >= 10) && (upgrades.visible[6] == false)) {
        seasonalContracts.style.display = "flex";
        upgrades.visible[6] = true;
    }
    if ((buildings.count[0] >= 20) && (upgrades.visible[7] == false)) {
        unpaidInternships.style.display = "flex";
        upgrades.visible[7] = true;
    }
    if ((buildings.count[0] >= 30) && (upgrades.visible[8] == false)) {
        cyborgFarmers.style.display = "flex";
        upgrades.visible[8] = true;
    }
    if ((buildings.count[0] >= 50) && (upgrades.visible[9] == false)) {
        childLabor.style.display = "flex";
        upgrades.visible[9] = true;
    }
    if ((buildings.count[0] >= 100) && (upgrades.visible[10] == false)) {
        gasLighting.style.display = "flex";
        upgrades.visible[10] = true;
    }
    if ((buildings.count[1] >= 10) && (upgrades.visible[11] == false)) {
        onionBush.style.display = "flex";
        upgrades.visible[11] = true;
    }
    if ((buildings.count[1] >= 20) && (upgrades.visible[12] == false)) {
        gmos.style.display = "flex";
        upgrades.visible[12] = true;
    }
    if ((buildings.count[1] >= 30) && (upgrades.visible[13] == false)) {
        heatGeneration.style.display = "flex";
        upgrades.visible[13] = true;
    }
    if ((buildings.count[1] >= 50) && (upgrades.visible[14] == false)) {
        verticalFarming.style.display = "flex";
        upgrades.visible[14] = true;
    }
    if ((buildings.count[1] >= 100) && (upgrades.visible[15] == false)) {
        constantMutation.style.display = "flex";
        upgrades.visible[15] = true;
    }
    if ((buildings.count[2] >= 10) && (upgrades.visible[16] == false)) {
        cruiseControl.style.display = "flex";
        upgrades.visible[16] = true;
    }
}

function numberDisplayer(display) {
    if (display.toString().length == 1) {
        return display
    }
    if (display.toString().length == 2) {
        return display
    }
    if (display.toString().length == 3) {
        return display
    }
    if (display.toString().length == 4) {
        return `${display.toLocaleString("en-US")}`
    }
    if (display.toString().length == 5) {
        return `${display.toLocaleString("en-US")}`
    }
    if (display.toString().length == 6) {
        return `${display.toLocaleString("en-US")}`
    }
    if (display.toString().length == 7) {
        return `${Math.abs(parseFloat(display / 1000000).toFixed(3))} million`;
    }
    if (display.toString().length == 8) {
        return `${Math.abs(parseFloat(display / 1000000).toFixed(3))} million`;
    }
    if (display.toString().length == 9) {
        return `${Math.abs(parseFloat(display / 1000000).toFixed(3))} million`;
    }
    if (display.toString().length == 10) {
        return `${Math.abs(parseFloat(display / 1000000000).toFixed(3))} billion`;
    }
    if (display.toString().length == 11) {
        return `${Math.abs(parseFloat(display / 1000000000).toFixed(3))} billion`;
    }
    if (display.toString().length == 12) {
        return `${Math.abs(parseFloat(display / 1000000000).toFixed(3))} billion`;
    }
    if (display.toString().length == 13) {
        return `${Math.abs(parseFloat(display / 1000000000000).toFixed(3))} trillion`;
    }
    if (display.toString().length == 14) {
        return `${Math.abs(parseFloat(display / 1000000000000).toFixed(3))} trillion`;
    }
    if (display.toString().length == 15) {
        return `${Math.abs(parseFloat(display / 1000000000000).toFixed(3))} trillion`;
    }
    if (display.toString().length == 16) {
        return `${Math.abs(parseFloat(display / 1000000000000000).toFixed(3))} quadrillion`;
    }
    if (display.toString().length == 17) {
        return `${Math.abs(parseFloat(display / 1000000000000000).toFixed(3))} quadrillion`;
    }
    if (display.toString().length == 18) {
        return `${Math.abs(parseFloat(display / 1000000000000000).toFixed(3))} quadrillion`;
    }
}

function onionClickCounter() {
    let onionClicksAll = onionClicksStart++;
    clickCounter.textContent = `${numberDisplayer(onionClicksAll)} onions clicked`;
    if ((onionClicksAll >= 0) && (upgrades.visible[0] == false)) {
        reinforcedMouse.style.display = "flex";
        upgrades.visible[0] = true;
    }
    if ((onionClicksAll >= 100) && (upgrades.visible[1] == false)) {
        doubleClick.style.display = "flex";
        upgrades.visible[1] = true;
    }
    if ((onionClicksAll >= 1000) && (upgrades.visible[17] == false)) {
        carpalTunnel.style.display = "flex";
        upgrades.visible[17] = true;
    }
}

function onionFinal(onionAdd) {
    onionFinalCalc = onionFinalCalc + onionAdd;
    onionAllTime = onionAllTime + onionAdd;
    statsDisplay();
}

setInterval(function() {
    if (onionFinalCalc > onionFinalCalcDisplay) {
        onionFinalCalcDisplay = onionFinalCalc;
        onionTotal.textContent = `${numberDisplayer(onionFinalCalcDisplay)} onions`;
    } else {
        onionFinalCalcDisplay = onionFinalCalc;
        onionTotal.textContent = `${numberDisplayer(onionFinalCalcDisplay)} onions`;
    }
}, 100);

onion.addEventListener('click', onionClickCounter);
onion.addEventListener('click', function () { 
    onionFinal(onionClickPower); });
reinforcedMouse.addEventListener('click', function () { 
    buyUpgrade(0); });
doubleClick.addEventListener('click', function () { 
    buyUpgrade(1); });
grippyGloves.addEventListener('click', function () { 
    buyUpgrade(2); });
saferPestisides.addEventListener('click', function () { 
    buyUpgrade(3); });
pitStops.addEventListener('click', function () { 
    buyUpgrade(4); });
farmersMarkets.addEventListener('click', function () { 
    buyUpgrade(5); });
seasonalContracts.addEventListener('click', function () { 
    buyUpgrade(6); });
unpaidInternships.addEventListener('click', function () { 
    buyUpgrade(7); });
cyborgFarmers.addEventListener('click', function () { 
    buyUpgrade(8); });
childLabor.addEventListener('click', function () { 
    buyUpgrade(9); });
gasLighting.addEventListener('click', function () { 
    buyUpgrade(10); });
onionBush.addEventListener('click', function () { 
    buyUpgrade(11); });
gmos.addEventListener('click', function () { 
    buyUpgrade(12); });
heatGeneration.addEventListener('click', function () { 
    buyUpgrade(13); });
verticalFarming.addEventListener('click', function () { 
    buyUpgrade(14); });
constantMutation.addEventListener('click', function () { 
    buyUpgrade(15); });
cruiseControl.addEventListener('click', function () { 
    buyUpgrade(16); });
carpalTunnel.addEventListener('click', function () { 
    buyUpgrade(17); });
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
onionBiofuelConverter.addEventListener('click', function () { 
    buyBuilding(7); });