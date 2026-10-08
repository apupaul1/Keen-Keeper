import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="mt-16 mb-6 pb-7 border-[#E9E9E9]  border-b">
      <div className="hero">
        <div className="hero-content">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6 max-w-md mx-auto">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-base-100">
              <IoMdAdd size={20}/>
              Add a Friend
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mt-8 md:gap-12">
              <div className="text-center shadow-sm rounded-lg py-8 w-70 mx-auto space-y-3">
                <h1 className="text-2xl font-bold text-[#244D3F]">12</h1>
                <p className="text-[#64748B] font-semibold">Total Friends</p>
              </div>
              <div className="text-center shadow-sm rounded-lg py-8 w-70 mx-auto space-y-3">
                <h1 className="text-2xl font-bold text-[#244D3F]">4</h1>
                <p className="text-[#64748B] font-semibold">On Track</p>
              </div>
              <div className="text-center shadow-sm rounded-lg py-8 w-70 mx-auto space-y-3">
                <h1 className="text-2xl font-bold text-[#244D3F]">8</h1>
                <p className="text-[#64748B] font-semibold">Need Attention</p>
              </div>
              <div className="text-center shadow-sm rounded-lg py-8 w-70 mx-auto space-y-3">
                <h1 className="text-2xl font-bold text-[#244D3F]">10</h1>
                <p className="text-[#64748B] font-semibold">Interactions This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
