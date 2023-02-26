function TimelineEvent(prop: {eventId:number; eventName:string}){
    return (
        <div>{prop.eventName}</div>
    );
}

export default TimelineEvent;