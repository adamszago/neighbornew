function onPageLoad(){$(".content").show();$(".campo-onload").focus();$(".btnNext").click(function(){var c=$(this).parent().parent().attr("id"),a,b;a=parseInt(c)+1;b=parseInt(c)-1;$("#"+c).fadeOut(600);$("#"+a).fadeIn(800);if(c<7){$(".ico_top"+b).parent().animate({opacity:0.4},500);$(".ico_top"+c).parent().animate({opacity:0.99},500);$(".ico_top"+b).parent().css("opacity","")}else{$(".ico_top"+b).animate({opacity:0.4},500);$(".ico_top"+c).animate({opacity:0.99},500)}});$(".btnBack").click(function(){var c=$(this).parent().parent().attr("id"),a=parseInt(c)-1,b=parseInt(c)+1;$("#"+c).fadeOut(600);$("#"+a).fadeIn(800);if(c<7){$(".ico_top"+(c-1)).parent().animate({opacity:0.4},500);$(".ico_top"+(a-1)).parent().animate({opacity:0.99},500);$(".ico_top"+(c-1)).parent().css("opacity","")}else{$(".ico_top"+(c-1)).animate({opacity:0.4},500);$(".ico_top"+(a-1)).animate({opacity:0.99},500)}});$(".btnClose").click(function(){var a=$(this).parent().parent().attr("id");$("#"+a).fadeOut(1000)});$(document).ajaxComplete(function(b,c,a){if(typeof c.responseXML!="undefined"){fixViewState(c.responseXML)}});if(typeof jsf!=="undefined"){jsf.ajax.addOnEvent(function(a){if(a.status=="success"){fixViewState(a.responseXML)}})}}function dataTableSelectOneRadio(b){var a=b.name.substring(b.name.lastIndexOf(":")),d,c;for(d=0;d<b.form.elements.length;d++){c=b.form.elements[d];if(c.name.substring(c.name.lastIndexOf(":"))==a){c.checked=false}}b.checked=true}function aplicaMascaraMonetaria(a){jQuery(a).maskMoney({showSymbol:true,symbol:"R$",decimal:",",thousands:".",allowZero:true})}PrimeFaces.locales.pt={closeText:"Fechar",prevText:"Anterior",nextText:"Próximo",currentText:"Começo",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["D","S","T","Q","Q","S","S"],weekHeader:"Semana",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:"",timeOnlyTitle:"Só Horas",timeText:"Tempo",hourText:"Hora",minuteText:"Minuto",secondText:"Segundo",currentText:"Data Atual",ampm:false,month:"Mês",week:"Semana",day:"Dia",allDayText:"Todo Dia"};function centerAndShowDialog(a){$(a).css("top",Math.max(0,(($(window).height()-$(a).outerHeight())/2)+$(window).scrollTop())+"px");$(a).css("left",Math.max(0,(($(window).width()-$(a).outerWidth())/2)+$(window).scrollLeft())+"px");PF(a).show()}function autoResize(c){var b,a;if(document.getElementById){b=document.getElementById(c).contentWindow.document.body.scrollHeight;a=document.getElementById(c).contentWindow.document.body.scrollWidth}document.getElementById(c).height=(b)+"px";document.getElementById(c).width=(a)+"px"};