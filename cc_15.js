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

    // Task 5

    card.setAttribute("data-risk-level", riskLevel);

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



// Task 6

card.onclick = function(event) {
    event.stopPropagation();
}
};



// Task 5

function increaseRiskLevel() {
    const cards = document.querySelectorAll(".Risk-Card");

    // Create a card to increase the risk level
cards.forEach(card => {
    const riskLevelElement = card.querySelector("p");
    const currentLevel = card.getAttribute("data-risk-level");

    // Will update risk level from low to medium and change the color accordingly
    if (currentLevel === "Low") {
        card.setAttribute("data-risk-level", "Medium");
        riskLevelElement.textContent = "Risk Level: Medium";
            card.style.backgroundColor = "yellow";  // Change color to yellow
        } 
        // Will update risk level from medium to high and change the color accordingly
        else if (currentLevel === "Medium") {
            
            card.setAttribute("data-risk-level", "High");
            riskLevelElement.textContent = "Risk Level: High";
            card.style.backgroundColor = "red";
    }
}
)
}

// Task 5
const increaseButton = document.createElement("button");
increaseButton.textContent = "Increase Risk Levels";
increaseButton.onclick = increaseRiskLevel;
document.body.appendChild(increaseButton)

// Test Cases for Task 2
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");


// Test Case for Task 3
addRiskItem("Market Fluctuations", "High", "Finance");


// Test Cases for Task 4
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Test Case for Task 5
addRiskItem("Employee Retention", "Low", "HR");