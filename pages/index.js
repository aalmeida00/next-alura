/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const { theme } = db;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      {/* <Head>
        <title>Quiz da Imersão Alura</title>
      </Head> */}
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomedoUsuario"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button disabled={name.length === 0} type="submit">
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/aalmeida00/next-alura" />
    </QuizBackground>
  );
}
