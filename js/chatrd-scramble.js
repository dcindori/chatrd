/* ChatRD — Scramble text effect (vanilla port of SpecialText).
   Two phases:
     1. Fill with random glyphs left-to-right, keep scrambling.
     2. Reveal the real text left-to-right, with an underscore cursor. */

(function () {
    const CHARS = '_!X$0-+*#';
    const SKIP = new WeakSet();

    function randChar(prev) {
        let c;
        do { c = CHARS[Math.floor(Math.random() * CHARS.length)]; } while (c === prev);
        return c;
    }

    function scramble(el, opts) {
        opts = opts || {};
        const speed = opts.speed || 18;
        const delay = (opts.delay || 0) * 1000;
        const text = (opts.text != null ? opts.text : el.textContent) || '';
        const len = text.length;
        if (!len) return null;

        let phase = 1;
        let step = 0;
        let timer = null;
        const render = (s) => { el.textContent = s; };

        const phase1 = () => {
            const maxSteps = len * 2;
            const filled = Math.min(step + 1, len);
            const chars = [];
            for (let i = 0; i < filled; i++) chars.push(randChar(chars[i - 1]));
            for (let i = filled; i < len; i++) chars.push('\u00A0');
            render(chars.join(''));
            step++;
            if (step >= maxSteps) { phase = 2; step = 0; }
        };
        const phase2 = () => {
            const revealed = Math.floor(step / 2);
            const chars = [];
            for (let i = 0; i < revealed && i < len; i++) chars.push(text[i]);
            if (revealed < len) chars.push(step % 2 === 0 ? '_' : randChar());
            while (chars.length < len) chars.push(randChar());
            render(chars.join(''));
            step++;
            if (step >= len * 2) { render(text); clearInterval(timer); timer = null; }
        };

        const start = () => {
            render(' '.repeat(len));
            timer = setInterval(() => { (phase === 1 ? phase1 : phase2)(); }, speed);
        };

        if (delay > 0) setTimeout(start, delay); else start();
        return { stop: () => { if (timer) { clearInterval(timer); render(text); } } };
    }

    function eligible(el) {
        if (!el || SKIP.has(el)) return false;
        if (el.children.length > 0) return false;                  // no nested markup
        const txt = (el.textContent || '').trim();
        if (!txt || txt.length > 80) return false;                 // avoid long paragraphs
        return true;
    }

    function runOnEvent(evt) {
        if (SKIP.has(evt)) return;
        SKIP.add(evt);
        const nodes = [
            { sel: '.user',   speed: 16, delay: 0.05 },
            { sel: '.action', speed: 14, delay: 0.12 },
            { sel: '.value',  speed: 20, delay: 0.22 },
            { sel: '.actual-message', speed: 10, delay: 0.30 },
        ];
        nodes.forEach(({ sel, speed, delay }) => {
            const el = evt.querySelector(sel);
            if (eligible(el)) { SKIP.add(el); scramble(el, { speed, delay }); }
        });
    }

    function scanExisting(root) {
        root.querySelectorAll('.event').forEach(runOnEvent);
    }

    function init() {
        const chat = document.getElementById('chat');
        if (!chat) { setTimeout(init, 80); return; }
        scanExisting(chat);
        const mo = new MutationObserver((muts) => {
            for (const m of muts) {
                m.addedNodes.forEach((n) => {
                    if (n.nodeType !== 1) return;
                    if (n.classList && n.classList.contains('event')) runOnEvent(n);
                    else if (n.querySelectorAll) n.querySelectorAll('.event').forEach(runOnEvent);
                });
            }
        });
        mo.observe(chat, { childList: true, subtree: false });
    }

    window.chatrdScramble = scramble;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
