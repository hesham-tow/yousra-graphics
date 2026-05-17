export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Yousra Graphics
          </h1>

          <nav className="hidden md:flex gap-8 font-semibold">
            <a href="#home">الرئيسية</a>
            <a href="#about">من نحن</a>
            <a href="#services">الخدمات</a>
            <a href="#portfolio">الأعمال</a>
            <a href="#contact">تواصل</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="pt-40 pb-24 px-6 bg-gradient-to-br from-white via-pink-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              تصاميم احترافية
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                ترفع علامتك التجارية
              </span>
            </h2>

            <p className="text-lg leading-9 text-gray-700 mb-10">
              يسرى للدعاية والتسويق — مصممة جرافيك محترفة متخصصة في الهوية
              البصرية وتصميم الإعلانات والسوشيال ميديا والهويات التجارية،
              بخبرة تجمع بين الإبداع والدراسة الأكاديمية في إدارة الأعمال
              والمحاسبة المالية.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/967739263769"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold shadow-xl hover:scale-105 transition"
              >
                اطلب تصميم الآن
              </a>

              <a
                href="#portfolio"
                className="px-8 py-4 rounded-2xl border-2 border-purple-500 text-purple-600 font-bold hover:bg-purple-50 transition"
              >
                مشاهدة الأعمال
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="Yousra Graphics"
              className="w-[420px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-black mb-10">من نحن</h3>

          <p className="text-xl leading-10 text-gray-700 max-w-4xl mx-auto">
            يسرى للدعاية والتسويق منصة إبداعية متخصصة في صناعة التصاميم
            الاحترافية والهويات التجارية الحديثة. نعمل على تحويل الأفكار إلى
            أعمال بصرية جذابة تساعد العلامات التجارية على الظهور بقوة في السوق.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-20">
            <div className="p-8 rounded-3xl shadow-xl border bg-gradient-to-br from-pink-50 to-white">
              <h4 className="text-4xl font-black text-pink-500 mb-3">+500</h4>
              <p>عميل سعيد</p>
            </div>

            <div className="p-8 rounded-3xl shadow-xl border bg-gradient-to-br from-cyan-50 to-white">
              <h4 className="text-4xl font-black text-cyan-500 mb-3">+1500</h4>
              <p>تصميم احترافي</p>
            </div>
}
