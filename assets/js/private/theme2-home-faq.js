$(".hfaqBoxQues").click(function(){
    $(this).toggleClass("active")
    $(this).nextAll(".hfaqBox1Accordian-ans").eq(0).slideToggle(200)
})