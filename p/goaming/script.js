var Mentries = new Array();

var homeless = new Object();
homeless.name = "homeless lesi";
homeless.time = 392893;
Mentries.push(homeless);

var homing = new Object();
homing.name = "homing lesi";
homing.time = 428893;
Mentries.push(homing);

function PopulateLeaderboard(div, entries){
    div.innerHTML = "";
    entries.forEach((element, index) => {
        CreateEntry(div, element, index+1)
    });
}

function CreateEntry(div, runner, ranking){
    var item = CreateElement("div", "item-container");
    var place = CreateElement("div", "i-place-container i-container");
    var name = CreateElement("div", "i-player-container i-container");
    var time = CreateElement("div", "i-time-container i-container");

    if(runner.username!="There are currently no runs of this category"){
        place.innerText = ranking;
        time.innerText = StylizeTime(runner.time);
    }
    
    name.innerText = runner.username;
    
    
    item.appendChild(place);
    item.appendChild(name);
    item.appendChild(time);

    div.appendChild(item);
}

function StylizeTime(time){
    var dateTime = new Date(time);
    return dateTime.toISOString().slice(11, -1); 
}

var leaderboardDiv = document.getElementsByClassName("leaderboard-container")[0];


function LoadLeaderboard(){
    var displayList;
    if(!scoreData.hasOwnProperty(currentStage) || !scoreData[currentStage].hasOwnProperty(currentDifficulty) || !scoreData[currentStage][currentDifficulty].hasOwnProperty(currentVersion))
        displayList = null;
    else
        displayList = scoreData[currentStage][currentDifficulty][currentVersion];

    if(displayList!=null)
        PopulateLeaderboard(leaderboardDiv, displayList);
    else{
        PopulateLeaderboard(leaderboardDiv, [{username:"There are currently no runs of this category"}]);
    }
}

LoadLeaderboard();
console.log(scoreData);