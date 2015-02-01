function Calendar(id,date,css,language) {
    
	if (date) {
		var calendar = date;
	} 
	else {
		var calendar= new Date();	
	}
	
    console.log("Function Calendar() on Calendar.js is launched");
    
    var element=document.getElementById(id);
    
    month= calendar.getMonth();
    year= calendar.getFullYear();
	
	
    
	if (window.calendar[language] && window.calendar[language].months) {
		var months=window.calendar[language].months;
	}
	else {
    var months = ["January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July",
             "August",
             "September",
             "October",
             "November",
             "December"];
	}
	
	if (window.calendar[language] && window.calendar[language].days) {
		var days=window.calendar[language].days;
	}
	else {
    var days =   ["Sunday",
             "Monday",
             "Tuesday",
             "Wednesday",
             "Thursday",
             "Friday",
             "Saturday"];
	}
	var daysClass =  ["Sun",
             "Mon",
             "Tue",
             "Wed",
             "Thu",
             "Fri",
             "Sat"];
			 
	var first = new Date(year, month,1).getDay();	
    
	function getNewCalendar(year,month,day) {
	return "new Calendar('"+id+"', new Date("+year+","+month+","+day+"),'"+css+"','"+language+"')";	
	}
	
	function getSelectedYear() {
		
	}
	
	// To Prevent showing an 'undefined' written on the Previous Month Button when asking to write the name of the previous month on the button
	// I don't really understand why it appears
		var previousMonth;
		if (month-1===-1) {
			previousMonth=months[11];
			}
		else if (month-1===10) {
			previousMonth=months[10];
			}
		else {
			previousMonth=months[month-1];
			} 
			
	// Same as above for the next button
		var nextMonth;
		if (month+1===12) {
			nextMonth=months[0];
			}
		else {
			nextMonth=months[month+1];
			}
					   			     
    var selected='';
	var htmlCalendar='';
		
        htmlCalendar+='<div class="control"><select onchange="'+getNewCalendar(year,"this.value",1)+'">';
		for (var i=0; i<12;i++) {
				selected=(i===month)?' selected=" selected"':'';
				htmlCalendar+='<option value="'+i+'"'+selected+'>'+months[i].substr(0,3)+'</option>'; 
		}
		htmlCalendar+= '</select>';
		htmlCalendar+= '&nbsp;&nbsp;&nbsp;';
		htmlCalendar+= '<select onchange="'+getNewCalendar("this.value",month,1)+'">';
	var selected='';
		for (var i=year-7, l=year+7;i<l;i++) {
				selected=(i===year)?' selected=" selected"':'';
				htmlCalendar+='<option'+selected+'>'+i+'</option>'; 
		}
		htmlCalendar+= '</select></div>';
		htmlCalendar+= '<br>';
		htmlCalendar+= '<table class="calendar '+css+'" cellpadding="0px" cellspacing="0px" border="0">';
		
        htmlCalendar+= '<tr>';	
		htmlCalendar += '<td  colspan="2"><div class="bouttons"><button class="boutton" onclick="'+getNewCalendar(year,month,0)+'">'+previousMonth+'</button></div></td>';
	/*	htmlCalendar += '<td  colspan="3"><div class="current">'+months[month].substr(0,3)+'<span class="petit">'+months[month].substr(3)+'</span></div></td>';*/
		htmlCalendar += '<td  colspan="3"><div class="current">'+months[month]+'</span></div></td>';
    	htmlCalendar +=	'<td  colspan="2"><div class="bouttons"><button class="boutton" onclick="'+getNewCalendar(year,month,32)+'">'+nextMonth+'</button></div></td>';
		
        htmlCalendar += '</tr>';
        htmlCalendar+= '<tr class="week">';
    
	var day=0;
	var date=1;
    var length = 32- new Date(year,month,32).getDate();
	var now = new Date();
	
	var today = {
		year:now.getFullYear(),
		month:now.getMonth(),
		date:now.getDate()
		}
	
        for (var i=0;i<days.length;i++) {
            htmlCalendar+= '<td class="week '+daysClass[i].toLowerCase()+'">';
			htmlCalendar+= days[i].substr(0,3)+'<span class="petit">'+days[i].substr(3)+'</span></td>';
        }
        htmlCalendar+= '</tr>';
		
    
	
        for (var i=0; i<42; i++) {
			
            var style="";
            
			if (day===0) {
                htmlCalendar+= '<tr>';
            }
            
			if ( today.year===year &&
				 today.month===month &&
				 today.date===date) {
			     style += " today";
			}
			
			if (i>=first && date<=length) {
				htmlCalendar+= '<td class="'+daysClass[day].toLowerCase()+style+'">'+date+'</td>';
				date++;
			} else {
				htmlCalendar+= '<td class="'+daysClass[day].toLowerCase()+style+'"></td>';	
			}
            
            day++;
            
            if (day===7) {
                htmlCalendar+='</tr>';
                day=0;
            }
        }
		var previousYear=year-1;
		var nextYear=year+1;	
		htmlCalendar+= '<tr>';	
		htmlCalendar += '<td  colspan="2"><div class="bouttons"><button class="boutton" onclick="'+getNewCalendar(previousYear,month,1)+'">'+previousYear+'</button></div></td>';
		
    	htmlCalendar += '<td  colspan="3"><div class="current">'+year+'</div></td>';
    	htmlCalendar +=	'<td  colspan="2"><div class="bouttons"><button class="boutton" onclick="'+getNewCalendar(nextYear,month,1)+'">'+nextYear+'</button></div></td>';
		
        htmlCalendar += '</tr>';
        htmlCalendar+= '</table>';
    
    element.innerHTML=htmlCalendar;
	
// Erase this part when using the Calendar.js for your own on another Website.
// This following part is an annexe proper to my demo site only for test purpose;
// Erase from this commentary to commentary: point B
	
	var htmlText='<span class="titre">'+months[month]+'</span><br>';
	if (window.calendar[language] && window.calendar[language].text) {
		var text=window.calendar[language].text;
	}
	else {
   
	var text = ['January (in Latin, Ianuarius) is named after Janus, the god of beginnings and transitions; the name has its beginnings in Roman mythology, coming from the Latin word for door (ianua) since January is the door to the year.','The Roman month Februarius was named after the Latin term februum, which means purification, via the purification ritual Februa held on February 15 (full moon) in the old lunar Roman calendar','The name of March comes from Latin Martius, the first month of the earliest Roman calendar. It was named for Mars, the Roman god of war who was also regarded as a guardian of agriculture and an ancestor of the Roman people through his sons Romulus and Remus','The Romans gave this month the Latin name Aprilis but the derivation of this name is uncertain. The traditional etymology is from the verb aperire, "to open", in allusion to its being the season when trees and flowers begin to "open"',"The month May was named for the Greek goddess Maia, who was identified with the Roman era goddess of fertility, Bona Dea, whose festival was held in May. Conversely, the Roman poet Ovid provides a second etymology, in which he says that the month of May is named for the maiores, Latin for 'elders'.","The Latin name for June is Junius. Ovid offers multiple etymologies for the name in the Fasti, a poem about the Roman calendar. The first is that the month is named after the Roman goddess Juno, the goddess of marriage and the wife of the supreme deity Jupiter; the second is that the name comes from the Latin word iuniores, meaning 'younger ones', as opposed to maiores ('elders') for which the preceding month May (Maius) may be named.","July is the seventh month of the year (between June and August) in the Julian and Gregorian Calendars and one of seven months with the length of 31 days. It was named by the Roman Senate in honor of the Roman general, Julius Caesar, it being the month of his birth. Prior to that, it was called Quintilis.","This month was originally named Sextili in Latin, because it was the sixth month in the original ten-month Roman calendar under Romulus in 753 BC, when March was the first month of the year.","September (from Latin septem, 'seven') was originally the seventh of ten months on the oldest known Roman calendar, with March (Latin Martius) the first month of the year until perhaps as late as 153 BC.","The eighth month in the old Roman calendar, October retained its name (from the Latin octō meaning 'eight') after January and February were inserted into the calendar that had originally been created by the Romans.","November was the ninth month of the ancient Roman calendar. November retained its name (from the Latin novem meaning 'nine') when January and February were added to the Roman calendar.","December gets its name from the Latin word decem (meaning ten) because it was originally the tenth month of the year in the Roman calendar, which began in March. The winter days following December were not included as part of any month. Later, the months of January and February were created out of the monthless period and added to the beginning of the calendar, but December retained its name."];
	}
	htmlText+= text[month]+'<br><br>';
    document.getElementById('texte').innerHTML=htmlText;

var htmlImage='';
	
	var imagesSrc = ["img/Jan.jpg","img/Fev.jpg",'img/Mar.jpg','img/Avr.jpg','img/Mai.jpg','img/Jui.jpg','img/Juil.jpg','img/Aou.jpg','img/Sep.jpg','img/Oct.jpg','img/Nov.jpg','img/Dec.jpg'];
	htmlImage += '<br><img src="'+imagesSrc[month]+'" class="img-responsive img-rounded" alt="Responsive image">';
    document.getElementById('image').innerHTML=htmlImage;
	
// Point B
}