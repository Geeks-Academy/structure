import { ISocial } from 'Types/interfaces';
import { StyledContainer, StyledImage, StyledInput } from './Social.styled';

const Social = ({ link, social }: ISocial): JSX.Element => {
  const { image } = social;
  return (
    <StyledContainer className="flex">
      <StyledImage src={image} />
      <StyledInput placeholder={'link'} label="" defaultValue={link} />
    </StyledContainer>
  );
};

export default Social;
