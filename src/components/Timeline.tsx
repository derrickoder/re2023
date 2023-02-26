import TimelineEvent from './TimelineEvent'

function getTimelineEvents(){
    return [{'eventId': 1, 'eventName': 'Event 1'}, {'eventId': 2, 'eventName': 'Event 2'}];
}

function Timeline(){
    const timelineEvents = getTimelineEvents();

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