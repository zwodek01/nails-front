import React, { useState } from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';
import { useForm } from 'react-hook-form';
import Input from '../../../common/components/input';
import { faAt, faCommentAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import Button from '../../../common/components/button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Reaptcha from 'reaptcha';

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [reaptchaStatus, setReaptchaStatus] = useState('');

  const onVerify = () => {
    setToken(true);
  };

  const onSubmit = data => {
    if (token) {
      setLoading(true);
      axios
        .post(`${process.env.API_URL}/api/send-contact-email`, data)
        .then(res => {
          if (res.data.status === 200) {
            toast.success(
              <>
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <p className="text-center">✔</p>
                <p className="text-center">{res.data.description}</p>
              </>
            );
            reset();
          }
          if (res.data.status !== 200) {
            toast.error(
              <>
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <p className="text-center">❌</p>
                <p className="text-center">Wystąpił błąd</p>
                <p className="text-center">{res.data.description}</p>
              </>
            );
          }
          setLoading(false);
          setToken(false);
          reaptchaStatus.reset();
        })
        .catch(err => {
          toast.error(
            <>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <p className="text-center">❌</p>
              <p className="text-center">Wystąpił błąd</p>
              <p className="text-center">Spróbuj jeszcze raz</p>
            </>
          );
          setLoading(false);
          setToken(false);
          reaptchaStatus.reset();
          // eslint-disable-next-line no-console
          console.log(err);
        });
    } else {
      setLoading(false);
      toast.error(
        <>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <p className="text-center">❌</p>
          <p className="text-center">Wystąpił błąd</p>
          <p className="text-center">Potwierdź że nie jesteś robotem</p>
        </>
      );
    }
  };

  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24">
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-center"
        rtl={false}
      />
      <div className="xl:flex xl:items-center xl:justify-between">
        <img
          alt="Mapa"
          className="object-cover map-height m-auto"
          src="/mapa.png"
        />
        <div className="my-8">
          <SectionContentCard
            blackText="Jakieś pytania? Zachęcam do skorzystania z poniższego formularza kontaktowego, aby się ze mną skontaktować. Odpowiem najszybciej jak to możliwe!"
            title="Bądźmy w kontakcie"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:grid md:grid-cols-2 md:gap-4 md:my-6">
              <Input
                classContainer="my-5 md:my-0"
                error={errors.name}
                errorMsg={errors.name?.message}
                icon={faUser}
                isRequired
                label="Imię"
                name="name"
                placeholder="Podaj mię"
                register={register}
                validation={{
                  required: { value: true, message: 'Pole wymagane' },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Nieprawidłowy znak',
                  },
                }}
              />
              <Input
                classContainer="my-5 md:my-0"
                error={errors.surname}
                errorMsg={errors.surname?.message}
                icon={faUser}
                isRequired
                label="Nazwisko"
                name="surname"
                placeholder="Podaj nazwisko"
                register={register}
                validation={{
                  required: { value: true, message: 'Pole wymagane' },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Nieprawidłowy znak',
                  },
                }}
              />
              <Input
                classContainer="my-5 md:my-0"
                error={errors.email}
                errorMsg={errors.email?.message}
                icon={faAt}
                isRequired
                label="E-mail"
                name="email"
                placeholder="Podaj e-mail"
                register={register}
                validation={{
                  required: { value: true, message: 'Pole wymagane' },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Niepoprawny e-mail',
                  },
                }}
              />
              <Input
                classContainer="my-5 md:my-0"
                error={errors.phone}
                errorMsg={errors.phone?.message}
                icon={faPhone}
                isRequired
                label="Telefon"
                name="phone"
                placeholder="Podaj numer telefonu"
                register={register}
                validation={{
                  pattern: {
                    value: /[0-9]{9}/,
                    message: 'Dozwolone tylko cyfry',
                  },
                  required: { value: true, message: 'Pole wymagane' },
                  maxLength: {
                    value: 9,
                    message: 'Maksymalna ilość znaków to 9',
                  },
                  minLength: {
                    value: 9,
                    message: 'Minimalna ilość znaków to 9',
                  },
                }}
              />
              <Input
                classContainer="my-5 md:my-0 md:col-span-2"
                error={errors.message}
                errorMsg={errors.message?.message}
                icon={faCommentAlt}
                isRequired
                label="Wiadomość"
                name="message"
                placeholder="Napisz wiadomość"
                register={register}
                textarea
                validation={{
                  required: { value: true, message: 'Pole wymagane' },
                  minLength: { value: 10, message: 'Minimum 10 znaków' },
                }}
              />
            </div>
            <Reaptcha
              onVerify={onVerify}
              ref={e => setReaptchaStatus(e)}
              sitekey={process.env.REPACTCHA_KEY}
            />
            <Button
              disabled={isLoading}
              label={
                isLoading ? (
                  <Loader
                    color="#CCA776"
                    height={21}
                    type="TailSpin"
                    width={41}
                  />
                ) : (
                  'Wyślij'
                )
              }
              type="submit"
            />
          </form>
        </div>
      </div>
      <div className="my-12 lg:my-24 md:flex md:justify-between">
        <SectionContentCard
          blackText={
            <>
              <p className="my-4">Pon-Pią: 9 – 17</p>
              <p className="my-4">Sobota: Nieczynne</p>
              <p className="my-4">Niedziela: Nieczynne</p>
            </>
          }
          title="Godziny otwarcia"
        />
        <SectionContentCard
          blackText={
            <>
              <p>Bielsk Podlaski</p>
              <p>ul. Ulica 1</p>
              <div className="my-4">
                <a href="tel:555555555">555 555 555</a>
              </div>
              <div className="my-4">
                <a href="mailto:info@info.pl">info@info.pl</a>
              </div>
            </>
          }
          title="Kontakt"
        />
      </div>
    </section>
  );
};

export default Contact;
