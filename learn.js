var Game = /** @class */ (function () {
    function Game() {
        this.team = Array();
        for (var i = 0; i < 2; i++) {
            this.team.push(new Team(i));
        }
        this.currentTeam = this.team[0];
    }
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.player = Array();
        this.id = id;
        for (var i = 0; i < 10; i++) {
            this.player.push(new Player(i));
        }
        this.currentPlayer = this.player[0];
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(id) {
        this.score = 0;
        this.balls = 0;
        this.ballScore = [null];
        this.id = id;
    }
    Player.prototype.ballhit = function () {
        var randRun = Math.floor(Math.random() * 7);
        this.ballScore[this.balls] = randRun;
        this.score = this.score + randRun;
        this.balls++;
    };
    return Player;
}());
var game;
var t1 = 0;
var b1 = 0;
var count = 0;
var countP = 1;
var team1 = "";
var team2 = "";
document.getElementById("create-game").addEventListener("click", function () {
    game = new Game();
    console.log(game);
});
document.getElementById("team1-hit").addEventListener("click", function () {
    count++;
    if (count > 6 && count % 6 == 1)
        countP++;
    game.currentTeam.currentPlayer.ballhit();
    console.log(game);
});
document.getElementById("key").addEventListener("click", function () {
    var total = String(game.currentTeam.currentPlayer.score - t1);
    var currentscore = String((game.currentTeam.currentPlayer.ballScore).pop());
    var out = "";
    var teamchange = "";
    var win = "";
    var finalscore = "";
    if (count == 1 && t1 <= 0) {
        teamchange = " Team 1 now playing";
    }
    if (currentscore == "0") {
        out = "Player " + countP + " out";
        countP++;
    }
    if (t1 <= 0 && (count > 60 || countP > 10)) {
        team1 = total;
        t1 = parseInt(team1);
        countP = 1;
        teamchange = " Team 2 now playing";
        b1 = count;
        count = 0;
    }
    if (t1 > 0 && (count > 60 || countP > 10)) {
        team2 = total;
        if (team1 > team2) {
            win = " Team1 wins";
        }
        else if (team1 < team2) {
            win = " Team2 wins";
        }
        else {
            win = "Tie";
        }
        finalscore = " Team 1: " + team1 + " Team 2: " + team2;
    }
    var message = "Total Score: " + total + " Current Score: " + currentscore + " Total Balls: " + count + " Current Player: " + countP + " " + out + " " + teamchange + " " + win;
    //document.getElementById("disp").innerText = message+finalscore;
    document.getElementById("disp1").innerText = "Total Score: " + total;
    document.getElementById("disp2").innerText = "Current Score: " + currentscore;
    document.getElementById("disp3").innerText = "Total Balls: " + count;
    document.getElementById("disp4").innerText = "Current Player: " + countP;
    document.getElementById("disp5").innerText = out + " " + teamchange + " " + win;
});
