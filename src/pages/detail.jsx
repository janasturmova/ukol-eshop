import { render } from '@czechitas/render';
import './detail.css';
import '../global.css';
import { Header } from '../components/header';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/e-shop/${id}`)
const json = await response.json()
const product = json.data

const ProductPage = () => (
    <div className='box'>
      <div className='infos'>
        <h2 className='headline'>{product.name}</h2>
        <p className='description'>{product.description}</p>
        <h4 className='price'>{product.price} Kč</h4>
        <button className='btn-back'>Zpět na výběr</button>
      </div>
      <img src={product.photo}/>
    </div>
  )


document.querySelector('#root').innerHTML = render(
    <div className="container">
      <Header/>
      <ProductPage/>
    </div>
  );
  
  document.querySelector('.btn-back').addEventListener('click', () =>{
    window.location.href='http://localhost:5173/'
  })