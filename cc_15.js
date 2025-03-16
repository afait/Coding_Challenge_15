// Task 1 - Base Structure Setup

const riskDashboard = document.getElementById('riskDashboard');
console.log("Risk Dashboard Loaded");

function addRiskItem(riskName, riskLevel, department) {
    const container = document.getElementById('riskDashboard');

    //Create Risk Card
    const card = document.createElement("div");
    card.classList.add("Risk-Card");


    // Task 4 assign background Color

    if (riskLevel === "Low") {
        card.style.backgroundColor = "green";
    } else if (riskLevel === "Medium") {
        card.style.backgroundColor = "yellow";
    } else if (riskLevel === "High") {
        card.style.backgroundColor = "red";
    }

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

    // Task 4 Create Resolve Button Card
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolveButton")


    resolveButton.onclick = function() {
        container.removeChild(card);

    };

    card.appendChild(resolveButton);

container.appendChild(card);

};

// Test Cases for Task 2
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");


// Test Case for Task 3
addRiskItem("Market Fluctuations", "High", "Finance");


// Test Cases for Task 4
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");