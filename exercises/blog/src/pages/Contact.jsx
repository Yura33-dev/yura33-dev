function ContactPage() {
  return (
    <main>
      <section className="py-5">
        <div className="container m-auto px-5">
          <h1 className="text-4xl mb-7">Contact us!</h1>

          <form action="" className="flex flex-col justify-start items-start">
            <div className="p-2 rounded-sm mb-5 w-72 flex gap-3 justify-center items-center">
              <label htmlFor="name" className="text-sm flex-initial">
                Name
              </label>
              <input
                type="text"
                className="bg-slate-200 outline-none px-2 py-1 
              rounded-md border-b-2 border-solid border-blue-400
              transition-colors duration-150 focus:border-orange-300
              flex-auto"
              />
            </div>

            <div className="p-2 rounded-sm mb-5 w-72 flex gap-3 justify-center items-center">
              <label htmlFor="email" className="text-sm flex-initial">
                Email
              </label>
              <input
                type="email"
                className="bg-slate-200 outline-none px-2 py-1 
              rounded-md border-b-2 border-solid border-blue-400
              transition-colors duration-150 focus:border-orange-300
              flex-auto"
              />
            </div>

            <div className="p-2 rounded-sm w-72 flex gap-3 justify-center items-center">
              <label htmlFor="message" className="text-sm flex-initial">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-slate-200 outline-none px-2 py-1 
              rounded-md border-b-2 border-solid border-blue-400
              transition-colors duration-150 focus:border-orange-300
              flex-auto"
              ></textarea>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
