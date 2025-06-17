import { useState } from "react";


function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(false);

        setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
    };


  return (
    <section id="contact" className="py-24 px-4 relative h-full">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <div className="container mx-auto text-center mb-8">
        Contact me through my email:{" "}
        <a href="mailto:aditya.ranjan@gmail.com" className="underline">
          aditya.ranjan@kcl.ac.uk
        </a>{" "}
        or via the form below
      </div>

      <div className="h-full container flex flex-col items-center justify-center gap-20 p-6 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="w-full space-y-10">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-md border border-gray-300 bg-[hsl(var(--foreground))] px-3 py-2 text-background shadow-sm focus:border-primary focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-md border border-gray-300 bg-[hsl(var(--foreground))] px-3 py-2 text-background shadow-sm focus:border-primary focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 font-semibold text-foreground">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full rounded-md border border-gray-300 bg-[hsl(var(--foreground))] px-3 py-2 text-background shadow-sm focus:border-primary focus:ring-2 focus:ring-primary outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              rows={5}
              className="w-full rounded-md border border-gray-300 bg-[hsl(var(--foreground))] px-3 py-2 text-background shadow-sm focus:border-primary focus:ring-2 focus:ring-primary outline-none transition resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cosmic-button disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-sm text-green-600 text-center mt-[-20px]">Your message has been sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
