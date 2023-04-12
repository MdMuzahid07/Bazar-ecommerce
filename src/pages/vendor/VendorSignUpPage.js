import React from 'react';

const VendorSignUpPage = () => {
    return (
        <section className="max-w-6xl mx-auto">


            {/* account create form step 1, section start here */}
            <section className="my-7">
                <div className="max-w-sm bg-white p-4 rounded-xl">
                    <div>
                        <h1 className="text-center text-2xl mb-2">Create an account</h1>
                        <p className="text-center text-sm mb-5 md:px-3">Welcome! Millions of Daraz users are waiting to buy your product.</p>
                    </div>
                    <div>
                        <div className="pt-4">
                            <label htmlFor="phn">Phone</label>
                            <input className="border rounded-lg block w-full border p-1 mt-2" type="text" placeholder="+880 enter your phone number" id="phn" />
                        </div>
                        <div>
                            <button type="submit" className="my-5 border bg-red-500 text-white rounded-lg w-full py-1">Send OTP</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* account create form step 1, section end here */}




            {/* account create form step 2, section start here */}
            <section className="my-7">
                <div className="max-w-sm bg-white p-4 rounded-xl">
                    <div>
                        <h1 className="text-center text-2xl mb-2">Create an account</h1>
                        <p className="text-center text-sm mb-5 md:px-3">Welcome! Millions of Daraz users are waiting to buy your product.</p>
                    </div>
                    <div>
                        <div>
                            <input className="border rounded-lg block w-full border p-1 mt-2" type="text" placeholder="+880 enter your phone number" id="phn" />
                        </div>
                        <div className="pt-4">
                            <p>Verification</p>
                            <label htmlFor="very"><small>The verification code has been sent to +88039123946123946</small></label>
                            <div className="relative">
                                <input className="border rounded-lg block w-full border p-1" type="text" placeholder="enter verification code" id="very" />
                                <button className="absolute right-3 top-2 text-slate-400 text-xs font-bold ">Send</button>
                            </div>
                        </div>
                        <div className="pt-4">
                            <label htmlFor="pass">Setup Password</label>
                            <input className="border rounded-lg block w-full border p-1" type="password" placeholder="min 8 character, 2 uppercase, 1 symbol" id="pass" />
                            <input className="border rounded-lg block w-full border p-1 mt-2" type="password" placeholder="confirm pass" />
                        </div>
                    </div>
                </div>
            </section>
            {/* account create form step 2, section end here */}



        </section>
    );
};

export default VendorSignUpPage;