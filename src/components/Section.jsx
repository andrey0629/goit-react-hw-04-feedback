import PropTypes from 'prop-types';
import {
  SectionContainer,
  SectionTitle,
} from './StyledComponents/Section.styled';
function Section({ title, children }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
