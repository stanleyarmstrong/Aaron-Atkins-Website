

function song1(){


var toys= new Audio("Toys_MASTER.wav");
toys.play();
}
function song2(){


var song2= new Audio("Return To The Scene_MASTER.wav");
song2.play();
}
function song3(){


var song3= new Audio("Once is Enough_MASTER.wav");
song3.play();
}
function song4(){


var song4= new Audio("Countdown_MASTER.wav");
song4.play();
}
function song5(){


var song5= new Audio("Drunk Voicemail Apology_MASTER.wav");
song5.play();
}
function song6(){


var song6= new Audio("Experiment No. 1_MASTER.wav");
song6.play();
}
function song7(){


var song7= new Audio("O Dreaded C Town_MASTER.wav");
song7.play();
}
function song8(){


var song8= new Audio("For You_MASTER.wav");
song8.play();
}
function song9(){


var song9 = new Audio("Life in the Living Room_MASTER.wav");
song9.play();
}

$("#toys").on("click" , song1);
$("#returnToTheScene").on("click" , song2);
$("#onceIsEnough").on("click" , song3);
$("#countdown").on("click" , song4);
$("#drunkVoicemailApology").on("click" , song5);
$("#experimentNoOne").on("click" , song6);
$("#oDreadedCTown").on("click" , song7);
$("#forYou").on("click" , song8);
$("#lifeInTheLivingRoom").on("click" , song9);
