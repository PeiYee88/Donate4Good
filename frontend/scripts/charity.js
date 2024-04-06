import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
var submit = document.getElementById("submit");
var charity = document.getElementById("organization-name");
var funds = document.getElementById("funds-needed");
var check_box_input = document.getElementsByClassName("form-check-input");
var check_box_label = document.getElementsByClassName("form-check-label");

submit.addEventListener("click", async (event) => {
    event.preventDefault()
    var [_, charity, funds] = getFormInput();
    handleInvalidInput(charity, funds);
    handleAdd();

});

const getFormInput = () => {
    var check_box = []
    for (var i = 0, j = 0; i < check_box_input.length; i++) {
        if (check_box_input[i].checked) {
            check_box[j++] = check_box_label[i].innerHTML;
        }
    }
    return [check_box, charity.value, funds.value];
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

const handleAdd = async () => {
    var [check_box, charity, funds] = getFormInput();
    const body = {
        name: charity,
        funds: funds,
        items: check_box,
    }
    await axios.post('http://localhost:3001/api', body).then((res) => {
        alert("Question submitted");
    })

}