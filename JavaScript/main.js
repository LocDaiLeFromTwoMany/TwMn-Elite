alert("This alert box was called with the onload event");

const params = (new URL(location)).searchParams;

var code = params.get('code');

alert(code);