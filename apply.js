const form = document.getElementById("reg-form");

const programmeFeeCharges = {
  healthInformation: 5000,
  mathematics: 3500,
  medicine: 7000,
  internationalBusiness: 2500,
  politicalScience: 2000,
};

const hallCharges = {
  src: 400,
  valco: 300,
  adehye: 300,
  ssnit: 350,
  casford: 300,
};

function calculateTotalFees(
  selectedProgramme,
  selectedHallOfResidence,
  selectedCafeteriaOption
) {
  const programmeFee = programmeFeeCharges[selectedProgramme];
  const hallCharge = hallCharges[selectedHallOfResidence];
  const cafeteriaCharge = selectedCafeteriaOption === "Yes" ? 120 : 0;

  console.log(`Hall charges - ${hallCharge}`);
  return programmeFee + hallCharge + cafeteriaCharge;
}

function validateForm() {
  const selectedGender = new FormData(form).get("gender");
  const selectedHallOfResidence =
    document.getElementById("hallsOfresidence").value;
  const dateOfBirth = new Date(document.getElementById("date-of-birth").value);
  const selectedProgramme = document.getElementById("programme").value;


  // 1. if a male gender selects adehye hall in the select option, alert "Not allowed"
  if (selectedGender === "male" && selectedHallOfResidence === "Adehye") {
    alert("Warning: Adehye is a female hall !!");
    return false;
  }

  // 2. if a female gender selects adehye hall in the select option, alert "Not allowed"
  if (selectedGender === "female" && selectedHallOfResidence === "Casford") {
    alert("Warning: Casford is a male hall !!");
    return false;
  }

  // 3. if a female gender selects valco hall in the select option, alert "Not allowed"
  if (selectedGender === "female" && selectedHallOfResidence === "Valco") {
    alert("Warning: Valco is a male hall !!");
    return false;
  }
  

  // 4. if a male gender selects ssnit hall in the select option, alert "Not allowed"
  if (selectedGender === "male" && selectedHallOfResidence === "SSNIT") {
    alert("Warning: SSNIT is a female hall !!");
    return false;
  }

  // 2. Check if dateOfBirth is valid
  if (isNaN(dateOfBirth.getTime())) {
    alert("Please enter a valid date of birth");
    return false;
  }

  // 3. Check if user select null for cases of hall and programme
  if (selectedHallOfResidence === "null" || selectedProgramme==="null") {
    alert("Please check hall and programme and try again later!!");
    return false;
  }

  // 3. Check if dateOfBirth is greater than today's date return false
  const today = new Date();
  if (dateOfBirth > today) {
    alert("Date of birth cannot be in the future");
    return false;
  }

  // 5. Check if the user is at least 18 years old
  const ageDiffMs = today - dateOfBirth;
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (age < 18) {
    alert("You must be at least 18 years old");
    return false;
  }

  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Invoke DOB validation here

  const isValid = validateForm();

  if (isValid) {
    // Get form values

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const selectedProgramme = document.getElementById("programme").value;
    const aggregate = document.getElementById("aggregate").value;
    const formerSchool = document.getElementById("former-school").value;
    const selectedGender = new FormData(event.target).get("gender");
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const selectedHallOfResidence =
      document.getElementById("hallsOfresidence").value;
    const selectedCaferiaOption = new FormData(event.target).get("cafeteria");

    // Calculate total fees
    // Calculating the total fee charge
    let hallFee = 0;
    let programFee = 0;
    let cafeteriaFee = 0;

    switch (selectedHallOfResidence) {
      case "Casford":
        hallFee = 300;
        break;
      case "SSNIT":
        hallFee = 350;
        break;
      case "Adehye":
        hallFee = 300;
        break;
      case "Valco":
        hallFee = 300;
        break;
      case "SRC":
        hallFee = 400;
        break;
    }

    switch (selectedProgramme) {
      case "BSc(Health Information)":
        programFee = 5000;
        break;
      case "BSc(Mathematics)":
        programFee = 3500;
        break;
      case "BSc(Medicine)":
        programFee = 7000;
        break;
      case "BSc(Political science)":
        programFee = 2000;
        break;
      case "BSc(International Business)":
        programFee = 2500;
        break;
    }

    switch (selectedCaferiaOption) {
      case "yes":
        cafeteriaFee = 120;
        break;
      case "no":
        cafeteriaFee = 0;
        break;
    }

    const totalFees = hallFee + programFee + cafeteriaFee;

    console.log(totalFees);

    // Formatted date

    const formattedDOB = new Date(dateOfBirth);
    const formattedDOBOutput = formattedDOB.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });


    console.log(`formatted date = ${formattedDOBOutput}`);
    // Redirect to table.html with form data as URL parameters
    const url = `prepareBill.html?firstName=${firstName}&lastName=${lastName}&selectedProgramme=${selectedProgramme}&aggregate=${aggregate}&formerSchool=${formerSchool}&selectedGender=${selectedGender}&dateOfBirth=${formattedDOBOutput}&selectedHallOfResidence=${selectedHallOfResidence}&selectedCaferiaOption=${selectedCaferiaOption}&totalFeesCharged=${totalFees}&hallFee=${hallFee}&programFee=${programFee}&caferia=${cafeteriaFee}&selectedCaferia=${selectedCaferiaOption}`;
    window.location.href = url;

  }
});




