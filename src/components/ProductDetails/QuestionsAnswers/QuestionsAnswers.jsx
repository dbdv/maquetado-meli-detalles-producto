import { useRef, useState } from "react";
import QuestionBox from "./QuestionBox/QuestionBox";
import "./QuestionsAnswers.css";

export default function QuestionsAnswers() {
  const testQuestion = {
    question: "Hola buenas tardes...tenes stock de este rosa 2??",
    answer: "Hola si tenemos stock",
    date: "24/10/2022",
  };

  const newQuestionsRef = useRef();

  const [testQuestions, setTestQuestions] = useState([testQuestion]);

  return (
    <section className="questions-answers">
      <div className="questions-answers-title">
        <h3>Preguntas y respuestas</h3>
      </div>
      <div className="questions-answers-frequently-asked">
        <h4>¿Qué querés saber?</h4>
        <div className="questions-answers-suggestions">
          <span>Costo y tiempo de envío</span>
          <span>Devoluciones gratis</span>
          <span>Medios de pago y promociones</span>
          <span>Garantía</span>
          <span>Cuotas sin tarjeta</span>
        </div>
      </div>
      <div className="questions-answers-add-question">
        <h4>Preguntale al vendedor</h4>
        <div>
          <input
            ref={newQuestionsRef}
            type="text"
            name=""
            id=""
            placeholder="Escribí tu pregunta..."
          />
          <button
            onClick={() => {
              setTestQuestions((prev) => [
                ...prev,
                {
                  question: newQuestionsRef.current.value,
                  answer: "",
                  date: new Date(Date.now())
                    .toLocaleString("es-AR")
                    .split(",")[0],
                },
              ]);
            }}
          >
            Preguntar
          </button>
        </div>
      </div>
      <div className="last-asked">
        <h4>Últimas realizadas</h4>
        <div>
          {testQuestions.map((tq) => (
            <QuestionBox question={tq} />
          ))}
        </div>
      </div>
    </section>
  );
}
