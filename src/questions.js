export class Question {
    static create(question) {
        return fetch('https://registration-by-hamellton.firebaseio.com/question.json', {
                method: 'POST',
                body: JSON.stringify(question),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            })
            .then(addToLocalStorage)
            .then(Question.renderList)
    }
    static renderList() {
        const questions = getQuestionsFromLocalStorage()

        const html = questions.length ?
            qustions.map(toCard).join('') :
            <
            div class = "mui--text-headline" > вы пока ничего не спрашивали < /div>

        const list = document.getElementById('list')

        list.innerHTML = html
    }
}

function addToLocalStorage(question) {
    const all = getQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))

}

function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {
    return 'test'
}