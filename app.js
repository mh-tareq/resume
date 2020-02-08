const defaultMessage = `<h6>Resume of</h6>
                    <h3>MAHEDI HASAN TAREK</h3>`;
const education = `<section id="education">
                        <h4 class="section_title">EDUCATION</h4>
                        <div class="education_title ssc">
                            <h4 class="title">SSC</h4>
                            <small class="year">02/2006 - 03/2010</small>
                            <p class="school_name">Araihazar Pilot High School, Narayangonj</p>
                            <p class="cgpa">GPA: </p><span>3.75</span>
                        </div>
                        <div class="education_title ssc">
                            <h4 class="title">Diploma</h4>
                            <small class="year">10/2010 - 04/2015</small>
                            <p class="school_name">Shyamoli Ideal Polytechnic Institute, Dhaka</p>
                            <p class="cgpa">CGPA: </p><span>2.98</span>
                        </div>
                        <div class="education_title ssc">
                            <h4 class="title">BSc.</h4>
                            <small class="year">02/2016 - 05/2019</small>
                            <p class="school_name">Bangladesh University, Dhaka</p>
                            <p class="cgpa">CGPA: </p><span>3.34</span>
                        </div>

                    </section>`;


const workExperience = `<section id="work_experience">
                        <h4 class="section_title">Work Experience</h4 class="section_title">
                        <h4>SEO Executive</h4>
                        <small>eMyth maker, Dhaka, Bangladesh</small>
                        <p>Worked at eMyth maker as SEO executive. My job at eMyth was to manage their sites, do SEO and
                            SMM</p>
                    </section>`;

const language = `<section class="programming_languages">
                        <h4 class="section_title">Programming Languages</h4>
                        <div class="language">
                            <div class="title">HTML</div>
                            <div id="progressbar" class="html">
                                <div></div>
                            </div>
                        </div>
                        <div class="language">
                            <div class="title">CSS</div>
                            <div id="progressbar" class="css">
                                <div></div>
                            </div>
                        </div>
                        <div class="language">
                            <div class="title">JavaScript</div>
                            <div id="progressbar" class="js">
                                <div></div>
                            </div>
                        </div>
                        <div class="language">
                            <div class="title">Php</div>
                            <div id="progressbar" class="php">
                                <div></div>
                            </div>
                        </div>
                        <div class="language">
                            <div class="title">React</div>
                            <div id="progressbar" class="react">
                                <div></div>
                            </div>
                        </div>
                        <div class="language">
                            <div class="title">React Native</div>
                            <div id="progressbar" class="react_native">
                                <div></div>
                            </div>
                        </div>
                        <div class="language">
                            <div class="title">Redux</div>
                            <div id="progressbar" class="redux">
                                <div></div>
                            </div>
                        </div>
                    </section>`;

const skills = `<section id="technical_skills">
                        <h4 class="section_title">Technical Skills</h4>
                        <div class="skill">
                            <h5>Wordpress Theme Development</h5>
                            <div id="progressbar" class="wordpress">
                                <div></div>
                            </div>
                        </div>
                        <div class="skill">
                            <h5>Web Design</h5>
                            <div class="web_design" id="progressbar">
                                <div></div>
                            </div class="app">
                        </div>
                        <div class="skill">
                            <h5>Web Development</h5>
                            <div class="webDev" id="progressbar">
                                <div></div>
                            </div class="app">
                        </div>
                        <div class="skill">
                            <h5>Cross Platform App Development</h5>
                            <div class="app" id="progressbar">
                                <div></div>
                            </div>
                        </div>
                    </section>`;

const contactinfo = `<section class="" id="contact">
                        <h4 class="section_title">Contact Info</h4>
                        <div class="contact_info">
                            <div class="title">Web: </div>
                            <div class="desc">mh-tareq.github.io/portfolio</div>
                        </div>
                        <div class="contact_info">
                            <div class="title">Nationality: </div>
                            <div class="desc">Bangladeshi</div>
                        </div>
                        <div class="contact_info">
                            <div class="title">Address: </div>
                            <div class="desc">mh-tareq.github.io/portfolio</div>
                        </div>
                        <div class="contact_info">
                            <div class="title">Date of Birth: </div>
                            <div class="desc">14/04/1993</div>
                        </div>
                        <div class="contact_info">
                            <div class="title">Phone Number: </div>
                            <div class="desc">01937824246</div>
                        </div>
                        <div class="contact_info">
                            <div class="title">Email Adress: </div>
                            <div class="desc">mhtareqarz@gmail.com</div>
                        </div>
                    </section>`;

const mySpace = document.querySelector(".right");



//Menu Click function
menuClick = menuItem => {
    console.log(menuItem);
    let value = '';
    console.log(value);
    switch (menuItem) {
        case 'homeBtn':
            value = mySpace.innerHTML = defaultMessage;
            return value;
            break;

        case 'educationBtn':
            value = mySpace.innerHTML = education;
            return value;
            break;

        case 'languageBtn':
            value = mySpace.innerHTML = language;
            return value;
            break;

        case 'skillsBtn':
            value = mySpace.innerHTML = skills;
            return value;
            break;

        case 'experienceBtn':
            value = mySpace.innerHTML = workExperience;
            return value;
            break;
        case 'contactBtn':
            value = mySpace.innerHTML = contactinfo;
            return value;
            break;
    }
}

//Menu Selection

const homeBtn = document.querySelector("#menu_home");
const educationBtn = document.querySelector("#menu_edu");
const languageBtn = document.querySelector("#menu_lan");
const skillsBtn = document.querySelector("#menu_techn");
const experienceBtn = document.querySelector("#menu_exp");
const contactBtn = document.querySelector("#menu_contact");

//Click handl
homeBtn.addEventListener('click', () => menuClick("homeBtn"));
educationBtn.addEventListener('click', () => menuClick("educationBtn"));
languageBtn.addEventListener('click', () => menuClick("languageBtn"));
skillsBtn.addEventListener('click', () => menuClick("skillsBtn"));
experienceBtn.addEventListener('click', () => menuClick("experienceBtn"));
contactBtn.addEventListener('click', () => menuClick("contactBtn"));

//Events