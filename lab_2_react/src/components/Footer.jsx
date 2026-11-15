import { useEffect, useState } from "react";

export default function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    localStorage.setItem("userAgent", navigator.userAgent);
    localStorage.setItem("platform", navigator.platform);
    localStorage.setItem("language", navigator.language);
    localStorage.setItem("screen", screen.width + "x" + screen.height);

    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setInfo(data);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 p-10 text-center mt-12 rounded-t-3xl shadow-inner">
      <p className="mb-3 text-lg font-medium">Місто: <span className="text-white">Львів</span></p>
      <p className="text-lg font-medium">
        Email: <a href="mailto:olesia-anastasiia.shaida.kb.2025@lpnu.ua" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">olesia-anastasiia.shaida.kb.2025@lpnu.ua</a>
      </p>

      <h3 className="mt-6 mb-2 text-white font-semibold">Інформація про систему</h3>
      <ul className="text-sm text-left max-w-3xl mx-auto break-words space-y-1">
        {Object.entries(info).map(([key, value]) => (
          <li key={key}><span className="text-white">{key}:</span> {value}</li>
        ))}
      </ul>
    </footer>
  );
}
