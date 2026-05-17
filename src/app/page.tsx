
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
          Yousra Graphics
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-300 text-lg leading-8">
          مصممة جرافيك متخصصة في صناعة الهويات البصرية والتصاميم الإبداعية
          بمختلف أنواعها، تجمع بين الحس الفني والخلفية الأكاديمية في إدارة الأعمال والمحاسبة المالية.
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="https://wa.me/967739263769"
            className="px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-500 transition glow"
          >
            تواصل واتساب
          </a>

          <a
            href="https://www.instagram.com/you__graphic7"
            className="px-6 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            إنستغرام
          </a>
        </div>
      </section>

      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          أقسام الأعمال
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'تصاميم سوشيال ميديا',
            'هويات بصرية',
            'شعارات',
            'تصاميم إعلانية',
            'تصاميم شركات',
            'مطبوعات'
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-pink-500 transition"
            >
              <h3 className="text-2xl font-semibold">{item}</h3>

              <p className="text-zinc-400 mt-4">
                سيتم إضافة أعمال احترافية داخل هذا القسم.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          تواصل مع يسرى
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://wa.me/967739263769" className="px-6 py-3 rounded-xl bg-green-600">
            WhatsApp
          </a>

          <a href="https://www.instagram.com/you__graphic7" className="px-6 py-3 rounded-xl bg-pink-600">
            Instagram
          </a>

          <a href="https://www.facebook.com/share/1DxEfsTCQ3/" className="px-6 py-3 rounded-xl bg-blue-600">
            Facebook
          </a>
        </div>
      </section>

    </main>
  )
}
