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

.controller('MainpageCtrl', ['$location', 'MainmenuBoxes', 'boxDataService','$timeout',function(location, MainmenuBoxes, boxDataService) {
    var vm = this;
    vm.boxData = null;
    

    

    
    boxDataService.getData().then(function(res){
        vm.boxData = res.data;
        console.log(vm.boxData);
    });
    
	vm.box = [
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
	
    
    vm.images = [];
    
    var totalImages = 8
    for(var i = 1; i <= totalImages; i++){
        vm.images.push({
            src:'images/gallery/img-cycle' + i + '.jpg',
			num: i
        })
    }
}])


.factory('MainmenuBoxes', ['boxDataService',function(boxDataService){
    
    var vm = this;
    vm.resData = 'None';
    
    return{
        getCalendar: function(){

            var obj = {
                num: 0,
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
                num: 1,
                desc: "What is GTOR?",
                hover: false,
                link: "",
                clicked: false,
                text: "We design and build an off-road vehicle from scratch. For our competitions, we travel around the country to test our designs against over 200 colleges from around the world. The cars are judged based on design report and analysis, cost, acceleration, braking, hill climb, tractor pull, mud bog, rock crawling, and a 4 hour endurance race. Points earned in each of these events are totaled up to determine the final rankings. We are a completely student run organization with faculty advisers at Georgia Tech. The student members are responsible for 100% of the design and fabrication of the car. Members get to see their designs advance through design and fabrication and eventually see them in competition with other teams' designs. Manufacturing team members are trained in all of the machining skills they will need to fabricate the parts of the car, so no experience with either cars or machining is necessary to join the team. Likewise, design team members are trained in all necessary skills and knowledge to complete their task such as CAD, the design process, engineering analysis methods, and knowledge of the particular subsystem they are working in. There are a few standards that all teams must follow. The most important of these are the strict safety standards set by SAE. Also, all teams are given identical Briggs & Straton 10hp motors that they must use. Aside from that, teams have the freedom to design the car however they want. We are located in the GT Student Competition Center. If you do not have transportation, you can reach the shop by taking the green route from Georgia Tech. Please contact us, by email, if you are interested in joining our team and have any questions, or you can submit an interest form on our website!"
            }
            return obj;
        },
        getHowDoIJoin : function(){
            var obj = {
                num: 2,
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
                num: 3,
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
                num: 4,
                desc: "Photos",
                hover: false,
                link: "photosandvideos",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getHistory: function(){
            var obj = {
                num: 5,
                desc: "",
                hover: false,
                link: "mainpage",
                clicked: false,
                text: ""
            }
            return obj;
        },
        getRankings: function(){
            var obj = {
                num: 6,
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
                num: 7,
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
                num: 8,
                desc: "",
                hover: false,
                link: "mainpage",
                clicked: false,
                text: ""
            }
            return obj;
        }
        
    }
        
}])

.service('boxDataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function() {
        return $http({
            url: '/app/mainpage/box_info.txt',
            dataType: 'json',
            method: 'GET',
            data: '',
            headers: {
                "Content-Type": "application/json"
            }
         });
    }

});