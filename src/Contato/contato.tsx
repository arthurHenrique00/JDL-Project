import { DateLoc, Formulario } from './style'

import localizacao from '../Pics/location.png'
import clock from '../Pics/clock.png'
import phone from '../Pics/phone-red.png'

function Contato() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 500px)',
        gap: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        paddingTop: '32px',
        paddingBottom: '32px'
      }}
    >
      <DateLoc>
        <div>
          <img src={localizacao} />
          <p>Localização: rua Vanderlei Giacomini, 147 | Sarandi - PR</p>
        </div>
        <div>
          <img src={clock} />{' '}
          <p>Horário de funcionamento: Seg - Sex das XX:XX às XX:XX</p>
        </div>
        <div>
          <img src={phone} />
          <p>Telefone: (44) 99942-6470</p>
        </div>
      </DateLoc>
      <Formulario>
        <h1>Nos contate através do formulário</h1>
        <label>Nome</label>
        <input type="text" placeholder="Nome" />
        <label>E-mail</label>
        <input type="email" placeholder="example@gmail.com" />
        <label>Telefone</label>
        <input type="telefone" placeholder="(00) 0000-0000" />
        <button>Enviar</button>
      </Formulario>
    </div>
  )
}

export default Contato
