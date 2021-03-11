import React from 'react';
import Link from 'next/link';

import LogoCrystallize from 'ui/icons/logo-crystallize';
import { useT } from 'lib/i18n';

import { useSettings } from 'components/settings-context';

import { Outer, Logo, NavList, Powered } from './styles';

export default function Footer() {
  const t = useT();
  const { mainNavigation } = useSettings();

  return (
    <Outer>
      <Powered>
        <ul style={{ listStyleType: 'none' }}>
          <a href="/">
            <Logo>
              <img src="/static/110x40_mp_logo.svg" alt="Modern Potions" />
            </Logo>
          </a>
          <p>{t('layout.ecomBy')}</p>
          <a href="https://crystallize.com" aria-label="crystallize.com">
            <LogoCrystallize size={10} />
          </a>
          <br />
          <li>Portland, OR</li>
          <li>Copyright © 2021, D. Thompson</li>
        </ul>
      </Powered>
      <NavList>
        <h5>{t('layout.menu')}</h5>
        {mainNavigation?.map((category) => (
          <li key={category.path}>
            <Link href={category.path}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </NavList>
    </Outer>
  );
}
