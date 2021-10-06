(function ($) {

  // section main dashboard 4 box circle progress
    $(".one.circle")
      .circleProgress({
        value: 0.2,
        thickness: 4,
        size: 24,
        fill: "#FF9F43",
      })
     
    $(".two.circle")
      .circleProgress({
        value: 0.4,
        thickness: 4,
        size: 24,
        fill: "#82868B",
      })
      
    $(".three.circle")
      .circleProgress({
        value: 0.1,
        thickness: 4,
        size: 24,
        fill: "#00CFE8",
      })
      
    $(".four.circle")
      .circleProgress({
        value: 0.3,
        thickness: 4,
        size: 24,
        fill: "#EA5455",
      })
     
    $(".progress.circle")
      .circleProgress({
        value: 0.83,
        thickness: 20,
        size: 180,
        fill: "#424291",
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find(".text-one")
          .html("Response");
      }).on("circle-animation-progress", function (event, progress) {
        $(this)
          .find(".text-two")
          .html(83 + "<i>%</i>");
      });
     

  
  })(jQuery);