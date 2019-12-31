import { select} from 'd3';

const svg = select ('svg');

svg.attr('fill', 'red')

// 1. Map 

const mapSelect = select (".st2");
const showMapBox = select(".nestedItem1")
const page0 = select(".page0")
const page1 = select(".page1")
const page2 = select(".page2")


//mapSelect.click(function(e){
  //  var maakunta = $(this).parent().attr("id");
    //  $(".mapInfobox").slideToggle(400).css({"display": "block", "top": e.pageY+20, "left": e.pageX+5})
 // });
  


 page0.on("click", function(){
    page1
        .transition()
        .attr("left", 40)
        .attr( "top", 40);

   // $(".page0").css("cursor","default");
    // $( ".grid-container" ).css("display", "grid");
});

//( ".nestedItem1" ).click(function() {
      //  $( ".map" ).toggle("slow");
//});
  

function newFunction() {
    return d3.select;
}
  