import Image from "next/image";
import { FaFacebookF } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';
import { AiOutlineYoutube, AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer style={{ background: "#222935" }}>
            <div className="max-w-6xl mx-auto">
                <div className="px-3 lg:px-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 py-20 text-white">
                        <div className="lg:col-span-2">
                            <div>
                                <Image src="https://bazaar.ui-lib.com/assets/images/logo.svg" width={100}
                                    height={50} alt="brand_logo" />
                            </div>
                            <div>
                                <p className="py-5 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                                </p>

                            </div>
                            <div>
                                <button >

                                </button>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <h1 className="text-lg font-bold mb-5">About Us</h1>
                            <ul>
                                <li className="leading-7 text-sm">
                                    <a href="">Careers</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Our Stores</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Our Cares</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Term & Conditions</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-1">
                            <h1 className="text-lg font-bold mb-5">Customer Care</h1>
                            <ul>
                                <li className="leading-7 text-sm">
                                    <a href="">Help Center</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">How to Buy</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Track Your Order</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Corporate & Bulk Purchasing</a>
                                </li>
                                <li className="leading-7 text-sm">
                                    <a href="">Return & Refunds</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-span-2">
                            <h1 className="text-lg font-bold mb-5">Contact Us</h1>
                            <div>
                                <p className="leading-7 text-sm">70 Washington Square South, New York, NY 10012, United States</p>
                                <p className="leading-7 text-sm">Email: uilib.help@gmail.com</p>
                                <p className="leading-7 text-sm">Phone: +1 1123 456 780</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <span style={{ backgroundColor: "#212733" }} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <a href=""><FaFacebookF /></a>
                                </span>
                                <span style={{ backgroundColor: "#212733" }} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <a href=""><CgTwitter /></a>
                                </span>
                                <span style={{ backgroundColor: "#212733" }} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <a href=""><AiOutlineYoutube /></a>
                                </span>
                                <span style={{ backgroundColor: "#212733" }} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <a href=""><AiOutlineGoogle /></a>
                                </span>
                                <span style={{ backgroundColor: "#212733" }} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <span><AiOutlineInstagram /></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;