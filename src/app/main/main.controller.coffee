angular.module "tmf"
  .controller "MainCtrl", ($scope, $window)->
    # Default form object
    $scope.form = email: null
    # SUbscribe function
    $scope.subscribe = (email)->
      url  = 'http://themigrantsfiles.us9.list-manage.com/subscribe?u=d40f524f34bc0a3d2144216d0&id=a367e896c5'
      url += '&MERGE0=' + email
      # Open a new tab
      $window.open url, '_blank'
      # Empty the form
      $scope.form.email = ''

