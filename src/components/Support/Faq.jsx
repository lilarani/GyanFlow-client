import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Faq() {
    const [expandedFaq, setExpandedFaq] = useState(null);
    
    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };
    
    const faqs = [
        {
          id: 1,
          question: 'How do I join a virtual classroom?',
          answer: 'To join a virtual classroom, log in to your account, navigate to your dashboard, and click on the class link at the scheduled time. You can also join through the calendar invite sent to your registered email.'
        },
        {
          id: 2,
          question: 'What should I do if I experience technical issues?',
          answer: 'If you experience technical issues, first try refreshing your browser. Make sure you have a stable internet connection and your browser is updated. If problems persist, clear your browser cache or try using a different browser.'
        },
        {
          id: 3,
          question: 'How do I submit assignments?',
          answer: 'To submit assignments, go to the "Assignments" tab in your classroom, select the assignment you want to submit, attach your files, and click the "Submit" button. You can check the status of your submission in the same section.'
        },
        {
          id: 4,
          question: 'Can I access recorded classes?',
          answer: 'Yes, all classes are recorded and available for review. Go to the "Recordings" section in your classroom dashboard to access past class recordings. They will be available for the duration of your course.'
        },
        {
          id: 5,
          question: 'How do I communicate with my instructor?',
          answer: 'You can communicate with your instructor through the in-class chat feature during live sessions, or by using the messaging system in your dashboard. For more detailed discussions, you can also schedule office hours through the calendar feature.'
        }
    ];
    
    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                        <FaQuestionCircle className="mr-2 text-indigo-600" />
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-6 space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="border-b border-gray-200 pb-4">
                                <button
                                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    {expandedFaq === faq.id ? (
                                        <FaChevronUp className="text-indigo-600" />
                                    ) : (
                                        <FaChevronDown className="text-indigo-600" />
                                    )}
                                </button>
                                {expandedFaq === faq.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-2 text-gray-600"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}