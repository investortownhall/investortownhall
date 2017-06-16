	/********** angular task********/

	angular.module("cronical", []).controller("cronicalCnt", function($scope, $timeout, $http) {
		$scope.contactdata = {}
		$scope.submit = false;

		$scope.userRegister = function(data) {
		
			$scope.submit = true;
			if (!data == true) {
				return false;
			} else if (!$scope.contactdata) {
				return false;
			} else {
				$http({
					method : 'POST',
					url : 'mail.php',
					data : $.param({
						data : $scope.contactdata
					}), // pass in data as strings
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					} // set the headers so angular passing info as form data (not request payload)
				}).success(function(data) {
					$scope.contactdata = {};
					$(".showsuccess").fadeIn();
					$timeout(function() {
						$(".showsuccess").fadeOut();
					}, 1000);
					$scope.submit = false;
				});

			}
		}
		/******** for second form ******/

		$scope.userRegistersecond = function(valid) {

			$scope.submitsecond = true;
			if (valid) {
				$scope.contactdata = {};
				$scope.submitsecond = false;
				$(".showsuccess2").fadeIn();
				$timeout(function() {
					$(".showsuccess2").fadeOut();
				}, 1000);
			}
		}
		/******** for second form ******/

		$scope.userRegisterthird = function(valid) {

			$scope.submitthird = true;
			if (valid) {
				$scope.contactdata = {};
				$scope.submitthird = false;
				$(".showsuccess3").fadeIn();
				$timeout(function() {
					$(".showsuccess3").fadeOut();
				}, 1000);
			}
		}
	})