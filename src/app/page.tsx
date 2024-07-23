import CardNota from "@/components/CardNota"
import FormNota from "@/components/FormNota"
import { Datos } from '@/types/types'



const page = async () => {

  return (
    <div className='container mx-auto w-1/2'>
      <FormNota />
      
      <CardNota/>
    </div>
  )
}

export default page