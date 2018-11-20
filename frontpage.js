$(document).ready(function() {


        var customer = SDK.load(".customer");
        var projectNo = JSON.parse(SDK.load(".projectNo"));

        $("#rightDiv").append(`
             <div>
                    <label > Customer: </label>
                    <label id="Customer">
                        ${customer}
                    </label>
                </div>
                <div>
                    <label id="Project">Project:</label>
                    <label id="ProjectNo" > ${projectNo} </label>
                </div>
            `);








});