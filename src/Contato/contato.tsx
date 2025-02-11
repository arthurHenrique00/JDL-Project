import { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import emailjs from '@emailjs/browser'

import { DateLoc, Formulario } from './style'

import localizacao from '../Pics/location.png'
import clock from '../Pics/clock.png'
import phone from '../Pics/phone-red.png'

interface FormData {
  nome: string
  email: string
  mensagem: string
}

function Contato() {
  const [telefone, setTelefone] = useState('')

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [erro, setErros] = useState<Partial<FormData>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const validateForm = () => {
    const tempErros: Partial<FormData> = {}

    if (!formData.nome.trim()) tempErros.nome = 'O campo do nome é obrigatório'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErros.email = 'E-mail inválido!'
    if (!formData.email.trim())
      tempErros.mensagem = 'O campo da mensagem é obrigatório'

    setErros(tempErros)
    return Object.keys(tempErros).length === 0
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    setSuccess('')

    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      mensagem: formData.mensagem
    }

    try {
      await emailjs
        .send(
          'service_62r6rwb',
          'template_81bn4jc',
          templateParams,
          'c80W21zwu25K_pqPX'
        )
        .then(
          (response) => {
            console.log(
              'Email enviado com sucesso!',
              response.status,
              response.text
            )
            alert('Mensagem enviada!')
          },
          (err) => {
            console.error('Erro ao enviar email:', err)
            alert('Erro ao enviar a mensagem, tente novamente.')
          }
        )

      setFormData({ nome: '', email: '', mensagem: '' })
    } catch (error) {
      setSuccess('Erro ao enviar mensagem, tente novamente.')
      console.error('Erro no envio:', error)
    }

    setLoading(false)
  }

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
      <Formulario onSubmit={sendEmail}>
        <h1>Nos contate através do formulário</h1>
        <label>Nome</label>
        <input
          type="text"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          placeholder="Nome"
        />
        {erro.nome && <span style={{ color: 'red' }}>{erro.nome}</span>}

        <label>E-mail</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="example@gmail.com"
        />
        {erro.email && <span>{erro.email}</span>}

        <label>Telefone</label>
        <ReactInputMask
          mask="(99) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(00) 0000-0000"
        />
        <label>Mensagem</label>
        <textarea
          value={formData.mensagem}
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          placeholder="Deixe a sua mensagem"
        ></textarea>
        {erro.mensagem && <span style={{ color: 'red' }}>{erro.mensagem}</span>}

        <button>Enviar</button>
      </Formulario>
    </div>
  )
}

export default Contato
