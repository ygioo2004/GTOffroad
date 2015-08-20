'use strict';

angular.module('myApp.mainpage', [
    'ngRoute',
    'ngAnimate'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainpage', {
    templateUrl: 'mainpage/mainpage.html',
    controller: 'MainpageCtrl as mainpage'
  });
}])

.controller('MainpageCtrl', ['$location', 'MainmenuBoxes', function(location, MainmenuBoxes) {

    
	this.box = [
        MainmenuBoxes.getCalendar(),
        MainmenuBoxes.getWhatIsGtor(),
        MainmenuBoxes.getHowDoIJoin(),
        MainmenuBoxes.getInterested(),
		MainmenuBoxes.getPhotosAndVid(),
        MainmenuBoxes.getHistory(),
        MainmenuBoxes.getRankings(),
        MainmenuBoxes.getContact(),
        MainmenuBoxes.getNull()
	]
	

    
//	this.images = [
//		{
//			src: 'images/gallery/img-cycle1.jpg',
//			num: 1
//		},
//		{
//			src:'images/gallery/img-cycle2.jpg',
//			num: 2
//		},
//		{
//			src:'images/gallery/img-cycle3.jpg',
//			num: 3
//		},
//		{
//			src:'images/gallery/img-cycle4.jpg',
//			num: 4
//		},
//		{
//			src:'images/gallery/img-cycle5.jpg',
//			num: 5
//		},
//		{
//			src:'images/gallery/img-cycle6.jpg',
//			num: 6
//		},
//		{
//			src:'images/gallery/img-cycle7.jpg',
//			num: 7
//		},
//		{
//			src:'images/gallery/img-cycle8.jpg',
//			num: 8
//		},
//	]
    
    this.images = [];
    
    var totalImages = 8
    for(var i = 1; i <= totalImages; i++){
        this.images.push({
            src:'images/gallery/img-cycle' + i + '.jpg',
			num: i
        })
    }
}])



/*-----------------------------factories--------------------------------------*/



.factory('MainmenuBoxes', [function(){
    return{
        getCalendar: function(){
            var obj = {
                num: 1,
                desc: "Calendar",
                hover: false,
                link: "calendar",
                clicked: false,
                text: ""
            
            }
            return obj;
        },
        getWhatIsGtor: function(){
            var obj = {
                num: 2,
                desc: "What is GTOR?",
                hover: false,
                link: "",
                clicked: false,
                text: "GT Off-Road is a group of roughly 20 undergraduate students. Though most members are studying Mechanical Engineering, there is no major requirement to be on the team and there are a variety of majors on the team and we are always looking for more. As a team, our goal is to compete in the Baja SAE(Society of Automotive Engineers) Design Competition. We design and build an off-road vehicle from scratch every year. During the summer we travel to competitions around the country to test our designs against over 200 colleges from around the world. The cars are judged based on design report and analysis, cost, acceleration, braking, hill climb, tractor pull, mud bog, rock crawling, and a 4 hour endurance race. Points earned in each of these events are totaled up to determine the final rankings.The student members are responsible for 100% of the design and fabrication of the car. Members get to see their designs advance through design and fabrication and eventually see them in competition with other teams' designs. Members are trained in all of the machining skills they will need to fabricate the parts of the car, so no experience with either cars or machining is necessary to join the team.There are a few standards that all teams must follow. The most important of these are the strict safety standards set by SAE. Also, all teams are givin identical Briggs & Straton 10hp motors that they must use. Aside from that, teams have the freedom to design the car however they want."
            }
            return obj;
        },
        getHowDoIJoin : function(){
            var obj = {
                num: 3,
                desc: "How Do I Join?",
                hover: false,
                link: "",
                clicked: false,
                text: "Joining the team is very simple. Show up at the Student Competition Center, number 850,(555 14th Street NW) at the corner of 14th Street and Hemphill Avenue any Monday or Thursday at 7PM. Any Georgia Tech student may join the team, the only prerequisite is an interest in winning a Baja SAE Competitition.You do not need to be a specific major and you do not need any experience. If you have experience in design, manufacturing, wrenching on cars, or team management, GT Off Road is the place to apply those skills. If you plan on working on the car, Wear clothes that you don't mind getting dirty (including close-toed shoes). See you in the shop! Note: You may walk, take the green route stinger during the day, or drive to the Student Competition Center. Enter through the front door. If you do not have Buzzcard access, the front desk attendant will let you in. The shop is at the back of the building, walk down the main corridor and enter the shop through the last door on the left."
            }
            return obj;
        },
        getInterested: function(){
            var obj = {
                num: 4,
                desc: "Interested?",
                hover: false,
                link: "interested",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getPhotosAndVid: function(){
            var obj = {
                num: 5,
                desc: "Photos and Videos",
                hover: false,
                link: "photosandvideos",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getHistory: function(){
            var obj = {
                num: 6,
                desc: "History",
                hover: false,
                link: "history",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getRankings: function(){
            var obj = {
                num: 7,
                desc: "Rankings",
                hover: false,
                link: "rankings",
                clicked: false,
                text: ""
		    }
            return obj;
        },
        getContact: function(){
            var obj = {
                num: 8,
                desc: "Contact",
                hover: false,
                link: "",
                clicked: false,
                text: "For general information or inquiries, contact the team at: georgiatechoffroad@gmail.com"
		    }
            return obj;
        },
        getNull: function(){
            var obj = {
                num: 9,
                desc: "",
                hover: false,
                link: "mainpage",
                clicked: false,
                text: ""
            }
            return obj;
        }
        
    }
        
}]);