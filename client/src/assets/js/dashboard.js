/**
 * Copy text Function
 */
function copyText(id) {
    var input = document.createElement('input');
    input.id = 'temp_element'

    input.style.height = 0

    document.body.appendChild(input)

    input.value = document.getElementById(id).innerText

    var selector = document.querySelector('#temp_element')

    selector.select()
    selector.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // Remove the textarea
    document.body.removeChild(input)
}

/**
 * MNT to Cryptocurrencies Calculator
 * ----------------------------------
 * Grabs input and cryptocurrency
 * returns value with 8 decimal places
 * then displays it on the dashboard
 */
let inputMNT = document.getElementById('MNT-conversion-input');

inputMNT.addEventListener('input', function() {
    document.getElementById('MNT-to-BTC').textContent = calculateMNT(inputMNT.value, document.getElementById('BTC-price').innerText);
    document.getElementById('MNT-to-ETH').textContent = calculateMNT(inputMNT.value, document.getElementById('ETH-price').innerText);
    document.getElementById('MNT-to-LTC').textContent = calculateMNT(inputMNT.value, document.getElementById('LTC-price').innerText);
})

function calculateMNT(input, cryptocurrency) {
    return (input * 0.06 / cryptocurrency).toFixed(8);
}

/**
 * Button lock in feature
 * -----------------------
 * Stops form submit
 * Adds hidden inputs with data
 * then submits form
 */
var lockIn = document.getElementById('lock-in');
var lockBtn = document.querySelector('.button');



lockIn.addEventListener('submit', function (event) {
    event.preventDefault();
    lockBtn.disabled = true;

    if(lockBtn.classList.contains('lockedIn') === false) {
        var BTCPriceInput = document.createElement('input');
        BTCPriceInput.setAttribute('type', 'hidden');
        BTCPriceInput.setAttribute('name', 'prices[BTC]');
        BTCPriceInput.setAttribute('value', document.getElementById('BTC-price').innerText);

        var ETHPriceInput = document.createElement('input');
        ETHPriceInput.setAttribute('type', 'hidden');
        ETHPriceInput.setAttribute('name', 'prices[ETH]');
        ETHPriceInput.setAttribute('value', document.getElementById('ETH-price').innerText);

        var LTCPriceInput = document.createElement('input');
        LTCPriceInput.setAttribute('type', 'hidden');
        LTCPriceInput.setAttribute('name', 'prices[LTC]');
        LTCPriceInput.setAttribute('value', document.getElementById('LTC-price').innerText);

        var usernameInput = document.createElement('input');
        usernameInput.setAttribute('type', 'hidden');
        usernameInput.setAttribute('name', 'username');
        usernameInput.setAttribute('value', document.getElementById('username').innerText);

        lockIn.appendChild(BTCPriceInput);
        lockIn.appendChild(ETHPriceInput);
        lockIn.appendChild(LTCPriceInput);
        lockIn.appendChild(usernameInput);

        lockIn.submit();        
    }

})

/**
 * Display Dynamic Clock
 * --------------------
*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var suffix = "AM";
    if (h >= 12) {
        suffix = "PM";
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('official-time').innerHTML =
        h + ":" + m + " " + suffix;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


/**
 * Total Affiliate Awards
 */
document.getElementById('totalAffiliateAwards').innerHTML = parseInt(document.getElementById('current-awards--tier-1').innerHTML) + parseInt(document.getElementById('current-awards--tier-2').innerHTML)