
$(document).ready(() => {

    $("#testB").click(() => {
        var input = document.getElementById("files");
        var reader = new FileReader('C:\\Users\\Peter\\Desktop\\Eksamen mappe\\test1.pdf');
        reader.readAsBinaryString(input.files[0]);
        reader.onloadend = function(){
            var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            console.log('Number of Pages:',count ); }

       /* 'C:\\Users\\Peter\\Desktop\\Eksamen mappe\\test1.pdf' */


    });

});
