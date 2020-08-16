// Time module
let theTime = setInterval(myTime, 1000);

function myTime() {
    let time = new Date();
    document.getElementById("mylocalTime").innerHTML = time.toLocaleTimeString();
}

/* #####################################################################*/
function clearCounter() {
    let limit = document.getElementById("startValue").value;
    let finalValue = document.getElementById("innerValue");

    if (limit == 0 || limit == null || limit == NaN) {
        return document.getElementById("errors").innerHTML = "not so fast! Give me a limit and I'll give you a count.";
    }
    finalValue.innerHTML = ""
    clearInterval(finalValue.innerHTML = "0:00");
}


function counting() {
    let limit = document.getElementById("startValue").value;

    if (limit == 0 || limit == null || limit == NaN) {
        console.error({ error: "invalid input", message: "input must be a number" });
        return document.getElementById("errors").innerHTML = "To start the counter, a limit is required!  set the limit above";
    }

    if (limit < 0) {
        document.getElementById('errors').innerHTML = "number can not be a negative number"
        return console.error('number can not be a negative umber')
    }

    for (let i = 0; i <= limit; i++) {
        let newValue = i;

        setTimeout(function() {
            console.log('click-count ', newValue);

            document.getElementById("errors").innerHTML = ''
            document.getElementById("innerValue").innerHTML = newValue;
        }, 100 * (newValue + 1));
    }
};

// #############################################################################//