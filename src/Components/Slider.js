import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import SliderBar from "./SliderBar";
import Box from "@mui/material/Box";

export default function Slider() {
  const questions = [
    {
      question: "I have ambitious aims of making a difference.",
      category: "IDEALISTIC",
    },
    {
      question: "My leadership journey has progressed as I anticipated.",
      category: "IDEALISTIC",
    },
    {
      question:
        "I have spent fewer than 4 years in full time service or ministry.",
      category: "IDEALISTIC",
    },
    {
      question:
        "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.",
      category: "DISILLUSIONED",
    },
    {
      question: "My plans are likely to succeed.",
      category: "DISILLUSIONED",
    },
    {
      question:
        "I’m beginning to believe the journey of service will be much harder than I anticipated.",
      category: "DISILLUSIONED",
    },
    {
      question:
        "I question whether I can remain effective in my role long-term.",
      category: "CYNICAL",
    },
    {
      question:
        "I wonder if I’m really making the difference I anticipated making.",
      category: "CYNICAL",
    },
    {
      question:
        "It feels as though I have hit a wall in my ministry, and I’m not sure where to go from here.",
      category: "CYNICAL",
    },
    {
      question:
        "In this season of ministry, I’m feeling the disappointment of unmet expectations.",
      category: "HOPEFUL",
    },
    {
      question: "If I had the option of changing careers, I would.",
      category: "HOPEFUL",
    },
    {
      question:
        "The problems we’re confronting are just too big to make a meaningful difference.",
      category: "HOPEFUL",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [progessBarStatus, setProgressBarStatus] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  });

  useEffect(() => {
    console.log("currentQuestionIndex", currentQuestionIndex);
    console.log("answers", answers);
    console.log("progessBarStatus", progessBarStatus);
  });

  const handleSliderChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value;
    const getCurrentQuestionCategory = questions[currentQuestionIndex].category;
    if (getCurrentQuestionCategory === "HOPEFUL") {
      setProgressBarStatus({
        ...progessBarStatus,
        four: progessBarStatus.four + 1,
      });
    } else if (getCurrentQuestionCategory === "CYNICAL") {
      setProgressBarStatus({
        ...progessBarStatus,
        three: progessBarStatus.three + 1,
      });
    } else if (getCurrentQuestionCategory === "DISILLUSIONED") {
      setProgressBarStatus({
        ...progessBarStatus,
        two: progessBarStatus.two + 1,
      });
    } else {
      setProgressBarStatus({
        ...progessBarStatus,
        one: progessBarStatus.one + 1,
      });
    }

    setAnswers(updatedAnswers);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="header">
        <h2 style={{ color: "#e74b16" }}>ARE YOU DISILLUSIONED?</h2>
      </div>
      <div className="Box">
        <div className="Inner-Box">
          <ProgressBar progessBarStatus={progessBarStatus} />
          {(currentQuestionIndex < 12 && (
            <>
              {" "}
              <div
                style={{
                  color: " #e74b16",
                  marginTop: "5%",
                  fontSize: "22px",
                  marginBottom: "5%",
                }}
              >
                <b>{currentQuestionIndex + 1}</b>/{questions.length}
              </div>
              <div key={currentQuestion.question}>
                <h2 style={{color: "rgb(32, 173, 180)"}}>{currentQuestion.question}</h2>
              </div>
              <SliderBar
                value={answers[currentQuestionIndex] || 0}
                onChange={handleSliderChange}
              />
              <Box className="navigation">
                <div className="prev" onClick={handlePrev}>
                  <i className="bi bi-arrow-left"></i>
                  <b>Prev</b>
                </div>
                <div className="next" onClick={handleNext}>
                  <b>Next</b>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </Box>
            </>
          )) || <div>"Thanks for submitting the submit"</div>}
        </div>
      </div>
    </>
  );
}
