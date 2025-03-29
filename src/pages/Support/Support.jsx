import ContactForm from '../../components/Support/ContactForm';
import Faq from '../../components/Support/Faq';

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 ">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Virtual Classroom Support
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Get help with your virtual classroom experience
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* FAQs Section */}
          <Faq />

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
