'use strict'

var gQuests
var gCurrQuestIdx

function initGame() {
    var elDiv = document.querySelector('.victory')
    elDiv.classList.remove('show')
    gQuests = createQuests()
    gCurrQuestIdx = 0
    renderQuest()
}

function createQuests() {
    var quests = [
        { id: 0, opts: ['Its Tom and Jerry!', 'Its Spongebob and Patrick!'], correctOptIdx: 0 },
        { id: 1, opts: ['They are best friends', 'They are enemies'], correctOptIdx: 1 },
        { id: 2, opts: ['its Tom!', 'Its Jerry!'], correctOptIdx: 1 },
        { id: 3, opts: ['its Tom!', 'Its Jerry!'], correctOptIdx: 0 }
    ]
    return quests
}

function renderQuest() {
    var htmlStr = `<img src="pictures/${gCurrQuestIdx}.jpeg">`
    var quest = gQuests[gCurrQuestIdx]
    for (var i = 0; i < quest.opts.length; i++) {
   htmlStr += `<button onclick="checkAnswer(this,${i})">
   ${quest.opts[i]}
   </button> `
    }
    document.querySelector('.container').innerHTML = htmlStr
}

function checkAnswer(elButton, ansClickedIdx) {
    var quest = gQuests[gCurrQuestIdx]
    var correctOptIdx = quest.correctOptIdx
    if (ansClickedIdx === correctOptIdx) {
        correctAns(elButton)
    } else {
        wrongAns(elButton)
    }
}


function correctAns(elButton) {
    elButton.classList.add('correct-ans')
    var interval = setInterval(() => {
        elButton.classList.remove('correct-ans')
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) {
            victory()
        } else {
            renderQuest()
        }
        clearInterval(interval)
    }, 1000)
}

function wrongAns(elButton) {
    elButton.classList.add('wrong-ans')
    var interval = setInterval(() => {
        elButton.classList.remove('wrong-ans')
        clearInterval(interval)
    }, 1000)
}

function victory() {
    console.log('in');
    var elDiv = document.querySelector('.victory')
    elDiv.classList.add('show')
}