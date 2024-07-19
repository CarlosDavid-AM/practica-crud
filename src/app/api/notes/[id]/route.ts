import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

interface Params {
  params: {id: string}
}

export async function GET (request: Request, { params }: Params) {
  const getNotas = await prisma.notas.findFirst({
    where: {
      id: Number(params.id)
    }
  })

  return NextResponse.json(getNotas)
}

export async function PUT (request: Request, { params }: Params) {
  const {titulo, contenido} = await request.json()

  const updateNote = await prisma.notas.update({
    where: {
      id: Number(params.id)
    }, 
    data: {
      titulo: titulo,
      contenido: contenido
    }
  })

  return NextResponse.json(updateNote)
}

export async function DELETE (request: Request, { params }: Params) {
  const deleteNote = await prisma.notas.delete({
    where: {
      id: Number(params.id)
    }
  })

  return NextResponse.json(deleteNote)
}