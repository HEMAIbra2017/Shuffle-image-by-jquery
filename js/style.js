



$('.featured-work ul li').on('click', function(){

	$(this).addClass('active').siblings().removeClass('active');

	if($(this).data('class')==='all'){

$('.shuffle-imgs  .col-md').css('opacity', 1);
}
else{


$('.shuffle-imgs  .col-md').css('opacity', '0.08');

$($(this).data('class')).parent().css('opacity', 1);


/*
$('.shuffle-imgs  .col-md').show(1000);
$($(this).data('class')).parent().hide(1000);
*/
}

});




























