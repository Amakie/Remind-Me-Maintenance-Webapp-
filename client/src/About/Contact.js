import React, { useState } from "react";

function Contact() {
    const [senderMail, setSenderMail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ senderMail, subject, message }),
            });

            if (!response.ok) {
                throw new Error("Error Sending message, please try again later");
            }

            setSenderMail("");
            setSubject("");
            setMessage("");
            setError(null);

        } catch (error) {
            console.error("Error:", error);
            setError("Error Sending message, please try again later");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-div">
            <div className="contact-form-div">
                <h2 className="form-header">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="email"
                            id="email"
                            value={senderMail}
                            placeholder="Email"
                            onChange={(e) => setSenderMail(e.target.value)}
                            className='login-input'
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                            className='login-input'
                            required
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <textarea
                            id="message"
                            value={message}
                            placeholder="Enter Your Message"
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-burgundy"
                            required
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className='button-primary'>
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
