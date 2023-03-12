const form = document.getElementById("reg-form");



function validateForm() {
  const selectedGender = new FormData(form).get("gender");
  const selectedHallOfResidence = document.getElementById("hallsOfresidence").value;
  const dateOfBirth = new Date(document.getElementById("date-of-birth").value);

  // 1. if a male gender selects adehye hall in the select option, alert "Not allowed"
  if (selectedGender === "male" && selectedHallOfResidence === "Adehye") {
    alert("Warning: Adehye is a female hall !!");
    return false;
  }

  // 1. if a female gender selects adehye hall in the select option, alert "Not allowed"
  if (selectedGender === "female" && selectedHallOfResidence === "Casford") {
    alert("Warning: Casford is a male hall !!");
    return false;
  }

  // 2. Check if dateOfBirth is valid
  if (isNaN(dateOfBirth.getTime())) {
    alert("Please enter a valid date of birth");
    return false;
  }

  // 3. Check if dateOfBirth is greater than today's date return false
  const today = new Date();
  if (dateOfBirth > today) {
    alert("Date of birth cannot be in the future");
    return false;
  }

  // 4. Check if the user is at least 18 years old
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

  if(isValid){
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

  // Formatted date

  const formattedDOB = new Date(dateOfBirth)
  const formattedDOBOutput = formattedDOB.toLocaleDateString("en-US",  { month: 'long', day: 'numeric', year: 'numeric' })
  console.log(`formatted date = ${formattedDOBOutput}`)
  // Redirect to table.html with form data as URL parameters
  const url = `prepareBill.html?firstName=${firstName}&lastName=${lastName}&selectedProgramme=${selectedProgramme}&aggregate=${aggregate}&formerSchool=${formerSchool}&selectedGender=${selectedGender}&dateOfBirth=${formattedDOBOutput}&selectedHallOfResidence=${selectedHallOfResidence}&selectedCaferiaOption=${selectedCaferiaOption}`;
  window.location.href = url;
  }
});
