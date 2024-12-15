import { prisma } from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test the connection
    await prisma.$connect()
    return NextResponse.json({ status: 'Database connected successfully' })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      { error: 'Failed to connect to database' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 