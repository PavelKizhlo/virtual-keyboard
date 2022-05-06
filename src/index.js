document.body.innerHTML = `<div class="wrapper">
<h1 class="title">Виртуальная клавиатура</h1>
<textarea class="textarea" id="textarea" cols="52" rows="5"></textarea>
<div class="keyboard">
    <div class="keyboard__row">
        <div class="keyboard__key key"><span class="key__text">\`</span></div>
        <div class="keyboard__key key"><span class="key__text">1</span></div>
        <div class="keyboard__key key"><span class="key__text">2</span></div>
        <div class="keyboard__key key"><span class="key__text">3</span></div>
        <div class="keyboard__key key"><span class="key__text">4</span></div>
        <div class="keyboard__key key"><span class="key__text">5</span></div>
        <div class="keyboard__key key"><span class="key__text">6</span></div>
        <div class="keyboard__key key"><span class="key__text">7</span></div>
        <div class="keyboard__key key"><span class="key__text">8</span></div>
        <div class="keyboard__key key"><span class="key__text">9</span></div>
        <div class="keyboard__key key"><span class="key__text">0</span></div>
        <div class="keyboard__key key"><span class="key__text">&minus;</span></div>
        <div class="keyboard__key key"><span class="key__text">&plus;</span></div>
        <div class="keyboard__key key key_delete key_functional"><span class="key__text">delete</span></div>
    </div>
    <div class="keyboard__row">
        <div class="keyboard__key key key_tab key_functional"><span class="key__text">tab</span></div>
        <div class="keyboard__key key"><span class="key__text">q</span></div>
        <div class="keyboard__key key"><span class="key__text">w</span></div>
        <div class="keyboard__key key"><span class="key__text">e</span></div>
        <div class="keyboard__key key"><span class="key__text">r</span></div>
        <div class="keyboard__key key"><span class="key__text">t</span></div>
        <div class="keyboard__key key"><span class="key__text">y</span></div>
        <div class="keyboard__key key"><span class="key__text">u</span></div>
        <div class="keyboard__key key"><span class="key__text">i</span></div>
        <div class="keyboard__key key"><span class="key__text">o</span></div>
        <div class="keyboard__key key"><span class="key__text">p</span></div>
        <div class="keyboard__key key"><span class="key__text">&#123;</span></div>
        <div class="keyboard__key key"><span class="key__text">&#125;</span></div>
        <div class="keyboard__key key"><span class="key__text">\\</span></div>
    </div>
    <div class="keyboard__row">
        <div class="keyboard__key key key_capslock key_functional"><span class="key__text">caps lock</span>
        </div>
        <div class="keyboard__key key"><span class="key__text">a</span></div>
        <div class="keyboard__key key"><span class="key__text">s</span></div>
        <div class="keyboard__key key"><span class="key__text">d</span></div>
        <div class="keyboard__key key"><span class="key__text">f</span></div>
        <div class="keyboard__key key"><span class="key__text">g</span></div>
        <div class="keyboard__key key"><span class="key__text">h</span></div>
        <div class="keyboard__key key"><span class="key__text">j</span></div>
        <div class="keyboard__key key"><span class="key__text">k</span></div>
        <div class="keyboard__key key"><span class="key__text">l</span></div>
        <div class="keyboard__key key"><span class="key__text">;</span></div>
        <div class="keyboard__key key"><span class="key__text">'</span></div>
        <div class="keyboard__key key key_return key_functional"><span class="key__text">return</span></div>
    </div>
    <div class="keyboard__row">
        <div class="keyboard__key key key_shift key_functional"><span class="key__text">shift</span></div>
        <div class="keyboard__key key"><span class="key__text">z</span></div>
        <div class="keyboard__key key"><span class="key__text">x</span></div>
        <div class="keyboard__key key"><span class="key__text">c</span></div>
        <div class="keyboard__key key"><span class="key__text">v</span></div>
        <div class="keyboard__key key"><span class="key__text">b</span></div>
        <div class="keyboard__key key"><span class="key__text">n</span></div>
        <div class="keyboard__key key"><span class="key__text">m</span></div>
        <div class="keyboard__key key"><span class="key__text">&lt;</span></div>
        <div class="keyboard__key key"><span class="key__text">&gt;</span></div>
        <div class="keyboard__key key"><span class="key__text">/</span></div>
        <div class="keyboard__key key key_shift key_functional"><span class="key__text">shift</span></div>
    </div>
    <div class="keyboard__row">
        <div class="keyboard__key key key_fn key_functional"><span class="key__text">fn</span></div>
        <div class="keyboard__key key key_functional"><span class="key__text">control</span></div>
        <div class="keyboard__key key key_functional"><span class="key__text">option</span></div>
        <div class="keyboard__key key key_command key_functional"><span class="key__text">command</span></div>
        <div class="keyboard__key key key_space key_functional"><span class="key__text"></span></div>
        <div class="keyboard__key key key_command key_functional"><span class="key__text">command</span></div>
        <div class="keyboard__key key key_functional"><span class="key__text">option</span></div>
        <div class="keyboard__arrow-block">
            <div class="keyboard__key key key_arrow arrow-up"><span class="key__text">&uarr;</span></div>
            <div class="keyboard__key key key_arrow arrow-left"><span class="key__text">&larr;</span></div>
            <div class="keyboard__key key key_arrow arrow-down"><span class="key__text">&darr;</span></div>
            <div class="keyboard__key key key_arrow arrow-right"><span class="key__text">&rarr;</span></div>
        </div>
    </div>
</div>
<p class="system">Клавиатура создана в операционной системе Mac OS</p>
<p class="language">Для переключения языка комбинация: левыe Ctrl + Alt</p>
</div>`

let keyboard = document.querySelector('.keyboard');

function pressKey(evt) {
    if (evt.target.classList.contains('key__text')) {
        evt.target.parentElement.classList.add('key__pressed');
    }

    document.addEventListener('mouseup', () => {
        evt.target.parentElement.classList.remove('key__pressed');
    })
}

keyboard.addEventListener('mousedown', pressKey);
