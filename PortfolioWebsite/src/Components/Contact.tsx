

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative h-full">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
      </h2>
      <div className="container mx-auto ">
        Contact me through my email: <a href="mailto:aditya.ranjan@gmail.com" className="underline"> aditya.ranjan@kcl.ac.uk </a> or via the form below
      </div>

    <div className=" h-full container flex flex-col items-center justify-center gap-20 p-6 max-w-lg mx-auto">
        <form action="#" method="POST" className="w-full space-y-6">
            <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-foreground">
                Name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                autoComplete="name"
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
                placeholder="Email"
                required
                autoComplete="email"
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
                placeholder="Your message"
                required
                rows={5}
                className="w-full rounded-md border border-gray-300 bg-[hsl(var(--foreground))] px-3 py-2 text-background shadow-sm focus:border-primary focus:ring-2 focus:ring-primary outline-none transition resize-y"
            />
            </div>

            <button
            type="submit"
            className="cosmic-button"
            >
            Send Message
            </button>

            
        </form>
    </div>
    </section>
  )
}

export default Contact
