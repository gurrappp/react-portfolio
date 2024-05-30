import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import 
  {
    AiFillTwitterCircle, 
    AiFillLinkedin, 
    AiFillGithub} 
    from "react-icons/ai"
import Image from "next/image"
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.svg"
import calculator from "../public/calculator.svg"
import codingTracker from "../public/codingTracker.svg"
import habitLogger from "../public/habitLogger.svg"
import flashcards from "../public/flashcards.svg"
import drinksInfo from "../public/drinksInfo.svg"
import phoneBook from "../public/phoneBook.svg"
import shiftsLogger from "../public/shiftsLogger.svg"
import dinnerTableOptimizer from "../public/dinnerTableOptimizer.svg"
import mathGame from "../public/mathGame.svg"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import {useState} from "react";
// import pdf from "../public/CV2024.pdf"

// const PDFViewer = () => {
//   const pdfURL = "../public/CV2024.pdf";
//  return (
//   <div>
//   <Document file={pdfURL}>
//   <Page pageNumber={1} />
//   </Document>
//   </div>
//   );
//  };


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Gustav Polhem Portfolio</title>

      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section >
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-medium">gustavpolhem@gmail.com</h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)}  
                className="cursor-pointer text-2xl"/>
              </li> */}
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="./CV2024.pdf" download>
                Download CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-10 text-teal-600 font-medium md:text-6xl">Gustav Polhem</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Backend Developer</h3>
            <p className="text-md py-5 leading-8 text-grey-800 md:text-xl max-w-xl mx-auto">
              C# .NET
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/gustav-polhem-16832b141/" target='_blank' rel='noopener noreferrer'>
              <AiFillLinkedin/>
            </a>
            <a href="https://github.com/gurrappp" target='_blank' rel='noopener noreferrer'>
              <AiFillGithub/>
            </a>  
          </div>
          {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"/>

          </div> */}
        </section>
        <section className="py-40">
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Some projects I have developed on my spare time for fun!</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={mathGame} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Math Game</h3>
              <p className="py-2">
                A very simple math game app.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/MathGame">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">Console Application</p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={calculator} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Calculator</h3>
              <p className="py-2">
                A calculator app.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/Calculator">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">Console Application</p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={habitLogger} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Habit Logger</h3>
              <p className="py-2">
              An app that logs your habits.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/HabitTracker">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">SQLite</p>
              <p className="text-gray-800 py-1">CRUD operations</p>
              <p className="text-gray-800 py-1">Console Application</p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={codingTracker} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Coding Tracker</h3>
              <p className="py-2">
                An app that tracks coding sessions.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/CodingTracker">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">SQLite</p>
              <p className="text-gray-800 py-1">Dapper</p>
              <p className="text-gray-800 py-1">CRUD operations</p>
              <p className="text-gray-800 py-1">Spectre.Console Library</p>
              <p className="text-gray-800 py-1">Console Application</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={flashcards} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">FlashCards</h3>
              <p className="py-2">
                Create and use FlashCards for study sessions.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/Flashcards">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">Dapper</p>
              <p className="text-gray-800 py-1">DTO</p>
              <p className="text-gray-800 py-1">Spectre.Console Library</p>
              <p className="text-gray-800 py-1">Console Application</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={drinksInfo} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Drinks Info</h3>
              <p className="py-2">
                Consume an external API with HTTP requests.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/DrinksInfo">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">DTO</p>
              <p className="text-gray-800 py-1">Rest</p>
              <p className="text-gray-800 py-1">Console Application</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={phoneBook} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Phone Book</h3>
              <p className="py-2">
                A phone book app that manages contacts with CRUD operations.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/PhoneBook">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">Entity Framework</p>
              <p className="text-gray-800 py-1">Code First Migration</p>
              <p className="text-gray-800 py-1">Console Application</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={shiftsLogger} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Shifts Logger</h3>
              <p className="py-2">
                An app where workers can log their shifts.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/ShiftsApp">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">Entity Framework</p>
              <p className="text-gray-800 py-1">Code First Migration</p>
              <p className="text-gray-800 py-1">.NET Core Web API</p>
              <p className="text-gray-800 py-1">Console Application</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/5 flex-1">
              <Image className="display: inline-block" src={dinnerTableOptimizer} width={85} height={85} alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Dinner Table Optimizer</h3>
              <p className="py-2">
                Optimize placement of dinner guests.
              </p>
              <a className="text-teal-600" target='_blank'
                  rel='noopener noreferrer' href="https://github.com/gurrappp/OptimalSeatingArrangement">Link to GitHub Repository</a>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">C# / .NET</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">Entity Framework</p>
              <p className="text-gray-800 py-1">Code First Migration</p>
              <p className="text-gray-800 py-1">Permutations with Lehmer Codes</p>
              <p className="text-gray-800 py-1">Console Application</p>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Some text again!</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
