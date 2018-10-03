

//The way to encode in js to ondrive. and to bulid the string
var root = "https://api.onedrive.com/v1.0/drive/root:";
var path = "/me/drive";
var url2 = root + escape(path);
const SDK = {
    serverURL: "http://localhost:8080/api",
    request: (options, cb) => {

    let headers = {};
if (options.headers) {
    Object.keys(options.headers).forEach((h) => {
        headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
});
}

$.ajax({
    url: SDK.serverURL + options.url,
    method: options.method,
    headers: headers,
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(options.data),
    success: (data, status, xhr) => {
    cb(null, data, status, xhr);
},
error: (xhr, status, errorThrown) => {
    cb({xhr: xhr, status: status, error: errorThrown});
}
});
},

User: {

        getMyDrive: () => {
            var path = "/me/drive";

      SDK.request({

          headers: {authorization: SDK.Storage.load(".idtoken")},
          url: url2,
          method: "GET"
      }, (err, data) =>{
          if (err) return cb(err);

          cb(null, data);
      })
    },

    current:() => {
        return SDK.Storage.load("user");
    },

    login: (username, password, cb) => {
        SDK.request({
            data: {
                username: username,
                password: password
            },
            url: "/user/login",
            method: "POST"
        }, (err, data) => {

            if (err) return cb(err);

        SDK.Storage.persist(" Username", data.username);
        SDK.Storage.persist(" password", data.password);
        SDK.Storage.persist(" mail", data.mail);
        SDK.Storage.persist(" UserId", data.brugerId);
        SDK.Storage.persist(" type", data.type);

        cb(null, data);
    });
    },

    signup: (username, password, mail,  cb) => {
        SDK.request({
            data: {
                username: username,
                password: password,
                mail: mail,

            },
            url:"/user/signup",
            method: "POST"
        }, (err, data) => {

            if (err) return cb(err);
        SDK.Storage.persist(" Username", data.username);
        SDK.Storage.persist(" password", data.password);
        SDK.Storage.persist(" mail", data.mail);
        SDK.Storage.persist(" UserId", data.brugerId);
        SDK.Storage.persist(" type", data.type);


        cb(null, data);

    });
    },

    userInfo:(address, postNumber, city, cb) => {
        SDK.request({
            data:{
                address: address,
                postNumber: postNumber,
                city: city
            },
            url:"/sendingInfo",
            method: "POST"
        }, (err, data) => {

            if(err) return cb(err);

        let sendingInfo = JSON.parse(data);

        SDK.Storage.persist("SendingId", sendingInfo.forsendelsesInformationerId)

    })
    }

},

Product: {

    loadProduct:(cb) => {
        let localCat = SDK.Storage.load("CAT");
        SDK.request({
            url: "/Product/category/" + localCat ,
            method: "GET"

        }, (err, products) => {
            if (err) return (err);

        cb(null, products);
    });
    },

    sellerSignup: (companyName, password, cvr, mail, number,  cb) => {
        SDK.request({
            data: {
                companyName: companyName,
                password: password,
                cvr: cvr,
                number,
                mail: mail,

            },
            url:"/seller/creatSeller",
            method: "POST"
        }, (err, data) => {

            if (err) return cb(err);

        cb(null, data);

    });
    },



    //Request til at hente produkter fra en specifik sælger
    loadSellerProduct:(cb) => {

        const sellerId = SDK.Storage.load(" id");

        SDK.request ({
            url: "/Product/" + sellerId,
            method: "GET"
        }, (err, products) => {

            cb(null, products);
    });

    },

    loadProductFromGender:(cb) => {

        const gender = SDK.Storage.load(" genderProduct");

        SDK.request({
            url:"/Product/gender/" + gender,
            method: "GET"
        }, (err, products) => {

            cb(null, products);
    })
    },

    loadProductFromProductId:(cb) => {

        const productId = SDK.Storage.load(" productID");

        SDK.request({
            url:"/Product/id/" + productId,
            method: "GET"
        }, (err, products) => {

            cb(null, products);
    })
    },


    createProduct:(url, productDescription, sellerID, price, gender, category, cb ) => {
        SDK.request({
            data:{
                url: url,
                productDescription: productDescription,
                sellerID: sellerID,
                price: price,
                gender: gender,
                category: category

            },
            url:"/Product/New",
            method:"POST"

        }, (err, data) => {

            let product = JSON.parse(data);

        SDK.Storage.persist(" newProductId", product.productId);

        cb(null, data);
    })
    },

    deleteProduct:(cb) => {
        const productId = SDK.Storage.load(" deleteId")

        SDK.request({
            url: "/Product/" + productId,
            method: "DELETE"
        }, (err, data) => {

        });
    },


},


Storage: {
    prefix: "msal",
        persist: (key, value) => {
        window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
    },
    load: (key) => {
        const val = window.localStorage.getItem(SDK.Storage.prefix + key);
        try {
            return JSON.parse(val);
        }
        catch (e) {
            return val;
        }
    },
    remove: (key)  => {
        window.localStorage.removeItem(SDK.Storage.prefix + key);
    }
}


};
