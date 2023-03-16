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
const hallFee = urlParams.get("hallFee")
const programFee = urlParams.get("programFee")
const cafeteriaFee = urlParams.get("caferia")
const selectedCafeteria = urlParams.get("selectedCaferia")

// Create table row with URL parameter values
const row = document.createElement("table");
row.innerHTML = `	
<thead>
  <tr scope="col">
	<th>Bill Category</th>
	<th>Bill Item</th>
	<th>Price (in GHC)</th>
  </tr>
</thead>
<tbody>
<tr>
<td>Hall</td>
<td>${selectedHallOfResidence}</td>
<td>${hallFee}</td>
</tr>
<tr>
<td>Programme</td>
<td>${selectedProgramme}</td>
<td>${programFee}</td>
</tr>
<tr>
<td>Cafeteria Service</td>
<td>${selectedCaferiaOption.charAt(0).toUpperCase() + selectedCaferiaOption.slice(1)}</td>
<td>${cafeteriaFee}</td>
</tr>
<td><b>Total</b></td>
<td></td>
<td><b>${totalFeeCharged}</b></td>
</tr>
</tbody>
`;

const information = document.createElement('div');
information.innerHTML = `
	<div class="overall">
		<div class="lead_one">
			<img src="assets/loco.webp" />
			<div>
				<h2>UNIVERSITY OF CAPE COAST</h2>
				<h3>ONLINE REGISTRATION AND BILLING SYSTEM</h3>
				<h5>HIM-UCC DEVELOPMENT TEAM</h5>
				<hr />
			</div>
		</div>
	</div>
	<center><h2>Student ID Information</h2></center>
	<div class = "another_overall">
		<div class="info_item"><label>First Name</label><h3>${first_name.charAt(0).toUpperCase()+first_name.slice(1)}</h3></div>
		<div class="info_item"><label>Last Name</label><h3>${last_name.charAt(0).toUpperCase()+last_name.slice(1)}</h3></div>
		<div class="info_item"><label>Date of Birth</label><h3>${dateOfBirth}</h3></div>
		<div class="info_item"><label>Gender</label><h3>${selectedGender.charAt(0).toUpperCase()+selectedGender.slice(1)}</h3></div>
		<div class="info_item"><label>Former School</label><h3>${formerSchool}</h3></div>
		<div class="info_item"><label>Aggregate</label><h3>${aggregate}</h3></div>
		<div class="info_item"><label>Programme of study</label><h3>${selectedProgramme}</h3></div>
		<div class="info_item"><label>Hall of Residence</label><h3>${selectedHallOfResidence}</h3></div>
		<div class="info_item"><label>Option for cafeteria</label><h3>${selectedCaferiaOption.charAt(0).toUpperCase()+selectedCaferiaOption.slice(1)}</h3></div>
	</div>
	
`

document.getElementById("some_information").appendChild(information)


// Get the table body element and append the new row
const tableBody = document.getElementById("table_body");
tableBody.appendChild(row);

