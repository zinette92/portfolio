import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Contact section component
export default function Contact() {
  // State variables for email, message, and button disabled state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isError, setIsError] = useState(false);

  // Handle email input change
  const handleEmailChange = (event) => {
    // Enable or disable button based on email validity and message content
    setEmail(event.target.value);
    setIsButtonDisabled(
      !isValidEmail(event.target.value) || message.trim() === "",
    );
  };

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    // setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email:", email);
          console.log("Email:", message);
          // Reset form fields after submission
          setEmail("");
          setMessage("");
          // Disable button after submission
          setIsButtonDisabled(true);

          setIsMessageSent(true);

          setTimeout(() => {
            setIsMessageSent(false);
          }, 3000); // hide message after 5 seconds
        },
        (error) => {
          console.log(
            "Une erreur est survenue lors de l'envoie du message." || error,
          );
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 2000);
        },
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  // Handle message input change
  const handleMessageChange = (event) => {
    // Enable or disable button based on email validity and message content
    console.log("a");
    setMessage(event.target.value);
    setIsButtonDisabled(email === "" || event.target.value.trim() === "");
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <section id="contact" className="h-[750px] md:h-[700px]">
      <div
        className={`flex h-full flex-col items-center gap-12 bg-gray-100 py-16 pt-8  ${isMessageSent ? "hidden" : "block"}`}
      >
        <h2 className="text-4xl font-bold text-gray-700 caret-transparent">
          Me contacter
        </h2>
        <p className="max-w-[90%] text-center caret-transparent">
          Si vous souhaitez me contacter, veuillez remplir le formulaire
          ci-dessous ou m'envoyer un{" "}
          <a href="mailto:contact@gasmiyassine.com" className="text-blue-700">
            mail
          </a>
          .
        </p>
        {/* Contact form */}
        <div className="w-[80%] md:w-[65%] lg:w-[50%]">
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Email input */}
            <div>
              <label htmlFor="email" className="ml-0.5 text-lg font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* Message textarea */}
            <div>
              <label htmlFor="message" className="ml-0.5 text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Votre message"
                className="mt-1 h-64 w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring md:h-60 lg:h-48"
                rows="4"
              />
            </div>
            {/* Submit form button */}
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full rounded px-4 py-2 text-white focus:outline-none ${isButtonDisabled ? "c bg-blue-300" : "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"}`}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div
        className={`flex h-full flex-col items-center justify-center gap-12 bg-gray-100 py-16 pt-8  ${isMessageSent ? "block" : "hidden"}`}
      >
        <p className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-green-400 md:h-72 md:w-72 md:border-8">
          <FontAwesomeIcon
            icon={faCheck}
            className="h-24 w-24 text-green-400 md:h-48 md:w-48"
          />
        </p>
        <p className="text-lg md:text-2xl">Votre message a bien été envoyé.</p>
      </div>
      {isError && (
        <div className="fixed top-20 flex w-full justify-center">
          <p className="z-50 flex h-12 w-[80%]  items-center justify-center rounded-lg border bg-red-500 text-white">
            Une erreur est survenue lors de l'envoie du message.
          </p>
        </div>
      )}
    </section>
  );
}
