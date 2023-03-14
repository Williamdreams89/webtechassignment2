// Get data from urlparams
const urlParams = new URLSearchParams(window.location.search);
const first_name = urlParams.get("firstName");
const last_name = urlParams.get("lastName");
const selectedProgramme = urlParams.get("selectedProgramme");
const aggregate = urlParams.get("aggregate");
const formerSchool = urlParams.get("formerSchool");
const selectedGender = urlParams.get("selectedGender");
const dateOfBirth = urlParams.get("dateOfBirth");
const selectedHallOfResidence = urlParams.get("selectedHallOfResidence");
const selectedCaferiaOption = urlParams.get("selectedCaferiaOption");
const totalFeeCharged = urlParams.get("totalFeesCharged")

// Create table row with URL parameter values
const row = document.createElement("tr");
row.innerHTML = `
	<td>${first_name}</td>
	<td>${last_name}</td>
	<td>${selectedProgramme}</td>
	<td>${aggregate}</td>
	<td>${formerSchool}</td>
	<td>${selectedGender}</td>
	<td>${dateOfBirth}</td>
	<td>${selectedHallOfResidence}</td>
	<td>${selectedCaferiaOption}</td>
	<td>${totalFeeCharged}</td>
	
`;



// Get the table body element and append the new row
const tableBody = document.getElementById("table_body");
tableBody.appendChild(row);

