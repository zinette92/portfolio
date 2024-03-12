import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsButtonDisabled(
      !isValidEmail(event.target.value) || message.trim() === "",
    );
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsButtonDisabled(email === "" || event.target.value.trim() === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faites quelque chose avec les données du formulaire, par exemple envoyer à un serveur
    console.log("Email:", email);
    console.log("Message:", message);
    // Réinitialiser les champs après la soumission du formulaire
    setEmail("");
    setMessage("");
    // Désactiver le bouton après la soumission
    setIsButtonDisabled(true);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <section
      id="contact"
      className="flex h-fit flex-col items-center gap-12 bg-gray-100 py-16 pt-8 lg:h-screen"
    >
      <h2 className="text-4xl font-bold">Me contacter</h2>
      <p className="max-w-[90%] text-center ">
        Si vous souhaitez me contacter, veuillez remplir le formulaire
        ci-dessous ou m'envoyer un{" "}
        <a href="mailto:gasmi.yassine92@gmail.com" className="text-blue-700">
          mail
        </a>
        .
      </p>
      <div className="w-[80%] md:w-[65%] lg:w-[50%]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="ml-0.5 text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label htmlFor="message" className="ml-0.5 text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Votre message"
              className="mt-1 h-64 w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring md:h-60 lg:h-48"
              rows="4"
            />
          </div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full rounded px-4 py-2 text-white focus:outline-none ${isButtonDisabled ? "c bg-blue-300" : "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"}`}
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
