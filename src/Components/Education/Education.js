import "./Education.css";
import timelineElements from "./EducationElements"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
    return (
        <section id="Edu">
            <div>
                <h2 className="text-center m-4">My <span className="edu">Educations</span></h2>
                <VerticalTimeline>
                    {
                        timelineElements.map(element => {
                            return (
                                <VerticalTimelineElement
                                    className="dates"
                                    key={element.key}
                                    date={element.date}
                                    dateClassName='date'
                                // iconStyle={}
                                >
                                    <h3 className="texts vertical-timeline-element-title">
                                        {element.title}
                                        <span className="text-right p- w-100">{element.icon}</span>
                                    </h3>
                                    <h5 className="text-dark vertical-timeline-element-subtitle">
                                        {element.location}
                                    </h5>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
        </section>
    )
}
export default Education;