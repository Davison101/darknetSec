import { BeamsBackground } from "../components/BeamsBackground";

export default function AboutPage() {
  return (
    <BeamsBackground intensity="strong">
      <div className="max-w-4xl text-center text-white">
        <div className="mb-8">
          <div className="uppercase text-cyan-400 text-xs tracking-[3px] mb-3">THE PERSON BEHIND THE WORK</div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">Davison Mapiza</h1>
          <p className="text-xl text-white/70">IT &amp; Cybersecurity Specialist</p>
          <p className="text-sm text-white/60 mt-2">📍 Near ZUT, Ndola</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-lg text-white/80 mb-12">
          <p>
            I’m Davison Mapiza, a final-year cybersecurity student at Zambia University College of Technology (ZUCT). 
            I founded this practice to deliver reliable, affordable, and security-conscious IT support to everyday Zambians who deserve professional help at fair prices.
          </p>
          <p>
            Growing up in Zambia and studying in the Copperbelt gave me a clear understanding of what local people actually need: practical fixes, honest communication, and someone who shows up on time and explains things clearly — in English, Nyanja, or Bemba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {/* Credentials */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-cyan-400 text-sm tracking-widest mb-6">CREDENTIALS</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span>BSc Cybersecurity — ZUCT</span> 
                <span className="text-xs px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full">In Progress</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span>Responsive Web Design</span> 
                <span className="text-xs px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full">Completed</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span>Computer Science I</span> 
                <span className="text-xs px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full">Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cybersecurity Awareness</span> 
                <span className="text-xs px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full">Completed</span>
              </div>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-cyan-400 text-sm tracking-widest mb-6">SKILLS &amp; LANGUAGES</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Cybersecurity", "Windows OS", "Malware Removal", "Data Backup", "Password Security", "Online Safety", "CV Writing", "Software Setup", "Network Security", "Penetration Testing"].map((skill, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full">{skill}</span>
              ))}
            </div>
            <div className="text-sm text-white/70">
              Languages spoken: <span className="text-white font-medium">English • Nyanja • Bemba</span>
            </div>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
}
