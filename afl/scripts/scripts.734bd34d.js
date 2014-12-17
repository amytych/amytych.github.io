"use strict";angular.module("lgn365App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("lgn365App").controller("MainCtrl",["$scope","$location",function(a,b){function c(){a.maintenanceIntake=f(),a.macros.calories=g(),a.macros.fat=h(),a.macros.protein=i(),a.macros.carbs=j()}function d(){a.maintenanceIntake=0,a.macros.calories=[0,0,0],a.macros.protein=[0,0,0],a.macros.fat=[0,0,0],a.macros.carbs=[0,0,0]}function e(){return angular.isDefined(a.activity)&&angular.isDefined(a.metric)&&angular.isDefined(a.goal)&&angular.isDefined(a.gender)&&angular.isDefined(a.bodyWeight)&&angular.isDefined(a.bodyFat)}function f(){return a.metric.modifier*a.activity.value*a.bodyWeight}function g(){var b=[a.maintenanceIntake,a.maintenanceIntake];return 0===a.goal.id?b=0===a.gender.id&&a.bodyFat<=16||1===a.gender.id&&a.bodyFat<=10?[b[0]+100,b[1]-500]:0===a.gender.id&&a.bodyFat<=24||1===a.gender.id&&a.bodyFat<=17?[b[0],b[1]-650]:[b[0]-200,b[1]-600]:1===a.goal.id&&(b=[.8*b[0],.8*b[0]-150,a.metric.modifier*(a.activity.value+6)*a.bodyWeight]),b}function h(){var b=[0,0];return 0===a.goal.id?b=0===a.gender.id&&a.bodyFat<=16||1===a.gender.id&&a.bodyFat<=10?[.2*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4]:0===a.gender.id&&a.bodyFat<=24||1===a.gender.id&&a.bodyFat<=17?[.25*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4]:[a.bodyWeight*a.metric.modifier*.5,a.bodyWeight*a.metric.modifier*.4]:1===a.goal.id&&(b=[.25*a.macros.calories[0]/9,.25*a.macros.calories[1]/9,[.2*a.macros.calories[2]/9,.25*a.macros.calories[2]/9]]),b}function i(){var b=k();return[a.bodyWeight*a.metric.modifier*b[0],a.bodyWeight*a.metric.modifier*b[1],a.bodyWeight*a.metric.modifier*b[2]]}function j(){var b=[(a.macros.calories[0]-4*a.macros.protein[0]-9*a.macros.fat[0])/4,(a.macros.calories[1]-4*a.macros.protein[1]-9*a.macros.fat[1])/4];return 1===a.goal.id&&b.push([(a.macros.calories[2]-4*a.macros.protein[2]-9*a.macros.fat[2][1])/4,(a.macros.calories[2]-4*a.macros.protein[2]-9*a.macros.fat[2][0])/4]),b}function k(){var b=[1,1,1];return(0===a.goal.id&&0===a.gender.id&&a.bodyFat>=24||1===a.gender.id&&a.bodyFat>=18)&&(b[1]=.9),b}var l={};a.activities=[{id:0,name:"Sedentary",description:"little to no exercise, light training (1-2 hours per week), desk job, sitting most of the time, no activity outside of training.",value:12.8},{id:1,name:"Lightly active",description:"training 2-3 hours per week, light movement during daily activity/office work.",value:13.5},{id:2,name:"Moderately active",description:"training 3-4 hours per week, mixtures of standing/sitting during work hours.",value:14.4},{id:3,name:"Active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours.",value:15.3},{id:4,name:"Very active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours.",value:16.2},{id:5,name:"Extremely active",description:"training 5-6 hours per week, strenuous job situation such as construction, landscaping and other manual labor jobs.",value:16.2}],a.activity=a.activities[l.a||void 0],a.metrics=[{id:0,name:"Pounds",modifier:1},{id:1,name:"Kilograms",modifier:2.2}],a.metric=a.metrics[l.m||void 0],a.goals=[{id:0,name:"Staggered With No Weekly Refeed"},{id:1,name:"Staggered With Weekly Refeed"}],a.goal=a.goals[l.g||void 0],a.genders=[{id:0,name:"Female"},{id:1,name:"Male"}],a.gender=a.genders[l.s||void 0],a.bodyWeight=parseInt(l.w,10)||void 0,a.bodyFat=parseInt(l.f,10)||void 0,a.maintenanceIntake=0,a.macros={protein:[0,0],carbs:[0,0],fat:[0,0],calories:[0,0]},a.updateData=function(){e()?c():d()}}]),angular.module("lgn365App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("lgn365App").factory("protein",["config",function(a){function b(){var b=[1,1],c=a.get("goal"),d=a.get("gender"),e=a.get("bodyFat");return(0===c.id&&0===d.id&&e>=24||1===d.id&&e>=18||1===c.id)&&(b[1]=.9),b}return{calculate:function(){var c=[0,0],d=a.get("metric"),e=a.get("bodyWeight"),f=b();return c[0]=f[0]*e*d.modifier,c[1]=f[1]*e*d.modifier,c}}}]),angular.module("lgn365App").factory("config",function(){var a={activities:[{id:0,name:"Sedentary",description:"little to no exercise, light training (1-2 hours per week), desk job, sitting most of the time, no activity outside of training.",value:12.8},{id:1,name:"Lightly active",description:"training 2-3 hours per week, light movement during daily activity/office work.",value:13.5},{id:2,name:"Moderately active",description:"training 3-4 hours per week, mixtures of standing/sitting during work hours.",value:14.4},{id:3,name:"Active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours.",value:15.3},{id:4,name:"Very active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours.",value:16.2},{id:5,name:"Extremely active",description:"training 5-6 hours per week, strenuous job situation such as construction, landscaping and other manual labor jobs.",value:16.2}],metrics:[{id:0,name:"Pounds",modifier:1},{id:1,name:"Kilograms",modifier:2.2}],goals:[{id:0,name:"Fat Loss (absolute)"},{id:1,name:"Fat Loss (percentage)"},{id:2,name:"Muscle Gain"}],genders:[{id:0,name:"Female"},{id:1,name:"Male"}]};return{getAll:function(){return{activity:a.activity,metric:a.metric,goal:a.goal,gender:a.gender,bodyWeight:a.bodyWeight,bodyFat:a.bodyFat,maintenanceIntake:a.maintenanceIntake}},get:function(b){return a[b]},set:function(b,c){a[b]=c}}}),angular.module("lgn365App").factory("carb",["config",function(a){return{calculate:function(){var b=a.get("macros");return[(b.calories[0]-4*b.protein[0]-9*b.fat[0])/4,(b.calories[1]-4*b.protein[1]-9*b.fat[1])/4]}}}]),angular.module("lgn365App").factory("calorie",["config",function(a){return{calculateMaintenanceIntake:function(){var b=a.get("metric"),c=a.get("activity"),d=a.get("bodyWeight");return b.modifier*c.value*d},calculate:function(){var b=a.getAll(),c=[b.maintenanceIntake,b.maintenanceIntake];return 0===b.goal.id?c=0===b.gender.id&&b.bodyFat<=16||1===b.gender.id&&b.bodyFat<=10?[c[0]+100,c[1]-500]:0===b.gender.id&&b.bodyFat<=24||1===b.gender.id&&b.bodyFat<=17?[c[0],c[1]-650]:[c[0]-200,c[1]-600]:1===b.goal.id?c=0===b.gender.id&&b.bodyFat<=16||1===b.gender.id&&b.bodyFat<=10?[1.1*c[0],.7*c[1]]:0===b.gender.id&&b.bodyFat<=24||1===b.gender.id&&b.bodyFat<=17?[c[0],.65*c[1]]:[c[0]-200,.65*c[1]]:2===b.goal.id&&(0===b.gender.id?c=[c[0]+300,c[1]-100]:1===b.gender.id&&(c=[1.2*c[0],.95*c[1]])),c}}}]),angular.module("lgn365App").factory("fat",["config",function(a){return{calculate:function(){var b=a.getAll(),c=[0,0];return 0===b.goal.id?c=0===b.gender.id&&b.bodyFat<=16||1===b.gender.id&&b.bodyFat<=10?[.2*b.macros.calories[0]/9,b.bodyWeight*b.metric.modifier*.4]:0===b.gender.id&&b.bodyFat<=24||1===b.gender.id&&b.bodyFat<=17?[.25*b.macros.calories[0]/9,b.bodyWeight*b.metric.modifier*.4]:[b.bodyWeight*b.metric.modifier*.5,b.bodyWeight*b.metric.modifier*.4]:1===b.goal.id?c=0===b.gender.id&&b.bodyFat<=16||1===b.gender.id&&b.bodyFat<=10?[.2*b.macros.calories[0]/9,b.bodyWeight*b.metric.modifier*.25]:0===b.gender.id&&b.bodyFat<=24||1===b.gender.id&&b.bodyFat<=17?[.25*b.macros.calories[0]/9,b.bodyWeight*b.metric.modifier*.25]:[b.bodyWeight*b.metric.modifier*.4,b.bodyWeight*b.metric.modifier*.4]:2===b.goal.id&&(0===b.gender.id?c=[.15*b.macros.calories[0]/9,b.bodyWeight*b.metric.modifier*.5]:1===b.gender.id&&(c=[.2*b.macros.calories[0]/9,b.bodyWeight*b.metric.modifier*.4])),c}}}]);