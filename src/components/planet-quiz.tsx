import { useEffect, useState } from 'react'
import { Check, RefreshCw, Trophy } from 'lucide-react'

import type { PlanetId } from './planet-data'

type QuizQuestion = {
  question: string
  answers: string[]
  correctAnswer: string
}

const quizQuestions: Record<PlanetId, QuizQuestion[]> = {
  mercury: [
    {
      question: 'Which planet is the smallest?',
      answers: ['Mercury', 'Mars', 'Venus', 'Neptune'],
      correctAnswer: 'Mercury',
    },
    {
      question: 'How long does Mercury take to travel around the Sun?',
      answers: [
        '88 Earth days',
        '365 days',
        '225 Earth days',
        '687 Earth days',
      ],
      correctAnswer: '88 Earth days',
    },
    {
      question: 'Why does Mercury have huge temperature swings?',
      answers: [
        'It has almost no atmosphere',
        'It is covered in oceans',
        'It spins sideways',
        'It has very bright rings',
      ],
      correctAnswer: 'It has almost no atmosphere',
    },
  ],
  venus: [
    {
      question: 'Which planet is the hottest?',
      answers: ['Venus', 'Mars', 'Earth', 'Neptune'],
      correctAnswer: 'Venus',
    },
    {
      question: 'How does Venus spin compared with most planets?',
      answers: [
        'In the opposite direction',
        'On its side',
        'Four times as fast',
        'It does not spin',
      ],
      correctAnswer: 'In the opposite direction',
    },
    {
      question: 'Which Venus fact is true?',
      answers: [
        'A day is longer than a year',
        'It has the biggest rings',
        'It has liquid oceans',
        'It is the smallest planet',
      ],
      correctAnswer: 'A day is longer than a year',
    },
  ],
  earth: [
    {
      question: 'Which planet is our home?',
      answers: ['Earth', 'Mars', 'Venus', 'Saturn'],
      correctAnswer: 'Earth',
    },
    {
      question: 'How long is one day on Earth?',
      answers: ['24 hours', '10 hours', '59 Earth days', '243 Earth days'],
      correctAnswer: '24 hours',
    },
    {
      question: 'What makes Earth special among the known planets?',
      answers: [
        'It is the only place known to have life',
        'It has the most rings',
        'It is the closest to the Sun',
        'It spins on its side',
      ],
      correctAnswer: 'It is the only place known to have life',
    },
  ],
  mars: [
    {
      question: 'Why is Mars called the Red Planet?',
      answers: [
        'Its soil has iron-rich minerals',
        'It is made of fire',
        'It is covered in red flowers',
        'It reflects Jupiter',
      ],
      correctAnswer: 'Its soil has iron-rich minerals',
    },
    {
      question: 'What is Olympus Mons?',
      answers: [
        'A tall volcano',
        'A deep ocean',
        'A frozen moon',
        'A giant storm',
      ],
      correctAnswer: 'A tall volcano',
    },
    {
      question: 'About how long is a year on Mars?',
      answers: [
        '687 Earth days',
        '365 days',
        '88 Earth days',
        '165 Earth years',
      ],
      correctAnswer: '687 Earth days',
    },
  ],
  jupiter: [
    {
      question: 'Which planet is the biggest?',
      answers: ['Jupiter', 'Earth', 'Mars', 'Mercury'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'What is the Great Red Spot?',
      answers: ['A huge storm', 'A volcano', 'An ocean', 'A ring'],
      correctAnswer: 'A huge storm',
    },
    {
      question: 'About how long is one day on Jupiter?',
      answers: ['10 hours', '24 hours', '59 Earth days', '84 Earth years'],
      correctAnswer: '10 hours',
    },
  ],
  saturn: [
    {
      question: 'What is Saturn famous for?',
      answers: ['Bright rings', 'Blue oceans', 'Sideways spin', 'Two suns'],
      correctAnswer: 'Bright rings',
    },
    {
      question: 'What are Saturn’s rings mostly made from?',
      answers: [
        'Ice and rocky pieces',
        'Hot lava',
        'Clouds of dust',
        'Only solid metal',
      ],
      correctAnswer: 'Ice and rocky pieces',
    },
    {
      question: 'How long is a Saturn year?',
      answers: ['29.4 Earth years', '365 days', '88 Earth days', '10.5 hours'],
      correctAnswer: '29.4 Earth years',
    },
  ],
  uranus: [
    {
      question: 'What makes Uranus unusual?',
      answers: [
        'It spins on its side',
        'It has no atmosphere',
        'It is a moon',
        'It is the smallest planet',
      ],
      correctAnswer: 'It spins on its side',
    },
    {
      question: 'What is Uranus called?',
      answers: ['An ice giant', 'A rocky planet', 'A dwarf planet', 'A comet'],
      correctAnswer: 'An ice giant',
    },
    {
      question: 'How long is a Uranus year?',
      answers: [
        '84 Earth years',
        '365 days',
        '687 Earth days',
        '225 Earth days',
      ],
      correctAnswer: '84 Earth years',
    },
  ],
  neptune: [
    {
      question: 'Which planet is farthest from the Sun in this quiz?',
      answers: ['Neptune', 'Saturn', 'Earth', 'Mars'],
      correctAnswer: 'Neptune',
    },
    {
      question: 'What is Neptune known for?',
      answers: [
        'Very fast winds',
        'Being the hottest planet',
        'Bright icy rings',
        'Being made of solid rock',
      ],
      correctAnswer: 'Very fast winds',
    },
    {
      question: 'How long is a year on Neptune?',
      answers: ['165 Earth years', '365 days', '84 Earth years', '10 hours'],
      correctAnswer: '165 Earth years',
    },
  ],
}

export function PlanetQuiz({ planetId }: { planetId: PlanetId }) {
  const questions = quizQuestions[planetId]
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
  }, [planetId])

  const question = questions[questionIndex]

  function chooseAnswer(answer: string) {
    if (selectedAnswer) return
    setSelectedAnswer(answer)
    if (answer === question.correctAnswer) {
      setScore((current) => current + 1)
    }
  }

  function goToNextQuestion() {
    if (questionIndex === questions.length - 1) {
      setFinished(true)
      return
    }
    setQuestionIndex((current) => current + 1)
    setSelectedAnswer(null)
  }

  function restartQuiz() {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <section
      className="planet-quiz"
      id="planet-quiz"
      aria-labelledby="planet-quiz-title"
    >
      <div className="planet-quiz-heading">
        <div>
          <span className="planet-quiz-eyebrow">QUICK SPACE CHECK</span>
          <h2 id="planet-quiz-title">Planet Quiz</h2>
        </div>
        <div
          className="planet-quiz-progress"
          aria-label={`Question ${questionIndex + 1} of ${questions.length}`}
        >
          {questions.map((_, index) => (
            <span
              key={index}
              className={index <= questionIndex ? 'is-active' : ''}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {finished ? (
        <div className="planet-quiz-result" role="status">
          <span className="planet-quiz-trophy" aria-hidden="true">
            <Trophy size={28} />
          </span>
          <div>
            <h3>Mission complete!</h3>
            <p>
              You scored {score} out of {questions.length}.
            </p>
          </div>
          <button
            type="button"
            onClick={restartQuiz}
            className="planet-quiz-restart"
          >
            <RefreshCw size={16} aria-hidden="true" />
            Try again
          </button>
        </div>
      ) : (
        <div className="planet-quiz-body">
          <div className="planet-quiz-question-row">
            <span>{questionIndex + 1}</span>
            <h3>{question.question}</h3>
          </div>
          <div className="planet-quiz-answers">
            {question.answers.map((answer) => {
              const isSelected = selectedAnswer === answer
              const isCorrect = answer === question.correctAnswer
              const answerState =
                selectedAnswer && isCorrect
                  ? ' is-correct'
                  : selectedAnswer && isSelected
                    ? ' is-wrong'
                    : ''

              return (
                <button
                  type="button"
                  key={answer}
                  className={`planet-quiz-answer${answerState}`}
                  onClick={() => chooseAnswer(answer)}
                  disabled={selectedAnswer !== null}
                  aria-pressed={isSelected}
                >
                  <span>{answer}</span>
                  {selectedAnswer && isCorrect && (
                    <Check size={17} aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>
          {selectedAnswer && (
            <div className="planet-quiz-feedback">
              <p>
                {selectedAnswer === question.correctAnswer
                  ? 'Great answer!'
                  : `Nice try! The answer is ${question.correctAnswer}.`}
              </p>
              <button type="button" onClick={goToNextQuestion}>
                {questionIndex === questions.length - 1
                  ? 'See my score'
                  : 'Next question'}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
