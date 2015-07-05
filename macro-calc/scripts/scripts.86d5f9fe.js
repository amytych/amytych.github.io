"use strict";angular.module("lgn365App",["ngAnimate","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("lgn365App").controller("MainCtrl",["$scope","$location","dataService",function(a,b,c){function d(){g()?e():f()}function e(){a.maintenanceIntake=h(),a.macros.calories=i(),a.macros.fat=j(),a.macros.protein=k(),a.macros.carbs=l()}function f(){a.maintenanceIntake=0,a.macros.calories=[0,0,0],a.macros.protein=[0,0,0],a.macros.fat=[0,0,0],a.macros.carbs=[0,0,0]}function g(){return angular.isDefined(a.activity)&&angular.isDefined(a.metric)&&angular.isDefined(a.goal)&&angular.isDefined(a.bodyWeight)&&angular.isDefined(a.bodyFat)}function h(){var b=c.getActivityValues(a.bodyFat)[a.activity.id];return a.metric.modifier*a.bodyWeight*b}function i(){var b,c=a.maintenanceIntake;return 0===a.goal.id?b=a.bodyFat<=16?[c+100,c-500]:a.bodyFat<=24?[c,c-650]:[c-200,c-600]:1===a.goal.id?b=[.8*c,.8*c-150,c+500]:2===a.goal.id?b=[c+.1*c,c-.1*c]:3===a.goal.id&&(b=[c+.1*c,c-.05*c]),b}function j(){var b=[0,0];return b=n()?[.25*a.macros.calories[0]/9,.25*a.macros.calories[1]/9,[.2*a.macros.calories[2]/9,.25*a.macros.calories[2]/9]]:a.bodyFat<=16?[.2*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4]:a.bodyFat<=24?[.25*a.macros.calories[0]/9,a.bodyWeight*a.metric.modifier*.4]:[a.bodyWeight*a.metric.modifier*.5,a.bodyWeight*a.metric.modifier*.4]}function k(){var b=m();return[a.bodyWeight*a.metric.modifier*b[0],a.bodyWeight*a.metric.modifier*b[1],a.bodyWeight*a.metric.modifier*b[2]]}function l(){var b=[(a.macros.calories[0]-4*a.macros.protein[0]-9*a.macros.fat[0])/4,(a.macros.calories[1]-4*a.macros.protein[1]-9*a.macros.fat[1])/4];return 1===a.goal.id&&b.push([(a.macros.calories[2]-4*a.macros.protein[2]-9*a.macros.fat[2][1])/4,(a.macros.calories[2]-4*a.macros.protein[2]-9*a.macros.fat[2][0])/4]),b}function m(){var b=[1,1,1];return 0===a.goal.id&&a.bodyFat>=24&&(b[1]=.9),b}function n(){return 1===a.goal.id}a.activities=c.getActivities(),a.metrics=c.getMetrics(),a.goals=c.getGoals(),a.maintenanceBase=0,a.maintenanceIntake=[0,0],a.macros={protein:[0,0],carbs:[0,0],fat:[0,0],calories:[0,0]},a.$watchGroup(["metric","goal","activity","bodyWeight","bodyFat"],d)}]),angular.module("lgn365App").service("dataService",function(){this.getActivities=function(){return[{id:0,name:"Lightly active",description:"training 2-3 hours per week, light movement during daily activity/office work."},{id:1,name:"Moderately active",description:"training 3-4 hours per week, mixtures of standing/sitting during work hours."},{id:2,name:"Active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours."},{id:3,name:"Very active",description:"training 4-5 hours per week, moderate amounts lifting and lots of walking during work hours."},{id:4,name:"Extremely active",description:"training 5-6 hours per week, strenuous job situation such as construction, landscaping and other manual labor jobs."}]},this.getActivityValues=function(a){return 15>=a?[14.5,15.5,16.5,17.5,18.5]:24>=a?[14,15,16,17,18]:[13.5,14.5,15.5,16.5,17.5]},this.getMetrics=function(){return[{id:0,name:"Pounds",modifier:1},{id:1,name:"Kilograms",modifier:2.2}]},this.getGoals=function(){return[{id:0,name:"Staggered Fat Loss With No Weekly Refeed"},{id:1,name:"Staggered Fat Loss With Weekly Refeed"},{id:2,name:"Maintenance"},{id:3,name:"Recomposition"}]}});