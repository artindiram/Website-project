function activatePopUp(){
    let element = document.querySelector(".popUpLearning");
    element.id = "popUpLearningShown";
    let infoEle = document.querySelector(".learningInfo");
    infoEle.id = "popUpLearningInfo";
}

function dropPopUp() {
    let element = document.querySelector(".popUpLearning");
    element.id = "hidePopUp";
    let infoEle = document.querySelector(".learningInfo");
    infoEle.id = "";
}

function doSomething(event) {
    // This is only here to stop the click or touch from being passed down to the next element
    event.stopPropagation();
}