import { CardNotaProps } from '@/types/types'

const CardNota: React.FC<CardNotaProps> = ({ data }) => {
  return (
    <li className='flex justify-between bg-slate-800 p-3 my-10 rounded-md items-center'>
        <div className='flex flex-col gap-y-3 w-1/2'>
          <h2> {data.titulo} </h2>
          <p> {data.contenido} </p>
        </div>
        <div className='flex gap-x-3'>
           <button className='text-xl bg-red-700 hover:bg-red-900 px-3 py-1 rounded-md'>
            Eliminar
          </button>
        </div>
      </li>
  )
}

export default CardNota