
import Chart from "react-google-charts";

const ChartDisplay = function({questionSummary}) {


    return (
        <div>
            <Chart
                width={800}
                height={300}
                chartType = 'ColumnChart'
                data = {[
                    ['response', 'count'],
                    ['agree',questionSummary[1]],
                    ['slightly agree', questionSummary[2]],
                    ['neither', questionSummary[3]],
                    ['slightly disagree', questionSummary[4]],
                    ['disgaree', questionSummary[5]]
                ]}
                options={{
                    vAxis: {
                        title: 'count of responses'
                    }
                }}
            ></Chart>
        </div>
    );

};

export default ChartDisplay;