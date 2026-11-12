/* ==========================================================================
   RAIA VAULT v1.2.4 - I18N.JS
   Translation dictionary for id (Bahasa Indonesia) and en (English).

   Usage:
   - script.js reads window.RAIA_I18N.
   - index.html uses data-i18n, data-i18n-aria, and data-i18n-placeholder
     attributes that match the keys below.
   - Placeholders ({year}, {version}, {policy}) must stay as written.
   ========================================================================== */
(function (global) {
    'use strict';

    const FLAG_GB = '<svg viewBox="0 0 60 30" aria-hidden="true" focusable="false">' +
        '<path d="M0 0h60v30H0z" fill="#012169"/>' +
        '<path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/>' +
        '<path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="2.5"/>' +
        '<path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>' +
        '<path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>' +
        '</svg>';

    const FLAG_ID = '<svg viewBox="0 0 60 40" aria-hidden="true" focusable="false">' +
        '<path d="M0 0h60v20H0z" fill="#E70011"/>' +
        '<path d="M0 20h60v20H0z" fill="#FFFFFF"/>' +
        '</svg>';

    const en = {
        flag: FLAG_GB,
        name: 'English',
        code: 'EN',

        /* Header and stats */
        gen: 'Generated',
        sav: 'Saved',
        ariaStats: 'Vault statistics',
        ariaLangBtn: 'Change language',
        ariaNavBtn: 'Toggle navigation menu',
        ariaHome: 'Raia Vault home',

        /* Navigation */
        navGen: 'Generator',
        navHist: 'History',
        navAna: 'Analyze',
        navVault: 'Vault',
        navTips: 'Tips',

        /* Hero */
        heroTitle: 'Raia Vault',
        heroDesc: 'Create strong passwords, store them safely, and check how strong they are, all right in your browser.',
        heroCta: 'Get started',
        featClient: 'Runs fully in your browser',
        featSignup: 'No sign-up',
        featRandom: 'Secure random numbers',

        /* Generator */
        cardGen: 'Generator',
        ariaMode: 'Password mode',
        mRandom: 'Random',
        mPronounce: 'Pronounceable',
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
        lblPinD: 'PIN digits',
        lblNR: 'No repeats',
        lblNS: 'No sequences',
        ariaCharOpts: 'Character options',
        ariaRandomOpts: 'Random password options',
        ariaPinOpts: 'PIN options',
        ariaLenRange: 'Password length',
        ariaWcRange: 'Word count',
        ariaPinRange: 'PIN length',
        ariaSep: 'Separator',
        btnGen: 'Generate password',
        ttCopy: 'Copy',
        ttRef: 'New',
        ttSV: 'Save',
        ttDL: 'Download',
        ttSh: 'Share',
        ariaCopy: 'Copy password',
        ariaNew: 'Generate new password',
        ariaSave: 'Save to vault',
        ariaDL: 'Download password',
        ariaSh: 'Share password',
        bitsLbl: 'bits',

        /* Strength labels */
        sLabels: ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'],

        /* Crack time units */
        tLT1: '<1s',
        tSec: 's',
        tMin: 'm',
        tHr: 'h',
        tDay: 'd',
        tYr: 'y',
        tKYr: 'k years',
        tMYr: 'M years',
        tInf: 'Forever',

        /* Tabs and history */
        titleTools: 'Vault tools',
        tabH: 'History',
        tabA: 'Analyze',
        tabV: 'Vault',
        tabT: 'Tips',
        lblClickUse: 'Click a password to use it',
        btnClearH: 'Clear all',
        emptyH: 'No history yet. Passwords you generate will appear here.',

        /* Analyze */
        ainpPH: 'Enter a password to analyze…',
        ariaAnalyze: 'Analyze password',
        aStr: 'Strength',
        aEnt: 'Entropy bits',
        aLen: 'Length',
        aUniq: 'Unique characters',
        aCrack: 'Estimated time to crack (10B guesses/s)',
        cbUp: 'Uppercase',
        cbLo: 'Lowercase',
        cbNu: 'Numbers',
        cbSy: 'Symbols',

        /* Vault */
        vaultTitle: 'Vault',
        csvBtn: 'CSV',
        ariaCsv: 'Export vault as CSV',
        btnClearV: 'Clear',
        vSitePH: 'Website or app',
        vUserPH: 'Username or email',
        vPwPH: 'Password',
        btnUseCur: 'Use current',
        btnSaveV: 'Save to vault',
        emptyV: 'Your vault is empty. Save a password to see it here.',
        ariaToggleVis: 'Show or hide password',
        ariaCopyEntry: 'Copy',
        ariaDelEntry: 'Delete',

        /* Tips */
        tips: [
            { icon: 'key', t: 'Use unique passwords', b: 'Every account should have its own password.' },
            { icon: 'ruler', t: 'Use at least 16 characters', b: 'Longer passwords are much harder to guess.' },
            { icon: 'shuffle', t: 'Mix character types', b: 'Combine uppercase, lowercase, numbers, and symbols.' },
            { icon: 'key', t: 'Passphrases are strong', b: '"Apple-Sky-Blue-Guitar" is easier to remember and harder to guess.' },
            { icon: 'prohibit', t: 'Avoid personal info', b: 'Skip your name, birthday, and common words.' },
            { icon: 'lock', t: 'Turn on 2FA', b: 'Two-factor authentication adds an extra layer of protection.' },
            { icon: 'cabinet', t: 'Use a password manager', b: 'It helps you store and manage many unique passwords.' },
            { icon: 'refresh', t: 'Change passwords regularly', b: 'Update important passwords every 6 to 12 months.' }
        ],

        /* Notifications */
        nCopied: 'Copied!',
        nDL: 'Downloaded!',
        nShared: 'Copied. Paste it to share.',
        nSaved: 'Saved to your vault.',
        nDel: 'Entry deleted.',
        nOpenV: 'Password moved to the Vault tab.',
        nFill: 'Fill in the website and password first.',
        nFail: 'Could not copy. Try copying it by hand.',
        nNoData: 'Nothing to export yet. Save an entry first.',
        nSwitched: 'Language set to English.',
        nCookieOk: 'Cookies accepted.',
        nCookieNo: 'Cookies declined.',
        confirmClear: 'Delete all vault entries? This cannot be undone.',

        /* Language modal */
        langTitle: 'Select language',
        langSearch: 'Search language…',
        ariaLangClose: 'Close language dialog',

        /* Cookie banner */
        cookieText: 'This site uses cookies to improve your experience. By using Raia Vault, you agree to our {policy}.',
        cookiePolicy: 'Cookie Policy',
        btnReject: 'Reject',
        btnAccept: 'Accept',

        /* Footer and donate */
        donate: 'Donate',
        donateFull: 'Buy me a coffee',
        ariaDonate: 'Support Raia Vault by buying me a coffee',
        footerTagline: 'Haiere: The Future of Digital Privacy',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms & Conditions',
        copyright: '© {year} Haiere. All rights reserved.',
        footerVer: 'v{version} • stable',

        /* No-JS */
        noscript: 'Raia Vault needs JavaScript to create and check passwords securely in your browser.'
    };

    const id = {
        flag: FLAG_ID,
        name: 'Bahasa Indonesia',
        code: 'ID',

        /* Header and stats */
        gen: 'Dibuat',
        sav: 'Tersimpan',
        ariaStats: 'Statistik vault',
        ariaLangBtn: 'Ganti bahasa',
        ariaNavBtn: 'Buka atau tutup menu',
        ariaHome: 'Beranda Raia Vault',

        /* Navigation */
        navGen: 'Generator',
        navHist: 'Riwayat',
        navAna: 'Analisis',
        navVault: 'Vault',
        navTips: 'Tips',

        /* Hero */
        heroTitle: 'Raia Vault',
        heroDesc: 'Buat password yang kuat, simpan dengan aman, dan cek seberapa kuat password kamu, langsung di browser.',
        heroCta: 'Mulai sekarang',
        featClient: 'Berjalan penuh di browser',
        featSignup: 'Tanpa daftar',
        featRandom: 'Angka acak yang aman',

        /* Generator */
        cardGen: 'Generator',
        ariaMode: 'Mode password',
        mRandom: 'Acak',
        mPronounce: 'Mudah diucap',
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
        lblPPC: 'Huruf kapital',
        lblPinD: 'Jumlah digit',
        lblNR: 'Tanpa pengulangan',
        lblNS: 'Tanpa urutan',
        ariaCharOpts: 'Pilihan karakter',
        ariaRandomOpts: 'Opsi password acak',
        ariaPinOpts: 'Opsi PIN',
        ariaLenRange: 'Panjang password',
        ariaWcRange: 'Jumlah kata',
        ariaPinRange: 'Panjang PIN',
        ariaSep: 'Pemisah',
        btnGen: 'Buat password',
        ttCopy: 'Salin',
        ttRef: 'Baru',
        ttSV: 'Simpan',
        ttDL: 'Unduh',
        ttSh: 'Bagikan',
        ariaCopy: 'Salin password',
        ariaNew: 'Buat password baru',
        ariaSave: 'Simpan ke vault',
        ariaDL: 'Unduh password',
        ariaSh: 'Bagikan password',
        bitsLbl: 'bit',

        /* Strength labels */
        sLabels: ['Sangat lemah', 'Lemah', 'Cukup', 'Kuat', 'Sangat kuat'],

        /* Crack time units */
        tLT1: '<1 dtk',
        tSec: ' dtk',
        tMin: ' mnt',
        tHr: ' jam',
        tDay: ' hari',
        tYr: ' tahun',
        tKYr: ' ribu tahun',
        tMYr: ' juta tahun',
        tInf: 'Selamanya',

        /* Tabs and history */
        titleTools: 'Alat vault',
        tabH: 'Riwayat',
        tabA: 'Analisis',
        tabV: 'Vault',
        tabT: 'Tips',
        lblClickUse: 'Klik password untuk memakainya',
        btnClearH: 'Hapus semua',
        emptyH: 'Belum ada riwayat. Password yang kamu buat akan muncul di sini.',

        /* Analyze */
        ainpPH: 'Masukkan password untuk dianalisis…',
        ariaAnalyze: 'Analisis password',
        aStr: 'Kekuatan',
        aEnt: 'Bit entropi',
        aLen: 'Panjang',
        aUniq: 'Karakter unik',
        aCrack: 'Estimasi waktu untuk dibobol (10 miliar tebakan/dtk)',
        cbUp: 'Huruf besar',
        cbLo: 'Huruf kecil',
        cbNu: 'Angka',
        cbSy: 'Simbol',

        /* Vault */
        vaultTitle: 'Vault',
        csvBtn: 'CSV',
        ariaCsv: 'Ekspor vault ke CSV',
        btnClearV: 'Kosongkan',
        vSitePH: 'Website atau aplikasi',
        vUserPH: 'Username atau email',
        vPwPH: 'Password',
        btnUseCur: 'Pakai saat ini',
        btnSaveV: 'Simpan ke vault',
        emptyV: 'Vault kamu masih kosong. Simpan password untuk melihatnya di sini.',
        ariaToggleVis: 'Tampilkan atau sembunyikan password',
        ariaCopyEntry: 'Salin',
        ariaDelEntry: 'Hapus',

        /* Tips */
        tips: [
            { icon: 'key', t: 'Gunakan password unik', b: 'Setiap akun sebaiknya punya password sendiri.' },
            { icon: 'ruler', t: 'Minimal 16 karakter', b: 'Password yang lebih panjang jauh lebih sulit ditebak.' },
            { icon: 'shuffle', t: 'Campur jenis karakter', b: 'Gabungkan huruf besar, huruf kecil, angka, dan simbol.' },
            { icon: 'key', t: 'Passphrase itu kuat', b: '"Apel-Langit-Biru-Gitar" lebih mudah diingat dan sulit ditebak.' },
            { icon: 'prohibit', t: 'Hindari info pribadi', b: 'Jangan pakai nama, tanggal lahir, atau kata yang umum.' },
            { icon: 'lock', t: 'Aktifkan 2FA', b: 'Autentikasi dua langkah menambah lapisan perlindungan.' },
            { icon: 'cabinet', t: 'Gunakan password manager', b: 'Membantu kamu menyimpan dan mengelola banyak password unik.' },
            { icon: 'refresh', t: 'Ganti password berkala', b: 'Perbarui password penting setiap 6 sampai 12 bulan.' }
        ],

        /* Notifications */
        nCopied: 'Tersalin!',
        nDL: 'Berhasil diunduh!',
        nShared: 'Tersalin. Tempel untuk membagikannya.',
        nSaved: 'Tersimpan di vault kamu.',
        nDel: 'Entri dihapus.',
        nOpenV: 'Password dipindahkan ke tab Vault.',
        nFill: 'Isi nama website dan password dulu.',
        nFail: 'Gagal menyalin. Coba salin secara manual.',
        nNoData: 'Belum ada data untuk diekspor. Simpan entri dulu.',
        nSwitched: 'Bahasa diubah ke Bahasa Indonesia.',
        nCookieOk: 'Cookie diterima.',
        nCookieNo: 'Cookie ditolak.',
        confirmClear: 'Hapus semua entri di vault? Tindakan ini tidak bisa dibatalkan.',

        /* Language modal */
        langTitle: 'Pilih bahasa',
        langSearch: 'Cari bahasa…',
        ariaLangClose: 'Tutup dialog bahasa',

        /* Cookie banner */
        cookieText: 'Situs ini memakai cookie untuk meningkatkan pengalaman kamu. Dengan menggunakan Raia Vault, kamu menyetujui {policy} kami.',
        cookiePolicy: 'Kebijakan Cookie',
        btnReject: 'Tolak',
        btnAccept: 'Terima',

        /* Footer and donate */
        donate: 'Donasi',
        donateFull: 'Traktir saya kopi',
        ariaDonate: 'Dukung Raia Vault dengan mentraktir saya kopi',
        footerTagline: 'Haiere: Masa Depan Privasi Digital',
        footerPrivacy: 'Kebijakan Privasi',
        footerTerms: 'Syarat & Ketentuan',
        copyright: '© {year} Haiere. Hak cipta dilindungi.',
        footerVer: 'v{version} • stabil',

        /* No-JS */
        noscript: 'Raia Vault membutuhkan JavaScript untuk membuat dan memeriksa password dengan aman di browser kamu.'
    };

    global.RAIA_I18N = { en: en, id: id };
})(window);
