import Chart from "react-google-charts";


const TotalSummaryChart = function({totalScores}) {

    
    const getDataForTotalsHistogram = function() {
        if(totalScores) {
            const data = totalScores.map((totalScore, index) => {
                return [index.toString(), totalScore]
            });
            data.unshift(['index', 'totalScore']);
            return data
        };
    };
    
   


    return (
        <div>
            <Chart
                width={2000}
                height={300}
                chartType='Histogram'
                data={
                
                    getDataForTotalsHistogram()
                }
                options={{
                    legend: { position: 'none'}
                }}
                
            ></Chart>
        </div>
    );
};

export default TotalSummaryChart;