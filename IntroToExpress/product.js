let products = [
    {
        id : 1,
        product_name : " Samsung J8",
        product_details : " abc",
        product_img :"",
        price_per_qnty : 20,
        total_qnty : 10,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        category : "Electronics",
        Ratings : "4.0",
        brand : "Samsung",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : true,
        discount_value_per_qnty : 5,
        best_sellers: true
    },
    {
        id : 2,
        product_name : " Oppo F19",
        product_details : " xyz",
        product_img :"",
        price_per_qnty : 22,
        total_qnty : 12,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        category : "Electronics",
        Ratings : "4.5",
        brand : "Oppo",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : true,
        discount_value_per_qnty : 5,
        best_sellers: true
    },
    {
        id : 3,
        product_name : " Dell Inspiron 15",
        product_details : " LMN",
        product_img :"",
        price_per_qnty : 18,
        total_qnty : 8,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        category : "Electronics",
        Ratings : "4.0",
        brand : "Dell",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : true,
        discount_value_per_qnty : 5,
        best_sellers: true
    },

    {
        id : 4,
        product_name : " jeans trusor",
        product_details : " bca",
        product_img :"",
        price_per_qnty : 28,
        total_qnty : 15,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        wear_category : "jeans weare",
        size_category : "large",
        material_used: "mix",
        Ratings : "4.3",
        brand : "jocky",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : true,
        discount_value_per_qnty : 5,
        best_sellers: true 
    },
    {
        id : 5,
        product_name : " cotton kurti",
        product_details : " zyx",
        product_img :"",
        price_per_qnty : 29,
        total_qnty : 15,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        wear_category : "ladies weare",
        size_category : "medium",
        material_used: "cotton",
        Ratings : "4.4",
        brand : "zara",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : true,
        discount_value_per_qnty : 5,
        best_sellers: true 
    },


    {
        id : 6,
        product_name : " pressure cooker",
        product_details : " zyx",
        product_img :"",
        price_per_qnty : 25,
        total_qnty : 15,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        category : "Kitchrn Appliences",
        washable : true,
        material_used : "aluminium",
        Ratings : "4.4",
        brand : "prestige",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : true,
        discount_value_per_qnty : 5,
        best_sellers: true 
       
    },
    {
        id : 7,
        product_name : " Apron",
        product_details : " zyx",
        product_img :"",
        price_per_qnty : 19,
        total_qnty : 16,
        product_color : ["pink", "green", "red", "blue"],
        // whenever we give choices ther are known as enums
        category : "Kitchrn Appliences",
        washable : true,
        material_used : "mix cotton",
        Ratings : "4.4",
        brand : "prestige",
        featured : false,
        comments : [
            {
                id :1,
                userName : "Taiyab",
                email : "taiyab@gmail.com"
            },
            {
                id :2,
                userName : "Ansari",
                email : "ansari@gmail.com"
            }
        ],
        discount : false,
        discount_value_per_qnty : 0,
        best_sellers: true 
    }




]

module.exports = products;

// create two distinctive data for electronics, two for fashionware, two for kitchen