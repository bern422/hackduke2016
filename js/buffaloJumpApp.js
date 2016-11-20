angular.module('buffaloJumpApp',[])
	.controller('buffaloJumpController',["$scope",function($scope){

		var scenes = {
			entrance : {
				skySmallImage: "images/entrance_small.jpg"
				,skyRotation: "0 130 0"
				,navPoints: [
					{
						position: "4 2 3"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id: "nav1"
					}
				]
				,descriptors: [
					{
						position: "3.2 2 1" // "x y z"
						,soundSrc: "sounds/man.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "man"
						,src: "images/sound.png"
					},
					{
						position: "3.2 2 -2" // "x y z"
						,soundSrc: "sounds/car.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "car"
						,src: "images/car_asset.png"
					},
					{
						position: "-0 3.5 11" // "x y z"
						,soundSrc: "sounds/sunny.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "sunny"
						,src: "images/sound.png"
					}
				]
			}
			,pavilion: {
				skySmallImage: "images/pavilion_small.jpg"
				,skyRotation: "0 220 0"
				,navPoints: [
					,{
						position: "-4 1.6 4"
						,animationFrom: "0 90 0"
						,animationTo: "0 -270 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "entrance"
						,id:"nav2"
					}
				]
				,descriptors: [
					{
						position: "3.2 2.5 2" // "x y z"
						,soundSrc: "sounds/test.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "jump"
						,src: "images/sound.png"
					},
					{
						position: "-0 3.5 11" // "x y z"
						,soundSrc: "sounds/cloudy.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "cloudy"
						,src: "images/sound.png"
					},
					{
						position: "1.6 0 7" // "x y z"
						,soundSrc: "sounds/grass.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "grass"
						,src: "images/sound.png"
					},
					{
						position: "-2.7 1.7 2" // "x y z"
						,soundSrc: "sounds/mountains.wav"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,id: "mountains"
						,src: "images/sound.png"
					}
				]
			}
			,face: {
				skySmallImage: "images/face_small.jpg"
				,skyRotation: "0 220 0"
				,navPoints: [
					{
						position: "-3 1 8"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id:"nav1"
					}
				]
			}
			,overlook: {
				skySmallImage: "images/overlook_small.jpg"
				,skyRotation: "0 -235 0"
				,navPoints: [
					{
						position: "3.2 1.3 2"
						,animationFrom: "0 -55 0"
						,animationTo: "0 305 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id:"nav1"
					}
				]
			}
		}

		function setupScene(){
			sky.setAttribute("rotation",$scope.scene.skyRotation);
			sky.setAttribute("src",$scope.scene.skySmallImage);
		}


		var sky = document.querySelector("#sky");
		var vrScene = document.querySelector("#scene");



		vrScene.addEventListener("loaded",function(){
			console.log("loaded!!");
			setupScene();
		});


		//initialize scene
		 $scope.scene = scenes.entrance;


		$scope.navMouseEnter = function(){

			console.log(this);
		}
		$scope.navClick = function(navPoint){
			$scope.scene = scenes[navPoint.destination];
			setupScene();
		}
		$scope.descMouseEnter = function() {
			console.log(this);
		}

		$scope.globalStop = function(){
			console.log("here")
    	if ($scope.audio !== undefined && $scope.audio !== null) {
				$scope.audio.pause();
				$scope.audio = null;
			}
		}

		$scope.descClick = function(descriptor){
			// Play audio here.
			console.log(descriptor)
			if ($scope.audio === undefined || $scope.audio === null) {
				$scope.audio = new Audio(descriptor.soundSrc);
				$scope.audio.play();
			} else {
				$scope.audio.pause();
				$scope.audio = null;
			}
		}

	}]);
