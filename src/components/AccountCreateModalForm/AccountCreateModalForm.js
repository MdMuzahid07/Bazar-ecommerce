const AccountCreateModalForm = ({ isOpen, handleOverlayClick, handleCloseModal }) => {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        window.alert("btn onsubmit check")
    };

    return (
        <>
            <div
                className={`fixed inset-0 z-50 ${isOpen ? 'flex' : 'hidden'}`}
                onClick={handleOverlayClick}
            >
                <div className="relative m-auto w-full max-w-sm px-10 py-7 overflow-auto bg-white md:rounded-lg shadow-lg">
                    <div className="absolute top-0 right-0 p-4">
                        <button onClick={handleCloseModal}>
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path
                                    fillRule="evenodd"
                                    d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div >
                        <div>
                            <div className="flex justify-center">
                                <img src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg" alt="brand_logo" />
                            </div>
                            <p className="text-center mt-3">Welcome To Bazaar</p>
                        </div>
                        <div className="mt-5">

                            <div>
                                <form onSubmit={handleOnSubmit}>
                                    <div className="mb-2">
                                        <label htmlFor="email"><small>Email or Phone Number</small></label>
                                        <input className="border px-3 py-2 w-full rounded" type="text" id="email" placeholder="example@gmail.com" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password"><small>Password</small></label>
                                        <input className="border px-3 py-2 w-full rounded" type="password" id="password" placeholder="##########" />
                                    </div>
                                    <button type="submit" className="p-2 bg-red-500 text-white w-full rounded ">Login</button>
                                </form>
                            </div>
                            <hr className="my-5" />
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountCreateModalForm;