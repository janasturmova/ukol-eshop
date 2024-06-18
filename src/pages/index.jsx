import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';

const response = await fetch("http://localhost:4000/api/e-shop")
const json = await response.json()
const products = json.data

const HomePage = () => (
    products.map(item => (
      <div key={item.id} className='box-home'>
        <h3>{item.name}</h3>
        <button type="submit" className='btn'>Detail</button>
      </div>
))) 


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header/>
    <h2 className='headline-main'>Vyberte si z naši nabídky</h2>
    <HomePage/>            
  </div>
);

document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => {
        window.location.href = `detail.html?id=${id}`;
      })})

products.map(item => (
  document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = `detail.html?id=${item.id}`;
    })}
)))

