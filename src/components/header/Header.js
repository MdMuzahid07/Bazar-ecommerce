import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';


const Header = () => {
    return (
        <header className=" w-full" style={{ backgroundColor: "#2B3445" }}>
            {/* header top start here */}
            <section className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center h-9">
                    <div>
                        <p className="text-xs text-base-100"><span style={{ backgroundColor: "#D23F57" }} className="badge font-bold mr-1">HOT</span> <span>Free Express Shipping</span></p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <select style={{ background: "none", fontSize: "12px", color: "white" }}>
                                <option style={{ fontSize: "12px", color: "black" }} value="option1">EN</option>
                                <option style={{ fontSize: "12px", color: "black" }} value="option2">DE</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <AiOutlineTwitter style={{ color: "white" }} />
                            <RiFacebookBoxFill style={{ color: "white" }} />
                            <AiOutlineInstagram style={{ color: "white" }} />
                        </div>
                    </div>
                </div>
            </section>
            {/* header top end here */}
            {/* header searchbar start here */}
            <section className="max-w-6xl mx-auto">

            </section>
            {/* header searchbar end here */}
        </header>
    );
};

export default Header;