import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'


export async function GET () {
  const getNotas = await prisma.notas.findMany()

  return NextResponse.json(getNotas)
}

export async function POST (request: Request) {
  const {titulo, contenido} = await request.json()

  const crearNota = await prisma.notas.create({
    data:{
      titulo: titulo,
      contenido: contenido
    }
  })
    
  return NextResponse.json(crearNota)
}