import "./DivEscolha.css"
import Despertador from "../../imagem/despertador.png"
import Relogio from "../../imagem/relogio.png"
import Cronometro from "../../imagem/cronometro.png"

const DivEscolha = () => (
    <div className="bloco">
        <div className="titulo">
            Escolha uma opção
        </div>

        <div className="opcao despertador">
            <img src={Despertador} alt="" />
        </div>

        <div className="opcao relogio">
            <img src={Relogio} alt="" />
        </div>

        <div className="opcao cronometro">
        <img src={Cronometro} alt="" />
        </div>

        <div className="op1">
            Despertador               
        </div>
        <div className="op2">
            Temporizador
        </div>
        <div className="op3">
            Cronômetro
        </div>
    </div>
);

export default DivEscolha;