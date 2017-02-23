angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.deleteItem = function (item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
          $scope.items.splice(fromIndex, 1);
          $scope.items.splice(toIndex, 0, item);
      };  

   $scope.doRefresh = function() {
        // Subtract from the value of the first item ID to get the new one.
       $scope.$broadcast('scroll.refreshComplete');
    };

 $scope.items = [
   { Img: 1, Nome: 'Aristoteles',         Phone: '99384-0322', id: 1 },
   { Img: 2, Nome: 'Karl Mark',           Phone: '99818-1883', id: 2 },
   { Img: 3, Nome: 'Friedrich Nietzsche', Phone: '99844-1844', id: 3 },
   { Img: 4, Nome: 'Platão',              Phone: '99428-0348', id: 4 },
   { Img: 5, Nome: 'René Descartes',      Phone: '99596-1650', id: 5 },
   { Img: 6, Nome: 'Sócrates',            Phone: '99469-0399', id: 6 }
 ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});




