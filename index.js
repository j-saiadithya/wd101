
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("registrationForm");
      const tableBody = document.getElementById("entriesTableBody");

      form.addEventListener("submit", function (e) {
        e.preventDefault();  // Prevent the form from refreshing the page

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const terms = document.getElementById("terms").checked;

        // Validate Date of Birth
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const ageMonthDiff = today.getMonth() - dobDate.getMonth();

        if (ageMonthDiff < 0 || (ageMonthDiff === 0 && today.getDate() < dobDate.getDate())) {
          age--;
        }

        if (age < 18 || age > 55) {
          document.getElementById("dobError").classList.remove("hidden");
          return; // Stop form submission if the age is not valid
        } else {
          document.getElementById("dobError").classList.add("hidden");
        }

        // Append new entry to the table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>${password}</td>
          <td>${dob}</td>
          <td>${terms ? 'true' : 'false'}</td>
        `;
        tableBody.appendChild(newRow);

        // Reset form after submission
        form.reset();
      });
    });
  </script>
