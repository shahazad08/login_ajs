app.service('userService', function ($http, $location) {

    this.registerUser = function (data) {

        $http({                             // get the port for the local host
            method: 'POST',
            url: "http://localhost:8000",   // local host of chatapp
            data: data                      // Get the data where user has registered the value
        }).then(
            function successCallback(response) {        // if sucess register
                // $scope.$location=home.html
                console.log("register successfull ");   
                console.log(response);                  // get the response from the server to the terminal
                console.log(response.data);             // print the data to the terminal
                $state.go("home")  // redirect to the login page after successfull registeration

            },
            function errorCallback(response) {      // if register is not sucess, then gets the user   
                // windows.confirm("Incorrect");
                console.log("register Unsuccessfull ");
                console.log(response);
                console.log(response.data); 
            }
        );
    }
    this.loginUser = function (data) {

        $http({
            method: 'POST',
            url: "http://localhost:8000",        // local host of chat app
            data: data                           // Get the user details i,e username and password
        }).then(
            function successCallback(response) {
                // $scope.$location=home.html
                console.log("login successfull ");  
                // $state.$location("http://127.0.0.1:8000/accounts/login/") 
                location.replace("http://127.0.0.1:8000/") // go to the chat app of a django project
                console.log(response);              
                console.log(response.data);
            
            },
            function errorCallback(response) {          // if error, then login unsuccessfull
                windows.confirm("Incorrect");
                console.log("login Unsuccessfull ");
                alert("Invalid Login")
                // console.log(response);
                console.log(response.data);
            }
        );
    }
});
