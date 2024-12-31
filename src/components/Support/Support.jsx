import React from 'react';

const Support = () => {
    document.title="Support"
    return (
        <div>
            <div className="py-10 mb-24">
                {/* Header Section */}
                <div className="bg-[#9538E2] py-10 text-center flex flex-col items-center">
                    <h2 className="text-white font-bold text-[32px]">
                        Support 
                    </h2>
                    <p className="max-w-[600px] text-center text-white text-[16px]">Hi, If you face any problem while purchasing or any issue please write to us. We are here to support you.</p>
                </div>

                {/* Form Section */}
                <div className="max-w-[600px] mx-auto p-5">
                    <form className="bg-white shadow-lg rounded-lg p-6">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#9538E2]" 
                                required 
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#9538E2]" 
                                required 
                            />
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Your Complaint</span>
                            </label>
                            <textarea 
                                placeholder="Describe your complaint here" 
                                className="textarea textarea-bordered w-full h-[150px] focus:outline-none focus:ring-2 focus:ring-[#9538E2]" 
                                required 
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-3 hover:text-[#9538E2] hover:border-2 hover:border-[#7744a1] hover:bg-white bg-[#9538E2] text-white font-semibold text-lg rounded-lg  transition-all">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;
