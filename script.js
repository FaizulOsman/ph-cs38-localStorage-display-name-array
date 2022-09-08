const getValue = id => {
    const idValue = document.getElementById(id)
    return idValue
}

document.getElementById('add-details-btn').addEventListener('click', () => {
    const firstName = getValue('first-input').value
    const lastName = getValue('last-input').value

    getValue('first-input').value = ''
    getValue('last-input').value = ''

    if (firstName === '' && lastName === '') {
        alert('Please input your name')
        return
    }


    const getNameArrFromLC = JSON.parse(localStorage.getItem('name'))
    if (!getNameArrFromLC) {
        const setNewName = [
            {
                fName: firstName,
                lName: lastName
            }
        ]
        localStorage.setItem('name', JSON.stringify(setNewName))
    } else {
        const setNewName = [
            ...getNameArrFromLC,
            {
                fName: firstName,
                lName: lastName
            }
        ]
        localStorage.setItem('name', JSON.stringify(setNewName))
    }
    displayData()
})

const displayData = () => {
    const details = getValue('details')
    details.innerHTML = ""
    let count = 0
    const getDetails = JSON.parse(localStorage.getItem('name'))
    getDetails.forEach(name => {
        const li = document.createElement('li')
        li.classList.add("bg-gray-200", "p-3", "border-b-4", "border-gray-500")
        li.innerHTML = `${++count}. ${name.fName} ${name.lName}
            <button onclick="removeItem()" class="float-right">❌</button>
        `
        details.appendChild(li)
    })

}
displayData()

const clearAll = () => {
    localStorage.removeItem('name')
    displayData()
}