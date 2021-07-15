import { Container } from './styles';

type ProfileImage = {
  gitHubUser: string;
};

export function ProfileImage({ gitHubUser }: ProfileImage) {
  return (
    <Container>
      <img
        className="profilePicture"
        src={`https://github.com/${gitHubUser}.png`}
        alt="Profile"
      />
      <span>{gitHubUser}</span>
    </Container>
  );
}
