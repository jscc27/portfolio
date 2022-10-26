
(function () {
    function Start() {
        let deleteButtons = document.querySelectorAll('.btn-danger')

        for (button in deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you shure?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }

    }

    window.addEventListener("load", Start);
})();