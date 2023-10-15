import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatNumber,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatSection className="statistics">
      {title && <StatTitle  className="title">{title}</StatTitle>}
      <StatList  className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <StatItem className="item" key={id}>
            <span className="label">{label}</span>
            <StatNumber className="percentage">{percentage}%</StatNumber>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};