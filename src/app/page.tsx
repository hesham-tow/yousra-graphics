
import Image from 'next/image'

export default function Home() {
  return (
    <main style={{
      minHeight:'100vh',
      background:'#050505',
      color:'white',
      padding:'40px',
      textAlign:'center'
    }}>

      <div style={{marginTop:'30px'}}>
        <Image
          src="/logo-1.png"
          alt="logo"
          width={300}
          height={300}
          style={{maxWidth:'100%',height:'auto'}}
        />
      </div>

      <h1 style={{
        fontSize:'55px',
        background:'linear-gradient(to right,#ff0080,#00d9ff)',
        WebkitBackgroundClip:'text',
        color:'transparent'
      }}>
        Yousra Graphics
      </h1>

      <p style={{
        maxWidth:'800px',
        margin:'30px auto',
        lineHeight:'2',
        color:'#ccc'
      }}>
        يسرى للدعاية والتسويق — مصممة جرافيك متخصصة في صناعة الهويات البصرية والتصاميم الإبداعية،
        تجمع بين الحس الفني والخلفية الأكاديمية في إدارة الأعمال والمحاسبة المالية.
      </p>

      <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        flexWrap:'wrap',
        marginBottom:'70px'
      }}>
        <a href="https://wa.me/967739263769"
        style={{
          background:'#ff0080',
          padding:'14px 24px',
          borderRadius:'14px'
        }}>
          واتساب
        </a>

        <a href="https://www.instagram.com/you__graphic7"
        style={{
          border:'1px solid #00d9ff',
          padding:'14px 24px',
          borderRadius:'14px'
        }}>
          إنستغرام
        </a>
      </div>

      <h2 style={{fontSize:'40px'}}>معرض الأعمال</h2>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
        gap:'20px',
        marginTop:'40px'
      }}>
        <div style={{background:'#111',padding:'40px',borderRadius:'20px'}}>تصاميم سوشيال ميديا</div>
        <div style={{background:'#111',padding:'40px',borderRadius:'20px'}}>هويات بصرية</div>
        <div style={{background:'#111',padding:'40px',borderRadius:'20px'}}>شعارات</div>
        <div style={{background:'#111',padding:'40px',borderRadius:'20px'}}>تصاميم إعلانية</div>
      </div>

    </main>
  )
}
