var myPay =angular.module('starter.controllers', [])
myPay.directive('qrcode', function($interpolate) {  
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs) {

      var options = {
        text: '',
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: 'H'
      };

      Object.keys(options).forEach(function(key) {
        options[key] = $interpolate($attrs[key] || '')($scope) || options[key];
      });

      options.correctLevel = QRCode.CorrectLevel[options.correctLevel];

      new QRCode($element[0], options);

    }
  };
})
myPay.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal

  
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
$scope.test = function() {
   //alert("hii");
    $state.go('app.userprofile');
    
  };
  
$scope.openMyAddress = function() {
   //alert("hii");
    $state.go('app.mybitcoinaddress');
    
  };
  
$scope.openVerificationPage = function() {
   //alert("hii");
    $state.go('app.accountverification');
    
  };
  $scope.openStatements = function() {
   //alert("hii");
    $state.go('app.accountstatements');
    
  };
  $scope.openRateChart = function() {
   //alert("hii");
    $state.go('app.ratechart');
    
  };
  $scope.openFreeBitCoins = function() {
   //alert("hii");
    $state.go('app.freebitcoins');
    
  };
  $scope.openSettings = function() {
   //alert("hii");
    $state.go('app.settings');
    
  };
  $scope.openSupport = function() {
   //alert("hii");
    $state.go('app.support');
    
  };
  $scope.openAboutus = function() {
   //alert("hii");
    $state.go('app.aboutus');
    
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

myPay.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

myPay.controller('PlaylistCtrl', function($scope, $stateParams,$ionicSideMenuDelegate) {
  //alert("asdfasf")
    //  $ionicSideMenuDelegate.canDragContent(false);
});
