angular.module('app.controllers', [])
  
.controller('climateFastCtrl', function($scope,$http) {
  $scope.set = function(cidade){
      url_get='http://developers.agenciaideias.com.br/tempo/json/'+cidade;
    $http({
  method: 'POST',
  url: url_get
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  $scope.cidadeok = response.data["cidade"];
  $scope.temp = response.data.agora.temperatura;
  $scope.umidade = response.data.agora.humidade;
  $scope.visi = response.data.agora.visibilidade;
  $scope.vel = response.data.agora.vento_velocidade;
  $scope.pressao = response.data.agora.vento_direcao;
  $scope.statu = response.data.agora.pressao;
  $scope.nasce = response.data.agora.nascer_do_sol;
  $scope.por = response.data.agora.por_do_sol;
  $scope.img = response.data.agora.imagem;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });    
      
  }
  
})
 