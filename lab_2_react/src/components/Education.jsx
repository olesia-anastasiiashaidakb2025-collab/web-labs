function Education() {
  const skills = [
    'верстка сайтів',  'Розробка Python,c# скриптів',
    'OSINT',  'Високі soft skills'
  ];

  return (
    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-emerald-500 pb-2 inline-block">Освіта</h2>

      <div className="mb-8 p-5 bg-slate-50 rounded-xl border border-slate-100">
        <strong className="text-xl text-emerald-700 block mb-1">Національний університет "Львівська політехніка"</strong>
        <p className="text-slate-600 font-medium mt-2">Спеціальність "Кібербезпека", 2 курс.</p>
      </div>

      <h3 className="text-xl font-bold text-slate-700 mb-4 border-b-2 border-amber-500 pb-2 inline-block">Навички</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-default shadow-sm border border-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Education;
