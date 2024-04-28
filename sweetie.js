// DONT MODIFY
addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').innerHTML += '<div id="custom-alerts" class="custom-alerts"></div>'
})

let principalId = 0

function closeAlert(id) {
    let el = document.getElementById('sweetie-alert-' + id)
    el.classList.add('sweetie-hide')
    setTimeout(() => {
        el.remove()
    }, 300)
}
function customCallback() {
    alert("hola")
}

function customCallbackCancel() {
    alert("UPS")
}

function PromptCallback(e, id) {
    let input = document.getElementById('prompt-' + id)
    let value = input.value
    e(value)
    closeAlert(id)
}

let callbackAlert = (e, id) => {
    e()
    closeAlert(id)
}

let customPromptCallback = (text) => {
    alert(text)
}

const deleteAlertCustom = (id) => {
    setTimeout(()=>{
        let el = document.getElementById('sweetie-succes-'+ id)
        el.classList.remove('sweetie-in')
        el.classList.add('sweetie-out')
        setTimeout(()=>{
            el.remove()
        }, 200)
    }, 2000)
}

// ALERTAS

function simpleAlert(data) {

    principalId++;
    const customData = {
        title: 'Title',
        information: 'Information',
        background: '#fff',
        titleColor: '#2E2E2E',
        infoColor: "#757575",
        accept: 'Aceptar',
        position: 'left-top'
    }
    let title = (data.title) ? data.title : customData.title
    let information = (data.information) ? data.information : customData.information
    let background = (data.background) ? data.background : customData.background
    let titleColor = (data.titleColor) ? data.titleColor : customData.titleColor
    let infoColor = (data.infoColor) ? data.infoColor : customData.infoColor
    let accept = (data.accept) ? data.accept : customData.accept
    let position = (data.position) ? data.position : customData.position
    let body = document.querySelector('body');
    const alert_ = `
    <div id='sweetie-alert-`+ principalId + `' style='background-color: ` + background + `' class='sweetie-alert ` + position + `'>
        <p style='color:`+ titleColor + ` class='sweetie-title'>` + title + `</p>
        <p style='color:`+ infoColor + ` ' class='sweetie-info'>` + information + `</p>
        <div class='sweetie-btn-div'>
            <button class='sweetie-btn-1' onclick='closeAlert(`+ principalId + `)'>` + accept + `
        </div>
    </div>
    `
    body.innerHTML += alert_
}

function confirmAlert(data) {
    principalId++;
    const customData = {
        title: 'Title',
        information: 'Information',
        background: '#fff',
        titleColor: '#2E2E2E',
        infoColor: "#757575",
        accept: 'Aceptar',
        cancel: 'Cancelar',
        acceptCallback: customCallback,
        cancelCallback: customCallbackCancel,
        position: 'left-top'
    }
    let title = (data.title) ? data.title : customData.title
    let information = (data.information) ? data.information : customData.information
    let background = (data.background) ? data.background : customData.background
    let titleColor = (data.titleColor) ? data.titleColor : customData.titleColor
    let infoColor = (data.infoColor) ? data.infoColor : customData.infoColor
    let accept = (data.accept) ? data.accept : customData.accept
    let position = (data.position) ? data.position : customData.position
    let cancel = (data.cancel) ? data.cancel : customData.cancel
    let acceptCallback = (data.acceptCallback) ? data.acceptCallback : customData.acceptCallback
    let cancelCallback = (data.cancelCallback) ? data.cancelCallback : customData.cancelCallback
    let body = document.querySelector('body');
    const alert_ = `
    <div id='sweetie-alert-`+ principalId + `' style='background-color: ` + background + `' class='sweetie-alert ` + position + `'>
        <p style='color:`+ titleColor + ` class='sweetie-title'>` + title + `</p>
        <p style='color:`+ infoColor + ` ' class='sweetie-info'>` + information + `</p>
        <div class='sweetie-btn-div'>
            <button class='sweetie-btn-1' onclick='callbackAlert(`+ acceptCallback + `, ` + principalId + `)'>` + accept + `</button>
            <button class='sweetie-btn-1' onclick='callbackAlert(`+ cancelCallback + `, ` + principalId + `)''>` + cancel + `</button>
        </div>
    </div>
    `
    body.innerHTML += alert_
}

function promptAlert(data) {
    principalId++;
    const customData = {
        title: 'Title',
        information: 'Information',
        background: '#fff',
        titleColor: '#2E2E2E',
        infoColor: "#757575",
        accept: 'Aceptar',
        acceptCallback: customPromptCallback,
        position: 'left-top',
        inputColor: '#d5d5d5'
    }

    let title = (data.title) ? data.title : customData.title
    let information = (data.information) ? data.information : customData.information
    let background = (data.background) ? data.background : customData.background
    let titleColor = (data.titleColor) ? data.titleColor : customData.titleColor
    let infoColor = (data.infoColor) ? data.infoColor : customData.infoColor
    let accept = (data.accept) ? data.accept : customData.accept
    let position = (data.position) ? data.position : customData.position
    let acceptCallback = (data.acceptCallback) ? data.acceptCallback : customData.acceptCallback
    let inputColor = (data.inputColor) ? data.inputColor : customData.inputColor

    let body = document.querySelector('body')

    const alert_ = `
    <div id='sweetie-alert-`+ principalId + `' style='background-color: ` + background + `' class='sweetie-alert ` + position + `'>
        <p style='color:`+ titleColor + ` class='sweetie-title'>` + title + `</p>
        <p style='color:`+ infoColor + ` ' class='sweetie-info'>` + information + `</p>
        <input id='prompt-`+ principalId + `' style='border: solid 1px ` + inputColor + `' class='sweetie-input'/>
        <div class='sweetie-btn-div'>
            <button class='sweetie-btn-1' onclick='PromptCallback(`+ acceptCallback + `, ` + principalId + `)'>` + accept + `</button>
        </div>
    </div>
    `

    body.innerHTML += alert_
}

function successAlert(message) {
    principalId++;

    let body = document.getElementById('custom-alerts')
    const alert_ = `
    <div id='sweetie-succes-`+ principalId +`' class='sweetie-base success sweetie-in'>
        <p class='sweetie-info'>`+ message + `</p>
    </div>
    `
    body.innerHTML += alert_
    console.log(alert_)
    deleteAlertCustom(principalId)
}

function errorAlert(message) {
    principalId++;

    let body = document.getElementById('custom-alerts')
    const alert_ = `
    <div id='sweetie-succes-`+ principalId +`' class='sweetie-base error sweetie-in'>
        <p class='sweetie-info'>`+ message + `</p>
    </div>
    `
    body.innerHTML += alert_
    console.log(alert_)
    deleteAlertCustom(principalId)
}

function warningAlert(message) {
    principalId++;

    let body = document.getElementById('custom-alerts')
    const alert_ = `
    <div id='sweetie-succes-`+ principalId +`' class='sweetie-base warning sweetie-in'>
        <p class='sweetie-info'>`+ message + `</p>
    </div>
    `
    body.innerHTML += alert_
    console.log(alert_)
    deleteAlertCustom(principalId)
}
