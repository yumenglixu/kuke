var $toastContainer;
function toast(message, type) {
    if (!message) {
        return;
    }
    type = type || 'info';
    if (!/^(success|info|error|warning)$/.test(type)) {
        return;
    }

    if (!$toastContainer) {
        $toastContainer = $(
            '<div class="toast-container toast-top-center"></div>'
        ).appendTo('body');
    }

    var $toastElement = $(
        '<div class="toast toast-' + type + '" style="display: block;">'
        + '<div class="toast-' + type + '">'
        + message
        + '</div>'
        + '</div>'
    ).appendTo($toastContainer);
    setTimeout(function () {
        $toastElement.remove();
    }, 3000);
};
