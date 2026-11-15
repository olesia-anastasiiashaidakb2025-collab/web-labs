import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("modalClosed")) return;
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem("modalClosed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 dark:text-slate-100 p-6 rounded-xl w-80">
        <h3 className="text-xl font-bold mb-4">Зворотний зв'язок</h3>
        <form action="https://formspree.io/f/mljjnvop" method="POST" className="space-y-3">
          <input type="text" name="name" placeholder="Ім'я" required className="w-full border rounded p-2 text-black" />
          <input type="email" name="email" placeholder="Email" required className="w-full border rounded p-2 text-black" />
          <input type="tel" name="phone" placeholder="Номер телефону" className="w-full border rounded p-2 text-black" />
          <textarea name="message" rows="4" placeholder="Повідомлення" className="w-full border rounded p-2 text-black" />
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Надіслати</button>
            <button type="button" onClick={close} className="bg-slate-300 text-black px-4 py-2 rounded">Закрити</button>
          </div>
        </form>
      </div>
    </div>
  );
}
