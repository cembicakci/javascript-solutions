const orders = [
    {
        "id": 10271,
        "customerId": "SPLIR",
        "employeeId": 6,
        "details": [
            {
                "productId": 33,
                "unitPrice": 2,
                "quantity": 24,
                "discount": 0
            }
        ]
    },
    {
        "id": 10266,
        "customerId": "WARTH",
        "employeeId": 3,
        "details": [
            {
                "productId": 12,
                "unitPrice": 30.4,
                "quantity": 12,
                "discount": 0.05
            }
        ]
    },
    {
        "id": 10279,
        "customerId": "LEHMS",
        "employeeId": 8,
        "details": [
            {
                "productId": 17,
                "unitPrice": 31.2,
                "quantity": 15,
                "discount": 0.25
            }
        ]
    },
    {
        "id": 10292,
        "customerId": "TRADH",
        "employeeId": 1,
        "details": [
            {
                "productId": 20,
                "unitPrice": 64.8,
                "quantity": 20,
                "discount": 0
            }
        ]
    }
]

let maxPrice = 0;
let maxProduct;

orders.forEach(product => {
    product.details.forEach(detail => {
        if (detail.unitPrice > maxPrice) {
            maxPrice = detail.unitPrice;
            maxProduct = detail
        }
    })
})

console.log(maxPrice)