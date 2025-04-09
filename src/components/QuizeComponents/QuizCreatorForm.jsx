import { useState } from "react";
import axios from "axios";

export default function QuizCreatorForm({ toggleQuizModule, info }) {

    const { instructorId,quizInfo }=info ;
    const { title, description, courseId, _id, modulNo } = quizInfo;
    console.log(instructorId, modulNo)
    const [quiz, setQuiz] = useState({
        title:title ||"",
        description: description||"",
        durationInMinutes:20,
        courseID: quizInfo?.courseId,
        questions: [
            {
                questionText: "",
                marks: 1,
                options: [
                    { text: "", isCorrect: false },
                    { text: "", isCorrect: false },
                    { text: "", isCorrect: false },
                    { text: "", isCorrect: false },
                ],
            },
        ],
    });

    const handleQuizChange = (e) => {
        const { name, value } = e.target;
        setQuiz((prev) => ({ ...prev, [name]: value }));
    };

    const handleQuestionChange = (index, e) => {
        const { name, value } = e.target;
        const newQuestions = [...quiz.questions];
        newQuestions[index][name] = value;
        setQuiz((prev) => ({ ...prev, questions: newQuestions }));
    };

    const handleOptionChange = (qIndex, optIndex, e) => {
        const { name, value, type, checked } = e.target;
        const newQuestions = [...quiz.questions];
        if (type === "checkbox") {
            newQuestions[qIndex].options[optIndex].isCorrect = checked;
        } else {
            newQuestions[qIndex].options[optIndex][name] = value;
        }
        setQuiz((prev) => ({ ...prev, questions: newQuestions }));
    };

    const addQuestion = () => {
        setQuiz((prev) => ({
            ...prev,
            questions: [
                ...prev.questions,
                {
                    questionText: "",
                    marks: 1,
                    options: [
                        { text: "", isCorrect: false },
                        { text: "", isCorrect: false },
                        { text: "", isCorrect: false },
                        { text: "", isCorrect: false },
                    ],
                },
            ],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/gyanflow/quiz/addquiz/${instructorId}/${modulNo}`, quiz);
            console.log("Quiz submitted:", res.data);
            alert("Quiz created successfully!");
        } catch (err) {
            console.error(err);
            alert("Error submitting quiz.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-xl mt-10">
            <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">Create a Quiz  <button className="w-10 h-10 border rounded-full flex justify-center items-center text-[crimson] cursor-pointer border-[crimson]" onClick={toggleQuizModule}>x</button></h2>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center gap-1">
                    <input
                        type="text"
                        name="title"
                        placeholder="Quiz Title"
                        value={quiz.title}
                        onChange={handleQuizChange}
                        className="w-full p-2 border mb-4 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="durationInMinutes"
                        placeholder="Duration (in minutes)"
                        value={quiz.durationInMinutes}
                        onChange={handleQuizChange}
                        className="w-full p-2 border mb-4 rounded"
                        required
                    />
                </div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={quiz.description}
                        onChange={handleQuizChange}
                        className="w-full p-2 border mb-4 rounded"
                    />
                

                {quiz.questions.map((q, qIndex) => (
                    <div key={qIndex} className="mb-6 border-t pt-4">
                        <h3 className="font-semibold mb-2">Question {qIndex + 1}</h3>
                      <div className="flex  gap-1 items-center">
                            <input
                                type="text"
                                name="questionText"
                                placeholder="Question Text"
                                value={q.questionText}
                                onChange={(e) => handleQuestionChange(qIndex, e)}
                                className="w-full p-2 border mb-3 rounded"
                                required
                            />
                            <input
                                type="number"
                                name="marks"
                                placeholder="Marks"
                                value={q.marks}
                                onChange={(e) => handleQuestionChange(qIndex, e)}
                                className="w-full p-2 border mb-3 rounded"
                                required
                            />
                      </div>

                        {q.options.map((opt, optIndex) => (
                            <div key={optIndex} className="flex items-center mb-2 gap-2">
                                <input
                                    type="text"
                                    name="text"
                                    placeholder={`Option ${optIndex + 1}`}
                                    value={opt.text}
                                    onChange={(e) => handleOptionChange(qIndex, optIndex, e)}
                                    className="flex-1 p-2 border rounded"
                                    required
                                />
                                <label className="flex items-center gap-1 text-sm">
                                    <input
                                        type="checkbox"
                                        name="isCorrect"
                                        checked={opt.isCorrect}
                                        onChange={(e) => handleOptionChange(qIndex, optIndex, e)}
                                    />
                                    Correct
                                </label>
                            </div>
                        ))}
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addQuestion}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-3"
                >
                    + Add Question
                </button>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Submit Quiz
                </button>
            </form>
        </div>
    );
}
