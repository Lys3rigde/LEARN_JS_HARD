'use strict';


    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
        return five;
        }
        n %= 10;
        if (n === 1) {
        return one;
        }
        if (n >= 2 && n <= 4) {
        return two;
        }
        return five;
    }

    function getZero(num){
        if (num > 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }


    function SetInterval() {
        let date = new Date(),
        Year = date.getFullYear(),
        Month = date.getMonth(),
        Day = date.getDate(),
        Hour = date.getHours(),
        Minutes = date.getMinutes(),
        Seconds = date.getSeconds();

        switch (Month)
        {
        case 0: Month="января"; break;
        case 1: Month="февраля"; break;
        case 2: Month="марта"; break;
        case 3: Month="апреля"; break;
        case 4: Month="мая"; break;
        case 5: Month="июня"; break;
        case 6: Month="июля"; break;
        case 7: Month="августа"; break;
        case 8: Month="сентября"; break;
        case 9: Month="октября"; break;
        case 10: Month="ноября"; break;
        case 11: Month="декабря"; break;
        }
        let text1 = document.getElementById('text1');
        text1.textContent = ("Сегодня " + Day + " " + Month + " " + Year + " года, " + 
        Hour + getNoun(Hour, " час ", " часа ", " часов ") + Minutes + getNoun(Minutes, " минута ", " минуты ", " минут ") + 
        Seconds + getNoun(Seconds, " секунда ", " секунды ", " секунд "));
        let text2 = document.getElementById('text2');
        text2.textContent = (getZero(Day) + '.' + getZero(date.getMonth() + 1) + '.' + getZero(Year) + 
        ' - ' + getZero(Hour) + ':' + getZero(Minutes) + ':' + getZero(Seconds));
    }
setInterval(SetInterval, 1000);