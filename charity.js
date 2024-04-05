var submit = document.getElementById("submit");
var charity = document.getElementById("organization-name");
var funds = document.getElementById("funds-needed");
var check_box_input = document.getElementsByClassName("form-check-input");
var check_box_label = document.getElementsByClassName("form-check-label");

submit.addEventListener("click", () => {
    var [check_box, charity, funds] = getFormInput();
    handleInvalidInput(charity, funds);
    alert(check_box.length);

});

const getFormInput = () => {
    check_box = []
    for (var i = 0, j = 0; i < check_box_input.length; i++) {
        if (check_box_input[i].checked) {
            check_box[j++] = check_box_label[i].innerHTML;
        }
    }
    return [check_box, charity.value, funds.value];
}

const getCheckBoxInput = () => {
    return;
}

const handleInvalidInput = (charity, funds) => {
    if (charity == undefined || funds == "") {
        alert("Missing value");
        return;
    }
    if (isNaN(funds)) {
        alert("Please input number");
        return;
    }
}