var canvas = document.getElementById("sales-by-day");
var jsonfile = {
    "jsonarray": [{
        "day": "1",
        "sales": 5
    }, {
        "day": "2",
        "sales": 7
    }, {
        "day": "3",
        "sales": 3
    }, {
        "day": "4",
        "sales": 7
    }, {
        "day": "5",
        "sales": 6
    }, {
        "day": "6",
        "sales": 2
    }, {
        "day": "7",
        "sales": 8
    },
       {
        "day": "8",
        "sales": 4
    },
       {
        "day": "9",
        "sales": 10
    },
       {
        "day": "10",
        "sales": 7
    },
       {
        "day": "11",
        "sales": 11
    }, {
        "day": "12",
        "sales": 5
    }, {
        "day": "13",
        "sales": 9
    }, {
        "day": "14",
        "sales": 7
    }, {
        "day": "15",
        "sales": 0
    }, {
        "day": "16",
        "sales": 4
    },
       {
        "day": "17",
        "sales": 4
    },
       {
        "day": "18",
        "sales": 7
    },
       {
        "day": "19",
        "sales": 8
    },
    {
        "day": "20",
        "sales": 10
    }, {
        "day": "21",
        "sales": 4
    }, {
        "day": "22",
        "sales": 2
    }, {
        "day": "23",
        "sales": 12
    }, {
        "day": "24",
        "sales": 0
    }, {
        "day": "25",
        "sales": 5
    },
       {
        "day": "26",
        "sales": 5
    },
       {
        "day": "27",
        "sales": 7
    },
       {
        "day": "28",
        "sales": 1
    },
       {
        "day": "29",
        "sales": 1
        
    },
       {
        "day": "30",
        "sales": 7
    },



    ]
};

var labels = jsonfile.jsonarray.map(function (e) {
    return e.day;
});
var data = jsonfile.jsonarray.map(function (e) {
    return e.sales;
});;

var ctx = canvas.getContext('2d');
var config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Daily Sales',
            data: data,
            backgroundColor: 'rgba(245,245,245, 1)',

        }]
    }
};

var chart = new Chart(ctx, config);