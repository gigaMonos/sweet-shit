document.addEventListener('DOMContentLoaded', function() {
    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                 isMobile.Android()||
                 isMobile.BlackBerry()||
                 isMobile.iOS()||
                 isMobile.Opera()||
                 isMobile.Windows());
        }
    };
    if(isMobile.any()){
        document.body.classList.add('_touch');
    }else {
        document.body.classList.add('_pc');
    }
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            console.log("🚀 ~ file: script.js ~ line 37 ~ e", e.target)
            document.body.classList.toggle('_lock');
            menuBody.classList.toggle('_active');
        });
        
    }
});
