import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'DNDS';
	navInfo:string = "// home";
	activeInfo:string="// home";

	scroller:number=0;
	scrollCount:number=0;

	currentVideoLink:string="https://www.youtube.com/embed/YrigaGXr--E";
	currentVideo:string="Stohos Shooting Club";

	currentSocialMedia="";

	choicePosition="-4.5vw";
	njitPosition="19vh";

	assetsPath="";

	pricingStructureItems= [
		{
			"title":"Basic Small Business Website",
			"price":"2000$ minimum",
			"description":"A small business website requires a minimum level of complexity. It cannot have login or registering mechanisms, neither can it have a connection with a database. Also, you cannot get email notifications from this website. Other features are negotiable. Less complexity means that you get a cheaper price. My promise to you is that you will get what you paid for, if not more."
		},
		{
			"title":"Annual Maintenance",
			"price":"200$ per annum",
			"description":"The above pricing is subject to change as the years advance and you can renew, negotiate, or stop requiring this service at any year. It is optional. What does it include? It includes two (2) major maintenance sevice rounds, one (1) in approximatly every six (6) months. Those maintenance rounds include change of content or fixes upon the existing components. If you want to add functionalities that do not already exist or require more maintance rounds, you will be needing to negotiate a price. If the website has been altered by anyone other than me, this option is not available anymore."
		},
		{
			"title":"Time of Development",
			"price":"500$ per month prior",
			"description":"The time that we estimate that it will take for a standard website is six (6) months. However, you might need it to be ready in a shorter timeframe. We can discuss the option of shortening the development process. That will require me to increase my effort and fit the extra work into my schedule. If we agree that it can be done in a shorter timeframe, you will have to pay 500$ for every month under the six (6). There is a chance that some projects will be ready much sooner than six (6) months. In that case, I will give it to you when it is done and you will NOT have to pay for the shorter timeframe. You will pay extra only if you have asked, beforehand, to shorten the initial period.<br><br> I recommend that you do not rush the process because it is likely to get your project done before the six (6) months."
		},
		{
			"title":"Deployment",
			"price":"less than 60$",
			"description":"This will be determined by the cost of aquiring a domain for your website and for the expenses of hosting it. I am asking for this because I will deploy it for you and that will cover the first year. Afterwards the deployment cost will become your responsibility. I will explain to you personaly how you can take care of them. I will show you the price of both domain and hosting and we will find out the details together. I will only proceed to deploy your website after we have agreed on the terms and details of the deployment."},
		{
			"title":"Add Complexity",
			"price":"negotiable",
			"description":"If you need something more than the basics, such as a database connection or other complex functionality, we can work out a price. The higher the level of complexity, the more work is needed; therefore, it will be more expensive. <br><br> Do you want to add content by yourself? Do you want to keep records and much more without needing maintenance and keeping up with the deployment costs? <br><br> We can make for you a server machine and provide the programming for it."
		}
	];

	policyItems= [
		{
			"title":"Your Project Matters to Me",
			"description":"Your project matters to me because I will be putting effort and investing time in making it. More importantly, it is my work, and my reputation is on the line, determined by the product that I produce. I take pride in what I do and I am here to help you. If you hire my services, we are together in this for as long as our partnership lasts. My promise is to give you what you paid for, if not more.<br><br>I'm attempting to assist businesses, particularly small businesses, in showing up and growing. This is why I want to produce the best quality and try to keep my small business minimum price as low as possible. I come from a family that owned a small business and I understand, more than most, how important it is to have a website to show what you offer to the public."
		},
		{
			"title":"Code Ownership",
			"description":"After I have received the last payment, you will own the website, and you are free to do as you please with it. If you choose to let someone alter it in any way, which is your right, I will bear no responsibility and any maintenance arrangements will be nullified without return of money. How will I know that it has been altered? I keep archives of my work, so I would compare it with my archive. <br><br>You may have at that point acquired ownership of the code, but I also retain ownership of my own code. That means that I can recycle code that I have produced in other projects. Therefore, you should know that I retain full ownership and usage of my own code, even if you also own it, to do as you please. After all, it is your website.<br>"
		},
		{
			"title":"Pricing & Negotiating",
			"description":"We may negotiate prices, but there are some lines that I will not allow to be crossed. Please keep in mind that pricing has been formed with certain criteria based on the time and effort certain components need so they can be developed. The minimum price is the minimum price. I am not going to discuss cheap alternatives as they already exist here and there. I do not make quality cuts, and therefore my minimum is set where it is set. With that being said, I am willing to hear your needs and your approach and will try to keep prices as close to the minimum as possible. I want you, at the end of the process, to be satisfied both in quality and monitary terms. Therefore, I will discuss with you as much as needed to negotiate the price."
		},
		{
			"title":"Payments & Money Back",
			"description":"There will be a payment in advance which is half the amount that we agree that the website will cost you. This amount is not refundable; thus, if you have a change of heart, I won't be able to return it. <br><br>After I show you the final product and you agree that it is well made (before the deployment phase, which is the last stage), I will ask you for the rest of the amount. Only after receiving it, will I proceed with deploying your website and hand you over the code and everything related. <br><br>I advise that you get the annual maintenance plan, at least for the first year. It will be useful to you if you want to fix components or content afterwards."
		},
		{
			"title":"Maintenance Rules",
			"description":"The maintenance annual plan covers two (2) service rounds, one (1) every six (6) months approximately. Those service rounds include updates on content (such as the addition of images or displayed products) and fixes on misbehaving components. The service is concerned only with existing components and elements. Thus, adding new functionalities is not included in this annual plan. <br><br>Anyone other than me altering the code will result in nulification of the annual plan and no refund will be given to you. <br><br>If your aim is to add functionality, you will have to pay for the development and you will have to negotiate a price for that."
		}
	];

	whiteMode={
		background : "#0000",
		text : "#8C62F1",
		gradBckgrnd1 : "rgb(34,1,51)",
		gradBckgrnd2 :"linear-gradient(150deg, rgba(34,1,51,1) 0%, rgba(38,0,55,1) 55%, rgba(19,0,65,1) 82%, rgba(0,57,34,1) 100%)"
	}
	navClick(elementId:string){
		let collection= Array.from(document.getElementsByClassName("activeCircle"));
		console.log(collection);
		collection.forEach(element => {
			element.classList.remove("activeCircle");
			element.classList.add("circle");
		});

		document.getElementById(elementId)!.classList.remove("circle");
		document.getElementById(elementId)!.classList.add("activeCircle");
		this.activeInfo="// "+elementId;
		document.getElementById("position")!.style.color="#8C62F1";
		this.currentVideoLink="https://www.youtube.com/embed/YrigaGXr--E";
		this.currentVideo="Stohos Shooting Club";
		this.scroller=0;
		this.scrollCount=0;
	}
	navigateInfoChanger(info:string){
		if(info!="" && info!=this.activeInfo){
			this.navInfo=info;
			document.getElementById("position")!.style.color="#1CC3E2";
		}
		else{
			this.navInfo=this.activeInfo;
			document.getElementById("position")!.style.color="#8C62F1";
		}
	}
	elementSizing=0;
	aboutMeCategories=["my introduction","recent work experience","basic and contact information"];
	async aboutMeMovement(direction:string){
		if(direction=="left" && this.scrollCount > 0){
			this.scroller=(this.scrollCount - 1) * document.getElementById("aboutMePanel")!.clientWidth;
			document.getElementById("aboutMePanel")!.scroll(this.scroller, 0);
			this.scrollCount--;
			console.log(document.getElementById("aboutMePanel")!.clientWidth);
		}
		else if(direction=="right" &&  this.scrollCount < 2){
			this.scroller=(this.scrollCount + 1) * document.getElementById("aboutMePanel")!.clientWidth;
			document.getElementById("aboutMePanel")!.scroll(this.scroller, 0);
			this.scrollCount++;
			console.log(document.getElementById("aboutMePanel")!.clientWidth);
		}
	}
	scrollTop(){
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"});
	}
	codeScroller(element:string){
		document.getElementById(element)!.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
	}
	codeTarget:string="";
	clickMeCode:string="";
	codeTargetSetting(target:string){
		if(target==""){
			this.clickMeCode="";
		}
		else{
			this.clickMeCode="click to be redirected to github"
		}
		this.codeTarget=target;
	}
	changeVideoSource(source:string, title:string){
		if(source != this.currentVideoLink){
			var element:HTMLIFrameElement=document.getElementById('youtubePlayer')! as HTMLIFrameElement;
			element.src=source;
			this.currentVideoLink=source;
			this.currentVideo=title;
		}
	}
	showCardDownwards(idCard:string,idPannel:string){
		document.getElementById(idCard)!.style.top="35vh";
		document.getElementById(idPannel)!.style.display="block";
		document.getElementById(idPannel)!.style.opacity="0.4";
		document.getElementById(idCard)!.style.transition="top 2s ease 0s";
	}
	hideCardUpwards(idCard:string,idPannel:string){
		document.getElementById(idCard)!.style.top="-120vh";
		document.getElementById(idPannel)!.style.display="none";
		document.getElementById(idPannel)!.style.opacity="0";
		document.getElementById(idCard)!.style.transition="top 1s ease 0s";
	}
	scrollServiceDiv(direction:string,id:string){
		let scrollBy:number=0;
		if(direction=="left"){
			scrollBy=document.getElementById(id)!.clientWidth;
		}
		else{
			scrollBy=-document.getElementById(id)!.clientWidth;
		}
		document.getElementById(id)!.scrollBy({left: scrollBy,behavior: "smooth"});
	}
	policiesModuleFiller(title:string,index:number){
		document.getElementById("policyModuleTitle")!.innerHTML=title;
		document.getElementById("policyModuleDescription")!.innerHTML=this.policyItems[index]["description"];
	}
	pricingModuleFiller(title:string,index:number){
		document.getElementById("pricingModuleTitle")!.innerHTML=title;
		document.getElementById("pricingModulePrice")!.innerHTML=this.pricingStructureItems[index]["price"];
		document.getElementById("pricingModuleDescription")!.innerHTML=this.pricingStructureItems[index]["description"];
	}
}