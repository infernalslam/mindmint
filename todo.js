/*global angular, FileReader, $*/
angular.module('todoApp', ['base64'])
  .controller('TodoListController', function ($base64, $scope) {
    $scope.test = 'Project'
    $scope.data = {}
    $scope.showImage = false
    $scope.showCamera = false

    var fileSelect = document.createElement('input')
    fileSelect.type = 'file'
    if (fileSelect.disabled) {
      return
    }
    $scope.click = function () {
      fileSelect.click()
    }
    fileSelect.onchange = function () {
      var f = fileSelect.files[0]
      var r = new FileReader()
      r.onloadend = function (e) {
        $scope.data.b64 = e.target.result
        $scope.$apply()
        console.log($scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, ''))
        // $scope.imageBg = $scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, '')
      }
      r.readAsDataURL(f)
      $scope.showImage = true
    }

    $scope.cameraStyle = []
    $scope.insert = function () {
      //$scope.showCamera = true
      var cameraStyle = {
        id: Date.now(),
        css: {
          top: 100,
          left: 100,
          position: 'absolute',
          background: 'rgb(53, 255, 195)',
          width: '1em',
          height: '1em',
          animation: 'ripple 0.7s linear infinite',
          'border-radius': '50%'
        }
      }
      $scope.cameraStyle.push(cameraStyle)
    }

    $scope.moveObj = function (id) {
      $scope.cameraStyle.find(function (item) {
        if (item.id === id) {
          item.css = $('#' + id).position()
        }
      })
    }
    $scope.init = function () {
      $scope.cameraStyle.forEach(function (item) {
        console.log(item)
        $('#' + item.id).draggable()
        $('#' + item.id).css(item.css)
      })
    }
    // ///////////////// CCTV ////////////////////////
    $scope.raduisStyle = []
    $scope.raduis = function () {
      //$scope.showCamera = true
      var cctvStyle = {
        id: Date.now(),
        css: {
          top: 100,
          left: 100,
          position: 'absolute',
          width: '200px',
          height: '300px',
          'background-color': 'yellow',
          height: '45px',
          width: '90px',
          'border-radius': '30px 90px 0 0',
          '-webkit-border-radius': '90px 90px 0 0',
          transform: 'rotate(0deg)'
        }
      }
      $scope.raduisStyle.push(cctvStyle)
    }

    $scope.moveObjraduisStyle = function (id) {
      $scope.raduisStyle.find(function (item) {
        if (item.id === id) {
          item.css = $('#' + id).position()
        }
      })
    }
    $scope.initraduisStyle = function () {
      $scope.raduisStyle.forEach(function (item) {
        console.log(item)
        $('#' + item.id).draggable()
        $('#' + item.id).css(item.css)
      })
    }
    $scope.range = 0
    $scope.showRange = false
    $scope.idCctv = 0
    $scope.tranformcctv = function (id) {
      $scope.showRange = true
      //console.log($scope.raduisStyle)
      var index = $scope.raduisStyle.map(item => item.id).indexOf(id)
      console.log($scope.raduisStyle[index].css.left)
      var data = {
        id: id,
        css: {
          top: $scope.raduisStyle[index].css.top,
          left: $scope.raduisStyle[index].css.left,
          position: 'absolute',
          width: '200px',
          height: '300px',
          'background-color': 'yellow',
          height: '45px',
          width: '90px',
          'border-radius': '30px 90px 0 0',
          '-webkit-border-radius': '90px 90px 0 0',
          transform: 'rotate(0deg)'
        }
      }
      $scope.raduisStyle.splice(index, 1)
      $scope.raduisStyle.push(data)
      var indexEdit = $scope.raduisStyle.map(item => item.id).indexOf(id)
      console.log('id '+ id+' :' + $scope.raduisStyle[indexEdit].css.transform)
      $scope.idCctv = indexEdit
      // $scope.raduisStyle[indexEdit].css.transform = 'rotate('+$scope.range+'deg)'
    }
    $scope.cctvSubmit = function () {
      console.log($scope.raduisStyle[$scope.idCctv])
      $scope.raduisStyle[$scope.idCctv].css.transform = 'rotate('+$scope.range+'deg)'
      $scope.showRange = false
      $scope.idCctv = 0
    }
    ///////////////////////////////////////////////////
  })
