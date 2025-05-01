import {
  useDeleteQuizMutation,
  useGetQuizForSpeceficModuleQuery,
} from '@/redux/ApiCalling/apiClice';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function QuizList({ info }) {
  const [deleteQuiz] = useDeleteQuizMutation();

  const { instructorId, quizInfo } = info;
  const { title, description, courseId, _id, modulNo } = quizInfo;
  const [answers, setAnswers] = useState({});
  // const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { data } = useGetQuizForSpeceficModuleQuery(modulNo);
  console.log(data);

  const handleChange = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // useEffect(() => {
  //     const getQuizes = async () => {
  //         // module_12345
  //         try {
  //             const res = await axios.get(`https://gyanflow-server.onrender.com/gyanflow/quiz/getquizforModule/${modulNo}`);
  //             setData(res.data)
  //         } catch (err) {
  //             console.log(err);
  //             setError(err)
  //         }
  //     }
  //     getQuizes();

  // }, []);

  const handleDelete = async id => {
    try {
      if (window.confirm('Are You sure want to delete this ')) {
        // const res = await axios.delete(`https://gyanflow-server.onrender.com/gyanflow/quiz/quizzes/${id}`);
        await deleteQuiz(id).unwrap();
        alert('deleted successfully');
        //    setTimeout(() => {
        //        window.location.reload();
        //    }, 700);
      }
    } catch (err) {
      if (err) {
        alert(err?.response?.data?.message || 'internal server error');
      }
      // console.log(err);
    }
  };

  if (error) {
    return (
      <div className="h-[400px] bg-transparent ">something went wrong </div>
    );
  }

  return (
    <div className="h-full    ">
      {data?.data?.length === 0 ? (
        <div className="h-[400px]  flex justify-center items-center flex-col text-2xl">
          Not added any quiz for this module
        </div>
      ) : (
        <>
          {data?.data?.map(item => (
            <div className=" my-4  px-1  ">
              <p>{item?.title}</p>
              {/* <p>{item?.description}</p>
                            <p>duration:{item?.durationInMinutes} Min</p>
                            <p>instructorId:{item?.instructorId}</p>
                            <p>module Id:{item?.moduleId}</p> */}
              <div>questions:--</div>
              <div className="">
                {item?.questions?.map(i => (
                  <div className=" border my-2 p-3 rounded ">
                    <h1 className="flex justify-between items-center">
                      <span>
                        <strong>Question:</strong>:{i?.questionText}
                      </span>
                      <button
                        onClick={() => handleDelete(item?._id)}
                        className="border px-3 rounded bg-red-400 cursor-pointer hover:bg-transparent transition-all duration-700 "
                      >
                        Delete
                      </button>
                    </h1>
                    <div className="">
                      {i?.options.map((op, index) => (
                        <div className="flex justify-between items-center flex-wrap p-1">
                          <span>
                            <strong>{index + 1}.</strong> {op?.text}
                          </span>{' '}
                          <div>
                            {op?.isCorrect ? (
                              <span className="bg-green-600 px-1 rounded capitalize text-white ">
                                correct
                              </span>
                            ) : (
                              'Incorrect'
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
