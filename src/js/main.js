// IMPORTS
// const initParticles = require('./particlesBG.js')
const initFilterFunc = require('./filter.js')
const initSectionButtons = require('./sections.js')
const initNamecardFunc = require('./namecard.js')
const namecardAnim = require('./namecardAnim.js')
const profAnim = require('./profAnim.js')

// GLOBALS
const state = {}
const animations = {}

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', init)
function init(){
  initAnims();
  initSectionButtons(animations);
  initFilterFunc(state);
  initNamecardFunc(animations);
}

function initAnims(){
  animations.namecard = namecardAnim();
  animations.prof = profAnim();
}
