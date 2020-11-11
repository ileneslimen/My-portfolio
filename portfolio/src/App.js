
import './App.css'
import Navbar from './Component/Navbar'
import About from './Component/SectionAbout'
import ProjectCard from './Component/ProjectCard'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
const navLinks =[
{link: 'About',
href:'#About '},
{link:'Projects',
href:'#Projects'},
{link: 'Contact',
href:'#Contact'}

]
const name= 'Nourhen Slimen'
const image='pic.jpg'
  

const project=[
{
  image :"proj.png",
  para:"Lorem ipsum dolor sit amet consectetur adipisicing ",
  href:"#",
  link:"Link1"

},
{
  image :"p2.jpg",
  para:"Lorem ipsum dolor sit amet consectetur adipisicing ",
  href:"#",
  link:"Link2"

},
{
  image :"p3.jpg",
  para:"Lorem ipsum dolor sit amet consectetur adipisicing ",
  href:"#",
  link:"Link3"
}
  ]
const copyRight ='GOMYCODE'
const year = 2020

return (
 <div className="App">
  <Navbar navLinks={navLinks}/>,
  <About name={name} image={image} />,
  <h2 className="text-important" style ={{textAlign:'center'}}>Projects</h2>,

  < ProjectCard  project={project}/>, 
  <Contact/>,
  <Footer copyRight={copyRight} year={year}/>
 </div>
);
}
export default App;
