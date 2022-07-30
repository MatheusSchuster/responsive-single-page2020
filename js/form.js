function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

// FUNÇAO TELEFONE
function mphone(v) {

    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    if (r.length === 1 && r === "(") r = "";
    return r;
}

// EMAIL
function validateForm() {
    const email = document.forms["contato"]["email"].value;
    const nome = document.forms["contato"]["nome"].value;
    const telefone = document.forms["contato"]["telefone"].value;
    const mensagem = document.forms["contato"]["mensagem"].value;
    let isValidForm = true;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (nome === "") {
        alert("Nome é Obrigatório:");
        isValidForm = false;
    }
    if (!re.test(email)) {
        alert("E-mail inválido:");
        isValidForm = false;
    }
    // debugger;
    if (telefone.length < 14 || telefone.length===0 ) {
        alert("Telefone é obrigatório:");
        isValidForm = false;
    }
    if (mensagem === "") {
        alert("Mensagem não pode ser vazia:");
        isValidForm = false;
    }
    if (!isValidForm) return false;
    return true;
}


