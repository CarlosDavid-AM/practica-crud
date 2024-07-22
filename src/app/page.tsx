import CardNota from "@/components/CardNota"
import { Datos } from '@/types/types'

export async function loadNotes () {
  const res = await fetch('http://localhost:3000/api/notes')
  const data = await res.json()
  return(data)
  
}

const page = async () => {
  const datos = await loadNotes()

  return (
    <div className='container mx-auto'>
      <form className='flex flex-col gap-y-5 my-10 text-black'>
        <input type="text" name="Tutilo" placeholder="Tutilo"
        className='rounded p-2' />
        <textarea name="Contenido" placeholder="Contenido" rows={5} cols={50} 
        className='rounded p-2'></textarea>
        <button className='text-xl bg-blue-700 hover:bg-blue-900 px-3 py-1 rounded-md text-white'>
          Crear
        </button>
      </form>
      
      <ul>
        {
          datos.map((data: Datos) => (
            <CardNota key={data.id} data={data} />
          ))
        }
      </ul>
    </div>
  )
}

export default page