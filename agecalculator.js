// Function to calculate age
function calculateAge(birthdate) {
  const currentDate = new Date();
  const birthDate = new Date(birthdate);

  const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
  const daysDiff = currentDate.getDate() - birthDate.getDate();

  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
  }

  return yearsDiff;
}

// Example usage
const birthdate = "1990-05-15"; // Format: YYYY-MM-DD
const age = calculateAge(birthdate);
console.log(`You are ${age} years old.`);
