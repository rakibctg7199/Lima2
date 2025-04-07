function calculateLoan() {
  const amount = parseFloat(document.getElementById("loanAmount").value) || 0;
  const duration = parseInt(document.getElementById("duration").value);
  const interestRate = 0.02;

  const totalInterest = amount * interestRate * duration;
  const totalPayable = amount + totalInterest;

  document.getElementById("totalPayable").value = totalPayable.toFixed(2) + " ৳";
}

function submitLoan() {
  alert("✅ আপনার লোন আবেদন সাবমিট হয়েছে! আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।");
}
