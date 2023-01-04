import { ResponsiveChoropleth } from "@nivo/geo";
import {geoFeatures} from '../Data/mocGeoFeature';
import { tokens } from "../theme";
import { useTheme } from "@mui/system";
import {mockGeographyData as data} from '../Data/mocData';

const MapChart = ({isDashboard = false})=>{
const theme = useTheme();
const colors = tokens(theme.palette.mode);

return(

<ResponsiveChoropleth
        data={data}
        theme = {{
            axis:{
                domain:{
                    line:{
                        stroke:colors.gray[100],
                        strokeWidth:1,
                    },
                    text:{
                        fill:colors.gray[100],
                    },
                },
            },
            legends:{
                text:{
                    fill:colors.gray[100],
                },
            },
            tooltip:{
                container:{
                    color:colors.primary[500],
                }
            }
        }}
        features={geoFeatures.features} /*have a look at description for use and clear understanding */
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
       
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={isDashboard ? [0.49,0.6]:[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        projectionScale = {isDashboard? 40 :150}
        
        borderWidth={1.5}
        borderColor="white"
       
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={
            !isDashboard ?
            [{
            
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.gray[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: 'white',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ] : undefined 
    } 
    />
)
}
export default MapChart;