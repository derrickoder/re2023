import TimelineEvent from './TimelineEvent'
import ApiEvent from '../api/Event'

function Timeline(){
    const timelineEvents = ApiEvent();

    return (
        <div>
            Timeline

            {
                timelineEvents.map(event => {
                    return(<TimelineEvent eventId={event.eventId} eventName={event.eventName} />)
                })
            }

        </div>
    );
}

export default Timeline;