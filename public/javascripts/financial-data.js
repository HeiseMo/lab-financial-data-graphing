const ctx = document.getElementById('myChart');
function loadDates(){
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    let url = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
    axios.get(url)
        .then(response => {
            const bitcoinInfo = response.data.bpi;
            console.log(bitcoinInfo);
            var ctx = document.getElementById('myChart');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [...Object.keys(bitcoinInfo)],
                    datasets: [{
                        label: 'Value',
                        data: [...Object.values(bitcoinInfo)],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

