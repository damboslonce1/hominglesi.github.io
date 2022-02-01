var stages = ["mikicBoss"];
var difficulties = ["easy","normal","hard","insane"];
var versions = ["V0.1","V0.12"];


//Load Current Stage
var currentStage = localStorage.getItem("currentStage");
if(currentStage == null || stages.includes(currentStage) == false){
    localStorage.setItem("currentStage", "mikicBoss");
    currentStage = "mikicBoss";
}

//Load Current Difficulty
var currentDifficulty = localStorage.getItem("currentDifficulty");
if(currentDifficulty == null || difficulties.includes(currentDifficulty) == false){
    localStorage.setItem("currentDifficulty", "normal");
    currentDifficulty = "normal";
}

//Load Current Version
var currentVersion = localStorage.getItem("currentVersion");
if(currentVersion == null || versions.includes(currentVersion) == false){
    localStorage.setItem("currentVersion", "V0.1");
    currentVersion = "V0.1";
}

function SetCurrentView(newStage, newDifficulty, newVersion){
    if(stages.includes(newStage) == false || difficulties.includes(newDifficulty) == false || versions.includes(newVersion) == false){
        console.log("SetCurrenView failed because one of the parameters is not valid");
        return null;
    }

    currentStage = newStage;
    localStorage.setItem("currentStage", newStage);

    currentDifficulty = newDifficulty;
    localStorage.setItem("currentDifficulty", newDifficulty);

    currentVersion = newVersion;
    localStorage.setItem("currentVersion", newVersion);

    LoadLeaderboard();
}

function CreateElement(type, className){
    var elem = document.createElement(type);
    elem.classList += className;
    return elem;
}