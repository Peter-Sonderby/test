$(document).ready(() => {


    $("#createFrontpagebtn").click(() => {
        var customerVal = $("#Customer").val();
        var projectNo = $("#ProjectNo").val();

        SDK.Storage.persist(".customer", JSON.stringify(customerVal));
        SDK.Storage.persist(".projectNo", JSON.stringify(projectNo));

        window.open('FrontpagePage.html', '_blank');

    });





});