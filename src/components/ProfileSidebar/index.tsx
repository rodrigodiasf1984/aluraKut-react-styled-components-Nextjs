import { AlurakutProfileSidebarMenuDefault } from '@/utils/aluraCommons';
import { Box } from '../Box';

type ProfileSideBarProps = {
  githubUser: string;
};

export function ProfileSidebar({ githubUser }: ProfileSideBarProps) {
  return (
    <Box as="aside">
      <img
        className="profilePicture"
        src={`https://github.com/${githubUser}.png`}
        alt="Profile"
      />
      <hr className="hr" />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${githubUser}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{githubUser}
        </a>
      </p>
      <hr className="hr" />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}
