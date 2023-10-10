import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatNumber,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  // Групуємо дані за label
  const groupedData = data.reduce((acc, current) => {
    const existingItem = acc.find(item => item.label === current.label);
    if (existingItem) {
      existingItem.percentages.push(current.percentage);
    } else {
      acc.push({
        label: current.label,
        percentages: [current.percentage],
      });
    }
    return acc;
  }, []);

  const statItems = groupedData.map(({ label, percentages }) => {
    const averagePercentage =
      percentages.reduce((sum, percentage) => sum + percentage, 0);

    return (
      <StatItem key={label}>
        <span>{label}</span>
        <StatNumber>{averagePercentage.toFixed(0)}%</StatNumber>
      </StatItem>
    );
  });

  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>{statItems}</StatList>
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
