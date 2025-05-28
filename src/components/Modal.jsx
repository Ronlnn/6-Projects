import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Кнопка открытия */}
      <button
        className={`w-40 h-10 bg-white rounded-xl shadow-lg shadow-blue-400 cursor-pointer hover:bg-blue-400 transition duration-300 ease-in-out hover:text-white ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
      >
        ✨ Открыть окно
      </button>

      {/* Модальное окно и затемнение фона */}
      <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 ${open ? '' : 'hidden'}`}>
        <div className="relative bg-white rounded-lg p-6 w-[300px] shadow-lg">
          {/* Кнопка закрытия */}
          <button
            className="absolute top-2 right-2 text-xl text-gray-400 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNyZXoxa2N1a2M1dzJnZ29vcXoxcWdjYzNrcmttOTFlejNpazc3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yMMJB4678mvyq3b4d2/giphy.gif"
            className="w-60 rounded-lg mx-auto"
            alt="funny gif"
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
