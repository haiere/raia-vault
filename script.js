/* ==========================================================================
   RAIA VAULT v1.2.4 - SCRIPT.JS
   Requires: i18n.js (window.RAIA_I18N). GSAP is optional.
   ========================================================================== */
(function () {
    'use strict';

    const APP_VERSION = '1.2.4';
    const L10N = window.RAIA_I18N;
    if (!L10N) {
        console.error('Raia Vault: i18n.js belum dimuat.');
        return;
    }

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const reduceMotion = window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : { matches: false };

    const CIRC = 144.51;
    const SC = ['#f87171', '#fb923c', '#fbbf24', '#4ade80', '#34d399'];
    const WORDLIST = [
        'apple', 'brave', 'cloud', 'dance', 'eagle', 'flame', 'grace', 'happy', 'iron', 'jungle',
        'king', 'light', 'moon', 'night', 'ocean', 'pearl', 'quick', 'river', 'stone', 'tiger',
        'ultra', 'vivid', 'water', 'xenon', 'yellow', 'zebra', 'amber', 'blaze', 'crisp', 'delta',
        'echo', 'fresh', 'globe', 'hero', 'input', 'jewel', 'karma', 'lemon', 'magic', 'noble',
        'orbit', 'pixel', 'quest', 'radio', 'solar', 'tower', 'unity', 'valor', 'wheat', 'yacht'
    ];

    /* SVG ICON LIBRARY */
    const ICONS = {
        lock: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        clipboard: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
        chart: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>',
        vault: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="8" x2="12" y2="12"/></svg>',
        bulb: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
        bolt: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        cookie: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>',
        globe: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        phone: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>',
        home: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 12L12 3l9 9"/><path d="M5 10v10h14V10"/></svg>',
        cart: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="9" cy="20" r="1"/><circle cx="20" cy="20" r="1"/><path d="M1 1h4l2.7 13.4A2 2 0 0 0 7.7 16h9.6a2 2 0 0 0 2-1.6L21 6H6"/></svg>',
        mail: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>',
        gamepad: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="16" cy="11" r="1"/><circle cx="18" cy="13" r="1"/></svg>',
        briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
        shield: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        key: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="8" cy="15" r="4"/><line x1="10.85" y1="12.15" x2="19" y2="4"/><line x1="18" y1="5" x2="20" y2="7"/><line x1="15" y1="8" x2="17" y2="10"/></svg>',
        ruler: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="8" width="20" height="8" rx="1"/><line x1="6" y1="8" x2="6" y2="12"/><line x1="10" y1="8" x2="10" y2="12"/><line x1="14" y1="8" x2="14" y2="12"/><line x1="18" y1="8" x2="18" y2="12"/></svg>',
        shuffle: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>',
        prohibit: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
        cabinet: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',
        refresh: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M23 4v6h-6"/><path d="M20.49 15A9 9 0 1 1 5.64 5.64L1 10"/></svg>',
        coffee: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        clock: '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><polyline points="12 9 12 13 14.5 14.5"/><line x1="9" y1="2" x2="15" y2="2"/></svg>'
    };

    let curLang = 'en';
    let mode = 'random';
    let curPw = '';
    let genCount = 0;
    let hist = [];
    let vault = [];
    let cookieAccepted = null;
    let notifTimer = null;
    let motionCtx = null;

    /* ---------- HELPERS ---------- */

    /* Translation lookup with English fallback */
    const T = key => {
        const L = L10N[curLang];
        if (L && L[key] != null) return L[key];
        return L10N.en[key] != null ? L10N.en[key] : key;
    };

    /* Replace {name} placeholders in a translated string */
    const fill = (text, vars) => text.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));

    const escapeHtml = s => {
        if (!s) return '';
        return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m]);
    };

    /* Safe localStorage access (private mode or disabled storage must not break the app) */
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (_) { /* ignore */ } }
    };

    /* ---------- STORAGE ---------- */
    function loadStorage() {
        try {
            const v = store.get('raia_vault');
            if (v) vault = JSON.parse(v);
            const h = store.get('raia_hist');
            if (h) hist = JSON.parse(h);
            const gc = store.get('raia_gc');
            if (gc) genCount = parseInt(gc, 10) || 0;
            const ca = store.get('raia_cookie');
            if (ca === 'true') cookieAccepted = true;
            if (ca === 'false') cookieAccepted = false;
        } catch (_) { /* ignore corrupt data */ }
        updateStats();
        renderHist();
        renderVault();
        handleCookieBanner();
    }

    function saveVaultLS() {
        store.set('raia_vault', JSON.stringify(vault));
        updateStats();
    }
    function saveHistLS() { store.set('raia_hist', JSON.stringify(hist)); }
    function saveGC() { store.set('raia_gc', String(genCount)); }

    function updateStats() {
        $('#statGen').textContent = genCount;
        $('#statSav').textContent = vault.length;
    }

    /* ---------- COOKIE ---------- */
    function handleCookieBanner() {
        const banner = $('#cookieBanner');
        if (cookieAccepted === true || cookieAccepted === false) banner.classList.remove('show');
        else banner.classList.add('show');
    }

    /* Builds the cookie text with a real link, so the text can be translated */
    function renderCookieText() {
        const el = $('#cookieText');
        const parts = T('cookieText').split('{policy}');
        el.textContent = '';
        el.append(parts[0] || '');
        if (parts.length > 1) {
            const a = document.createElement('a');
            a.href = 'https://hajir.is-a.dev/raia-footer/#cookie';
            a.target = '_blank';
            a.rel = 'noopener';
            a.textContent = T('cookiePolicy');
            el.append(a, parts.slice(1).join('{policy}'));
        }
    }

    function acceptCookies() {
        cookieAccepted = true;
        store.set('raia_cookie', 'true');
        $('#cookieBanner').classList.remove('show');
        notify(T('nCookieOk'));
    }

    function declineCookies() {
        cookieAccepted = false;
        store.set('raia_cookie', 'false');
        $('#cookieBanner').classList.remove('show');
        notify(T('nCookieNo'));
    }

    /* ---------- NOTIFICATIONS ---------- */
    function notify(msg, err = false) {
        const el = $('#notif');
        $('#ntxt').textContent = msg;
        el.classList.toggle('is-error', err);
        el.classList.toggle('is-success', !err);
        el.classList.add('show');
        clearTimeout(notifTimer);
        notifTimer = setTimeout(() => el.classList.remove('show'), 2500);
    }

    /* ---------- CRYPTO RANDOM ---------- */
    function cryptoRandom(min, max) {
        const range = max - min + 1;
        const bytes = new Uint32Array(1);
        window.crypto.getRandomValues(bytes);
        return min + Math.floor(bytes[0] / (0xffffffff + 1) * range);
    }

    /* ---------- GENERATOR ---------- */
    function getCharset() {
        let c = '';
        const checks = ['cU', 'cL', 'cN', 'cS', 'cSp'];
        const maps = [
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789',
            '!@#$%^&*-_=+<>?',
            ' '
        ];
        checks.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el && el.checked) c += maps[i];
        });
        return c;
    }

    function filterChars(chars) {
        const sim = 'O0l1I|';
        const amb = '{}[]()\\/"\'`~,;:.<>';
        const avoidSim = $('#cSim') && $('#cSim').checked;
        const avoidAmb = $('#cAmb') && $('#cAmb').checked;
        return [...chars].filter(ch => {
            if (avoidSim && sim.includes(ch)) return false;
            if (avoidAmb && amb.includes(ch)) return false;
            return true;
        }).join('');
    }

    function genRandom(len) {
        const base = getCharset();
        if (!base) return '';
        const pool = filterChars(base);
        if (!pool.length) return '';
        let pw = '';
        while (pw.length < len) pw += pool[cryptoRandom(0, pool.length - 1)];
        return pw;
    }

    function genPronounce(len) {
        const con = 'bcdfghjklmnpqrstvwxyz';
        const vow = 'aeiou';
        let pw = '';
        for (let i = 0; pw.length < len; i++) {
            const pool = (i % 2 === 0) ? con : vow;
            pw += pool[cryptoRandom(0, pool.length - 1)];
        }
        if ($('#cU') && $('#cU').checked) pw = pw.charAt(0).toUpperCase() + pw.slice(1);
        if ($('#cN') && $('#cN').checked) {
            const p = cryptoRandom(0, pw.length - 2);
            pw = pw.slice(0, p) + cryptoRandom(0, 9) + pw.slice(p + 1);
        }
        return pw.slice(0, len);
    }

    function genPassphrase() {
        const cnt = parseInt($('#wcRange').value, 10);
        const sep = $('#sepInp').value || '-';
        const addN = $('#cPPN') && $('#cPPN').checked;
        const doCap = $('#cPPC') && $('#cPPC').checked;
        const words = [];
        for (let i = 0; i < cnt; i++) {
            let w = WORDLIST[cryptoRandom(0, WORDLIST.length - 1)];
            if (doCap) w = w.charAt(0).toUpperCase() + w.slice(1);
            words.push(w);
        }
        let result = words.join(sep);
        if (addN) result += sep + cryptoRandom(10, 999);
        return result;
    }

    function genPin() {
        const len = parseInt($('#pinRange').value, 10);
        const noRep = $('#cNR') && $('#cNR').checked;
        const noSeq = $('#cNS') && $('#cNS').checked;
        const digits = [];
        let tries = 0;
        while (digits.length < len && tries < 2000) {
            tries++;
            const d = cryptoRandom(0, 9);
            if (noRep && digits.includes(d)) continue;
            if (noSeq && digits.length > 0 && Math.abs(d - digits[digits.length - 1]) <= 1) continue;
            digits.push(d);
        }
        return digits.join('');
    }

    function generate() {
        const len = parseInt($('#lenRange').value, 10);
        if (mode === 'random') return genRandom(len);
        if (mode === 'pronounce') return genPronounce(len);
        if (mode === 'passphrase') return genPassphrase();
        if (mode === 'pin') return genPin();
        return '';
    }

    /* ---------- STRENGTH ---------- */
    function entropy(pw) {
        if (!pw.length) return 0;
        let p = 0;
        if (/[A-Z]/.test(pw)) p += 26;
        if (/[a-z]/.test(pw)) p += 26;
        if (/\d/.test(pw)) p += 10;
        if (/[^A-Za-z0-9 ]/.test(pw)) p += 32;
        if (/ /.test(pw)) p += 1;
        return Math.round(pw.length * Math.log2(Math.max(p, 2)));
    }

    function scoreBits(bits) {
        if (bits < 28) return 0;
        if (bits < 36) return 1;
        if (bits < 60) return 2;
        if (bits < 80) return 3;
        if (bits < 100) return 4;
        return 5;
    }

    function crackTime(bits) {
        const v = Math.pow(2, bits) / 1e10;
        if (v < 1) return T('tLT1');
        if (v < 60) return Math.round(v) + T('tSec');
        if (v < 3600) return Math.round(v / 60) + T('tMin');
        if (v < 86400) return Math.round(v / 3600) + T('tHr');
        if (v < 31536e3) return Math.round(v / 86400) + T('tDay');
        if (v < 3.154e9) return Math.round(v / 31536e3) + T('tYr');
        if (v < 3.154e12) return (v / 3.154e9).toFixed(1) + T('tKYr');
        if (v < 3.154e15) return (v / 3.154e12).toFixed(1) + T('tMYr');
        return T('tInf');
    }

    function updateStrength(pw) {
        const bits = entropy(pw);
        const score = scoreBits(bits);
        const col = pw ? SC[Math.min(score, 4)] : 'var(--text-muted)';
        $$('.strength-bars .bar').forEach((b, i) => {
            const lit = (i < score && pw);
            b.style.background = lit ? col : '';
            b.classList.toggle('lit', !!lit);
        });
        const SL = L10N[curLang].sLabels;
        $('#slbl').textContent = pw ? SL[Math.min(score, 4)] : '—';
        $('#slbl').style.color = col;
        $('#crack').innerHTML = pw ? `${ICONS.clock}<span>${escapeHtml(crackTime(bits))}</span>` : '';
        $('#ebits').textContent = bits;
        $('#ebits').style.color = col;
        const pct = Math.min(bits / 128, 1);
        const rfl = $('#rfl');
        rfl.style.strokeDashoffset = CIRC - pct * CIRC;
        rfl.style.stroke = col;
    }

    function setPw(pw) {
        curPw = pw;
        const el = $('#pwt');
        el.classList.remove('flash');
        void el.offsetWidth;
        el.classList.add('flash');
        const mask = $('#cMask') && $('#cMask').checked;
        el.className = 'pw-text' + (mask ? ' masked' : '');
        el.textContent = pw || '—';
        updateStrength(pw);
        if (pw) {
            addHistory(pw);
            genCount++;
            updateStats();
            saveGC();
        }
    }

    /* ---------- HISTORY ---------- */
    function addHistory(pw) {
        const bits = entropy(pw);
        const score = scoreBits(bits);
        const time = new Date().toLocaleTimeString(curLang === 'id' ? 'id-ID' : 'en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        hist.unshift({ pw, score, time, len: pw.length });
        if (hist.length > 20) hist.pop();
        saveHistLS();
        renderHist();
    }

    function renderHist() {
        const el = $('#hlist');
        if (!hist.length) {
            el.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>${escapeHtml(T('emptyH'))}</span></div>`;
            return;
        }
        el.innerHTML = hist.map((h, i) => `
            <div class="hist-item" data-index="${i}">
              <div class="hpw">${escapeHtml(h.pw)}</div>
              <div class="hmeta">
                <span class="time">${escapeHtml(h.time)}</span>
                <div class="row">
                  <span class="dot" style="background:${SC[Math.min(h.score, 4)]}"></span>
                  <span class="len">${h.len}c</span>
                </div>
              </div>
            </div>
          `).join('');
        el.querySelectorAll('.hist-item').forEach(item => {
            item.addEventListener('click', () => {
                const pw = hist[parseInt(item.dataset.index, 10)].pw;
                setPw(pw);
                navigator.clipboard.writeText(pw).then(() => notify(T('nCopied'))).catch(() => notify(T('nFail'), true));
            });
        });
    }

    function clearHistory() {
        hist = [];
        saveHistLS();
        renderHist();
    }

    /* ---------- ANALYZE ---------- */
    function analyzeInput(pw) {
        const res = $('#ares');
        if (!pw) { res.style.display = 'none'; return; }
        res.style.display = '';
        const bits = entropy(pw);
        const score = scoreBits(bits);
        const col = SC[Math.min(score, 4)];
        const up = (pw.match(/[A-Z]/g) || []).length;
        const lo = (pw.match(/[a-z]/g) || []).length;
        const nu = (pw.match(/\d/g) || []).length;
        const sy = pw.length - up - lo - nu;
        const uniq = new Set(pw).size;
        const L = L10N[curLang];
        $('#agrid').innerHTML = `
            <div class="analyze-stat"><div class="val" style="color:${col}">${escapeHtml(L.sLabels[Math.min(score, 4)])}</div><div class="lbl">${L.aStr}</div></div>
            <div class="analyze-stat"><div class="val">${bits}</div><div class="lbl">${L.aEnt}</div></div>
            <div class="analyze-stat"><div class="val">${pw.length}</div><div class="lbl">${L.aLen}</div></div>
            <div class="analyze-stat"><div class="val">${uniq}</div><div class="lbl">${L.aUniq}</div></div>
            <div class="analyze-stat" style="grid-column:1/-1"><div class="val" style="font-size:var(--text-sm);">${escapeHtml(crackTime(bits))}</div><div class="lbl">${L.aCrack}</div></div>
          `;
        const categories = [
            { label: L.cbUp, count: up, color: '#93c5fd' },
            { label: L.cbLo, count: lo, color: '#6ee7b7' },
            { label: L.cbNu, count: nu, color: '#fde68a' },
            { label: L.cbSy, count: sy, color: '#fca5a5' }
        ];
        $('#cbk').innerHTML = categories.map(c => `
            <div class="char-bar-row">
              <span class="cbl">${c.label}</span>
              <div class="cbg"><div class="fill" style="width:${pw.length ? (c.count / pw.length * 100) : 0}%;background:${c.color}"></div></div>
              <span class="cnt">${c.count}</span>
            </div>
          `).join('');
    }

    /* ---------- VAULT ---------- */
    function useCurrentPw() { $('#vPw').value = curPw; }

    function saveVaultEntry() {
        const site = $('#vSite').value.trim();
        const user = $('#vUser').value.trim();
        const pw = $('#vPw').value.trim();
        if (!site || !pw) { notify(T('nFill'), true); return; }
        vault.push({ site, user, pw });
        $('#vSite').value = '';
        $('#vUser').value = '';
        $('#vPw').value = '';
        saveVaultLS();
        renderVault();
        notify(T('nSaved'));
    }

    function toggleBlur(pwEl) {
        pwEl.classList.toggle('unblur');
    }

    function renderVault() {
        const el = $('#ventries');
        if (!vault.length) {
            el.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>${escapeHtml(T('emptyV'))}</span></div>`;
            return;
        }
        const iconKeys = ['globe', 'phone', 'home', 'cart', 'mail', 'gamepad', 'briefcase', 'shield'];
        const L = L10N[curLang];
        el.innerHTML = vault.map((v, i) => `
            <div class="vault-entry" data-index="${i}">
              <div class="vico">${ICONS[iconKeys[i % iconKeys.length]]}</div>
              <div class="vinfo">
                <div class="site">${escapeHtml(v.site)}</div>
                <div class="user">${escapeHtml(v.user) || '—'}</div>
                <div class="pw" data-blur="true">${escapeHtml(v.pw)}</div>
              </div>
              <div class="vacts">
                <button class="vab" type="button" data-action="toggleBlur" aria-label="${escapeHtml(L.ariaToggleVis)}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="2"/><path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7z"/></svg></button>
                <button class="vab" type="button" data-action="copyVault" aria-label="${escapeHtml(L.ariaCopyEntry)}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
                <button class="vab" type="button" data-action="deleteVault" aria-label="${escapeHtml(L.ariaDelEntry)}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg></button>
              </div>
            </div>
          `).join('');

        el.querySelectorAll('.vault-entry').forEach(item => {
            const idx = parseInt(item.dataset.index, 10);
            const pwEl = item.querySelector('.pw');
            item.querySelectorAll('.vab').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const action = btn.dataset.action;
                    if (action === 'toggleBlur') {
                        toggleBlur(pwEl);
                    } else if (action === 'copyVault') {
                        navigator.clipboard.writeText(vault[idx].pw)
                            .then(() => notify(T('nCopied')))
                            .catch(() => notify(T('nFail'), true));
                    } else if (action === 'deleteVault') {
                        vault.splice(idx, 1);
                        saveVaultLS();
                        renderVault();
                        notify(T('nDel'));
                    }
                });
            });
            item.addEventListener('click', () => toggleBlur(pwEl));
        });
    }

    function clearVault() {
        if (confirm(T('confirmClear'))) {
            vault = [];
            saveVaultLS();
            renderVault();
            notify(T('nDel'));
        }
    }

    function exportCSV() {
        if (!vault.length) { notify(T('nNoData'), true); return; }
        /* Column headers stay in English so the CSV imports correctly into other tools */
        let csv = 'Website,Username,Password\n';
        vault.forEach(v => { csv += `"${v.site || ''}","${v.user || ''}","${v.pw || ''}"\n`; });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'raia_vault.csv';
        a.click();
        URL.revokeObjectURL(url);
        notify(T('nDL'));
    }

    /* ---------- TIPS ---------- */
    function renderTips() {
        const tips = L10N[curLang].tips;
        if (!tips) return;
        $('#tiplist').innerHTML = tips.map(t => `
            <div class="tip-item">
              <span class="ico">${ICONS[t.icon] || ''}</span>
              <div>
                <div class="tit">${escapeHtml(t.t)}</div>
                <div class="bod">${escapeHtml(t.b)}</div>
              </div>
            </div>
          `).join('');
    }

    /* ---------- LANGUAGE ---------- */
    function buildLangGrid() {
        const html = Object.keys(L10N).map(k => {
            const l = L10N[k];
            return `<div class="lang-item${k === curLang ? ' active' : ''}" data-lang="${k}" role="button" tabindex="0" aria-pressed="${k === curLang}">
                <span class="flag">${l.flag}</span>
                <div class="info"><div class="name">${escapeHtml(l.name)}</div></div>
                <span class="code">${escapeHtml(l.code)}</span>
                <span class="check"><svg viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polyline points="2,5 4,8 8,3"/></svg></span>
              </div>`;
        }).join('');
        const grid = $('#langGrid');
        grid.innerHTML = html;
        grid.querySelectorAll('.lang-item').forEach(el => {
            const choose = () => {
                const lang = el.dataset.lang;
                if (lang !== curLang) {
                    curLang = lang;
                    applyLanguage();
                    notify(T('nSwitched'));
                }
                closeLangModal();
            };
            el.addEventListener('click', choose);
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    choose();
                }
            });
        });
        $('#langSearch').addEventListener('input', function () {
            const q = this.value.toLowerCase().trim();
            $$('.lang-item').forEach(el => {
                const name = el.querySelector('.name').textContent.toLowerCase();
                const code = el.querySelector('.code').textContent.toLowerCase();
                el.classList.toggle('hidden', !(name.includes(q) || code.includes(q)));
            });
        });
    }

    function openLangModal() {
        $('#langOverlay').classList.add('open');
        $('#langSearch').value = '';
        buildLangGrid();
        setTimeout(() => $('#langSearch').focus(), 350);
    }

    function closeLangModal() {
        const overlay = $('#langOverlay');
        if (!overlay.classList.contains('open')) return;
        overlay.classList.remove('open');
        $('#openLangBtn').focus({ preventScroll: true });
    }

    /* Applies every data-i18n attribute from the dictionary */
    function applyI18n() {
        const L = L10N[curLang];
        const vars = { version: APP_VERSION, year: new Date().getFullYear() };

        $$('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key === 'cookieText') return; /* handled by renderCookieText() */
            const v = L[key];
            if (typeof v === 'string') el.textContent = fill(v, vars);
        });
        $$('[data-i18n-aria]').forEach(el => {
            const v = L[el.dataset.i18nAria];
            if (typeof v === 'string') el.setAttribute('aria-label', v);
        });
        $$('[data-i18n-placeholder]').forEach(el => {
            const v = L[el.dataset.i18nPlaceholder];
            if (typeof v === 'string') el.setAttribute('placeholder', v);
        });
    }

    function applyLanguage() {
        if (!L10N[curLang]) return;
        document.documentElement.lang = curLang;
        document.documentElement.dir = 'ltr';
        store.set('raia_lang', curLang);
        $('#curLangCode').textContent = L10N[curLang].code;

        applyI18n();
        renderCookieText();

        if (curPw) updateStrength(curPw);
        else $('#pwt').textContent = '—';

        renderHist();
        renderVault();
        renderTips();

        const inp = $('#ainp');
        if (inp && inp.value) inp.dispatchEvent(new Event('input'));

        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }

    /* ---------- TABS ---------- */
    function switchTab(tabId) {
        $$('.tab').forEach(btn => {
            const on = btn.dataset.tab === tabId;
            btn.classList.toggle('on', on);
            btn.setAttribute('aria-selected', String(on));
        });
        $$('.tp').forEach(p => p.classList.toggle('on', p.id === 'tp-' + tabId));
        if (tabId === 'tips') animateTips();
    }

    /* ---------- UI SETUP ---------- */
    function initSlider(rangeId, displayId) {
        const range = $(`#${rangeId}`);
        const display = $(`#${displayId}`);
        if (!range || !display) return;
        const update = () => {
            display.textContent = range.value;
            range.style.setProperty('--pct', ((range.value - range.min) / (range.max - range.min) * 100) + '%');
        };
        range.addEventListener('input', update);
        update();
    }

    function initHeaderScroll() {
        const header = $('#mainHeader');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    function setMenuOpen(open) {
        const nav = $('#mobileNav');
        const btn = $('#hamburgerBtn');
        nav.classList.toggle('open', open);
        btn.classList.toggle('active', open);
        btn.setAttribute('aria-expanded', String(open));
    }

    function initHamburger() {
        const btn = $('#hamburgerBtn');
        const nav = $('#mobileNav');
        btn.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
        nav.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => setMenuOpen(false));
        });
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
                setMenuOpen(false);
            }
        });
    }

    function initSmoothScroll() {
        const cta = document.querySelector('.hero-cta');
        if (!cta) return;
        cta.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#generator');
            if (target) {
                const y = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
            }
        });
    }

    function initModeButtons() {
        $$('.mode-row .mbtn').forEach(btn => {
            btn.addEventListener('click', () => {
                mode = btn.dataset.mode;
                $$('.mode-row .mbtn').forEach(b => {
                    const on = b.dataset.mode === mode;
                    b.classList.toggle('on', on);
                    b.setAttribute('aria-pressed', String(on));
                });
                $('#panRandom').style.display = (mode === 'random' || mode === 'pronounce') ? '' : 'none';
                $('#panPP').style.display = mode === 'passphrase' ? '' : 'none';
                $('#panPin').style.display = mode === 'pin' ? '' : 'none';
            });
        });
    }

    /* ---------- MOTION (GSAP, optional) ---------- */
    function initMotion() {
        if (typeof window.gsap === 'undefined' || reduceMotion.matches) return;
        if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

        motionCtx = gsap.context(() => {
            gsap.from('.hero h1, .hero p', {
                opacity: 0,
                y: 16,
                duration: 0.7,
                ease: 'power2.out',
                stagger: 0.1,
                clearProps: 'transform'
            });
            gsap.from('.hero-features li', {
                opacity: 0,
                y: 8,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.08,
                delay: 0.3,
                clearProps: 'transform'
            });

            if (typeof ScrollTrigger !== 'undefined') {
                gsap.utils.toArray('.glass-card').forEach(card => {
                    gsap.fromTo(card,
                        { opacity: 0, y: 24 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: 'power2.out',
                            clearProps: 'transform',
                            immediateRender: false,
                            scrollTrigger: { trigger: card, start: 'top 90%', once: true }
                        }
                    );
                });
            }
        });

        window.addEventListener('pagehide', () => {
            if (motionCtx) motionCtx.revert();
        }, { once: true });
    }

    function animateTips() {
        if (typeof window.gsap === 'undefined' || reduceMotion.matches) return;
        gsap.fromTo('#tiplist .tip-item',
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.06, clearProps: 'transform' }
        );
    }

    /* ---------- INIT ---------- */
    function init() {
        const storedLang = store.get('raia_lang');
        if (storedLang && L10N[storedLang]) curLang = storedLang;

        loadStorage();
        initHeaderScroll();
        initHamburger();
        initSmoothScroll();
        initSlider('lenRange', 'lenVal');
        initSlider('wcRange', 'wcVal');
        initSlider('pinRange', 'pinVal');

        $$('.pill input, .chip input').forEach(inp => {
            const wrap = inp.closest('.pill, .chip');
            inp.addEventListener('change', () => wrap.classList.toggle('on', inp.checked));
            if (inp.checked) wrap.classList.add('on');
        });

        initModeButtons();

        $('#genBtn').addEventListener('click', () => setPw(generate()));
        document.querySelector('[data-action="refresh"]').addEventListener('click', () => setPw(generate()));

        document.querySelector('[data-action="copy"]').addEventListener('click', () => {
            if (!curPw) return;
            const btn = document.querySelector('[data-action="copy"]');
            navigator.clipboard.writeText(curPw).then(() => {
                notify(T('nCopied'));
                btn.style.transform = 'scale(1.3)';
                setTimeout(() => { btn.style.transform = ''; }, 300);
            }).catch(() => notify(T('nFail'), true));
        });

        document.querySelector('[data-action="download"]').addEventListener('click', () => {
            if (!curPw) return;
            const txt = `Password: ${curPw}\n\nGenerated: ${new Date().toLocaleString()}\nStrength: ${$('#slbl').textContent} / ${$('#ebits').textContent} bits\n\nRaia Vault · Haiere`;
            const url = URL.createObjectURL(new Blob([txt], { type: 'text/plain' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'raia_vault.txt';
            a.click();
            URL.revokeObjectURL(url);
            notify(T('nDL'));
        });

        document.querySelector('[data-action="share"]').addEventListener('click', () => {
            if (!curPw) return;
            if (navigator.share) {
                navigator.share({ title: 'Raia Vault', text: curPw }).catch(() => { /* user cancelled */ });
            } else {
                navigator.clipboard.writeText(curPw)
                    .then(() => notify(T('nShared')))
                    .catch(() => notify(T('nFail'), true));
            }
        });

        document.querySelector('[data-action="save"]').addEventListener('click', () => {
            if (!curPw) return;
            $('#vPw').value = curPw;
            switchTab('vault');
            notify(T('nOpenV'));
        });

        $('#clearHistBtn').addEventListener('click', clearHistory);

        let analyzeTimer;
        $('#ainp').addEventListener('input', function () {
            clearTimeout(analyzeTimer);
            analyzeTimer = setTimeout(() => analyzeInput(this.value), 300);
        });

        $('#useCurBtn').addEventListener('click', useCurrentPw);
        $('#saveVaultBtn').addEventListener('click', saveVaultEntry);
        $('#clearVaultBtn').addEventListener('click', clearVault);
        $('#exportCSVBtn').addEventListener('click', exportCSV);

        $$('.tab').forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn.dataset.tab));
        });

        $('#openLangBtn').addEventListener('click', openLangModal);
        $('#langBackdrop').addEventListener('click', closeLangModal);
        $('#langClose').addEventListener('click', closeLangModal);
        document.addEventListener('keydown', e => {
            if (e.key !== 'Escape') return;
            closeLangModal();
            setMenuOpen(false);
        });

        $('#acceptCookiesBtn').addEventListener('click', acceptCookies);
        $('#declineCookiesBtn').addEventListener('click', declineCookies);

        applyLanguage();
        setPw(generate());
        initMotion();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
