function myFunction() {
  var x = document.getElementById("oldpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = "1px solid #c3c6d1";
  x.style.borderRadius = "6px";
}

function myFunction1() {
  var x = document.getElementById("newpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = "1px solid #c3c6d1";
  x.style.borderRadius = "6px";
}
function myFunction2() {
  var x = document.getElementById("repeatnewpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  x.style.border = "1px solid #c3c6d1";
  x.style.borderRadius = "6px";
}

const navButtons = document.querySelectorAll(".transaction");
for (let button of navButtons) {
  console.log("button", button.href);
  if (window.location.href === button.href)
    button.classList.add("transaction-active");
  else if (button.href == "http://127.0.0.1:5500/addproduct.html#") {
    document.getElementById("prod").classList.add("transaction-active");
  }
}
function deleteRow(button) {
  // Get the parent row of the clicked button
  const row = button.closest("tr");

  // Show a SweetAlert confirmation modal
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // If the user confirms the deletion, remove the row
      row.remove();
      // Show a success message
      Swal.fire("Deleted!", "Your row has been deleted.", "success");
    }
  });
}