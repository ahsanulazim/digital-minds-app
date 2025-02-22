import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
    return (
        <>
            <footer className="bg-neutral">
                <div className="footer grid-cols-2 sm:grid-cols-none sm:footer-horizontal max-w-[1050px] px-2 justify-between text-neutral-content py-10 mx-auto">
                    <nav>
                        <h6 className="footer-title">Company Info</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">iOS & Android</a>
                        <a className="link link-hover">Watch a Demo</a>
                        <a className="link link-hover">Customer</a>
                        <a className="link link-hover">API</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Features</h6>
                        <a className="link link-hover">Business Marketing</a>
                        <a className="link link-hover">User Analytic</a>
                        <a className="link link-hover">Live Chat</a>
                        <a className="link link-hover">Unlimited Support</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Get in Touch</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <footer className="bg-main">
                <div className="footer gap-y-2.5 sm:footer-horizontal text-neutral-content justify-center md:justify-between items-center p-2 max-w-[1050px] mx-auto">
                    <aside className="grid-flow-col order-2 sm:order-1 items-center">
                        <p className="text-center md:text-left">Ahsanul Azim Plabon © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col order-1 sm:order-2 gap-4 mx-auto md:place-self-center md:justify-self-end">
                        <a href="https://www.facebook.com/ahsanulazimplabon">
                            <FaFacebook className="text-lg" />
                        </a>
                        <a href="https://www.linkedin.com/in/ahsanulazim">
                            <FaLinkedin className="text-lg" />
                        </a>
                        <a href="https://wa.me/8801869966275">
                            <FaWhatsapp className="text-lg" />
                        </a>
                        <a href="https://www.fiverr.com/ahsanulazim6">
                            <TbBrandFiverr className="text-lg" />
                        </a>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;