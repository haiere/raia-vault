        (function() {
            'use strict';

            const $ = (sel, ctx = document) => ctx.querySelector(sel);
            const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
            const T = key => (L10N[curLang] && L10N[curLang][key]) || key;

            const CIRC = 144.51;
            const SC = ['#f87171', '#fb923c', '#fbbf24', '#4ade80', '#34d399'];
            const WORDLIST = [
                'apple', 'brave', 'cloud', 'dance', 'eagle', 'flame', 'grace', 'happy', 'iron', 'jungle',
                'king', 'light', 'moon', 'night', 'ocean', 'pearl', 'quick', 'river', 'stone', 'tiger',
                'ultra', 'vivid', 'water', 'xenon', 'yellow', 'zebra', 'amber', 'blaze', 'crisp', 'delta',
                'echo', 'fresh', 'globe', 'hero', 'input', 'jewel', 'karma', 'lemon', 'magic', 'noble',
                'orbit', 'pixel', 'quest', 'radio', 'solar', 'tower', 'unity', 'valor', 'wheat', 'yacht'
            ];

            let curLang = 'id';
            let mode = 'random';
            let curPw = '';
            let genCount = 0;
            let hist = [];
            let vault = [];
            let cookieAccepted = null;

            const L10N = {
                en: {
                    flag: '🇬🇧',
                    name: 'English',
                    code: 'EN',
                    sub: 'Password Generator Pro',
                    gen: 'Generated',
                    sav: 'Saved',
                    cardGen: 'Generator',
                    mRandom: 'Random',
                    mPronounce: 'Pronounce',
                    mPP: 'Passphrase',
                    mPin: 'PIN',
                    lblLength: 'Length',
                    lblChars: 'Characters',
                    lblSpace: 'Space',
                    lblSim: 'Avoid O0l1',
                    lblAmb: 'Avoid {}[]',
                    lblMask: 'Hide',
                    lblWC: 'Word count',
                    lblSep: 'Separator:',
                    lblPPN: '+ Number',
                    lblPPC: 'Capitalize',
                    lblPinD: 'PIN Digits',
                    lblNR: 'No repeat',
                    lblNS: 'No sequence',
                    btnGen: 'Generate Password',
                    ttCopy: 'Copy',
                    ttRef: 'New',
                    ttSV: 'Save',
                    ttDL: 'Download',
                    ttSh: 'Share',
                    tabH: 'History',
                    tabA: 'Analyze',
                    tabV: 'Vault',
                    tabT: 'Tips',
                    lblClickUse: 'Click to use',
                    btnClearH: 'Clear all',
                    emptyH: 'No history yet',
                    emptyV: 'Vault is empty.',
                    ainpPH: 'Enter a password to analyze…',
                    aStr: 'Strength',
                    aEnt: 'Entropy Bits',
                    aLen: 'Length',
                    aUniq: 'Unique Chars',
                    aCrack: 'Est. crack time (10B/s)',
                    cbUp: 'Uppercase',
                    cbLo: 'Lowercase',
                    cbNu: 'Numbers',
                    cbSy: 'Symbols',
                    vSitePH: '🌐 Website / App',
                    vUserPH: '👤 Username / Email',
                    vPwPH: '🔑 Password',
                    btnUseCur: 'Use current',
                    btnSaveV: 'Save to Vault',
                    sLabels: ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'],
                    tLT1: '<1s',
                    tSec: 's',
                    tMin: 'm',
                    tHr: 'h',
                    tDay: 'd',
                    tYr: 'y',
                    tKYr: 'k yr',
                    tMYr: 'M yr',
                    tInf: 'Forever',
                    nCopied: 'Copied!',
                    nDL: 'Downloaded!',
                    nShared: 'Copied to share!',
                    nSaved: 'Saved to vault!',
                    nDel: 'Entry deleted',
                    nOpenV: 'Open Vault tab!',
                    nFill: 'Fill site & password!',
                    nFail: 'Copy failed',
                    nSwitched: 'Language set to English',
                    langTitle: 'Language / Bahasa',
                    langSearch: 'Search language…',
                    heroTitle: 'Raia Vault',
                    heroDesc: 'Generate, store, and analyze passwords with enterprise-grade security — right in your browser.',
                    heroCta: '✨ Get Started',
                    tips: [
                        { e: '🔑', t: 'Use unique passwords', b: 'Every account needs a different password.' },
                        { e: '📏', t: 'At least 16 characters', b: 'Longer passwords dramatically increase security.' },
                        { e: '🔀', t: 'Mix character types', b: 'Use uppercase, lowercase, numbers and symbols together.' },
                        { e: '🗝', t: 'Passphrases are strong', b: '"Apple-Sky-Blue-Guitar" is easier to remember and safer.' },
                        { e: '🚫', t: 'Avoid personal info', b: "Don't use your name, birthday, or common words." },
                        { e: '🔒', t: 'Enable 2FA', b: 'Two-factor authentication adds extra security.' },
                        { e: '🗃', t: 'Use a password manager', b: 'Helps you store and manage thousands of unique passwords.' },
                        { e: '🔄', t: 'Rotate passwords regularly', b: 'Change at least every 6–12 months for important accounts.' }
                    ]
                },
                id: {
                    flag: '🇮🇩',
                    name: 'Indonesia',
                    code: 'ID',
                    sub: 'Password Generator Pro',
                    gen: 'Dibuat',
                    sav: 'Tersimpan',
                    cardGen: 'Generator',
                    mRandom: 'Acak',
                    mPronounce: 'Diucap',
                    mPP: 'Passphrase',
                    mPin: 'PIN',
                    lblLength: 'Panjang',
                    lblChars: 'Karakter',
                    lblSpace: 'Spasi',
                    lblSim: 'Hindari O0l1',
                    lblAmb: 'Hindari {}[]',
                    lblMask: 'Sembunyikan',
                    lblWC: 'Jumlah kata',
                    lblSep: 'Pemisah:',
                    lblPPN: '+ Angka',
                    lblPPC: 'Kapital',
                    lblPinD: 'Digit PIN',
                    lblNR: 'Tanpa ulang',
                    lblNS: 'Tanpa urutan',
                    btnGen: 'Buat Password',
                    ttCopy: 'Salin',
                    ttRef: 'Baru',
                    ttSV: 'Simpan',
                    ttDL: 'Unduh',
                    ttSh: 'Bagikan',
                    tabH: 'Riwayat',
                    tabA: 'Analisis',
                    tabV: 'Vault',
                    tabT: 'Tips',
                    lblClickUse: 'Klik untuk pakai',
                    btnClearH: 'Hapus semua',
                    emptyH: 'Belum ada riwayat',
                    emptyV: 'Vault kosong.',
                    ainpPH: 'Masukkan password untuk dianalisis…',
                    aStr: 'Kekuatan',
                    aEnt: 'Bit Entropi',
                    aLen: 'Panjang',
                    aUniq: 'Karakter Unik',
                    aCrack: 'Estimasi waktu crack (10B/dtk)',
                    cbUp: 'Huruf besar',
                    cbLo: 'Huruf kecil',
                    cbNu: 'Angka',
                    cbSy: 'Simbol',
                    vSitePH: '🌐 Website / Aplikasi',
                    vUserPH: '👤 Username / Email',
                    vPwPH: '🔑 Password',
                    btnUseCur: 'Pakai saat ini',
                    btnSaveV: 'Simpan ke Vault',
                    sLabels: ['Sangat Lemah', 'Lemah', 'Cukup', 'Kuat', 'Sangat Kuat'],
                    tLT1: '<1 dtk',
                    tSec: ' dtk',
                    tMin: ' mnt',
                    tHr: ' jam',
                    tDay: ' hari',
                    tYr: ' thn',
                    tKYr: ' ribu thn',
                    tMYr: ' juta thn',
                    tInf: 'Selamanya',
                    nCopied: 'Disalin!',
                    nDL: 'File diunduh!',
                    nShared: 'Disalin untuk dibagikan!',
                    nSaved: 'Tersimpan di vault!',
                    nDel: 'Entri dihapus',
                    nOpenV: 'Buka tab Vault!',
                    nFill: 'Isi website & password!',
                    nFail: 'Gagal menyalin',
                    nSwitched: 'Bahasa diubah ke Indonesia',
                    langTitle: 'Bahasa / Language',
                    langSearch: 'Cari bahasa…',
                    heroTitle: 'Raia Vault',
                    heroDesc: 'Hasilkan, simpan, dan analisis password dengan keamanan tingkat enterprise — langsung di browser Anda.',
                    heroCta: '✨ Mulai Sekarang',
                    tips: [
                        { e: '🔑', t: 'Gunakan password unik', b: 'Setiap akun harus memiliki password berbeda.' },
                        { e: '📏', t: 'Minimal 16 karakter', b: 'Password lebih panjang secara dramatis meningkatkan keamanan.' },
                        { e: '🔀', t: 'Campur jenis karakter', b: 'Gunakan huruf besar, kecil, angka, dan simbol bersamaan.' },
                        { e: '🗝', t: 'Passphrase itu kuat', b: '"Apel-Langit-Biru-Gitar" lebih mudah diingat dan lebih aman.' },
                        { e: '🚫', t: 'Hindari info pribadi', b: 'Jangan gunakan nama, tanggal lahir, atau kata umum.' },
                        { e: '🔒', t: 'Aktifkan 2FA', b: 'Two-Factor Authentication menambah lapisan keamanan extra.' },
                        { e: '🗃', t: 'Pakai password manager', b: 'Bantu kamu menyimpan dan mengelola ribuan password unik.' },
                        { e: '🔄', t: 'Ganti password berkala', b: 'Ganti setidaknya setiap 6–12 bulan untuk akun penting.' }
                    ]
                }
            };

            /* -------- Storage -------- */
            function loadStorage() {
                try {
                    const v = localStorage.getItem('raia_vault');
                    if (v) vault = JSON.parse(v);
                    const h = localStorage.getItem('raia_hist');
                    if (h) hist = JSON.parse(h);
                    const gc = localStorage.getItem('raia_gc');
                    if (gc) genCount = parseInt(gc) || 0;
                    const ca = localStorage.getItem('raia_cookie');
                    if (ca === 'true') cookieAccepted = true;
                    if (ca === 'false') cookieAccepted = false;
                } catch (_) { /* ignore */ }
                updateStats();
                renderHist();
                renderVault();
                handleCookieBanner();
            }

            function saveVaultLS() { localStorage.setItem('raia_vault', JSON.stringify(vault));
                updateStats(); }

            function saveHistLS() { localStorage.setItem('raia_hist', JSON.stringify(hist)); }

            function saveGC() { localStorage.setItem('raia_gc', genCount); }

            function updateStats() {
                $('#statGen').textContent = genCount;
                $('#statSav').textContent = vault.length;
            }

            /* -------- Cookie -------- */
            function handleCookieBanner() {
                const banner = $('#cookieBanner');
                if (cookieAccepted === true || cookieAccepted === false) {
                    banner.classList.remove('show');
                } else {
                    banner.classList.add('show');
                }
            }

            function acceptCookies() {
                cookieAccepted = true;
                localStorage.setItem('raia_cookie', 'true');
                $('#cookieBanner').classList.remove('show');
                notify('🍪 Cookie diterima');
            }

            function declineCookies() {
                cookieAccepted = false;
                localStorage.setItem('raia_cookie', 'false');
                $('#cookieBanner').classList.remove('show');
                notify('🍪 Cookie ditolak');
            }

            /* -------- Notification -------- */
            let notifTimer;

            function notify(msg, err = false) {
                const el = $('#notif');
                $('#ntxt').textContent = msg;
                el.style.borderColor = err ? 'rgba(248,113,113,.4)' : 'rgba(59,130,246,.22)';
                const dot = $('#ndot');
                dot.style.background = err ? '#f87171' : 'var(--blue)';
                dot.style.boxShadow = err ? '0 0 10px #f87171' : '0 0 10px var(--blue)';
                el.classList.add('show');
                clearTimeout(notifTimer);
                notifTimer = setTimeout(() => el.classList.remove('show'), 2500);
            }

            /* -------- Crypto random -------- */
            function cryptoRandom(min, max) {
                const range = max - min + 1;
                const bytes = new Uint32Array(1);
                window.crypto.getRandomValues(bytes);
                return min + Math.floor(bytes[0] / (0xffffffff + 1) * range);
            }

            /* -------- Generator -------- */
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
                while (pw.length < len) {
                    pw += pool[cryptoRandom(0, pool.length - 1)];
                }
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
                if ($('#cU') && $('#cU').checked) {
                    pw = pw.charAt(0).toUpperCase() + pw.slice(1);
                }
                if ($('#cN') && $('#cN').checked) {
                    const p = cryptoRandom(0, pw.length - 2);
                    pw = pw.slice(0, p) + cryptoRandom(0, 9) + pw.slice(p + 1);
                }
                return pw.slice(0, len);
            }

            function genPassphrase() {
                const cnt = parseInt($('#wcRange').value);
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
                const len = parseInt($('#pinRange').value);
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
                const len = parseInt($('#lenRange').value);
                if (mode === 'random') return genRandom(len);
                if (mode === 'pronounce') return genPronounce(len);
                if (mode === 'passphrase') return genPassphrase();
                if (mode === 'pin') return genPin();
                return '';
            }

            /* -------- Strength -------- */
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
                const L = L10N[curLang];
                const v = Math.pow(2, bits) / 1e10;
                if (v < 1) return L.tLT1;
                if (v < 60) return Math.round(v) + L.tSec;
                if (v < 3600) return Math.round(v / 60) + L.tMin;
                if (v < 86400) return Math.round(v / 3600) + L.tHr;
                if (v < 31536e3) return Math.round(v / 86400) + L.tDay;
                if (v < 3.154e9) return Math.round(v / 31536e3) + L.tYr;
                if (v < 3.154e12) return (v / 3.154e9).toFixed(1) + L.tKYr;
                if (v < 3.154e15) return (v / 3.154e12).toFixed(1) + L.tMYr;
                return L.tInf;
            }

            function updateStrength(pw) {
                const bits = entropy(pw);
                const score = scoreBits(bits);
                const col = pw ? SC[Math.min(score, 4)] : 'var(--text-muted)';
                const bars = $$('.strength-bars .bar');
                bars.forEach((b, i) => {
                    const lit = (i < score && pw);
                    b.style.background = lit ? col : 'rgba(59,130,246,.08)';
                    b.classList.toggle('lit', !!lit);
                });
                const SL = L10N[curLang].sLabels;
                $('#slbl').textContent = pw ? SL[Math.min(score, 4)] : '—';
                $('#slbl').style.color = col;
                $('#crack').textContent = pw ? ('⏱ ' + crackTime(bits)) : '';
                $('#ebits').textContent = bits;
                $('#ebits').style.color = col;
                const pct = Math.min(bits / 128, 1);
                const rfl = $('#rfl');
                rfl.style.strokeDashoffset = CIRC - pct * CIRC;
                rfl.style.stroke = col;
            }

            /* -------- Set Password -------- */
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

            /* -------- History -------- */
            function addHistory(pw) {
                const bits = entropy(pw);
                const score = scoreBits(bits);
                const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                hist.unshift({ pw, score, time, len: pw.length });
                if (hist.length > 20) hist.pop();
                saveHistLS();
                renderHist();
            }

            function renderHist() {
                const el = $('#hlist');
                if (!hist.length) {
                    el.innerHTML =
                        `<div class="empty-state"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>${T('emptyH')}</span></div>`;
                    return;
                }
                el.innerHTML = hist.map((h, i) => `
                    <div class="hist-item" data-index="${i}">
                      <div class="hpw">${escapeHtml(h.pw)}</div>
                      <div class="hmeta">
                        <span class="time">${h.time}</span>
                        <div class="row">
                          <span class="dot" style="background:${SC[Math.min(h.score, 4)]}"></span>
                          <span class="len">${h.len}c</span>
                        </div>
                      </div>
                    </div>
                  `).join('');
                el.querySelectorAll('.hist-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const idx = parseInt(item.dataset.index);
                        const pw = hist[idx].pw;
                        setPw(pw);
                        navigator.clipboard.writeText(pw).then(() => notify(T('nCopied')));
                    });
                });
            }

            function clearHistory() {
                hist = [];
                saveHistLS();
                renderHist();
            }

            /* -------- Analyze -------- */
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
                    <div class="analyze-stat"><div class="val" style="color:${col}">${L.sLabels[Math.min(score,4)]}</div><div class="lbl">${L.aStr}</div></div>
                    <div class="analyze-stat"><div class="val">${bits}</div><div class="lbl">${L.aEnt}</div></div>
                    <div class="analyze-stat"><div class="val">${pw.length}</div><div class="lbl">${L.aLen}</div></div>
                    <div class="analyze-stat"><div class="val">${uniq}</div><div class="lbl">${L.aUniq}</div></div>
                    <div class="analyze-stat" style="grid-column:1/-1"><div class="val" style="font-size:var(--text-sm);">${crackTime(bits)}</div><div class="lbl">${L.aCrack}</div></div>
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
                      <div class="cbg"><div class="fill" style="width:${pw.length ? (c.count/pw.length*100) : 0}%;background:${c.color}"></div></div>
                      <span class="cnt">${c.count}</span>
                    </div>
                  `).join('');
            }

            /* -------- Vault -------- */
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

            function renderVault() {
                const el = $('#ventries');
                if (!vault.length) {
                    el.innerHTML =
                        `<div class="empty-state"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>${T('emptyV')}</span></div>`;
                    return;
                }
                const icons = ['🌐', '📱', '🏠', '🛒', '📧', '🎮', '💼', '🔐'];
                el.innerHTML = vault.map((v, i) => `
                    <div class="vault-entry" data-index="${i}">
                      <div class="vico">${icons[i % icons.length]}</div>
                      <div class="vinfo">
                        <div class="site">${escapeHtml(v.site)}</div>
                        <div class="user">${v.user || '—'}</div>
                        <div class="pw" data-blur="true">${escapeHtml(v.pw)}</div>
                      </div>
                      <div class="vacts">
                        <button class="vab" data-action="toggleBlur" aria-label="Toggle visibility"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7z"/></svg></button>
                        <button class="vab" data-action="copyVault" aria-label="Copy"><svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
                        <button class="vab" data-action="deleteVault" aria-label="Delete"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg></button>
                      </div>
                    </div>
                  `).join('');

                el.querySelectorAll('.vault-entry').forEach(item => {
                    const idx = parseInt(item.dataset.index);
                    const pwEl = item.querySelector('.pw');
                    const btns = item.querySelectorAll('.vab');
                    btns.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const action = btn.dataset.action;
                            if (action === 'toggleBlur') {
                                pwEl.classList.toggle('unblur');
                                pwEl.dataset.blur = pwEl.classList.contains('unblur') ? 'false' : 'true';
                            } else if (action === 'copyVault') {
                                navigator.clipboard.writeText(vault[idx].pw).then(() => notify(T(
                                'nCopied')));
                            } else if (action === 'deleteVault') {
                                vault.splice(idx, 1);
                                saveVaultLS();
                                renderVault();
                                notify(T('nDel'));
                            }
                        });
                    });
                    item.addEventListener('click', () => {
                        pwEl.classList.toggle('unblur');
                        pwEl.dataset.blur = pwEl.classList.contains('unblur') ? 'false' : 'true';
                    });
                });
            }

            function clearVault() {
                if (confirm('Hapus semua entri vault?')) {
                    vault = [];
                    saveVaultLS();
                    renderVault();
                    notify(T('nDel'));
                }
            }

            function exportCSV() {
                if (!vault.length) { notify('No data', true); return; }
                let csv = 'Website,Username,Password\n';
                vault.forEach(v => {
                    csv += `"${v.site || ''}","${v.user || ''}","${v.pw || ''}"\n`;
                });
                const blob = new Blob([csv], { type: 'text/csv' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'raia_vault.csv';
                a.click();
                URL.revokeObjectURL(a.href);
                notify(T('nDL'));
            }

            /* -------- Tips -------- */
            function renderTips() {
                const tips = L10N[curLang].tips;
                if (!tips) return;
                $('#tiplist').innerHTML = tips.map(t => `
                    <div class="tip-item">
                      <span class="ico">${t.e}</span>
                      <div>
                        <div class="tit">${t.t}</div>
                        <div class="bod">${t.b}</div>
                      </div>
                    </div>
                  `).join('');
            }

            /* -------- Language -------- */
            function buildLangGrid() {
                const keys = Object.keys(L10N);
                const html = keys.map(k => {
                    const l = L10N[k];
                    return `<div class="lang-item${k===curLang?' active':''}" data-lang="${k}">
                        <span class="flag">${l.flag}</span>
                        <div class="info"><div class="name">${l.name}</div></div>
                        <span class="code">${l.code}</span>
                        <div class="check"><svg viewBox="0 0 10 10"><polyline points="2,5 4,8 8,3"/></svg></div>
                      </div>`;
                }).join('');
                $('#langGrid').innerHTML = html;
                $('#langGrid').querySelectorAll('.lang-item').forEach(el => {
                    el.addEventListener('click', () => {
                        const lang = el.dataset.lang;
                        if (lang !== curLang) {
                            curLang = lang;
                            applyLanguage();
                            notify(T('nSwitched'));
                            const inp = $('#ainp');
                            if (inp && inp.value) inp.dispatchEvent(new Event('input'));
                        }
                        closeLangModal();
                    });
                });
                $('#langSearch').addEventListener('input', function() {
                    const q = this.value.toLowerCase().trim();
                    $$('.lang-item').forEach(el => {
                        const name = el.querySelector('.name').textContent.toLowerCase();
                        const code = el.querySelector('.code').textContent.toLowerCase();
                        el.classList.toggle('hidden', !(name.includes(q) || code.includes(q)));
                    });
                });
            }

            function openLangModal() {
                const overlay = $('#langOverlay');
                overlay.classList.add('open');
                $('#modalLangTitle').textContent = T('langTitle');
                $('#langSearch').placeholder = T('langSearch') || 'Search…';
                $('#langSearch').value = '';
                buildLangGrid();
                setTimeout(() => $('#langSearch').focus(), 350);
            }

            function closeLangModal() {
                $('#langOverlay').classList.remove('open');
            }

            function applyLanguage() {
                const L = L10N[curLang];
                if (!L) return;
                document.documentElement.lang = curLang;
                document.documentElement.dir = (curLang === 'ar') ? 'rtl' : 'ltr';
                $('#curLangCode').textContent = L.code;
                $('#lblGen').textContent = L.gen;
                $('#lblSav').textContent = L.sav;
                $('#cardHtGen').textContent = L.cardGen;
                $('#mRandom').textContent = L.mRandom;
                $('#mPronounce').textContent = L.mPronounce;
                $('#mPassphrase').textContent = L.mPP;
                $('#mPin').textContent = L.mPin;
                $('#lblLength').textContent = L.lblLength;
                $('#lblChars').textContent = L.lblChars;
                $('#lblSpace').textContent = L.lblSpace;
                $('#lblSim').textContent = L.lblSim;
                $('#lblAmb').textContent = L.lblAmb;
                $('#lblMask').textContent = L.lblMask;
                $('#lblWC').textContent = L.lblWC;
                $('#lblSep').textContent = L.lblSep;
                $('#lblPPN').textContent = L.lblPPN;
                $('#lblPPC').textContent = L.lblPPC;
                $('#lblPinD').textContent = L.lblPinD;
                $('#lblNR').textContent = L.lblNR;
                $('#lblNS').textContent = L.lblNS;
                $('#btnGenTxt').textContent = L.btnGen;
                $('#ttCopy').textContent = L.ttCopy;
                $('#ttRef').textContent = L.ttRef;
                $('#ttSV').textContent = L.ttSV;
                $('#ttDL').textContent = L.ttDL;
                $('#ttSh').textContent = L.ttSh;
                $('#tabHist').textContent = L.tabH;
                $('#tabAna').textContent = L.tabA;
                $('#tabVault').textContent = L.tabV;
                $('#tabTips').textContent = L.tabT;
                $('#lblClickUse').textContent = L.lblClickUse;
                $('#btnClearH').textContent = L.btnClearH;
                $('#ainp').placeholder = L.ainpPH;
                $('#vSite').placeholder = L.vSitePH;
                $('#vUser').placeholder = L.vUserPH;
                $('#vPw').placeholder = L.vPwPH;
                $('#btnUseCur').textContent = L.btnUseCur;
                $('#btnSaveV').textContent = L.btnSaveV;
                $('#heroTitle').textContent = L.heroTitle;
                $('#heroDesc').textContent = L.heroDesc;
                document.querySelector('.hero-cta').textContent = L.heroCta;
                if (curPw) updateStrength(curPw);
                else $('#pwt').textContent = '—';
                renderHist();
                renderVault();
                renderTips();
                const inp = $('#ainp');
                if (inp && inp.value) inp.dispatchEvent(new Event('input'));
            }

            /* -------- Tabs -------- */
            function switchTab(tabId) {
                const tabs = ['hist', 'ana', 'vault', 'tips'];
                $$('.tab').forEach((btn, i) => {
                    btn.classList.toggle('on', tabs[i] === tabId);
                });
                $$('.tp').forEach(p => {
                    p.classList.toggle('on', p.id === 'tp-' + tabId);
                });
            }

            /* -------- Helpers -------- */
            function escapeHtml(s) {
                if (!s) return '';
                return s.replace(/[&<>"']/g, m => {
                    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
                    return map[m];
                });
            }

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

            function initHamburger() {
                const btn = $('#hamburgerBtn');
                const nav = $('#mobileNav');
                btn.addEventListener('click', () => {
                    const open = nav.classList.toggle('open');
                    btn.classList.toggle('active', open);
                    btn.setAttribute('aria-expanded', open);
                });
                nav.querySelectorAll('.mobile-link').forEach(link => {
                    link.addEventListener('click', () => {
                        nav.classList.remove('open');
                        btn.classList.remove('active');
                        btn.setAttribute('aria-expanded', 'false');
                    });
                });
                document.addEventListener('click', (e) => {
                    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
                        nav.classList.remove('open');
                        btn.classList.remove('active');
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });
            }

            function initSmoothScroll() {
                document.querySelector('.hero-cta').addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector('#generator');
                    if (target) {
                        const y = target.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                });
            }

            /* -------- Init -------- */
            function init() {
                loadStorage();
                initHeaderScroll();
                initHamburger();
                initSmoothScroll();
                initSlider('lenRange', 'lenVal');
                initSlider('wcRange', 'wcVal');
                initSlider('pinRange', 'pinVal');

                $$('.pill input, .chip input').forEach(inp => {
                    inp.addEventListener('change', function() {
                        this.closest('.pill, .chip').classList.toggle('on', this.checked);
                    });
                    if (inp.checked) inp.closest('.pill, .chip').classList.add('on');
                });

                $$('.mode-row .mbtn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const m = this.dataset.mode;
                        mode = m;
                        $$('.mode-row .mbtn').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
                        $('#panRandom').style.display = (m === 'random' || m === 'pronounce') ? '' : 'none';
                        $('#panPP').style.display = m === 'passphrase' ? '' : 'none';
                        $('#panPin').style.display = m === 'pin' ? '' : 'none';
                    });
                });

                $('#genBtn').addEventListener('click', () => setPw(generate()));
                document.querySelector('[data-action="refresh"]').addEventListener('click', () => setPw(generate()));

                document.querySelector('[data-action="copy"]').addEventListener('click', () => {
                    if (!curPw) return;
                    navigator.clipboard.writeText(curPw).then(() => {
                        notify(T('nCopied'));
                        const btn = document.querySelector('[data-action="copy"]');
                        btn.style.transform = 'scale(1.3)';
                        setTimeout(() => btn.style.transform = '', 300);
                    }).catch(() => notify(T('nFail'), true));
                });

                document.querySelector('[data-action="download"]').addEventListener('click', () => {
                    if (!curPw) return;
                    const txt =
                        `Password: ${curPw}\n\nGenerated: ${new Date().toLocaleString()}\nStrength: ${$('#slbl').textContent} / ${$('#ebits').textContent} bits\n\nRaia Vault · Haiere`;
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain' }));
                    a.download = 'raia_vault.txt';
                    a.click();
                    notify(T('nDL'));
                });

                document.querySelector('[data-action="share"]').addEventListener('click', () => {
                    if (!curPw) return;
                    if (navigator.share) navigator.share({ title: 'Raia Vault', text: curPw });
                    else navigator.clipboard.writeText(curPw).then(() => notify(T('nShared')));
                });

                document.querySelector('[data-action="save"]').addEventListener('click', () => {
                    if (!curPw) return;
                    $('#vPw').value = curPw;
                    switchTab('vault');
                    notify(T('nOpenV'));
                });

                $('#clearHistBtn').addEventListener('click', clearHistory);

                let analyzeTimer;
                $('#ainp').addEventListener('input', function() {
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
                document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLangModal(); });

                $('#acceptCookiesBtn').addEventListener('click', acceptCookies);
                $('#declineCookiesBtn').addEventListener('click', declineCookies);

                applyLanguage();
                setPw(generate());
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
        })();