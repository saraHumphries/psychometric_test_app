
import Chart from "react-google-charts";

const ChartDisplay = function({questionSummary, response}) {

    const getOpacities = function() {
        const opacities = {};
        if(questionSummary) {
            for(let question in questionSummary) {
                if(question == response) {
                    opacities[`${question}`] = '1.0';
                }
                else {
                    opacities[`${question}`] = '0.4';
                };
            };
            return opacities;
        };
    };

    


    return (
        <div>
            {questionSummary? 
            <Chart
                width={800}
                height={300}
                chartType = 'ColumnChart'
                data = {[
                    ['response', 'count', {role: 'style'}],
                    ['disagree',questionSummary[1], 'color: #BF3A2B;' + `opacity: ${getOpacities()['1']}`],
                    ['slightly disagree', questionSummary[2], 'color: #E77E23;' + `opacity: ${getOpacities()['2']}`],
                    ['neither', questionSummary[3], 'color: #3499DC;' + `opacity: ${getOpacities()['3']}`],
                    ['slightly agree', questionSummary[4], 'color: #16A186;' + `opacity: ${getOpacities()['4']}`],
                    ['agree', questionSummary[5], 'color: #2ECD71;' + `opacity: ${getOpacities()['5']}`]
                ]}
                options={{
                    vAxis: {
                        title: 'count of responses'
                    },
                    legend: {
                        position: 'none'
                    },
                    
                }}
            ></Chart> : null}
        </div>
    );

};

export default ChartDisplay;