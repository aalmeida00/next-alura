/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do André]</Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3> Pergunta 1 de {` ${db.questions.length}`}</h3>
          </Widget.Header>
          <img
            alt="descricão"
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            src="http://placehold.it/400x400"
          />
          <Widget.Content>
            <h2>Titulo</h2>
            <p>Descrição</p>
            <Button type="submit">Confirmar</Button>
          </Widget.Content>
        </Widget>
        <LoadingWidget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/aalmeida00/next-alura" />
    </QuizBackground>
  );
}
