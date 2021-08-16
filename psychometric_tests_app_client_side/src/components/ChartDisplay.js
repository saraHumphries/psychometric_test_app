
import Chart from "react-google-charts";

const ChartDisplay = function({questionSummary}) {

    console.log('questionSummary', questionSummary[1]);

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
            ></Chart>
        </div>
    );

};

export default ChartDisplay;