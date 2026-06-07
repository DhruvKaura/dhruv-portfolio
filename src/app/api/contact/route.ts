import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing Resend API key',
        },
        {
          status: 500,
        }
      )
    }

    const resend = new Resend(apiKey)
    const body = await req.json()

    const {
      reason,
      name,
      email,
      message,
    } = body

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'dhruvkaura25@gmail.com',
      subject: `New Portfolio Inquiry - ${name}`,
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Reason:</strong> ${reason}</p>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}
