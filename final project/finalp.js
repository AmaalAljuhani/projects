
var  resicepturl= "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day";
recripect();

function getres(){
//$('#getTemp').on('click', function(e) {

	// console.log(q1);
	// console.log(q2);
	// recripect(q1,q2);
	
	//  });
	}
//	recripect(q1,q2);

  function recripect() {

		var q1=$('#calories').val();
		var	q2="&timeFrame="+$('#das').val();
		 console.log(q1);
		 console.log(q2);
     $.ajax({
         "async": true,
	"crossDomain": true,
	 "url": resicepturl ,
	 //+ q1 + q2,
	
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "bdf77002b1mshe38d9b9c2f9c52ap1b81dcjsne1665081217d"
	},
	"success":function (response) {
			 console.log(response);
			 var lengtht= response.meals.length
			 for(var i=0;i < lengtht ;i++){
			 var w1=response.meals[i].title;
			 var w2=response.meals[i].imageUrls[0];
			 var w3=response.meals[i].readyInMinutes;
			 var w4=response.meals[i].servings
	$("#main").append('<div id="r'+i+'" class="card text-white bg-primary mb-3" style="max-width:30rem !important ;    margin-right: 3rem; height:30rem !important; margin-left: 1rem !important; float:right;margin-left:-25em;">');
	$("#r"+i).append('<div id="d'+i+'" class="card-header"style="max-width:20rem">rescip'+i+'</div>');
	$("#r"+i).append('<div id="d'+i+'" class="card-body">'+'<h5 id="x'+i+'"class="card-title">'+w1+'</h5><br>');
	var www ="https://spoonacular.com/recipeImages/"+w2;
	$("#r"+i).append('<img id="d'+i+'"  style="height: 200px; margin-left: 1rem !important; width: 250px; display: block" src="' + www + '" />');
	$("#r"+i).append('<div id=class="card-body">'+'<h4 style=" margin-left: 1rem !important;" id="x'+i+'"class="card-text">  ready in '+ w3 +'munites</h4><br>');
	$("#r"+i).append('<div id=class="card-body">'+'<h4 style=" margin-left: 1rem !important;" id="x'+i+'"class="card-text">  Serving '+ w4+'</h4>');

	//.addClass("card text-white bg-secondary mb-3 ");
	// text-white bg-secondary mb-3 style="max-width: 20rem"/>');
// 	 $("#d2").addClass("card"d'+i+'" -header").text("your rescipts");
// 	 $("#d3").addClass("card-body");
//  $("#x1").addClass("card-title").html(w1);
		//	var imgf= $("#img1").src = w2;
// 	var www ="https://spoonacular.com/recipeImages/"+w2;
// $("#main").append('<img id="d'+i+'"  style="height: 200px; width: 250px; display: block" src="' + www + '" />');
// $("#main").append('<div id=class="card-body">'+'<h4 id="x'+i+'"class="card-text">"ready in '+ w3 +'munites"</h4>');
// $("#main").append('<div id=class="card-body">'+'<h4 id="x'+i+'"class="card-text">'+w4+'</h4>');
	// $("#x3").addClass("card-text").html("ready in "+ w3 +" munites");
	// $("#x4").addClass("card-text").html("Serving "+w4);
			}
		},
		error:function(error){
			console.log(error);
		}
	


	// 	<div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
	// 	<div class="card-header">your rescipts </div>
	// 	<div class="card-body">
	// 		<h4  id="x1" class="card-title"></h4>
	// 		<div id="imgg" ></div>
	// 		<p id ="x3" class="card-text"></p>
	// 		<p id ="x4" class="card-text"></p>
	// 	</div>
	// </div>

			});
			
			// $("#btn").click(function(e){
			// 	e.preventDefaut();
			// 	recripect();
			// })
}
