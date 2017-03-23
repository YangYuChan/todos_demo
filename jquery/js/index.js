	 // 键盘事件
			function myTrim(x) {
			    return x.replace(/^\s+|\s+$/gm,'');
			}
		   document.onkeyup=function(event){
		   	  if(event.keyCode==13 && event.keyCode!=-1){      //enter键
		   	  	var value = myTrim($("#task").val());
		   	  	if(value != ''){
		   	  		localStorage.setItem("taskname", value);
		   	  		$(".checkall,.tips-box").removeClass("hidden");
		   	  		var taskname = localStorage.getItem("taskname");
		   	  		$(".task-ul").append('<li class="task-info clearfix"><input type="checkbox"  id="selectOne" class="checkbtn"/><span class="task-content">'+taskname+'</span><i class="fa fa-close"></i></li>')
		   	  		var len = $(".task-info").length;
		   	  		if(len != 0){
			   	  		$(".task-num").text(len);
		   	  		}else{
		   	  			alert("li不存在")
		   	  		}
		   	  	}
		    }
		
		   }