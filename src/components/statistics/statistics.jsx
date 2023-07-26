import PropTypes from 'prop-types';
import {
  Statist,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './statisticcsList.styled';

export const CreateStatistics = ({ stats }) => {
  return (
    <Statist>
      <Title>Upload stats</Title>
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Statist>
  );
};
CreateStatistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
