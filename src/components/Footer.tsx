import Container from "./Container";
import footer_logo from "../assets/footer_logo.png";

function Footer() {
  return (
    <>
      <div className="border-t border-[#F1F5F9] pt-8 lg:pt-16 pb-12">
        <Container>
          <div className="lg:px-8 px-6">
            <div className="lg:grid lg:grid-cols-5 lg:gap-10 justify-between">
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                <div className="flex gap-2.5 items-center mb-3">
                  <img src={footer_logo} alt="#footer_logo" />
                  <p className="font-primary font-bold text-[18px] leading-7 text-[#0F172A]">
                    Dev <span className="text-[#DB2777]">Stack</span>
                  </p>
                </div>
                <p className="font-secondary lg:font-primary text-[12px] leading-[19.5px] text-[#64748B] mb-[11.3px] lg:mb-6 text-center lg:text-start">
                  Curated tools, technologies, and resources for developers
                  building modern software.
                </p>

                <div className="font-primary font-semibold text-1[2px] leading-4 flex items-center justify-center gap-4 text-[#475569] lg:mb-14 mb-6">
                  <a
                    href="#"
                    className="lg:hover:text-[#DB2777] transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <span className="block lg:hidden">•</span>
                  <a
                    href="#"
                    className="lg:hover:text-[#DB2777] transition-colors duration-200"
                  >
                    Twitter
                  </a>
                  <span className="block lg:hidden">•</span>
                  <a
                    href="#"
                    className="lg:hover:text-[#DB2777] transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="col-span-3 lg:grid grid-cols-3 gap-10 hidden ">
                <div>
                  <p className="font-primary font-bold text-[12px] leading-4 tracking-[0.6px] text-[#0F172A] mb-4 uppercase">
                    Product
                  </p>
                  <div className="flex flex-col gap-2.5 items-start">
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      home
                    </a>
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      technologies
                    </a>
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      projects
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-primary font-bold text-[12px] leading-4 tracking-[0.6px] text-[#0F172A] mb-4 uppercase">
                    company
                  </p>
                  <div className="flex flex-col gap-2.5 items-start">
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      Careers
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-primary font-bold text-[12px] leading-4 tracking-[0.6px] text-[#0F172A] mb-4 uppercase">
                    legal
                  </p>
                  <div className="flex flex-col gap-2.5 items-start">
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="font-primary text-[12px] leading-4 text-[#64748B] capitalize transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-[#F1F5F9] pt-4 lg:pt-8 font-secondary lg:font-primary text-[11px] lg:text-[12px] leading-4 text-[#9CA3AF] lg:text-[#94A3B8]">
              <p>© 2026 Dev Stack. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
