"use strict";angular.module("lgn365App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("lgn365App").controller("MainCtrl",["$scope","$location",function(a,b){function c(){return angular.isDefined(a.activity)&&angular.isDefined(a.metric)&&angular.isDefined(a.goal)&&angular.isDefined(a.gender)&&angular.isDefined(a.bodyWeight)&&angular.isDefined(a.bodyFat)}function d(){return a.metric.modifier*a.activity.value*a.bodyWeight}function e(){var b=[a.maintenanceIntake,a.maintenanceIntake];return 0===a.goal.id?b=0===a.gender.id&&a.bodyFat<=16||1===a.gender.id&&a.bodyFat<=10?[b[0]+100,b[1]-500]:0===a.gender.id&&a.bodyFat<=24||1===a.gender.id&&a.bodyFat<=17?[b[0],b[1]-650]:[b[0]-200,b[1]-600]:1===a.goal.id?b=0===a.gender.id&&a.bodyFat<=16||1===a.gender.id&&a.bodyFat<=10?[1.1*b[0],.7*b[1]]:0===a.gender.id&&a.bodyFat<=24||1===a.gender.id&&a.bodyFat<=17?[b[0],.65*b[1]]:[b[0]-200,.65*b[1]]:2===a.goal.id&&(0===a.gender.id?b=[b[0]+300,b[1]-100]:1===a.gender.id&&(b=[1.2*b[0],.95*b[1]])),b}function f(){var b=[0,0],c=i();return b[0]=c[0]*a.bodyWeight*a.metric.modifier,b[1]=c[1]*a.bodyWeight*a.metric.modifier,b}function g(){var b=[0,0];return 0===a.goal.id?b=0===a.gender.id&&a.bodyFat<=16||1===a.gender.id&&a.bodyFat<=10?[.2*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4]:0===a.gender.id&&a.bodyFat<=24||1===a.gender.id&&a.bodyFat<=17?[.25*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4]:[a.bodyWeight*a.metric.modifier*.5,a.bodyWeight*a.metric.modifier*.4]:1===a.goal.id?b=0===a.gender.id&&a.bodyFat<=16||1===a.gender.id&&a.bodyFat<=10?[.2*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.25]:0===a.gender.id&&a.bodyFat<=24||1===a.gender.id&&a.bodyFat<=17?[.25*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.25]:[a.bodyWeight*a.metric.modifier*.4,a.bodyWeight*a.metric.modifier*.4]:2===a.goal.id&&(0===a.gender.id?b=[.15*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.5]:1===a.gender.id&&(b=[.2*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4])),b}function h(){return[(a.macros.calories[0]-4*a.macros.protein[0]-9*a.macros.fat[0])/4,(a.macros.calories[1]-4*a.macros.protein[1]-9*a.macros.fat[1])/4]}function i(){var b=[1,1];return(0===a.goal.id&&0===a.gender.id&&a.bodyFat>=24||1===a.gender.id&&a.bodyFat>=18||1===a.goal.id)&&(b[1]=.9),b}var j={};a.activities=[{id:0,name:"Sedentary",description:"little to no exercise, light training (1-2 hours per week), desk job, sitting most of the time, no activity outside of training.",value:12.8},{id:1,name:"Lightly active",description:"training 2-3 hours per week, light movement during daily activity/office work.",value:13.5},{id:2,name:"Moderately active",description:"training 3-4 hours per week, mixtures of standing/sitting during work hours.",value:14.4},{id:3,name:"Active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours.",value:15.3},{id:4,name:"Very active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours.",value:16.2},{id:5,name:"Extremely active",description:"training 5-6 hours per week, strenuous job situation such as construction, landscaping and other maleual labor jobs.",value:16.2}],a.activity=a.activities[j.a||void 0],a.metrics=[{id:0,name:"Pounds",modifier:1},{id:1,name:"Kilograms",modifier:2.2}],a.metric=a.metrics[j.m||void 0],a.goals=[{id:0,name:"Fat Loss (absolute)"},{id:1,name:"Fat Loss (percentage)"},{id:2,name:"Muscle Gain"}],a.goal=a.goals[j.g||void 0],a.genders=[{id:0,name:"Female"},{id:1,name:"Male"}],a.gender=a.genders[j.s||void 0],a.fatLevels=[{limit:{male:[0,10],female:[0,16]}}],a.fatLevel=a.fatLevels[0],a.bodyWeight=parseInt(j.w,10)||void 0,a.bodyFat=parseInt(j.f,10)||void 0,a.maintenanceIntake=0,a.macros={protein:[0,0],carbs:[0,0],fat:[0,0],calories:[0,0]},a.calculate=function(){c()?(a.maintenanceIntake=d(),a.macros.calories=e(),a.macros.protein=f(),a.macros.fat=g(),a.macros.carbs=h()):(a.maintenanceIntake=0,a.macros.calories=[0,0],a.macros.protein=[0,0],a.macros.fat=[0,0],a.macros.carbs=[0,0])}}]),angular.module("lgn365App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);