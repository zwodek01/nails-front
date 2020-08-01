import React from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';
import { useForm } from 'react-hook-form';
import Input from '../../../common/components/input';
import { faAt, faCommentAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import Button from '../../../common/components/button';
import axios from 'axios';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data =>
    axios
      .post(
        'https://test-nails-server.herokuapp.com/api/send-contact-email',
        data
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24 xl:flex xl:items-center xl:justify-between">
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
            {/*<Input*/}
            {/*  classContainer="my-5 md:my-0"*/}
            {/*  error={errors.surname}*/}
            {/*  errorMsg={errors.surname?.message}*/}
            {/*  icon={faUser}*/}
            {/*  isRequired*/}
            {/*  label="Nazwisko"*/}
            {/*  name="surname"*/}
            {/*  placeholder="Podaj nazwisko"*/}
            {/*  register={register}*/}
            {/*  validation={{*/}
            {/*    required: { value: true, message: 'Pole wymagane' },*/}
            {/*    pattern: {*/}
            {/*      value: /^[A-Za-z]+$/i,*/}
            {/*      message: 'Nieprawidłowy znak',*/}
            {/*    },*/}
            {/*  }}*/}
            {/*/>*/}
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
                minLength: { value: 9, message: 'Minimalna ilość znaków to 9' },
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
          <Button label="Wyślij" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
