/*
 * Controller da página principal
 */

Quizzer.controller('mainCtrl', ['$scope', '$location', '$log',
	function($scope, $location, $log){
		$scope.navbar    = 'views/navbarMain.html';
		$scope.container = 'views/matches.html';

		$scope.password = '';
		$scope.invalidPassword = false;

		$scope.masterLogin = function() {
			$log.info(this.password);
			if (this.password === 'incorrect') {
				$location.path('/master');
			}
			else {
				this.invalidPassword = true;
			}
		}

		$scope.playerLogin = function(matchId) {
			$log.info('Entering in match ' + matchId)
		}
	}
]);

/**
 * Controller usado na apresentação das partidas
 */
Quizzer.controller('matchesCtrl', ['$scope', function($scope){
	$scope.count = 0;

	$scope.matches = [
		{
			title: 'Estruturas de dados I',
			status: 'disponível',
			current: 3,
			total: 20,
			available: true		
		},
		{
			title: 'Estruturas de dados II',
			status: 'em andamento',
			current: 13,
			total: 25			
		},
		{
			title: 'Estruturas de dados Avançadas',
			status: 'lotado',
			current: 20,
			total: 20			
		}
	];

	$scope.enterMatch = function(matchId) {
		$scope.count++;
		$log.info('Entrando na partida ' + matchId);
	}
}])

/*
 * Controller usado nas telas do mestre do jogo
 */

Quizzer.controller('masterCtrl', ['$scope', '$location',
	function($scope, $location){
		$scope.navbar    = 'views/navbarMaster.html';
		$scope.container = 'views/matchConfig.html';

		$scope.logout = function() {
			$location.path('/');
		}
	}
]);


Quizzer.controller('matchConfigCtrl', ['$scope', function($scope){

	// default settings
	$scope.match = {
		state: 'setting',
		time: 120,                   // two minutes
		timeTarget: 'question',      // per question
		type: 'individual',          // with an individual participation
		group: {                     // but if it is in group...
			num: 2,                  // set 2 groups
			scoreType: 'average',    // which score will be defined by the average and...
			visibility: 'finished'   // that could be identified only at the end of the match.
		}

	};
	$scope.totalPlayers = 20;  // by default, the master is waiting for 20 players

	$scope.quizzes = [
		{
			title: 'Acordando cedo',
			description: 'Um belo dia, você acorda cedo. O que você faz?',
			options: [
				'Volta a dormir',
				'Levanta-se e vai mijar',
				'Reclama do dia',
				'Diz "bom dia!"',
				'Nenhuma das anteriores'
			],
			correct: 4,
		},
		{
			title: 'Acordando tarde',
			description: 'Um belo dia, você acorda tarde. O que você faz?',
			options: [
				'Volta a dormir',
				'Levanta-se e vai mijar',
				'Reclama do dia',
				'Diz "bom dia!"',
				'Nenhuma das anteriores'
			],
			correct: 0,
		},
		{
			title: 'Acordando muito cedo',
			description: 'Um belo dia, você acorda muito cedo. O que você faz?',
			options: [
				'Volta a dormir',
				'Levanta-se e vai mijar',
				'Reclama do dia',
				'Diz "bom dia!"', 
				'Nenhuma das anteriores'
			],
			correct: 4,
		},
		{
			title: 'Acordando muito tarde',
			description: 'Um belo dia, você acorda muito tarde. O que você faz?',
			options: [
				'Volta a dormir',
				'Levanta-se e vai mijar',
				'Reclama do dia',
				'Diz "bom dia!"',
				'Nenhuma das anteriores'
			],
			correct: 0,
		},
	];

	$scope.myData = [{name: "Moroni", age: 50},
                 {name: "Tiancum", age: 43},
                 {name: "Jacob", age: 27},
                 {name: "Nephi", age: 29},
                 {name: "Enos", age: 34}];

	$scope.addPlayer = function() {
		$scope.match.players = $scope.match.players ? $scope.match.players + 1 : 1;
	}

	$scope.createMatch = function() {
		$scope.match.state = 'waiting';
		$scope.match.id = 'a4wn';
	}

	$scope.startMatch = function() {
		$scope.match.state = 'active';
	}
}])