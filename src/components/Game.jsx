import { useState } from "react";
import { questions } from "./questions";

const Game = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0); // Переименовал для ясности
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showResults, setShowResults] = useState(false); // Новое состояние для результатов

  const handleNextQuestion = () => {
    if (questionIndex <= questions.length - 2) {
      setQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true); // Показываем результаты после последнего вопроса
    }
  };

  const handleAnswer = answerIndex => {
    const correctAnswer = questions[questionIndex].correct;
    setSelectedAnswer(answerIndex);

    if (answerIndex === correctAnswer) {
      setIsCorrect(true);
      setScore(prev => prev + 1); // Используем предыдущее значение для обновления
    } else {
      setIsCorrect(false);
    }
  };

  // Сбрасываем игру
  const resetGame = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowResults(false);
  };
  const percent = Math.round((questionIndex / questions.length) * 100);
  return (
    <div className="bg-white w-lg h-90 flex justify-center items-center flex-col rounded-2xl p-4">
      <div className="w-4/5 mb-4">
        <div
          className="h-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-600"
          style={{ width: `${percent}%`}} // Прогресс-бар
        ></div>
      </div>

      {!showResults ? (
        <div className="text-center">
          {questions.map((item, index) => (
            <div key={index}>
              {index === questionIndex && (
                <div>
                  <h1 className="text-xl font-bold mb-4">{item.title}</h1>
                  <ul className="flex flex-col gap-2">
                    {item.variants?.map((value, id) => (
                      <li
                        key={id}
                        className={`p-3 border rounded-xl cursor-pointer transition-colors
                          ${
                            selectedAnswer === id
                              ? id === item.correct
                                ? "bg-green-100 border-green-500"
                                : "bg-red-100 border-red-500"
                              : "hover:bg-gray-50"
                          }`}
                        onClick={() => !selectedAnswer && handleAnswer(id)} // Блокируем повторные клики
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                  {isCorrect !== null && (
                    <p
                      className={`mt-3 ${
                        isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isCorrect ? "✓ Правильно!" : "✗ Неправильно!"}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <img
            src="/pie-chart-svgrepo-com.svg"
            alt="Pie Chart"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Результаты</h2>
          <p className="mb-4">
            Вы ответили правильно на {score} из {questions.length} вопросов
          </p>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Начать заново
          </button>
        </div>
      )}

      {!showResults && questionIndex < questions.length && (
        <button
          onClick={handleNextQuestion}
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={selectedAnswer === null} // Кнопка неактивна пока не выбран ответ
        >
          Следующий вопрос
        </button>
      )}
    </div>
  );
};

export default Game;
