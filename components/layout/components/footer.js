import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const Footer = () => {
  const route = useRouter().pathname;

  return (
    <footer className="bg-black text-white">
      <section className="px-4 py-8 mt-12 max-w-screen-xl mx-auto md:flex md:justify-between md:items-center lg:mt-24">
        <ul className="md:text-left">
          <Link href="/">
            <li className="my-4 cursor-pointer">
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
            <li className="my-4 cursor-pointer">
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
            <li className="my-4 cursor-pointer">
              <a
                className={classNames({
                  navigation__active: route === '/uslugi',
                })}
              >
                Usługi
              </a>
            </li>
          </Link>
        </ul>
        <div className="text-center hidden md:block">
          <h2 className="navigation__title">Afra</h2>
          <p className="my-6">© 2020 Wszelkie prawa zastrzeżone</p>
          <a href="#">Polityka prywatności</a>
        </div>
        <ul className="md:text-right">
          <Link href="/rezerwacja-wizyty">
            <li className="my-4 cursor-pointer">
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
            <li className="my-4 cursor-pointer">
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
            <li className="my-4 cursor-pointer">
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
        <div className="md:hidden">
          <h2 className="navigation__title">Afra</h2>
          <p className="my-6">© 2020 Wszelkie prawa zastrzeżone</p>
          <a href="#">Polityka prywatności</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
