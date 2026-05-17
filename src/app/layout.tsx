
import './globals.css'

export const metadata = {
  title: 'Yousra Graphics',
  description: 'Professional Portfolio Website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
