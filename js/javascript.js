var daysOfTheWeek=[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function myFunction(){
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    date = new Date(date);

    if(gender === 'male'){
        alert(" Since you were born on " + daysOfTheWeek[date.getDay()] + ',' + " your name is " + maleNames[date.getDay()]);
    }
   else if(gender === 'female'){
        alert(" Since you were born on " + daysOfTheWeek[date.getDay()] + ',' + " your name is " + femaleNames[date.getDay()]);
    }
    else{
        alert("Fill in the date and gender");
    }

}