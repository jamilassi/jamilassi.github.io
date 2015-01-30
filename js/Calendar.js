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
		htmlCalendar += '<td  colspan="2"><div class="buttons"><button onclick="'+getNewCalendar(year,month,0)+'">'+previousMonth+'</button></div></td>';
		
    	htmlCalendar += '<td  colspan="3"><div class="current">'+months[month].substr(0,3)+'<span class="petit">'+months[month].substr(3)+'</span></div></td>';
    	htmlCalendar +=	'<td  colspan="2"><div class="buttons"><button onclick="'+getNewCalendar(year,month,32)+'">'+nextMonth+'</button></div></td>';
		
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
		htmlCalendar += '<td  colspan="2"><div class="buttons"><button onclick="'+getNewCalendar(previousYear,month,1)+'">'+previousYear+'</button></div></td>';
		
    	htmlCalendar += '<td  colspan="3"><div class="current">'+year+'</div></td>';
    	htmlCalendar +=	'<td  colspan="2"><div class="buttons"><button onclick="'+getNewCalendar(nextYear,month,1)+'">'+nextYear+'</button></div></td>';
		
        htmlCalendar += '</tr>';
        htmlCalendar+= '</table>';
    
    element.innerHTML=htmlCalendar;

}