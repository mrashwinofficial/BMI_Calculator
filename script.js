
  function calculateBMI() {
    // Get weight and height input values
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    
    // Calculate BMI
    var bmi = weight / ((height / 100) ** 2);
    
    // Display BMI result
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Your BMI is " + bmi.toFixed(2);
    
    // Determine weight status
    var weightStatus = "";
    if (bmi < 18.5) {
      weightStatus = "Underweight";
    } else if (bmi < 25) {
      weightStatus = "Normal weight";
    } else if (bmi < 30) {
      weightStatus = "Overweight";
    } else {
      weightStatus = "Obese";
    }
    resultDiv.textContent += ", which is classified as " + weightStatus;
    
    // Display healthy food choices based on weight status
    var foodChoicesDiv = document.getElementById("food-choices");
    foodChoicesDiv.innerHTML = ""; // Clear previous content
    
    if (weightStatus === "Underweight") {
      foodChoicesDiv.innerHTML = "<p>For healthy weight gain, consider including these foods in your diet:</p>" +
        "<ul>" +
        "<li >Whole-grain bread and cereals</li>" +
        "<li>Lean proteins like chicken, fish, and tofu</li>" +
        "<li>Nuts and seeds</li>" +
        "<li>Fruits and vegetables</li>" +
        "<li>Dairy products like milk and yogurt</li>" +
        "</ul>";
    } else if (weightStatus === "Normal weight") {
      foodChoicesDiv.innerHTML = "<p>For maintaining a healthy weight, include these foods in your diet:</p>" +
        "<ul>" +
        "<li >Whole grains like brown rice and quinoa</li>" +
        "<li>Lean proteins like chicken, fish, and legumes</li>" +
        "<li>Fruits and vegetables</li>" +
        "<li>Healthy fats from sources like avocados and nuts</li>" +
        "<li>Low-fat dairy products or alternatives</li>" +
        "</ul>";
    } else if (weightStatus === "Overweight") {
      foodChoicesDiv.innerHTML = "<p>To manage weight, focus on these healthy food choices:</p>" +
        "<ul>" +
        "<li>High-fiber foods like whole grains, fruits, and vegetables</li>" +
        "<li>Lean proteins like chicken, turkey, and fish</li>" +
        "<li>Legumes and lentils</li>" +
        "<li>Healthy fats from sources like avocados and nuts</li>" +
        "<li>Reduced-fat dairy products or alternatives</li>" +
        "</ul>";
    } else if (weightStatus === "Obese") {
      foodChoicesDiv.innerHTML = "<p>To promote weight loss and overall health, focus on these foods:</p>" +
        "<ul>" +
        "<li>Whole grains and complex carbohydrates</li>" +
        "<li>Lean proteins like chicken, turkey, and fish</li>" +
        "<li>Legumes and lentils</li>" +
        "<li>Low-fat dairy products or alternatives</li>" +
        "<li>Plenty of fruits and vegetables</li>" +
        "<li>Healthy fats from sources like avocados and nuts</li>" +
        "</ul>";
    }
  }