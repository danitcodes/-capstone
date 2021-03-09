import React from 'react';
import { Outer, SocialButton } from './styles';
import { IconTwitter } from 'components/icons/twitter';
import { IconInstagram } from 'components/icons/instagram';
import { IconLinkedIn } from 'components/icons/linkedin';
import { IconGitHub } from 'components/icons/github';

export default function SocialBar() {
  return (
    <Outer>
      <SocialButton>
        <IconInstagram />
      </SocialButton>
      <SocialButton>
        <IconTwitter />
      </SocialButton>
      <SocialButton>
        <IconLinkedIn />
      </SocialButton>
      <SocialButton>
        <IconGitHub />
      </SocialButton>
    </Outer>
  );
}
