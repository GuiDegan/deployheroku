function onlynumber(e){var t=e||window.event,n=t.keyCode||t.which,n=String.fromCharCode(n);/^[0-9.]+$/.test(n)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())}function onlystring(e){var t=e||window.event,n=t.keyCode||t.which,n=String.fromCharCode(n);/^[a-zA-Záãâéêíîóôõú\s]+$/.test(n)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())}