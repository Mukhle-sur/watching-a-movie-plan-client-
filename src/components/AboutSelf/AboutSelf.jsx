const AboutSelf = () => {
  return (
    <div className="container mx-auto mb-24">
      <div className="text-center">
        <p className="text-base font-bold py-2 px-5 bg-[#ff80571a] text-[#FF8057] inline rounded-full ">
          Don’t Be Shy
        </p>
        <h2 className="text-4xl font-semibold text-black mt-3 mb-2">
          Tell us About Yourself
        </h2>
        <p className="text-base font-normal">
          Use the form below to quickly send us a message.
        </p>
      </div>
      <div className="w-2/4 mx-auto mt-10">
        <form>
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="border-slate-400 py-4 px-3 shadow-md border-2 rounded-md  hover:ease-in-out "
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email Address"
                className="border-slate-400 py-4 px-3 shadow-md border-2 rounded-md  hover:ease-in-out "
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Phone"
                className="border-slate-400 py-4 px-3 shadow-md border-2 rounded-md  hover:ease-in-out "
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="border-slate-400 py-4 px-3 shadow-md border-2 rounded-md  hover:ease-in-out "
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <textarea
              id=""
              cols="20"
              rows="5"
              placeholder="Message"
              className="border-slate-400 py-4 px-3 shadow-md border-2 rounded-md  hover:ease-in-out  pt-3 h-[250px] resize-none "
            ></textarea>
          </div>
          <div className="form-control mt-6 float-right text-xl font-bold">
            <input
              type="submit"
              value="Submit"
              className="btn bg-gradient-to-r from-[#FF8057] to-[#ff5c26] text-white text-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutSelf;
