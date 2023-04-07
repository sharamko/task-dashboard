import { GreetingsText } from './greetings.styled';

const Greetings = ({ userName }) => {
  return <GreetingsText>Hello {userName} 👋🏼,</GreetingsText>;
};

export default Greetings;
