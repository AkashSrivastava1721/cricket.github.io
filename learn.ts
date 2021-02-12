class Game
{
    team =Array<Team>();
    currentTeam: Team;
    constructor()
    {
        for(let i =0;i<2;i++)
        {
            this.team.push(new Team(i))
        }
        this.currentTeam = this.team[0];
    }
}

class Team
{
    id:number;
    player =Array<Player>();
    score:number;
    currentPlayer: Player;
    constructor(id)
    {
        this.id = id;
        for(let i =0;i<10;i++)
        {
            this.player.push(new Player(i))
        }
        this.currentPlayer = this.player[0];
    }
}

class Player
{
    id:number;
    score:number=0;
    balls:number=0;
    ballScore:Array<number>=[null];

    constructor(id:number)
    {
        this.id= id;

    }

    ballhit()
    {
        let randRun = Math.floor(Math.random()*7);
        this.ballScore[this.balls]= randRun;
        this.score = this.score + randRun;
        this.balls++;
    }

}
let game;
let t1:number=0;
let b1:number=0;
let count:number=0;
let countP:number=1;
let team1: string="";
let team2: string="";

document.getElementById("create-game").addEventListener("click",() =>{
    game= new Game();
    console.log(game);

});

document.getElementById("team1-hit").addEventListener("click",() =>{
    count++;
    if(count>6 && count%6==1)
        countP++;
    game.currentTeam.currentPlayer.ballhit();
    console.log(game);
});

document.getElementById("key").addEventListener("click",() =>
{
    let total:string = String(game.currentTeam.currentPlayer.score-t1);
    let currentscore:string = String((game.currentTeam.currentPlayer.ballScore).pop());
    let out:string ="";
    let teamchange:string ="";
    let win:string="";
    let finalscore:string="";
    if(count==1&&t1<=0)
    {
        teamchange=" Team 1 now playing"
    }
    if(currentscore=="0")
    {
        out = "Player "+countP+" out";
        countP++;
    }
    if(t1<=0&&(count>60||countP>10))
    {
        team1=total;
        t1=parseInt(team1);
        countP=1;
        teamchange=" Team 2 now playing"
        b1=count;
        count =0;
    }
    if(t1>0&&(count>60||countP>10))
    {
        team2=total;
        if(team1>team2)
        {
            win=" Team1 wins";
        }
        else if(team1<team2)
        {
            win=" Team2 wins";
        }
        else
        {
            win="Tie";
        }
        finalscore=` Team 1: ${team1} Team 2: ${team2}`;
    }
    let message :string = `Total Score: ${total} Current Score: ${currentscore} Total Balls: ${count} Current Player: ${countP} ${out} ${teamchange} ${win}`;
    document.getElementById("disp1").innerText = `Total Score: ${total}`;
    document.getElementById("disp2").innerText = `Current Score: ${currentscore}`;
    document.getElementById("disp3").innerText = `Total Balls: ${count}`;
    document.getElementById("disp4").innerText = `Current Player: ${countP}`;
    document.getElementById("disp5").innerText = `${out} ${teamchange} ${win}`;
});