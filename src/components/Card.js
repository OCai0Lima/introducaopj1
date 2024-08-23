import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const Card = ({ title, description, imageUrl }) => (
  <CardContainer>
    <img src={imageUrl} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;
