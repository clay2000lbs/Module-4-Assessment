const form = document.querySelector('#name-form')
const red = document.querySelector('#red')
const blue = document.querySelector('#blue')

const baseURL = `http://localhost:4000/api/users`

const usersCallback = ({ data: users }) => displayUsers(users)
const errCallback = err => console.log(err.response.data)

const createUser = body => axios.post(baseURL, body).then(usersCallback).catch(errCallback)
const assimilateUser = id => axios.delete(`${baseURL}/${id}`).then(usersCallback).catch(errCallback)
const reformUser = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(usersCallback).catch(errCallback) 

function submitHandler(e) {
    e.preventDefault()

    let decisionP = document.createElement('h2')
    decisionP.textContent = 'Now, Choose'
    document.querySelector('#name-form').appendChild(decisionP)

    let alignment = 'none'
    red.setAttribute('style', 'display: block');
    console.log('clicked')
    blue.setAttribute('style', 'display: block');
    let name = document.querySelector('#name')

    let bodyobj = {
        name: name.value,
        alignment: alignment.value
    }

    createUser(bodyobj)

    // name.value = ''
    // alignment = 'none'
    // console.log(name)

}

form.addEventListener('submit', submitHandler)