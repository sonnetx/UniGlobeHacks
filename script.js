var questions = ['What country do you live in?', 'Are you a citizen in your country?',' Do you have an family members (children, brothers, sisters, parents, etc) living in your country?']

var question = document.getElementById('question')
var i = 0
var answer = document.getElementById('answer')
var answers = []
var explaination = document.getElementById('explaination')

question.innerHTML = questions[i]

function submit(e){
  e.preventDefault()
  if(questions[i] != undefined){
    answers.push(answer.value)
    answer.value = ''
  }
  i++
  if(questions[i] == undefined){
    // do something
    console.log(answers)
    if(answers[0].toLowerCase() != 'usa' && answers[0].toLowerCase() != 'us' && answers[0].toLowerCase() != 'united states' && answers[0].toLowerCase() != 'united states of america' && answers[0].toLowerCase() != 'india' && answers[0].toLowerCase() != 'china' && answers[0].toLowerCase() != 'japan'){
      alert('We only support United States, India, Japan and China right now. Check back later.')
      answers = []
      i = 0
      question.innerHTML = questions[i]
      return
    }
    if(answers[0].toLowerCase() == 'usa' && answers[0].toLowerCase() == 'us' && answers[0].toLowerCase() == 'united states' && answers[0].toLowerCase() == 'united states of america'){
      answers[0] = 'us'
    }
    window.country = answers[0].toLowerCase()
    // alert('do something here like redirection them to another page')
    if(window.country.toLowerCase() == 'us'){
      location.href = '/countries/usa.html'
    }else if(window.country.toLowerCase() == 'india'){
      location.href = '/countries/india.html'
    }else if(window.country.toLowerCase() == 'china'){
      location.href = '/countries/china.html'
    }else if(window.country.toLowerCase() == 'japan'){
      location.href = '/countries/japan.html'
    }
    // location.href = '/info.md'
    document.getElementsByClassName('question')[0].hidden = true
    return
  }
  question.innerHTML = questions[i]
}

document.getElementById('form').addEventListener('submit', submit)