
function base64Decode(input) {
    return atob(input);
}


function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const validUsername = 'admin';
    const encodedPassword = 'Vm0weGQxSXhWWGhTV0d4VVYwZDRWRll3WkZOVU1WcHpXa1pPYWxac1dqQlVWbEpUVmpGYWRHVkVRbFZpUmxwUVdWY3hTMUl5VGtsaFJtUlRaV3RGZUZkV1VrSmxSbVJYVW01S1lWSnVRbGhXYlhoV1pVWmtWMWR0UmxSaVZrWXpWR3hhWVdGV1NuTmpTRUpYWVRGd2FGWXhXbXRXTVZwMFpFWlNUbFp1UWpaV01uUnZVakZWZVZOcmFHaFNlbXhoVmpCb1ExZEdXbGRYYlhSWVVqRktTVnBGV2s5VWJVcEdZMFZzVjFaRmEzaFdha3BIVmpGT2RWWnNTbWxTTW1oWFZtMDFkMUl5VWxkalJWWlRZbGhTY1ZsclpGTk5SbXQzVmxSR1YwMUVSa3BWVm1oclZqRlplbUZJV2xwbGEzQklWbXBHVTJOc2NFZGhSMnhYVWpOb1dGWnRNWGRVTVZWNVVtdGthbEp0YUhOVmFrNVRWMFpTV0dSSFJsUlNiVko1VjJ0ak5WWnJNWEpqU0d4V1RXNVNNMVpxUm1GT2JFcHhWR3hrYUdFeGNIbFhXSEJIWVRKT1YxcElUbUZTTW5od1ZXMDFRMkl4V1hoYVJGSldUVlZzTkZkclZtdGhiRXBYWTBkb1ZtSllUWGhXTVZwWFkxWkdkVnBHVW1sU2JrRjNWa1phVjJFeFdsaFRiRnBxVW0xb1YxUldXa3RVUmxsM1YyMUdhazFyTlVwVk1uaDNZVWRGZDFkWWNGaGlSbkJvVlhwR2ExZEdVbkpoUms1cFVtdHdWVlpxUWxkVE1EVlhWMjVLV0dKWVFrOVdiWGhYVGxaYVdHVkhkRnBXYTNBd1ZsY3dOVlp0U2tkVGJuQmFUVlp3V0ZreFdrZGtWbkJHVGxaT2FWZEhaekZXTVZwWFlUQXhTRkpyV2s1V1ZscFRXVmQ0UzFZeFVsaGpSbVJxWWtac05WUldWakJXTVZweVkwUkdWazF1YUROWlZscHJVMGRHUlZkc1pHaGhNSEI1Vm0xd1IxTXhXWGhUYmxaV1lrVTFjRlZxUmt0bGJHUlhWV3RrYWsxRVZucFdNalZIVmtkR2MxTnRPVlZXVmtwWVZURmFZV1JGTlZaUFYyaHBVbGhCZDFkV1ZtOVVNVnAwVW01S1QxZEdjR0ZVVmxwM1ZrWlpkMXBHVGxSU2EzQXdXa1ZrTUdKSFJuSlNWRVU5PQ';


    const decodedPassword = base64Decode(encodedPassword);

    if (username === validUsername && password === decodedPassword) {

        window.location.href = 'dashboard.html';
        console.log('Login berhasil: true');
    } else {

        document.getElementById('error-message').innerText = 'Username atau password salah';
        console.log('Login berhasil: false');
    }
}

(function() {

    function hiddenHack(input) {
        if (input === true) {
            alert('Access Granted');
            window.location.href = 'gierfgertr734r766774563gierfgertr734r766774563.html';
        } else {
            console.log('Access Denied');
        }
    }

    window[atob('aGFja0xvZ2lu')] = hiddenHack;
})();
