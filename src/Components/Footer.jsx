/* eslint-disable no-unused-vars */

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
        </div>
    );
};

export default Footer;