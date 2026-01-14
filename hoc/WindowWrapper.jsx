// components/WindowWrapper.jsx
import { useLayoutEffect, useRef } from "react";
import useWindowStore from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

function WindowWrapper(Component, windowKey) {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMaximized, x , y } = windows[windowKey];
    const ref = useRef(null);
    const draggableRef = useRef(null);
    const savedState = useRef({
      top: y,
      left: x,
      width: "auto",
      height: "auto",
    });
    
    // Анимация появления
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";
      gsap.fromTo(el, 
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    // Инициализация Draggable
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      draggableRef.current = instance;
      return () => instance.kill();
    }, []);

    // Логика разворачивания и отключения Draggable
    useGSAP(() => {
      const el = ref.current;
      const drag = draggableRef.current;
      if (!el || !drag) return;

      if (isMaximized) {
        // 1. СОХРАНЕНИЕ СОСТОЯНИЯ
        // Получаем точные размеры и позицию относительно окна браузера
        const rect = el.getBoundingClientRect();
        savedState.current = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };

        drag.disable();

        // 2. АНИМАЦИЯ РАЗВОРАЧИВАНИЯ
        gsap.to(el, {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        // 3. ВОССТАНОВЛЕНИЕ
        drag.enable();
        const { top, left, width, height } = savedState.current;

        gsap.to(el, {
          position: "absolute",
          top: top,
          left: left,
          width: width,
          height: height,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    }, [isMaximized]);

    useLayoutEffect(() => {
      if (ref.current) {
        ref.current.style.display = isOpen ? "block" : "none";
      }
    }, [isOpen]);

    return (
      <section 
        id={windowKey} 
        ref={ref} 
        style={{ zIndex }} 
        className={`absolute ${isMaximized ? 'rounded-none' : 'rounded-lg'}`}
      >
        <Component {...props} />
      </section>
    );
  };
  return Wrapped;
}

export default WindowWrapper;
