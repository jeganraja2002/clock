




		function jegan(){
			

		let today=new Date();


		let hours=document.getElementById("hour");
		let hour=today.getHours();
			


			if(hour<10){
				
				hours.innerHTML=("0"+hour)
			}
			
			else if(hour>12){
				
				let c=hour-12;
				
				hours.innerHTML=(c)
			}
			
			else{
						hours.innerHTML=hour;
			}





		let minutes=document.getElementById("minutes");
		let minute=today.getMinutes();

			
			if(minute<10){
				
				minutes.innerHTML=("0"+minute)
			}
			
			else{
						minutes.innerHTML=minute;
			}





		let sec=document.getElementById("seconds")
		let second=today.getSeconds();
			

			if(second<10){
				
				sec.innerHTML=("0"+second)
			}
			
			else{
						sec.innerHTML=second;
			}



		let year=document.getElementById("year");
		let years=today.getFullYear();
			

			if(years>0){
				
				year.innerHTML=(years-2000)
			}
			
			else{
						year.innerHTML=years;
			}




		let date=document.getElementById("date");
		let dat=today.getDate();

			
			if(dat<10){
				
				date.innerHTML=("0"+dat)
			}
			
			else{
						date.innerHTML=dat;
			}




		let a=['jan','feb','mar','apr','may','jun','jul','Aug','sep','oct','nov','dec']
		let month=document.getElementById("month");
		let months=today.getMonth();
			month.innerHTML=(a[months]);	

		let b=document.getElementById("ampm");
		let c=today.getHours();
			if(c>=12){
				ampm.innerHTML=(" Post Meridiem")}
				
			else{
				ampm.innerHTML=(" Ante Meridiem")}
			


			}
			jegan()
		setInterval(jegan,1000);

	




	set.addEventListener("submit",function (e) {
				e.preventDefault()

		
			setInterval(alarm,1000)
		})


	function alarm() {

		var alarmhours=document.getElementById("alhr")
		var alarmminutes=document.getElementById("almin")		
		var alarmampm=document.getElementById("alam")		
		var set=document.getElementById("set")		

			let yesterday=new Date()
			var jegan=yesterday.getHours()
			var raja=yesterday.getMinutes()
			console.log(jegan,raja)

				if ( (alarmhours.value==jegan%12)&&(alarmminutes.value==raja) ) {
						console.log("true")
						new Audio("audio/kathithi.mp3").play()
				} 
				else {
					console.log("false")
				}

	}



			



