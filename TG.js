const TG = {

    formTabel: (filelist) => {
        var myObj, i, j, x = ""
        console.log(filelist + " TG ");
        var myObj = JSON.parse(filelist);
        console.log(myObj + "  INFO lin 7");

        for (i in myObj.info) {
            Console.log(myObj.info[i].BookID)
            $("#tabelStart").append(`
              <tr>
                <th class="cellHedder"> ${myObj.info[i].BookID}</th >
                <th class="cellHedder"> ${myObj.info[i].IndexID}</th>
                <th class="cellHedder"> ${myObj.info[i].FileName} </th>
                <th class="cellHedder"> ${myObj.info[i].Supplier} </th>
                <th class="cellHedder"> ${myObj.info[i].PageCount}</th>
                <th class="cellHedder"> ${"25"} </th>
                <th class="cellHedder"> ${myObj.info[i].Remarks} </th>
              </tr>
            `);
        }
        /*
        info.forEach(info => {
           
            $("#tabelStart").append(`
              <tr>
                <th>${question.questionId}</th>
                <th>${question.question}</th>
                <th > </th>
                <th class="cellHedder"> ${info.info.BookID}</th >
                <th class="cellHedder"> ${info.IndexID}</th>
                <th class="cellHedder"> ${info.info.FileName} </th>
                <th class="cellHedder"> ${info.info.Supplier} </th>
                <th class="cellHedder"> ${info.info.PageCount}</th>
                <th class="cellHedder"> ${"25"} </th>
                <th class="cellHedder"> ${info.info.Remarks} </th>
              </tr>
            `);

        })

        $("#tabelStart").append(`
              <Button> add New file </button>
            `);
    */       
    }
    

}