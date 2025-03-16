// Task 1 - Base Structure Setup

const riskDashboard = document.getElementById('riskDashboard');
console.log("Risk Dashboard Loaded");

function addRiskItem(riskName, riskLevel, department) {
    const container = document.getElementById('riskDashboard');

    //Create Risk Card
    const card = document.createElement("div");
    card.classList.add("Risk-Card");

    // Create Risk Name on Card
    const riskNameElement = document.createElement("h3");
    riskNameElement.textContent = `Risk Name: ${riskName}`;
    card.appendChild(riskNameElement);

    // Create Risk Level on Card
    const riskLevelElement = document.createElement("p");
    riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
    card.appendChild(riskLevelElement);

    // Create Risk Department on Card
    const departmentElement = document.createElement("p");
    departmentElement.textContent = `Department: ${department}`;
    card.appendChild(departmentElement);

    // Create Remove Button Card
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("removeButton")

    removeButton.onclick = function() {
        container.removeChild(card);

    };

    card.appendChild(removeButton);

container.appendChild(card);

};

// Test Cases for Task 2
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
