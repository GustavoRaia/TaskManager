import './App.css';
import DivEscolha from './componentes/div-escolha/DivEscolha';
import Header from './componentes/header/Header';
import Relogio from './componentes/relogio/Relogio';
import Inicio from './componentes/inicio/Inicio';

function App() {
  return (
    <div className='App-info'>
        <Header/>
        <DivEscolha />
        <Inicio />
    </div>
  );
}

export default App;