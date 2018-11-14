const TG = {

    formTabel: (filelist) => {
        var myObj, i, j, x = ""
        console.log(filelist + " TG ");
        var myObj = JSON.parse(filelist);
        var info = JSON.parse(myObj);
        console.log(info + "  INFO lin 7");
        var nr = info.info.length;
        console.log(nr);
        $("#tabelStart").append(`
              <tr>
                <th class="cellHedder"> test</th >
                <th class="cellHedder"> test</th>
                <th class="cellHedder"> test</th>
                <th class="cellHedder"> test </th>
                <th class="cellHedder"> test</th>
                <th class="cellHedder"> test </th>
                <th class="cellHedder"> test </th>
              </tr>
            `);


        for (i in info.info) {
           
            $("#tabelStart").append(`
              <tr>
                <th class="cellHedder"> ${info.info[i].BookID}</th >
                <th class="cellHedder"> ${info.info[i].IndexID}</th>
                <th class="cellHedder"> ${info.info[i].fileName} </th>
                <th class="cellHedder"> ${info.info[i].supplier} </th>
                <th class="cellHedder"> ${info.info[i].pageCount}</th>
                <th class="cellHedder"> ${"25"} </th>
                <th class="cellHedder"> ${info.info[i].remarks} </th>
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