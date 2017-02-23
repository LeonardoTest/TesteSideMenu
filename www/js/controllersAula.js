.controller('AppAula', function($scope) {

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
});
