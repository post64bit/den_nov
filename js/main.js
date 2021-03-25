//header

window.onscroll = function showHeader() {
    let header = document.querySelector(".header");
    let header_list = document.querySelector(".header_list");
    let header_nav = document.querySelector(".header_nav");
    if ($(document).scrollTop() > parseInt($("nav").css("height")) - 30) {
        header.classList.add("header_fixed");
        header_list.classList.add("header_link_fixed");
        header_nav.classList.add("header_nav_fixed");
        $(".darkmode_moon").css("fill", "white");
        $(".darkmode_sun").css("fill", "white");
    } else {
        header.classList.remove("header_fixed");
        header_list.classList.remove("header_link_fixed");
        header_nav.classList.remove("header_nav_fixed");
        if (!document.getElementById("checkbox").checked == true) {
            $(".darkmode_moon").css("fill", "black");
            $(".darkmode_sun").css("fill", "black");
        }
    }
    if ($(document).scrollTop() > 500) {
        $(".arrow").css("opacity", "1");
    } else {
        $(".arrow").css("opacity", "0");
    }
};

//header end

//darkmode

if (!localStorage.theme) localStorage.theme = "light";
document.body.className = localStorage.theme;
if (localStorage.theme == "dark") {
    document.getElementById("checkbox").checked = true;
    document.getElementById("checkbox22").checked = true;
}

function checkClick() {
    if (document.getElementById("checkbox").checked == true) {
        document.getElementById("checkbox22").checked = true
        document.body.classList.add("dark");
        $(".darkmode_moon").css("fill", "white");
        $(".darkmode_sun").css("fill", "white");
        localStorage.theme = "dark";
    } else {
        document.getElementById("checkbox22").checked = false
        document.body.classList.remove("dark");
        if ($(document).scrollTop() < parseInt($("nav").css("height")) - 30) {
            $(".darkmode_moon").css("fill", "black");
            $(".darkmode_sun").css("fill", "black");
        }
        localStorage.theme = "light";
    }
    location.reload();
}

function checkClick22() {
    if (document.getElementById("checkbox22").checked == true) {
        document.getElementById("checkbox").checked = true
        document.body.classList.add("dark");
        $(".darkmode_moon").css("fill", "white");
        $(".darkmode_sun").css("fill", "white");
        localStorage.theme = "dark";
    } else {
        document.getElementById("checkbox").checked = false
        document.body.classList.remove("dark");
        if ($(document).scrollTop() < parseInt($("nav").css("height")) - 30) {
            $(".darkmode_moon").css("fill", "black");
            $(".darkmode_sun").css("fill", "black");
        }
        localStorage.theme = "light";
    }
    location.reload();
}

//darkmode end

// header borger

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .mobile').toggleClass('active');
    });
});

function closeMenu() {
    $('.header_burger, .mobile').toggleClass('active');
};

// header borger end 

//stars dark mode !

if (localStorage.theme == "dark") {
    $(".program_stars").attr("src", "./img/svg/stars4_dark.svg");
    $(".program_stars3").attr("src", "./img/svg/stars3_dark.svg");
}

//stars dark mode end !

//translate

window.onhashchange = function () {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (hash === "en" || hash === "ru") {
        location.reload();
    }
};

if (!localStorage.lang) localStorage.lang = "en";
function localRu() {
    localStorage.lang = "ru";
}
function localEn() {
    localStorage.lang = "en";
}

function changeLanguage() {
    hash = localStorage.lang;
    for (let key in lang_translate) {
        let elem = document.querySelector("." + key);
        if (elem) {
            document.querySelector("." + key).innerHTML =
                lang_translate[key][hash];
        }
    }
    if (hash === "en") {
        document.querySelector(".lang_choose_en").style.color = "black";
    } else {
        document.querySelector(".lang_choose_ru").style.color = "black";
    }
}

changeLanguage();

//translate end

//turn button anima

if (!localStorage.anima) localStorage.anima = "anima-on";

if (localStorage.anima == "anima-on")
    document.getElementById("checkbox2").checked = false;
if (localStorage.anima == "anima-off")
    document.getElementById("checkbox2").checked = true;

function turnAnima() {
    if (document.getElementById("checkbox2").checked == false) {
        localStorage.anima = "anima-on";
    }
    if (document.getElementById("checkbox2").checked == true) {
        localStorage.anima = "anima-off";
    }
    location.reload();
}

//turn button anima end

//escape

document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
        document.getElementById("esc").click();
    }
});

//escape end

// form

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append("image", formImage.files[0]);

        if (error === 0) {
            form.classList.add("_sending");
            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = "";
                form.reset();
                form.classList.remove("_sending");
            } else {
                alert("Error");
                form.classList.remove("_sending");
            }
        } else {
            alert("Заполните обязательные поля!");
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains("_email")) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (
                input.getAttribute("type") === "checkbox" &&
                input.checked === false
            ) {
                formAddError(input);
                error++;
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
            input.value
        );
    }

    const formImage = document.getElementById("formImage");
    const formPreview = document.getElementById("formPreview");

    formImage.addEventListener("change", () => {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
        if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
            alert("Разрены только изображения!");
            formImage.value = "";
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert("Файл должен быть менее 2 МБ!");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
        };
        reader.onerror = function (e) {
            alert("Error");
        };
        reader.readAsDataURL(file);
    }
});

// form end


function hideBurger() {
    if(window.screen.width < 600) {
        document.getElementById('burgerid').style.cssText = "display: none";
    };
};
function noHideBurger() {document.getElementById('burgerid').style.cssText = "display: block"};


$(".header").on("click", "a", function(event) {
    event.preventDefault();
    var anchorId  = $(this).attr("href");
    scrollingDistance = $(anchorId).offset().top - $(".header").height();
    $("html, body").animate({scrollTop: scrollingDistance}, 500);
});

$(".mobile").on("click", "a", function(event) {
    event.preventDefault();
    var anchorId  = $(this).attr("href");
    scrollingDistance = $(anchorId).offset().top;
    $("html, body").animate({scrollTop: scrollingDistance}, 500);
});
