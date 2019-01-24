app.controller('userControl', function($scope , userService){
// controller: control the data of AngularJS applications, The ng-controller directive defines the application controller.    
// Scope: The scope is the binding part between the HTML (view) and the JavaScript (controller).

    $scope.login = function(){   // 

        var data = {
            userName : $scope.userName,
            password : $scope.password
        }
        console.log(data);
        userService.loginUser(data);

    }

    $scope.register = function() {

        var data = {
           
            userName: $scope.userName,
            email: $scope.email,
            password: $scope.password,
            // password:$scope.password,
        
        }
        console.log(data);
      userService.registerUser(data);
    }

});