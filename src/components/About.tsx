import React from "react";
import "../styles/globals.css";
import "../output.css";

const sidebar = [
  { name: "identity", href: "#identity", current: false },
  { name: "design philosophy", href: "#designphilosophy", current: false },
  { name: "experience", href: "#experience", current: false },
  { name: "up to now", href: "#uptonow", current: false },
  { name: "beyond work", href: "#beyondwork", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const About = () => {
  return (
    <div>
      <aside className="hidden lg:shrink lg:w-[300px] lg:block lg:self-start lg:fixed lg:top-60p lg:left-26">
        <ul role="list" className="-mx-2 space-y-1">
          <li className="p-1 pl-3 text-sm font-semibold leading-6 text-stone-50/50 text-end">
            CONTENT
          </li>
          {sidebar.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-stone-50/70"
                    : "text-gray-700 hover:text-stone-50/70",
                  "group flex gap-x-3 rounded-md p-1 pl-3 text-sm font-semibold leading-6 justify-end"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        <div className="home-frame">
          {/* block - first session for self intro  */}
          <div className="home-intro-frame">
            {/* block - lemmon wang & /hongmeng  */}
            <div className="home-title-frame-left">
              <h2 className="home-title-upper">Lemmon W.</h2>
              <h3 className="home-title-sub">/hongmeng</h3>
            </div>

            {/* block - personal intro  */}
            <div className="home-body-frame">
              <div className="home-body">
                An independent creator who cares about people and is passionate
                about creating delightful things that empower and bring joy.
              </div>
              <div className="home-body">
                Based wherever my cat is, currently lead product strategy &
                design at SmartPrep.ai, and founded YuzuTech LLC.
              </div>
            </div>
          </div>
          {/* block - identity   */}
          <div id="identity" className="home-about-body-frame">
            <div className="home-title-frame-left">
              <h2 className="home-title-upper"></h2>
            </div>
            <div className="home-body-frame">
              <div className="home-body-title">identity</div>
              <div className="home-body-about">
                I see myself as a Design Enthusiast, Architectural Thinker,
                Startup Adventurer, Lifelong Learner. <br />
                I'm currently on my way to becoming an indie maker. This site is
                my first project.
              </div>
            </div>
          </div>
          {/* block - design philosophy   */}
          <div id="designphilosophy" className="home-about-body-frame">
            <div className="home-title-frame-left">
              <h2 className="home-title-upper"></h2>
            </div>
            <div className="home-body-frame">
              <div className="home-body-title">design philosophy</div>
              <div className="home-body-about">
                Good design is like a good story—it should be easy to understand
                and hard to forget. I strive for simplicity, usability, and a
                bit of fun. I’m a lifelong learner, constantly picking up new
                skills and ideas because, let's face it, design never stands
                still.
              </div>
            </div>
          </div>
          {/* block - experience   */}
          <div id="experience" className="home-about-body-frame">
            <div className="home-title-frame-left"></div>
            <div className="home-body-frame">
              <div className="home-body-title">experience</div>
              <div className="my-2 w-full flex-col gap-2 xl:flex-row justify-between items-start inline-flex xl:gap-4">
                <div className="home-body-about-experience1">SmartPrep.ai</div>
                <div className="home-body-about-experience2">
                  01/'24 - present
                </div>
                <div className="home-body-about-experience3">
                  Product designer & manager
                </div>
              </div>
              <div className="my-2 w-full flex-col gap-2 xl:flex-row justify-between items-start inline-flex xl:gap-4">
                <div className="home-body-about-experience1">YuzuTech LLC</div>
                <div className="home-body-about-experience2">
                  07/'23 - present
                </div>
                <div className="home-body-about-experience3">Indie maker</div>
              </div>
              <div className="my-2 w-full flex-col gap-2 xl:flex-row justify-between items-start inline-flex xl:gap-4">
                <div className="home-body-about-experience1">TuSimple</div>
                <div className="home-body-about-experience2">
                  06/'22 - 05/'23
                </div>
                <div className="home-body-about-experience3">
                  Product designer (full-time intern)
                </div>
              </div>
              <div className="my-2 w-full flex-col gap-2 xl:flex-row justify-between items-start inline-flex xl:gap-4">
                <div className="home-body-about-experience1">Momenta</div>
                <div className="home-body-about-experience2">
                  12/'19 - 04/'21
                </div>
                <div className="home-body-about-experience3">
                  Product designer
                </div>
              </div>
            </div>
          </div>
          {/* block - what I'm up to now   */}
          <div id="uptonow" className="home-about-body-frame">
            <div className="home-title-frame-left">
              <h2 className="home-title-upper"></h2>
            </div>
            <div className="home-body-frame">
              <div className="home-body-title">what I'm up to now</div>
              <div className="home-body-about">
                Currently, I am deeply immersed in a thrilling venture with
                Smartprep.ai, where we are pioneering AI-driven education
                solutions for educators and K-12 students. My role is a dynamic
                blend of analyzing market fit, strategizing for growth, and
                crafting the core features of our product. This position not
                only taps into my deep-seated passions for design and technology
                but also feeds my constant hunger for learning and innovation.
                <br />
                <br />
                Parallel to my commitment at Smartprep.ai, I am venturing into
                the realm of independent development. This website marks my
                first step as an indie maker, an exciting new chapter where I
                bring my own visions to life, unbound by conventional
                frameworks.
                <br />
                <br />
                I am keen on expanding my horizons through freelance
                opportunities. I am eager to apply my diverse skills to various
                impactful projects, continuing to evolve professionally and
                personally.
                <br />
                <br />
                As I navigate these ventures, I remain a lifelong learner—always
                adapting, always innovating. My journey is one of continuous
                personal and professional development, driven by a desire to
                create, contribute, and transform the landscape of technology
                and design.
              </div>
            </div>
          </div>
          {/* block - beyond work   */}
          <div id="beyondwork" className="home-about-body-frame">
            <div className="home-title-frame-left">
              <h2 className="home-title-upper"></h2>
            </div>
            <div className="home-body-frame">
              <div className="home-body-title">beyond work</div>
              <div className="home-body-about">
                I'm also an avid photographer and vlogger, often wandering to
                new places.
                <br />
                In my art, whether it's through a lens, on a canvas, or in
                animations, I find vibrant ways to express myself.
                <br />
                And at shelters, where I volunteer, I connect and give back,
                adding more depth to my life. If you're into any of these realms
                or just love engaging stories, I'd love to chat and exchange
                experiences!
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
