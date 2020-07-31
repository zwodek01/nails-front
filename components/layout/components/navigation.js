import React, { useState } from 'react';
import Hamburger from '../../common/components/hamburger';
import Kebab from '../../common/components/kebab';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const route = useRouter().pathname;
  return (
    <section className="navigation">
      <div className="navigation__top-bar">
        <div className="navigation__top-bar-mobile hidden-up-md px-4">
          <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
          <h2 className="navigation__title">Afra</h2>
          <Kebab />
        </div>
        <div className="hidden-down-md text-white h-full items-center max-w-screen-xl mx-auto px-4">
          <div className="flex mr-40">
            <p className="font-bold mr-3">Telefon:</p>
            <address>
              <a className="not-italic" href="tel:555555555">
                555-555-555
              </a>
            </address>
          </div>
          <div className="flex">
            <p className="font-bold mr-3">Godziny otwarcia:</p>
            <p className="mr-10"> Pon - Pią: 9.00 - 17.00</p>
            <p className="hidden lg:block">Sob - Nie: NIECZYNNE</p>
          </div>
        </div>
      </div>
      <nav
        className={classNames('navigation__nav', {
          'navigation__nav--open': isOpen,
        })}
      >
        <ul className="max-w-screen-xl mx-auto md:px-4">
          <Link href="/">
            <li>
              <a
                className={classNames({
                  navigation__active: route === '/',
                })}
              >
                Strona główna
              </a>
            </li>
          </Link>
          <Link href="/o-mnie">
            <li>
              <a
                className={classNames({
                  navigation__active: route === '/o-mnie',
                })}
              >
                O mnie
              </a>
            </li>
          </Link>
          <Link href="/uslugi">
            <li>
              <a
                className={classNames({
                  navigation__active: route === '/uslugi',
                })}
              >
                Usługi
              </a>
            </li>
          </Link>
          <h2 className="navigation__title hidden-down-md">Afra</h2>
          <Link href="/rezerwacja-wizyty">
            <li>
              <a
                className={classNames({
                  navigation__active: route === '/rezerwacja-wizyty',
                })}
              >
                Rezerwacja wizyty
              </a>
            </li>
          </Link>
          <Link href="/galeria">
            <li>
              <a
                className={classNames({
                  navigation__active: route === '/galeria',
                })}
              >
                Galeria
              </a>
            </li>
          </Link>
          <Link href="/kontakt">
            <li>
              <a
                className={classNames({
                  navigation__active: route === '/kontakt',
                })}
              >
                Kontakt
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
