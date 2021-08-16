
import Chart from "react-google-charts";

const ChartDisplay = function({likertOptions, questionSummary, response}) {

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

    const getDataForChart = function() {
        if(likertOptions) {
            const dataForChart = likertOptions.map((likertOption) => {
                return [likertOption.likertText, questionSummary[likertOption.likertValue], 'color: grey; ' + `opacity: ${getOpacities()[`${likertOption.likertValue}`]}`]
            });
            dataForChart.unshift(['response', 'count', {role: 'style'}]);
            return dataForChart;
        };
    };
    
    return (
        <div>
            {questionSummary? 
            <Chart
                width={800}
                height={300}
                chartType = 'ColumnChart'
                data = {
                    getDataForChart()
                }
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