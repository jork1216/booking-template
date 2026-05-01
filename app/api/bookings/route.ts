import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL })
const prisma = new PrismaClient({ adapter })

export async function POST(request: Request) {
    const body = await request.json();
  const bookingInput = await prisma.bookingInquiry.create({
    data: {
      fullName: body.fullName,
      contactNumber: body.contactNumber,
      checkIn: new Date(body.checkIn),
      checkOut: new Date(body.checkOut),
      roomType: body.roomType,
      guests: Number(body.guests),
      specialRequests: body.specialRequests,
    },
  })

  return Response.json(bookingInput)
}
