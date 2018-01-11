(function($)
{
    $.fn.kSh=function(divToAppend)
    {
        var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        var hours = ["0 à 2h", "2 à 4h", "4 à 6h", "6 à 8h", "8 à 10h", "10 à 12h", "12 à 14h", "14 à 16h", "16 à 18h", "18 à 20h", "20 à 22h", "22 à 00h"];     
        var weekNumber = getWeekNumber(new Date());

        createTable(weekNumber[1]); 

        function getWeekNumber(d) {

            d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
            d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
            var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);

            return [d.getUTCFullYear(), weekNo];
        }


        function createTable(weekNumber) {
            var insert; 
            insert = '<table><thead><tr><th> Semaine '+ weekNumber +'<th></tr><tr><th></th>';
            var i = 0;
            var j = 0;

            for (i = 0; i < 7; ++i) {    
                insert += '<th>' + days[i] + '</th>';
            }
            insert += '</tr></thead>'; 

            insert += '<tbody>';

            for (j = 0; j < 12; j++) {
                insert += '<tr><td>' + hours[j] + '</td>';
                
                for (var y = 0; y < 7; ++y) {
                        insert += '<td class="cellule"><input class="hidden" type="radio" name="'+ days[y] +'-'+j+'" value=" '+ hours[j] +'"/></td>';              
                }
                insert += '</tr>';
            }

            divToAppend.append(insert);
        }
        
        divToAppend.on('click', '.cellule', function(){

            $(this).find('input').prop("checked", true);
            $(this).addClass("selected"); 
        });  
    };
    

})(jQuery);


