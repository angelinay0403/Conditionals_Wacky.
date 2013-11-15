// Angelina Castro, 11/14/2013, Conditionals

// Wacky Conditionals.

//if a kid has to do homework, doing homework takes him 1 1/2 hour and the kid spend 3 hours watching TV, he comes out of school at 4 pm and goes to bed at 8 pm

var homeWorktime = 1.5
var tvHours = 3
var hourstoSleep = 4
var earlyDismissal = true
 //if the kid takes 1.5 hour doing home and 3 hours watching tv
	if(tvHours + homeWorktime > hourstoSleep || earlyDismissal === true){
	console.log("the kid can watch all the TV he or she wants!")
}else{
	console.log("sorry, kid can't watch too much T.V")
}