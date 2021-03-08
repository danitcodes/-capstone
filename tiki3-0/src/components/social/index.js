import React from 'react';
import { LinkedIn, Twitter, Instagram, GitHub } from './icons';
import { Outer, Btn } from './styles';

export default function SocialBar() {
  return (
    <Outer>
      <Btn>
        <Instagram />
      </Btn>
      <Btn>
        <GitHub />
      </Btn>
      <Btn>
        <Twitter />
      </Btn>
      <Btn>
        <LinkedIn />
      </Btn>
    </Outer>
  );
}
