import React from 'react';
import SectionContentCard from '../../../common/components/sectionContentCard';
import { useForm } from 'react-hook-form';
import Input from '../../../common/components/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <section className="px-4 my-12 max-w-screen-xl mx-auto lg:my-24">
      <img alt="Mapa" className="object-cover w-full" src="/mapa.png" />
      <div className="my-8">
        <SectionContentCard
          blackText="Jakieś pytania? Zachęcam do skorzystania z poniższego formularza kontaktowego, aby się ze mną skontaktować. Odpowiem najszybciej jak to możliwe!"
          title="Bądźmy w kontakcie"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.firstName}
            errorMsg={errors.firstName?.message}
            icon={<FontAwesomeIcon icon={faCoffee} />}
            isRequired
            label="Imię"
            name="firstName"
            placeholder="Podaj imię"
            register={register}
            validation={{
              required: 'Imię jest wymagane',
            }}
          />

          {/*<input*/}
          {/*  name="Last name"*/}
          {/*  placeholder="Last name"*/}
          {/*  ref={register({ required: true, maxLength: 100 })}*/}
          {/*  type="text"*/}
          {/*/>*/}
          {/*<input*/}
          {/*  name="Email"*/}
          {/*  placeholder="Email"*/}
          {/*  ref={register({ required: true, pattern: /^\S+@\S+$/i })}*/}
          {/*  type="text"*/}
          {/*/>*/}
          {/*<input*/}
          {/*  name="Mobile number"*/}
          {/*  placeholder="Mobile number"*/}
          {/*  ref={register({ required: true, minLength: 6, maxLength: 12 })}*/}
          {/*  type="tel"*/}
          {/*/>*/}
          {/*<input*/}
          {/*  name="Message"*/}
          {/*  placeholder="Message"*/}
          {/*  ref={register}*/}
          {/*  type="text"*/}
          {/*/>*/}

          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
