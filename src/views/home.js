import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Features from '../components/features'
import Practice from '../components/practice'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ham-website</title>
        <meta
          name="description"
          content="We offer an affordable, high quality service in each of the following areas:\nProperty Renovations\nExtensions and Loft Conversions\nDamp Proofing\nPlumbing"
        />
        <meta property="og:title" content="Ham-website" />
        <meta
          property="og:description"
          content="We offer an affordable, high quality service in each of the following areas:\nProperty Renovations\nExtensions and Loft Conversions\nDamp Proofing\nPlumbing"
        />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <img
              alt="image"
              src="/mth%2Blight%2Bblue%2Bwith%2Bred%2Bdot%2B(2)-1500h.png"
              className="home-image06"
            />
            <nav className="home-links">
              <span className="home-link">How it works</span>
              <span className="home-link01">Prices</span>
              <span className="home-link02">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image07"
              />
              <span className="home-text06">07843 900 547</span>
            </button>
            <a href="#book" className="home-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image08"
              />
              <span className="home-text07">Book an appointment</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home-image09"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text08">Features</span>
                <span className="home-text09">How it works</span>
                <span className="home-text10">Prices</span>
                <span className="home-text11">Contact</span>
                <a href="#book" className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image10"
                  />
                  <span className="home-text12">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">WELCOME TO MULTI-TECH HOMES</h1>
              <p className="home-caption6">
                We Care Because It&apos;s Not Just A House, It&apos;s Your Home
              </p>
            </div>
            <button className="button button-main home-book2">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image11"
              />
              <span>Book an appointment</span>
            </button>
          </div>
          <div className="home-image12"></div>
        </div>
        <div id="features" className="home-features">
          <div className="home-content1">
            <Features title="Property renovation"></Features>
            <Features title="Gas Certification"></Features>
            <Features title="Electrical"></Features>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <div className="home-banner">
        <h2 className="home-text14">
          <span>
            ⚠️ Website is being re-developed. Thank you for your patience
          </span>
          <br className="home-text16"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
      </div>
      <section className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text18">Our services</h2>
        </div>
        <div className="home-content2">
          <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice title="PAT Testing"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice title="EPC Certificates"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice title="Plumbing"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice title="Electrical installations"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice title="Extensions and Loft Conversions"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice title="Damp Proofing"></Practice>
              </div>
            </Link>
          </div>
          <button data-open="practices" className="button button-main">
            <span>All Services</span>
          </button>
        </div>
      </section>
      <section id="book" className="home-book3">
        <div className="home-heading09">
          <h2 className="home-text20">Book an appointment</h2>
        </div>
        <div className="home-form">
          <div className="home-types">
            <div className="book-type">
              <span className="home-text21">In person appointment</span>
            </div>
            <div className="book-type">
              <span className="home-text22">Phone consultation</span>
            </div>
          </div>
          <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <div className="home-date">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="home-image13"
              />
            </div>
            <input
              type="text"
              placeholder="Practice"
              className="input book-input"
            />
            <div className="home-lower">
              <div className="home-button">
                <button className="home-book4 button button-main">
                  <span>Book</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-download"></div>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="/mth%2Blight%2Bblue%2Bwith%2Bred%2Bdot%2B(2)-1500h.png"
              className="home-image14"
            />
            <p className="home-text24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image15"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image16"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image17"
              />
            </div>
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home-right1">
          <div className="home-list">
            <span className="home-header08">Menu</span>
            <div className="home-links1">
              <span className="home-link03">Home</span>
              <span className="home-link04">About</span>
              <span className="home-link05">Services</span>
              <span className="home-link06">Blog</span>
              <span className="home-link07">Support</span>
            </div>
          </div>
          <div className="home-list1">
            <span className="home-header09">Resources</span>
            <div className="home-links2">
              <span className="home-link08">Test Results</span>
              <span className="home-link09">Patients</span>
              <span className="home-link10">Doctors</span>
              <span className="home-link11">Health</span>
            </div>
          </div>
          <div className="home-list2">
            <span className="home-header10">Contact</span>
            <div className="home-links3">
              <span className="home-link12">London</span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home-link13"
              >
                info@MultitechHomes.co.uk
              </a>
              <a href="tel:(004) 234 - 5678" className="home-link14">
                07843 900 547
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container7">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-banner1">
        <h2 className="home-text25">
          <br></br>
          <span>info@MultitechHomes.co.uk</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text29"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
      </div>
    </div>
  )
}

export default Home
