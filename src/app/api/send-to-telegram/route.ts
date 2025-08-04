import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { error: 'Telegram credentials not configured' },
      { status: 500 }
    )
  }

  try {
    const formData = await request.json()

    if (!formData.name || !formData.email || formData.empty) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const text = `
      Новая заявка:
      Имя: ${formData.name}
      Компания: ${formData.company}
      Email: ${formData.email}
    `

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      }
    )

    if (!response.ok) throw new Error('Telegram API error')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
