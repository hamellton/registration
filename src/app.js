import { Question } from './questions'
import { isValid } from './utils'
import './style.css'

const form = document.getElementById('form')
    // const modalBtn = document.getElementById('modal-btn')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
})


function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true
            // отправить запрос на сервер
        Question.create(question).then(() => {
                input.value = ''
                input.className = ''
                submitBtn.disabled = false
            })
            // console.log('Question', question)


    }
}