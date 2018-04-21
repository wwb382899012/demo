function DelCookie(c_name){ 

var value = '';
exdays = 1;
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
window.location.reload();
} 

function redirectself(charset)
{
	var url=window.location.toString();
	var str="";
	if(url.indexOf("?")!=-1)
	{
		var ary =new Array();
		ary	=url.split("?")[1].split("&");
  		var selfurl = url.split("?")[0];
		for(var i = 0;i <ary.length; i++){
    					
			if(ary[i].split("=")[0] != 'charset')
			{
				str+="&"+ary[i].split("=")[0]+"="; 
    			str+=ary[i].split("=")[1];
			}
		}
		location.href= selfurl + "?charset=" +charset + str;
	}else{
		location.href= window.location + "?charset=" +charset;		
	}
}

function redirectselfCurrency(currency)
{
	var url=window.location.toString();
	var str="";
	if(url.indexOf("?")!=-1)
	{
		var ary =new Array();
		ary	=url.split("?")[1].split("&");
  		var selfurl = url.split("?")[0];
		for(var i = 0;i <ary.length; i++){
    					
			if(ary[i].split("=")[0] != 'currency')
			{
				str+="&"+ary[i].split("=")[0]+"="; 
    			str+=ary[i].split("=")[1];
			}
		}
		location.href= selfurl + "?currency=" +currency + str;
	}else{
		location.href= window.location + "?currency=" +currency;		
	}
}



function change_currencies(currencies)
{
	var url=window.location.toString();
	var str="";
	if(url.indexOf("?")!=-1)
	{
		var ary =new Array();
		ary	=url.split("?")[1].split("&");
  		var selfurl = url.split("?")[0];
		for(var i = 0;i <ary.length; i++){
    					
			if(ary[i].split("=")[0] != 'currency')
			{
				str+="&"+ary[i].split("=")[0]+"="; 
    			str+=ary[i].split("=")[1];
			}
		}
		location.href= selfurl + "?currency=" +currencies + str;
	}else{
		location.href= window.location + "?currency=" +currencies;		
	}
}