// for num_1
var random_num_1 = Math.random();
var random_num_1 = Math.floor((random_num_1 * 6)+1);


var random_image = "dice" + random_num_1 + ".png";
var random_image_souce = "./images/" + random_image;

document.querySelectorAll("img")[0].setAttribute("src", random_image_souce);




// for num_2
var random_num_2 = Math.random();
var random_num_2 = Math.floor((random_num_2 * 6)+1);


var random_image_2 = "dice" + random_num_2 + ".png";
var random_image_souce_2 = "./images/" + random_image_2;

document.querySelectorAll("img")[1].setAttribute("src", random_image_souce_2);




// for result
var greater_num;
if (random_num_1 > random_num_2) {
    greater_num = "Viresh Wins";
} 
else if(random_num_1 < random_num_2){
        greater_num = "Srishti Wins";
}
else{
    greater_num = "It's a draw";
}



document.querySelector("h1").textContent = greater_num;