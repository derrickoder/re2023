import { IProject } from '../interface/IEvent'
import { IEvent } from '../interface/IEvent'
import TimelineEvent from './TimelineEvent'
import '../css/Timeline.css'

const projectData: IProject = {
    'id': 101,
    'name': 'project 1',
    'description': 'The quick brown fox jumped.',
    'events': [
        {'id': 11, 'name': 'Event 1', 'description': 'The quick brown fox.'},
        {'id': 12, 'name': 'Event 2', 'description': 'The quick brown fox.'},
        {'id': 13, 'name': 'Event 3', 'description': 'The quick brown fox.'},
        {'id': 14, 'name': 'Event 4', 'description': 'The quick brown fox.'}
    ]

};

function Timeline(){
    return (
        <div>
            <div>
                {projectData.name} ({projectData.id})
            </div>
            <div>
                {projectData.description}
            </div>

            <div className="eventCardContainer">
            {
                projectData.events.map(event => {
                    return(<TimelineEvent {...event} />)
                })
            }
            </div>

        </div>
    );
}

export default Timeline;