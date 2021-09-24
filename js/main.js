//alert("Hello World");

/*just commented it out for refresh rate. - Melanie*/

function showMessage(id){
    switch(id){
        case "compliance":
            hide("flu")
            break;
        case "success":
            hide("compliance");
            break;
        case "failure":
            hide("flu");
            hide("compliance");
            break;
    }
    show(id);
}

function resetApp(){
    hide("success");
    hide("failure");
    hide("compliance");
    show("flu");
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}
