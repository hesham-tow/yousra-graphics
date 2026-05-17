
export default function Home() {
  return (
    <main style={{padding:'60px',textAlign:'center'}}>
      <h1 style={{
        fontSize:'60px',
        background:'linear-gradient(to right,#ff0080,#00d9ff)',
        WebkitBackgroundClip:'text',
        color:'transparent'
      }}>
        Yousra Graphics
      </h1>

      <p style={{
        maxWidth:'700px',
        margin:'30px auto',
        lineHeight:'2'
      }}>
        يسرى للدعاية والتسويق — مصممة جرافيك متخصصة في صناعة الهويات البصرية والتصاميم الإبداعية.
      </p>

      <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        flexWrap:'wrap'
      }}>
        <a href="https://wa.me/967739263769">
          واتساب
        </a>

        <a href="https://www.instagram.com/you__graphic7">
          إنستغرام
        </a>
      </div>
    </main>
  )
}
