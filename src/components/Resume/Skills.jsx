import { Fragment } from 'react';

import './Skills.css';

import content from '../content';

const SkillRow = ({ label, clusters }) => (
  <div className="Skill">
    <div className="Type">{label}</div>
    <div className="Pills">
      {clusters.map((cluster, i) => (
        <Fragment key={cluster.join()}>
          {i > 0 && (
            <span className="PillSep" aria-hidden="true">
              ·
            </span>
          )}
          {cluster.map((skill) => (
            <span className="Pill" key={skill}>
              {skill}
            </span>
          ))}
        </Fragment>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div className="Skills">
    <SkillRow label="Languages" clusters={content.SKILLS.LANGUAGES} />
    <SkillRow label="Technologies" clusters={content.SKILLS.TECHNOLOGIES} />
    <SkillRow label="Spoken Languages" clusters={content.SKILLS.SPOKEN} />
  </div>
);

export default Skills;
