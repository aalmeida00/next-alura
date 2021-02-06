/* eslint-disable react/prop-types */
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

function QuestionWidget({ questions, totalQuestions, questionIndex }) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>{`Pergunta ${questionIndex + 1} de  ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="descricão"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        src={questions.image}
      />
      <Widget.Content>
        <h2>{questions.title}</h2>
        <p>{questions.description}</p>

        <form>
          {questions.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input
                  // style={{ display: 'none' }}
                  name={questionId}
                  type="radio"
                  id={alternativeId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>{JSON.stringify(questions, null, 4)}</pre> */}
          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const questionIndex = 0;
  const questions = db.questions[questionIndex];
  const totalQuestions = db.questions.length;
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          questions={questions}
        />
        <LoadingWidget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/aalmeida00/next-alura" />
    </QuizBackground>
  );
}
