import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
const Experience = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2020"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Delhi Public School, Bulandshahr
        </h3>
        <p> Pcm Stream</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Kiet group of Institutions, Ghaziabad
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>

        <p> Information Technology</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2021- Jan 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<HomeRepairServiceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Developer - Kiet Erp
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Kiet Ghaziabad
        </h4>
        <p>ERP(An Institution Body Who Manages The Different Modules For The College)</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2022 - Present"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<HomeRepairServiceIcon/>}
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Developer - Narayan Frumos Pvt Ltd
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Ghaziabad
        </h4>
        <p>
          A startup company focuses on building the youth haircare products.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2022 - Present"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<HomeRepairServiceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          SDE Intern - Cabin4j
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
         Lucknow
        </h4>
        <p>Cabin4j(Cabin4j Suite Is The Most Comprehensive Development Ecosystem That Lets You Build High-Quality Service-Oriented Transactional Applications And Innovative Systems Efficiently And Quickly.)</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  );
};

export default Experience;
