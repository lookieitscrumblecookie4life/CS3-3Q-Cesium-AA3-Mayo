function messageVerifier() {
    let message = prompt('Enter a message: ');

    if (message.indexOf('FR') !== -1) {
        document.getElementById('result').innerHTML = 'The message "' + message + '" is legitimate!';
    } else if ((message.indexOf('FR') !== -1) && (message.indexOf('AI') !== -1)) {
        document.getElementById('result').innerHTML = 'The message "' + message + '" is legitimate!';
    } else if (message.indexOf('AI') !== -1) {
        document.getElementById('result').innerHTML = 'The message "' + message + '" is tampered!';
    } else if ((message.indexOf('aI') !== -1) || (message.indexOf('Ai') !== -1)) {
        document.getElementById('result').innerHTML = 'The message "' + message + '" is tampered!';
    } else {
        document.getElementById('result').innerHTML = 'The message "' + message + '" is not yet encoded!';
    }
}


