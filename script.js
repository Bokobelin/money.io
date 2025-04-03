function load() {
    const money = Number(localStorage.getItem("money")) || 0;
    const perSecond = Number(localStorage.getItem("perSecond")) || 0;
    const bgColor = localStorage.getItem("bgColor") || 'white';
    const perClick = Number(localStorage.getItem("perClick")) || 1;
    return [money, perSecond, bgColor, perClick];
}

let [money, perSecond, bgColor, perClick] = load();
$('#moneyText').text("Money: "  + money);
$('#mps').text("Money per second: "  + perSecond);
$('#body').css('background-color', bgColor);

$('#moneyButton').on("click", function() {
    money += perClick;
    localStorage.setItem("money", money);
    console.log("Money: " + money);
    $('#moneyText').text("Money: "  + money);
});

$('#resetButton').on("click", function() {
    localStorage.removeItem("money");
    localStorage.removeItem("perSecond");
    localStorage.removeItem("bgColor");
    localStorage.removeItem("perClick");
    money = 0;
    perSecond = 0;
    bgColor = 'white';
    perClick = 1;
    $('#moneyText').text("Money: "  + money);
});

$('#lemonadeStandBtn').on("click", function() {
    if (money < 30) {
        alert("You need 30 money to buy a lemonade stand!");
        return;
    }
    money -= 30;
    localStorage.setItem("money", money);
    $('#moneyText').text("Money: "  + money);
    perSecond += 0.1;
    perSecond = Math.round(perSecond * 10) / 10; // Round to one decimal place
    localStorage.setItem("perSecond", perSecond);
    $('#mps').text("Money per second: "  + perSecond);
});

$('#vendingMachineBtn').on("click", function() {
    if (money < 250) {
        alert("You need 250 money to buy a vending machine!");
        return;
    }
    money -= 250;
    localStorage.setItem("money", money);
    $('#moneyText').text("Money: "  + money);
    perSecond += 1;
    perSecond = Math.round(perSecond * 10) / 10; // Round to one decimal place
    localStorage.setItem("perSecond", perSecond);
    $('#mps').text("Money per second: "  + perSecond);
});

$('#goldenPenBtn').on("click", function() {
    if (money < 350) {
        alert("You need 350 money to buy a gloden pen!");
        return;
    }
    money -= 350;
    localStorage.setItem("money", money);
    $('#moneyText').text("Money: "  + money);
    perClick += 1;
    perClick = Math.round(perSecond * 10) / 10; // Round to one decimal place
    localStorage.setItem("perCLick", perSecond);
    $('#mps').text("Money per second: "  + perSecond);
});

if (bgColor !== 'goldenrod') {
    $('#changeBgBtn').on("click", function() {
        if (money < 1000) {
            alert("You need 1000 money to buy the golden background!");
            return;
        }
        money -= 1000;
        localStorage.setItem("money", money);
        $('#moneyText').text("Money: "  + money);
        perSecond += 5;
        perSecond = Math.round(perSecond * 10) / 10; // Round to one decimal place
        localStorage.setItem("perSecond", perSecond);
        $('#mps').text("Money per second: "  + perSecond);
        $('#body').css('background-color', 'goldenrod');
        localStorage.setItem("bgColor", 'goldenrod');
        $('#changeBg').hide();
    });
} else {
    $('#changeBg').hide(); // Hide the button if the background is already goldenrod
}

setInterval(function() {
    money += perSecond;
    money = Math.round(money * 10) / 10; // Round to one decimal place
    localStorage.setItem("money", money);
    $('#moneyText').text("Money: "  + money);
}, 1000);