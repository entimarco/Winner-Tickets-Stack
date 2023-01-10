import React  from 'react';
import { Alignment } from 'react-data-table-component';
import './main.style.css'
//import mypicture from "./images/my-picture.jpg"


export const Main = () => {
 

  return (
    <div className="main-header">
      <div className="main-panel"> 
      <body> 

  <article id="top" className="wrapper style1">
    <div className="container">
      <div className="row">
        <div className="col-4 col-5-large col-12-medium">
          <span className="image fit"><img src="/images/my-picture.jpg" alt="" /></span>
        </div>
        <div className="col-8 col-7-large col-12-medium">
          <header>
            <h1>Hi. I'm <strong>Marco Valenti</strong>.</h1>
          </header>
          <p>And this is my <strong>Dev Stack Portfolio</strong>.  I'm a software developer professional with skills in several technologies, implementation of CRMs and developing custom software solutions for client business </p>
          <a href="#work" className="button large scrolly">Learn about what I do</a>
        </div>
      </div>
    </div>
  </article>


  <article id="work" className="wrapper style2">
    <div className="container">
      <header>
        <h2>Here's all the stuff I do.</h2>
        
      </header>
      <div className="row aln-center">
        <div className="col-4 col-6-medium col-12-small">
          <section className="box style1">
            <span className="icon"><img width="90" height="90" src="/images/React-icon.svg.png" alt="" /></span>
            <h3>Web developer with React.js</h3>
            
          </section>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <section className="box style1">
            <span className="icon"><img width="100" height="100" src="/images/php-logo.svg" alt="" /><img width="120" height="100" src="/images/MySQL-logo.png" alt="" /></span>
            <h3>Web Applications Developer</h3>
            
          </section>
        </div>
        
      </div>
      <footer>
        
        <a href="#portfolio" className="button large scrolly">See some of my recent work</a>
      </footer>
    </div>
  </article>


  <article id="portfolio" className="wrapper style3">
    <div className="container">
      <header>
        <h2>Here’s some stuff I made recently.</h2>
        
      </header>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src="/images/seiko-image.png" alt="" /></a>
            <h3><a href="#">Seiko Inventory system</a></h3>
            <p>Worked on the offshore orders module, wich was created from the start, being able to make production orders to factory, and manage all the shipping documentation.</p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src="/images/usarr-image.png" alt="" /></a>
            <h3><a href="#">Usaar Express CRM</a></h3>
            <p>Worked on the Package module, where it takes a Xls file to and upload all te package traking from each client and, create all the invoices for all clients in the same process. Saving hours to days off handmade invoices.</p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <a href="#" className="image featured"><img src="/images/trust-image.png" alt="" /></a>
            <h3><a href="#">Assest Trust CRM</a></h3>
            <p>Worked on the implementation of the CRM system with a connection to a SAP server, to manage Cases created for clients.</p>
          </article>
        </div>
      </div>
      <footer>
        <a href="#contact" className="button large scrolly">Get in touch with me</a>
      </footer>
    </div>
  </article>


  <article id="contact" className="wrapper style4">
    <div className="container medium">
      <header>
        <h2>Contact Info</h2>
      </header>
      <div className="row">
        <div className="col-12">
          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-small">
                <label for="name">Phonenumber</label>
                <input type="text" name="name" id="name" value="(505) 8465-0350" readOnly/>
              </div>
              <div className="col-6 col-12-small">
              <label for="email">Email</label>
                <input type="text" name="email" id="email" value="entimarco@gmail.com" readOnly />
              </div>
            </div>
          </form>
        </div>
        <div className="col-12">
          <hr />
          <h3>Find me on ...</h3>
          <ul className="social">
            <li><a href="https://www.linkedin.com/in/marco-valenti-711588168" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/entimarco" className="icon brands fa-github"><span className="label">Github</span></a></li>
            
          </ul>
          <hr />
        </div>
      </div><footer>
        <ul id="copyright">
          <li>&copy; Untitled. All rights reserved.</li>
        </ul>
      </footer>
      
    </div>
  </article>


  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/jquery.scrolly.min.js"></script>
  <script src="assets/js/browser.min.js"></script>
  <script src="assets/js/breakpoints.min.js"></script>
  <script src="assets/js/util.js"></script>
  <script src="assets/js/main.js"></script>

  </body>
      </div>
    </div>
  )
}