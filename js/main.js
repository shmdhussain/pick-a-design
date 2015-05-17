(function($){

/* console shim*/
(function () {
    var f = function () {};
    if (!window.console) {
        window.console = {
            log:f, info:f, warn:f, debug:f, error:f
        };
    }
}());


$(function(){

	$('.titletext,.carItem').click(function(){
		var itemid=$(this).data("itemid")-1;
		var $this=$(this);
		console.log('$(this).data("itemid"):  '+$(this).data("itemid"));
		if($this.hasClass('selected')){
			return false;
		}
		else{
			$('.titletext').removeClass('selected');
			$('.titletext').eq(itemid).addClass('selected');
			$(".carItem").removeClass('selected');
			$(".carItem").eq(itemid+1).addClass('selected');
			$('.slideshow').cycle('goto', itemid);
			
		}
	});


});
















})(jQuery)