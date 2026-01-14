// components/WindowControls.jsx
import useWindowStore from '../../store/window'

function WindowControls({ target }) {
    const { closeWindow, toggleMaximize } = useWindowStore();

    return (
        <div id="window-controls" className="flex gap-2">
            <div className='close' onClick={() => closeWindow(target)} />
            <div className="minimize" onClick={() => closeWindow(target)} />
            {/* Кнопка разворачивания */}
            <div className='maximize' onClick={() => toggleMaximize(target)} />
        </div>
    );
}

export default WindowControls;

