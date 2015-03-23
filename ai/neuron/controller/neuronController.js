neuron.controller('neuronController', ['$scope', function($scope) {
    $scope.results = [];
    $scope.eta = 0.2;
    $scope.w;
    //AND (1. Zeile: AND input 1, 2. Zeile: AND input 2, 3. Zeile: Bias, 4. Vektorzeile is the result)
    $scope.and = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 1]];
    $scope.or = [[0, 0, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 1]];
    $scope.steps;
    $scope.ao = "and";


    $scope.start = false;
    $scope.learn = function(){
        $scope.w = [Math.random(), Math.random(), Math.random()];
        var i = 0;
        var steps = $scope.steps || 1;
        var io;
        var y;
        var e;
        var v;
        if($scope.ao == "and"){v = $scope.and;}else{v = $scope.or;}

        $scope.start = true;
        for (i; i < steps; i++) {
            var num = Math.floor(Math.random() * 4);
            io = v[num];
            //if(num == 3){console.log(io)}
            y = $scope.scalarProduct($scope.w,io);
            e = io[3] - $scope.sigmoid(y);
            $scope.w[0] += $scope.eta * e * io[0];
            $scope.w[1] += $scope.eta * e * io[1];
            $scope.w[2] += $scope.eta * e * io[2];
            $scope.results.push([$scope.w[0], $scope.w[1], $scope.w[2]]);
        }
        $scope.start = false;
        $scope.learnedFunction();
    };

    $scope.sigmoid = function(x){
        return  (1 / (1 + Math.exp((-1)*x)));
    }

    $scope.scalarProduct = function(a, b){
       return (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
    }

    $scope.expected;
    $scope.result;
    $scope.goals = [];

    $scope.learnedFunction = function(){
        $scope.goals = [];
        var v;
        var io;
        if($scope.ao == "and"){v = $scope.and;}else{v = $scope.or;}
        var input = [$scope.a,$scope.b,1];
        for(var i = 0; i < 4; i++){
            io = v[i];
            console.log($scope.scalarProduct($scope.w,io));
            $scope.goals.push({'res': $scope.sigmoid($scope.scalarProduct($scope.w,io)), 'exp':io[3]});
        }
        //$scope.result = $scope.sigmoid($scope.scalarProduct($scope.w,input));
    }

}]);

