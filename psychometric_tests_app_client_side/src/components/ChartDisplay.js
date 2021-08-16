
import Chart from "react-google-charts";

const ChartDisplay = function({questionSummary}) {

    return (
        <div>
            <Chart
                width={400}
                height={300}
                chartType = 'ColumnChart'
                data = {[
                    ['response', 'count'],
                    ['agree', 115],
                    ['slightly agree', 300],
                    ['neither', 455],
                    ['slightly disagree', 300],
                    ['disgaree', 100]
                ]}
            ></Chart>
        </div>
    );

};

export default ChartDisplay;