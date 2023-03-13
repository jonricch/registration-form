function showQuestions() {
  document.getElementById("conditional-question").style.display = "block";
  document.getElementById("q-1").disabled = false;
  document.getElementById("q-2").disabled = false;
  document.getElementById("q-3").disabled = false;
  document.getElementById("q-4").disabled = false;
  document.getElementById("q-5").disabled = false;
}

function hideQuestions() {
  document.getElementById("conditional-question").style.display = "none";
  document.getElementById("q-1").disabled = true;
  document.getElementById("q-2").disabled = true;
  document.getElementById("q-3").disabled = true;
  document.getElementById("q-4").disabled = true;
  document.getElementById("q-5").disabled = true;
}

let form = document.regForm;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("first-name").value;
  const middlename = document.getElementById("middle-name").value;
  const lastname = document.getElementById("last-name").value;
  const birthday = document.getElementById("birthday").value;
  const email = document.getElementById("email").value;
  const region = document.getElementById("region").value;
  const province = document.getElementById("province").value;
  const barangay = document.getElementById("barangay").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const vaccination1 = document.getElementById("v-1").value;
  const vaccinationdate = document.getElementById("vaccinationdate").value;
  const site = document.getElementById("site").value;
  const q_y = document.querySelector('input[name="q-y"]:checked').value;
  const vaccination2 = document.getElementById("q-2").value;
  const vaccinationd2 = document.getElementById("q-4").value;
  const site2 = document.getElementById("site2").value;

  const result = document.getElementById("result");

  // result.innerHTML = `Name: ${name}<br>
  //                 middlename: ${middlename}<br>
  //                 lastname: ${lastname}<br>
  //                 birthday: ${birthday}<br>
  //                 Email: ${email}<br>
  //                 Region: ${region}<br>
  //                 Province: ${province}<br>
  //                 Barangay: ${barangay}<br>
  //                 Gender: ${gender} <br>
  //                 Vaccination Dose(1): ${vaccination1}<br>
  //                 Vaccination Date: ${vaccinationdate}<br>
  //                 Vaccination Site: ${site}<br>
  //                 Did you already get your second vaccination?: ${q_y}<br>
  //                 Vaccination Dose(2): ${vaccination2}<br>
  //                 Vaccination Date: ${vaccinationd2}<br>
  //                 Vaccination Site: ${site2}<br>`;
  result.innerHTML = `Name: ${name}<br>middlename: ${middlename}<br>lastname: ${lastname}<br>birthday: ${birthday}<br>Email: ${email}<br>Region: ${region}<br>Province: ${province}<br>Barangay: ${barangay}<br>Gender: ${gender} <br>Vaccination Dose(1): ${vaccination1}<br>Vaccination Date: ${vaccinationdate}<br>Vaccination Site: ${site}<brDid you already get your second vaccination?: ${q_y}<br>Vaccination Dose(2): ${vaccination2}<br> Vaccination Date: ${vaccinationd2}<br>Vaccination Site: ${site2}<br>`;
});
