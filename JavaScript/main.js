const params = (new URL(location)).searchParams;

var stravaCode = params.get('code');


var obj = { "code": stravaCode };

$.ajax({
    method: 'post',
    url: 'https://prod-247.westeurope.logic.azure.com:443/workflows/a3a93cf5cd6b4a489924ea40328e961c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VwIdgsPc3w40Q0Y0UE3UsoIce1gZcq-nlaA4z8rciFM',
    data: JSON.stringify(obj),
    processData: false,
    contentType: false,
    success: function() {
        alert(stravaCode);
    },
    error: function() {
        alert("This alert box was called with the onload event");
    }
});