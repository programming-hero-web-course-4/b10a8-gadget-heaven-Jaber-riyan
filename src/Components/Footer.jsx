/* eslint-disable no-unused-vars */

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#fff] py-24 px-40">
            <div className="text-center">
                <h1 className="text-[#09080F] font-bold text-3xl mb-3">Gadget Heaven</h1>
                <p className="font-medium text-[1rem] text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <footer className="footer text-neutral-content justify-center gap-40 ">
                <nav>
                    <h6 className="text-[#09080F] font-bold text-xl">Services</h6>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Branding</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Design</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Marketing</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-[#09080F] font-bold text-xl">Company</h6>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">About us</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Contact</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Jobs</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-[#09080F] font-bold text-xl">Legal</h6>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Terms of use</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Privacy policy</a>
                    <a className="link link-hover font-normal text-[1rem] text-[#09080F99]">Cookie policy</a>
                </nav>
            </footer>
            <div className="divider"></div>
            <div className="flex justify-center items-center gap-4">
                <div className="text-xl font-bold">Do Follow: </div>
                <Link to={'https://www.facebook.com/profile.php?id=100072216951370'}>
                    <IoLogoFacebook size={40} />
                </Link>
                <Link to={'https://github.com/Jaber-riyan'}>
                    <FaGithub size={38} />
                </Link>
                <Link to={'https://www.linkedin.com/in/jaber-riyan/'}>
                    <FaLinkedin size={38} />
                </Link>
            </div>
        </div>
    );
};

export default Footer;