
import Chart from "react-google-charts";

const ChartDisplay = function({questionSummary}) {


    return (
        <div>
            {questionSummary? 
            <Chart
                width={800}
                height={300}
                chartType = 'ColumnChart'
                data = {[
                    ['response', 'count', {role: 'style'}],
                    ['disagree',questionSummary[1], 'color: #BF3A2B'],
                    ['slightly disagree', questionSummary[2], 'color: #E77E23'],
                    ['neither', questionSummary[3], 'color: #3499DC'],
                    ['slightly agree', questionSummary[4], 'color: #16A186'],
                    ['agree', questionSummary[5], 'color: #2ECD71']
                ]}
                options={{
                    vAxis: {
                        title: 'count of responses'
                    }
                }}
            ></Chart> : null}
        </div>
    );

};

export default ChartDisplay;