 /**
 * Contus Support Interactive.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file PRICE COUNTDOWN-LICENSE.txt.
 *
 * =================================================================
 *                 MAGENTO EDITION USAGE NOTICE
 * =================================================================
 * This package designed for Magento 1.4.x and 1.5.x COMMUNITY edition
 * Contus Support does not guarantee correct work of this package
 * on any other Magento edition except Magento 1.4.x and 1.5.x COMMUNITY edition.
 * =================================================================
 */

 var j =1;
 
        if (typeof(BackColor)=="undefined")
            BackColor = "white";
        if (typeof(ForeColor)=="undefined")
            ForeColor= "black";
        if (typeof(DisplayFormat)=="undefined")
            DisplayFormat = "<span class='el-icon-hourglass'></span>&nbsp;&nbsp;<span class='day'>%%D%%</span><span style='margin:0px 4px'>Days</span><span class='hour'>%%H%%</span><span style='margin:0px 4px'>:</span><span class='min'>%%M%%</span><span style='margin:0px 4px'>:</span><span class='sec'>%%S%%</span>";
        if (typeof(DisplayFormat1)=="undefined")
            DisplayFormat1 = "<span class='el-icon-hourglass'></span>&nbsp;&nbsp;<span class='hour'>%%H%%</span><span style='margin:0px 4px'>:</span><span class='min'>%%M%%</span><span style='margin:0px 4px'>:</span><span class='sec'>%%S%%</span>";
        
		if (typeof(CountActive)=="undefined")
            CountActive = true;
        if (typeof(FinishMessage)=="undefined")
            FinishMessage = "This Offer has been Expired";
        if (typeof(CountStepper)!="number")
            CountStepper = -1;
        if (typeof(LeadingZero)=="undefined")
            LeadingZero = true;
        CountStepper = Math.ceil(CountStepper);
        if (CountStepper == 0)
            CountActive = false;
        var SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;
        function calcage(secs, num1, num2, day1) {
            s = ((Math.floor(secs/num1)%num2)).toString();
			daycount = s;
            if (LeadingZero && s.length < 2)
                //s = "0" + s;
				if(day1 === undefined)
				{
				s = "0" + s;
				}
                else
				{
				s = s;
				daycount = s;
					if(s == 0)
					{
						s = '';
						daycount = 0;
					}
				}
            return "<b>" + s + "</b>";
        }
        function CountBack(secs,iid,j) {
            if (secs < 0) {
                document.getElementById(iid).innerHTML = FinishMessage;
				 window.location.reload();
				return;
                document.getElementById('caption'+j).style.display = "none";
                document.getElementById('heading'+j).style.display = "none";
                
            }
			
		
            DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000,'Day'));
	
			if(daycount == 1)
			{
			DisplayStr = DisplayStr.replace('Days', 'Day');
			}
			if(daycount <= 0)
			{
			DisplayStr = DisplayFormat1.replace(/%%D%%/g, calcage(secs,86400,100000,'Day'));
			}
			
            DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
            DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
            DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));
			//alert(DisplayStr);
            document.getElementById(iid).innerHTML = DisplayStr;
            if (CountActive)
                setTimeout(function(){CountBack((secs+CountStepper),iid,j)}, SetTimeOutPeriod);
        }
