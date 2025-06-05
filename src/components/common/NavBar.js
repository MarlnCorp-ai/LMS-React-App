import companylogo from "../../images/companylogo.png";
import styles from "./styles/NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const currPath = location.pathname;

  const handleAuth = () => {
    if (user) {
      logout();
    }
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className="flex">
            <img src={companylogo} alt="Company Logo" className="w-20 h-20" />
            <section className="flex flex-col justify-center ml-2 text-[#4F1869] tracking-wide">
              <p className="text-4xl font-bold">NexusHive</p>
              <p className="text-[0.9rem] uppercase font-bold">
                keep learning, keep buzzing
              </p>
            </section>
          </div>
        </Link>
        <div className={styles["nav-options"]}>
          <ul className={styles.navList}>
            <li>
              <div className={styles["nav-option"]}>
                Individuals{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownColumn}>
                  <Link to="/skills-assessment">
                    <p>
                      Assess your skills
                      <span className="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/lab">
                    <p>
                      <span>Labs</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/learning-paths">
                    <p>
                      <span>LPath</span>
                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/certifications">
                    <p>
                      <span>Certification Prep</span>
                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className={styles["nav-option"]}>
                Corporate{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Industry</h3>
                  <p>
                    <span>Healthcare</span>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Insurance</span>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Finance</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Technology</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Energy</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Oil and Gas</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Features</h3>
                  <Link to="/skills-assessment">
                    <p>
                      <span>Assess your Skills</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/lab">
                    <p>
                      <span>Labs</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/learning-paths">
                    <p>
                      <span>LPath</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/certifications">
                    <p>
                      <span>Certification Path</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>

                  <p>
                    <span>Instructor-Led Training</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Software Delivery</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  {user && user.role === "business" && (
                    <p>
                      <Link
                        to="/dashboards/admin"
                        className={styles["dropdown-link"]}
                      >
                        <p>
                          <span>Admin Page</span>

                          <span class="material-symbols-outlined">
                            keyboard_arrow_right
                          </span>
                        </p>
                      </Link>
                    </p>
                  )}
                  { user && (user.role === "individual" || user.role === "employee") && (
                    <p>
                      <Link
                        to="/learner"
                        className={styles["dropdown-link"]}
                      >
                        <p>
                          <span>Learner Page</span>

                          <span class="material-symbols-outlined">
                            keyboard_arrow_right
                          </span>
                        </p>
                      </Link>
                    </p>
                  )}
                  {user && user.role === "manager" && (
                    <p>
                      <Link
                        to="/corporateManagerDashboard"
                        className={styles["dropdown-link"]}
                      >
                        <p>
                          <span>Manager Page</span>

                          <span class="material-symbols-outlined">
                            keyboard_arrow_right
                          </span>
                        </p>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </li>
            <li>
              <div className={styles["nav-option"]}>
                Public Sector{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>

              <div className={styles.dropdownContent}>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Public Sector</h3>
                  <Link to="https://rupamatmarln.github.io/Marln-University/#/">
                    <p>
                      <span>University</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <p>
                    <span>Government Contractors</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Local State and Federal</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Solutions</h3>
                  <p>
                    <span>Cybersecutiry</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Generative AI</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Upskilling & Reskilling</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Software Delivery</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Tech Savvy</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Demo of our AI solutions</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Features</h3>
                  <Link to="/skills-assessment">
                    <p>
                      <span>Assess your Skills</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/lab">
                    <p>
                      <span>Labs</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/learning-paths">
                    <p>
                      <span>LPath</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <Link to="/certifications">
                    <p>
                      <span>Certification Prep</span>

                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <p>
                    <span>Instructor-Led Training</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Software Delivery</span>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles["nav-option"]}>
                Courses{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>

              <div className={styles.dropdownContent}>
                {/* Add your Resources dropdown content here */}
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Software development</h3>
                  <Link to="/courses">
                    <p>
                      Databases
                      <span class="material-symbols-outlined">
                        keyboard_arrow_right
                      </span>
                    </p>
                  </Link>
                  <p>
                    Game development
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Mobile development
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Programming languages
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Web development
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">Security</h3>
                  <p>
                    Certifications
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Governance, risk & compliance
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Security architecture & engineering
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Security operations
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Security testing
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
                <div className={styles.dropdownColumn}>
                  <h3 className="font-semibold">IT Ops</h3>
                  <p>
                    Client Operating systems
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Collaboration platforms
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Configuration management
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Containers
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    IT automation
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Network architecture
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    Virtualization
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles["nav-option"]}>
                Products{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>

              <div className={styles.dropdownContent}>
                <div className={styles.dropdownColumn}>
                  <p>
                    <h3>Nexushive LMS</h3>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <h3>A1 Silicon Valley Training</h3>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <h3>MARLN</h3>

                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles["nav-option"]}>
                Company{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </div>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownColumn}>
                  <p>
                    <Link
                      to="/about"
                      // className={styles["dropdown-link"]}
                    >
                      About
                    </Link>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <Link
                      to="/team"
                      // className={styles["dropdown-link"]}
                    >
                      Team Profile
                    </Link>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Careers</span>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Contact Us</span>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                  <p>
                    <span>Support</span>
                    <span class="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex">
          {currPath !== "/login" && (
            <Link to="/login">
              <button
                className="flex items-center 
         px-6 py-3 
         font-semibold text-white 
         bg-[linear-gradient(135deg,#E5D1F9,#C4B0F0)] 
         rounded-lg 
         shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
         cursor-pointer 
         transition-transform transition-shadow duration-200 ease-in-out 
         hover:-translate-y-[2px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.15)] 
         active:translate-y-0 active:shadow-[0_3px_6px_rgba(0,0,0,0.1)] mr-4"
                onClick={handleAuth}
              >
                {user ? "Logout" : "Login"}
              </button>
            </Link>
          )}
          {!user && (
            <div className="relative" onClick={() => setOpen(!open)}>
              {/* Trigger */}

              <button
                className="flex items-center 
         px-6 py-3 
         text-base font-semibold text-white 
         bg-[linear-gradient(135deg,#E5D1F9,#C4B0F0)] 
         rounded-lg 
         shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
         cursor-pointer 
         transition-transform transition-shadow duration-200 ease-in-out 
         hover:-translate-y-[2px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.15)] 
         active:translate-y-0 active:shadow-[0_3px_6px_rgba(0,0,0,0.1)]"
              >
                <span>View Plans</span>
                <span className="material-symbols-outlined ml-1">
                  keyboard_arrow_down
                </span>
              </button>

              {/* Dropdown */}
              {open && (
                <div className="flex flex-col w-60 absolute -left-20 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg py-4 z-10">
                  <Link
                    to="/individuals/pricing"
                    className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Individual Plans
                    <span className="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </Link>
                  <Link
                    to="/businesses/pricing"
                    className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Corporate Plans
                    <span className="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </Link>
                  <Link
                    to="/industries/public-sector/pricing"
                    className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Public Sector Plans
                    <span className="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
