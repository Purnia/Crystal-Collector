// Pseudo Code
// 1) generate random number between 19-120
// 2) display number in randomNumber div
// 3) generate random number between 1-12. assign to crystal 1 div
// 4) do the same for other crystals.
// 5) Add random numbers to crystal div
// 6) on click, add number to totalScoreNo div
// 7) if total score = random number win ++ and redo
// 8) else if total score > random number losses++ and redo




// $(document) .ready(function(){

// 1) generate random number between 19-120
// 2) display number in randomNumber div

var RandomNumber = Math.floor(Math.random() * 101 + 19);
console.log(RandomNumber);
$(".randomnumber").text(RandomNumber);


// 3) generate random number between 1-12. 
// 4) do the same for other crystals.


var crystal1 = Math.floor(Math.random() * 11 + 1);
console.log(crystal1);
var crystal2 = Math.floor(Math.random() * 11 + 1);
console.log(crystal2);
var crystal3 = Math.floor(Math.random() * 11 + 1);
console.log(crystal3);
var crystal4 = Math.floor(Math.random() * 11 + 1);
console.log(crystal4);

// 5) Add random numbers to crystal div
// 6) on click, add number to totalScoreNo div

var TotalScore = 0;
var win = 0;
var losses = 0;


//  add a reset funtion so everytime win/lose it resets automatically
function reset() {
    var RandomNumber = Math.floor(Math.random() * 101 + 19);
    $(".randomnumber").text(RandomNumber);
    var crystal1 = Math.floor(Math.random() * 11 + 1);
    console.log(crystal1);
    var crystal2 = Math.floor(Math.random() * 11 + 1);
    console.log(crystal2);
    var crystal3 = Math.floor(Math.random() * 11 + 1);
    console.log(crystal3);
    var crystal4 = Math.floor(Math.random() * 11 + 1);
    console.log(crystal4);
    TotalScore= 0;
    $('.totalScoreNo').text(TotalScore);
    }


$('#crystalImg1').on('click', function () {
    TotalScore = TotalScore + crystal1;
    $('.totalScoreNo').text(TotalScore);

    if (TotalScore === RandomNumber) {
        win++;
        $('.wins').text(win);
        reset();

    }
        

    else if (TotalScore > RandomNumber) {
        losses++;
        $('.Losses').text(losses);
        reset();
    }

    
})

$('#crystalImg2').on('click', function () {
    TotalScore = TotalScore + crystal2;
    $('.totalScoreNo').text(TotalScore);

    if (TotalScore === RandomNumber) {
        win++;
        $('.wins').text(win);
        reset();

    }

    
    else if (TotalScore > RandomNumber) {
        losses++;
        $('.Losses').text(losses);
        reset();
    }
    
})

$('#crystalImg3').on('click', function () {
    TotalScore = TotalScore + crystal3;
    $('.totalScoreNo').text(TotalScore);

    if (TotalScore === RandomNumber) {
        win++;
        $('.wins').text(win);
        reset();
    }

    
    else if (TotalScore > RandomNumber) {
        losses++;
        $('.Losses').text(losses);
        reset();
    }
   
})

$('#crystalImg4').on('click', function () {
    TotalScore = TotalScore + crystal4;
    $('.totalScoreNo').text(TotalScore);

    if (TotalScore === RandomNumber) {
        win++;
        $('.wins').text(win);
        reset();
    }
  
    else if (TotalScore > RandomNumber) {
        losses++;
        $('.Losses').text(losses);
        reset();
    }
  
})

// ^ 7) if total score = random number win ++ and push result into wins div
// ^ 8) else if total score > random number losses++ and redo


