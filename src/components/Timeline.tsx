import { IEventsPlusAction } from '../interface/IEvent'
import TimelineEvent from './TimelineEvent'
import '../css/Timeline.css'

function Timeline({events, onSelect}:IEventsPlusAction){
    return (
        <div className="eventcard-container">
            {
                events.map(event => {
                    return(<TimelineEvent event={event} onSelect={onSelect} />)
                })
            }
        </div>
    );
};

export default Timeline;