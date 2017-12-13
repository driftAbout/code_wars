'use strict';

//Solution as one long hardly readable chain
function high(x){
return x.split(' ').map(val => ({'word': val, 'score': val.split('').reduce((acc, cur) => acc + (cur.charCodeAt(0) - 96),0)})).sort((a,b) => b.score - a.score)[0].word
}



//Solution using object constructor
function high(x){
  function WordScore (word){
    this.word = word;
    this.score = this.getScore();
  }

  WordScore.prototype.getScore = function(){
    return this.word.split('').reduce((acc, cur) => acc + (cur.charCodeAt(0) - 96),0);
  }

  return x.split(' ').map((val, i ) => new WordScore(val, i)).sort((a,b) => b.score - a.score)[0].word;
}
