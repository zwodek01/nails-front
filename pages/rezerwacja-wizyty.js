import React, { useState } from 'react';
import Layout from '../components/layout/components/layout';
import SectionHero from '../components/common/components/sectionHero';
import SectionContentCard from '../components/common/components/sectionContentCard';
import Input from '../components/common/components/input';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import {
  faAt,
  faCalendarDay,
  faClock,
  faCommentAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Reaptcha from 'reaptcha';
import Button from '../components/common/components/button';
import Loader from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import CustomPicker from '../components/common/components/customPicker';
import { ToastContainer, toast } from 'react-toastify';
import {
  parseDate,
  parseTime,
} from '../components/pages/reservation/helpers/reservationHelpers';

const RezerwacjaWizyty = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [reaptchaStatus, setReaptchaStatus] = useState('');
  const [date, setDate] = useState(null);
  const [errorDate, setErrorDate] = useState(false);
  const [time, setTime] = useState(null);
  const [errorTime, setErrorTime] = useState(false);
  const onVerify = () => {
    setToken(true);
  };

  const onSubmit = data => {
    setLoading(true);
    if (!date && !time) {
      setErrorDate(true);
      return setErrorTime(true);
    }
    if (!date) {
      return setErrorDate(true);
    }
    if (!time) {
      return setErrorTime(true);
    }

    if (token) {
      data.date = parseDate(date);
      data.time = parseTime(time);

      setTimeout(() => {
        toast.success(
          <>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <p className="text-center">✔</p>
            <p className="text-center">
              <span className="font-bold">{data.name}</span>, wiadomość została
              wysłana !
            </p>
          </>
        );
        reset();
        setLoading(false);
        setTime(null);
        setDate(null);
        reaptchaStatus.reset();
      }, 2000);
    }
  };

  return (
    <Layout>
      <ToastContainer
        autoClose={8000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-center"
        rtl={false}
      />
      <main>
        <SectionHero title="Rezerwacja wizyty" />
        <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24">
          <SectionContentCard
            grayText="Najlepszym sposobem na cieszenie się zabiegiem w moim salonie jest umówienie się na wizytę. Wypełnij poniższy formularz, a ja skontaktuje się z Tobą w celu omówienia terminu."
            title="Zrób rezerwację wizyty"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-4 md:my-6">
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
              <div className="my-5 md:my-0">
                <CustomPicker
                  date
                  error={errorDate}
                  errorMessage="Data jest wymagana"
                  icon={faCalendarDay}
                  label="Data"
                  placeholderText="Wybierz datę"
                  selected={date}
                  setError={() => setErrorDate(false)}
                  setSelected={setDate}
                />
              </div>
              <div className="my-5 md:my-0">
                <CustomPicker
                  error={errorTime}
                  errorMessage="Godzina jest wymagana"
                  icon={faClock}
                  label="Godzina"
                  placeholderText="Wybierz godzinę"
                  selected={time}
                  setError={() => setErrorTime(false)}
                  setSelected={setTime}
                  time
                />
              </div>
              <Input
                classContainer="my-5 md:my-0 md:col-span-2"
                error={errors.message}
                errorMsg={errors.message?.message}
                icon={faCommentAlt}
                label="Wiadomość"
                name="message"
                placeholder="Dodatkowa wiadomość"
                register={register}
                textarea
              />
            </div>
            <Reaptcha
              className="flex justify-center my-6"
              onVerify={onVerify}
              ref={e => setReaptchaStatus(e)}
              sitekey={process.env.REPACTCHA_KEY}
            />
            <div className="flex justify-center">
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
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default RezerwacjaWizyty;
