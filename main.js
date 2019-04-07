// Tabbed Content

// var test = {
//     prop: 42,
//     func: function() {
//       return this.prop;
//     },
//   };
  
  // console.log(test.func());
  // expected output: 42

// Global Variable
let currentTab = 1;

// Event Listeners
document.getElementById("b1").addEventListener("click", setTab1);
document.getElementById("b2").addEventListener("click", setTab2);
document.getElementById("b3").addEventListener("click", setTab3);
document.getElementById("b4").addEventListener("click", setTab4);
document.getElementById("b5").addEventListener("click", setTab5);
document.getElementById("b6").addEventListener("click", setTab6);
document.getElementById("b7").addEventListener("click", setTab7);
document.getElementById("b8").addEventListener("click", setTab8);

document.getElementById("div1").style.display = "block";
document.getElementById("div2").style.display = "none";
document.getElementById("div3").style.display = "none";
document.getElementById("div4").style.display = "none";
document.getElementById("div5").style.display = "none";
document.getElementById("div6").style.display = "none";
document.getElementById("div7").style.display = "none";
document.getElementById("div8").style.display = "none";

var menuArray = [menu1, menu2, menu3, menu4,  menu5];

var menu1 = {
    // week: 1,
    day: "Monday",
    breakfast: "Breakfast Sandwiches",
    hot1: "Cajun Flank Steak",
    hot2: "Chicken Stew",
    soup: "Clam Chowder",
    salad: "Caesar"
};

var menu2 = {
    // week: 1,
    day: "Tuesday",
    breakfast: "Bacon & Eggs",
    hot1: "Grilled Steak",
    hot2: "Grilled Chicken",
    soup: "Mushroom",
    salad: "Bean Salad"
};

var menu3 = {
    // week: 1,
    day: "Wednesday",
    breakfast: "French Toast",
    hot1: "Pork Ribs",
    hot2: "Breaded Fish",
    soup: "Broccoli Cheddar",
    salad: "Potato"
};

var menu4 = {
    // week: 1,
    day: "Thursday",
    breakfast: "Frittata",
    hot1: "Beef Dip",
    hot2: "Creole Fish",
    soup: "Borscht",
    salad: "Caesar"
};

var menu5 = {
    // week: 1,
    day: "Friday",
    breakfast: "Eggs Benedict",
    hot1: "Marinated Chicken",
    hot2: "Creole Fish",
    soup: "Noodle Soup",
    salad: "Cob"
};

// var menu6 = {
//     week: 2,
//     day: "Monday",
//     breakfast: "Shirred Eggs",
//     hot1: "Eggplant Parmesan",
//     hot2: "Aloo Gobi",
//     soup: "Potato & Leek",
//     salad: "Caesar"
// };

// var menu7 = {
//     week: 2,
//     day: "Tuesday",
//     breakfast: "Eggs & Bacon",
//     hot1: "Roast Chicken",
//     hot2: "Pork Loin",
//     soup: "Shrimp Bisque",
//     salad: "Greek"
// };

// var menu8 = {
//     week: 2,
//     day: "Wednesday",
//     breakfast: "Pancakes",
//     hot1: "Chicken Stir Fry",
//     hot2: "Beef Stir Fry",
//     soup: "Gumbo",
//     salad: "Taco Salad"
// };

// var menu9 = {
//     week: 2,
//     day: "Thursday",
//     breakfast: "Omelet",
//     hot1: "Braised Beef Brisket",
//     hot2: "Pork Cutlet",
//     soup: "French Onion",
//     salad: "Spinach"
// };

// var menu10 = {
//     week: 2,
//     day: "Friday",
//     breakfast: "Crepes",
//     hot1: "Roast Pork",
//     hot2: "Meat Loaf",
//     soup: "Soup of the Day",
//     salad: "Marinated Vegetable"
// };

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

function today() {
    document.getElementById("lunch").innerHTML = n.menuArray[0];
  }

function setTab1() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 1;
    document.getElementById("b" + currentTab).classList.add("active");

// Event Functions
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
}

function setTab2() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 2;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
}

function setTab3() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 3;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
}

function setTab4() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 4;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
}

function setTab5() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 5;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "block";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
}

function setTab6() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 6;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "block";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
}

function setTab7() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 7;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "block";
    document.getElementById("div8").style.display = "none";
}

function setTab8() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 8;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "block";
}
