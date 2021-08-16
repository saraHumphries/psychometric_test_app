
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

    const getColor = function(likertValue) {
        let color = 'grey';
        if(likertValue === 1) {
            color = '#BF3A2B';
        }
        else if(likertValue === 2) {
            color = '#E77E23';
        }
        else if(likertValue == 3) {
            color = '#3499DC';
        }
        else if(likertValue == 4) {
            color = '#16A186';
        }
        else if(likertValue === 5) {
            color = '#2ECD71';
        }
        return color;
    };



    const getDataForChart = function() {
        if(likertOptions) {
            const dataForChart = likertOptions.map((likertOption) => {
                return [likertOption.likertText, questionSummary[likertOption.likertValue], `color: ${getColor(likertOption.likertValue)}; ` + `opacity: ${getOpacities()[`${likertOption.likertValue}`]}`]
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