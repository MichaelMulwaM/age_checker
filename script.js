function saveData() {
    var name = document.getElementById("username").value;
    var age = document.getElementById("userage").value;

    localStorage.setItem("savedName", name);
    localStorage.setItem("savedAge", age);

    document.getElementById("greeting").innerHTML = "Hello " + name + "!";

    var ageInMonths = age * 12;
    document.getElementById("months").innerHTML = "Your age in months is: " + ageInMonths;

    if (age >= 18) {
        document.getElementById("adult-message").innerHTML = "You can access adult content.";
    } else {
        document.getElementById("adult-message").innerHTML = "You are too young for adult content.";
    }
}