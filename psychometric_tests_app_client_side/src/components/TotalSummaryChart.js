import Chart from "react-google-charts";


const TotalSummaryChart = function({totalScores}) {

    



    return (
        <div>
            <Chart
                width={800}
                height={300}
                chartType='CandlestickChart'
                data={[
                    ['day', 'a', 'b', 'c', 'd'],
                    ['Mon', 20, 28, 38, 45]
                ]}
                options={{
                    orientation: 'vertical' 
                }}
            ></Chart>
        </div>
    );
};

export default TotalSummaryChart;