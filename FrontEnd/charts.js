let ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 300;
let chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Виконано', 'Не виконано'],
        datasets: [{
            label: 'individual dataset',
            backgroundColor: ['rgb(139, 132,217)', 'rgb(255,255,255)'],
            borderColor: ['rgb(139, 132,217)', 'rgb(255,255,255)'],
            data: [75, 25]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        },
        cutoutPercentage: 65,
        title: {
            display: true,
            text: 'Індивідуальний',
            position: 'bottom',
            padding: 16,
            fontFamily: "'Arial', 'sans-serif'",
            fontStyle: "normal",
            fontSize: 25
        },

        animation: {
            duration: 2500,
            easing: 'linear'
        }
    }


});


let ctx1 = document.getElementById('myChart1').getContext('2d');
ctx1.canvas.width = 300;
ctx1.canvas.height = 300;
let chart2 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Виконано', 'Не виконано'],
        datasets: [{
            label: 'individual dataset',
            backgroundColor: ['rgb(0, 0,255)', 'rgb(255,255,255)'],
            borderColor: ['rgb(0, 0,255)', 'rgb(255,255,255)'],
            data: [55, 45]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,

        },
        cutoutPercentage: 65,
        title: {
            display: true,
            text: 'Груповий',
            position: 'bottom',
            padding: 16,
            fontFamily: "'Arial', 'sans-serif'",
            fontStyle: "normal",
            fontSize: 25
        },

        animation: {
            duration: 2500,
            easing: 'linear'
        },

        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },

        responsive: false
    }


});