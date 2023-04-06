const AccountCreateModalForm = ({ isOpen, handleOverlayClick, handleCloseModal }) => {

    return (
        <>
            <div
                className={`fixed inset-0 z-50 ${isOpen ? 'flex' : 'hidden'}`}
                onClick={handleOverlayClick}
            >
                <div className="relative m-auto max-w-lg overflow-auto bg-white rounded shadow-lg">
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
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                        <p className="mb-4">Modal content goes here.</p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountCreateModalForm;