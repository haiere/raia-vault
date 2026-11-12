<div align="center">

# Raia Vault

**A privacy-focused password generator, strength analyzer, and local credential vault that runs in your browser.**

Create, check, and store passwords on your own device, with no account and no server.

<br />

<a href="https://raia-vault.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Live_Demo-raia--vault.haiere.workers.dev-3B82F6?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Open the Raia Vault live demo" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support_the_Project-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support Raia Vault on Buy Me a Coffee" />
</a>

<br />

<img src="https://img.shields.io/badge/Version-1.2.4-blue?style=flat-square" alt="Version 1.2.4" />
<img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status: active" />
<img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="MIT License" />

<br />

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/JavaScript-Client_Side-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="Client-side JavaScript" />
<img src="https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square" alt="GSAP 3.12.5" />
<img src="https://img.shields.io/badge/Privacy_First-Local_Processing-8B5CF6?style=flat-square" alt="Privacy-first local processing" />

</div>

> [!WARNING]
> Raia Vault stores vault data in browser `localStorage` without encryption. Do not use it as a replacement for a professionally audited password manager when you store highly sensitive credentials.

## Table of Contents

- [Overview](#overview)
- [What's New in v1.2.4](#whats-new-in-v124)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Privacy Model](#privacy-model)
- [Security Considerations](#security-considerations)
- [Limitations](#limitations)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Development Setup](#development-setup)
- [License](#license)
- [Author and Support](#author-and-support)

## Overview

Raia Vault is a static web application that runs in a modern browser. It includes four tools:

- A password generator with random, pronounceable, passphrase, and PIN modes
- A real-time password strength analyzer
- A local credential vault
- A history panel for recently generated passwords

It is built for people who want a simple tool without mandatory accounts, cloud synchronization, or a third-party database. Password generation, analysis, and storage all happen in the browser.

## What's New in v1.2.4

Released on 13 November 2026.

### Structure and interface

- Moved all interface text into `i18n.js`, which provides English (`en`) and Indonesian (`id`) strings.
- Text is applied from `data-i18n` attributes in `index.html`, so new text can be added without changing the script logic.
- Replaced the emoji flags and the emoji clock icon with inline SVG icons.
- Refreshed spacing, typography, focus styles, and touch target sizes in `style.css`.
- Added GSAP animations for the hero section, section reveals, and the tips list. Animations respect the reduced-motion preference.

### Accessibility

- Added visible keyboard focus indicators.
- Made all touch controls at least 44 by 44 pixels on touch devices.
- Made the checkbox options reachable with the keyboard.
- Made the language list usable with the keyboard, and added Escape to close the language dialog and the mobile menu.
- Mode buttons now report their pressed state to assistive technology.

### Fixes

- Fixed an initialization error in the language code that stopped the first password from being generated.
- Error and status messages now explain what to do next, and they are translated.
- Clipboard and share actions handle failures without breaking the page.
- Storage access is wrapped in error handling, so the app still runs when browser storage is blocked.

### Compatibility

- Existing `localStorage` keys are unchanged, so saved vault entries, history, and language settings remain available after the update.

## Features

### Password Generator

- **Random:** letters, numbers, and symbols, with a length from 4 to 128 characters.
- **Pronounceable:** alternating consonants and vowels, with optional uppercase and number options.
- **Passphrase:** 3 to 12 words from a built-in list of 50 words, with a custom separator, optional number, and optional capitalization.
- **PIN:** 4 to 12 digits, with options to avoid repeated digits and digit sequences.
- **Random options:** avoid look-alike characters (`O`, `0`, `l`, `1`, `I`, `|`), avoid brackets and similar punctuation, and hide the generated password on screen.
- Random values come from `window.crypto.getRandomValues()`.

### Password Strength Analysis

- Strength rating on a five-level scale
- Entropy estimate in bits, based on the character set used
- Estimated time to crack, assuming 10 billion guesses per second
- Password length and unique character count
- Character distribution for uppercase letters, lowercase letters, numbers, and symbols

### Local Vault

- Save a website or app name, a username or email, and a password
- Reveal or hide saved passwords by selecting an entry
- Copy a saved password
- Delete a single entry or clear all entries
- Store entries in the browser's `localStorage`

### History

- Keep the latest 20 generated passwords, with the time of generation and a strength indicator
- Select a history item to show it in the generator and copy it
- Clear the history

### Export

- Export vault entries as a CSV file with `Website`, `Username`, and `Password` columns
- The file is created in the browser and downloaded directly

### Interface

- English and Indonesian interface languages, with the selected language saved in the browser
- Responsive layout for desktop and mobile screens
- Keyboard navigation for the main controls
- Reduced-motion support
- Optional donation button and footer link

## Requirements

| Requirement | Details |
|---|---|
| **Browser** | A modern browser with JavaScript enabled |
| **Storage** | `localStorage` must be available and not blocked |
| **Crypto** | Web Crypto API (`window.crypto.getRandomValues()`) |
| **Network** | Fonts, the GSAP library, and the logo image are loaded from external servers on the first visit |

Recommended browsers: current versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari.

> [!NOTE]
> The generator and the vault do not depend on the external fonts, the animation library, or the logo image. Without them, the interface uses fallback fonts and shows no animations.

## Installation

### Use the Hosted Version

Open [raia-vault.haiere.workers.dev](https://raia-vault.haiere.workers.dev/) in your browser.

### Run Locally

Clone the repository:

```bash
git clone https://github.com/haiere/raia-vault.git
cd raia-vault
```

Open `index.html` directly in your browser, or serve the folder with a local static server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`.

Raia Vault has no build step, no package manager dependencies, and no environment variables.

> [!NOTE]
> Keep `index.html`, `style.css`, `script.js`, and `i18n.js` in the same directory. `i18n.js` must load before `script.js`, which `index.html` already does.

## Usage

### Generate a Password

1. Open the **Generator** section.
2. Choose a mode: Random, Pronounceable, Passphrase, or PIN.
3. Adjust the length, word count, PIN length, or character options.
4. Select **Generate password**.
5. Review the password and its strength rating.
6. Use the copy button, or select **Save** to send the password to the vault form.

### Analyze a Password

1. Open the **Analyze** tab.
2. Enter or paste a password into the field.
3. Review the strength rating, entropy estimate, length, unique character count, estimated crack time, and character distribution.

> [!WARNING]
> Avoid entering real credentials on public or shared devices.

### Save an Entry to the Vault

1. Open the **Vault** tab.
2. Enter a website or app name. This field is required.
3. Enter a username or email address. This field is optional.
4. Enter a password. This field is required.
5. Select **Save to vault**.

Selecting **Save** next to a generated password fills the password field and opens the Vault tab.

### Manage Vault Entries

- Select an entry, or its eye button, to reveal the password. Select it again to hide it.
- Select the copy button on an entry to copy its password.
- Select the delete button on an entry to remove it.
- Select **Clear** to remove all entries. The app asks for confirmation first.

### Export Vault Data

1. Open the **Vault** tab.
2. Check that the entries are correct.
3. Select **CSV**.
4. Store the downloaded file securely.
5. Delete the file when you no longer need it.

> [!WARNING]
> A CSV export contains plaintext passwords. Treat the file as sensitive.

### Use the History

1. Open the **History** tab.
2. Select a recent password to show it in the generator and copy it to the clipboard.
3. Select **Clear all** to remove the history, especially on a shared device.

### Change the Language

1. Select the language button in the header.
2. Choose English or Indonesian. You can search by language name or code.

The selected language is saved in the browser for future visits.

### Support the Project

You can support Raia Vault through the floating **Donate** button or the **Buy me a coffee** link in the footer. Donations are optional and do not change how the application works.

## Privacy Model

Raia Vault processes passwords and vault data in the browser. The application code does not include analytics or telemetry, and no account is required for the core features.

The following data is stored in the browser's `localStorage` for the site's origin:

| Key | Contents |
|---|---|
| `raia_vault` | Vault entries |
| `raia_hist` | Password history |
| `raia_gc` | Count of generated passwords |
| `raia_cookie` | Your choice in the cookie notice |
| `raia_lang` | Selected interface language |

The page also makes requests to external servers:

- Google Fonts, for the typefaces
- cdnjs, for the GSAP animation library
- `i.postimg.cc`, for the logo image
- Buy Me a Coffee, only when you select a donation link

Clearing site data, using private browsing, changing browser profiles, or using storage-cleaning extensions can delete vault entries and history.

### Self-Hosting for Full Local Use

1. Download the Google Fonts files, GSAP, and the logo image.
2. Store them in the project folder.
3. Replace the external URLs in `index.html` and `style.css` with local paths.
4. Serve the project from a local web server.
5. Test the application with the network disabled.

## Security Considerations

### Local Storage Is Not Encrypted

Vault entries are stored in `localStorage` as plain text. Any script that runs on the same origin can read them. Browser extensions and malware can also read local browser data, depending on their permissions.

Do not store highly sensitive credentials in the current version unless you understand and accept this risk.

### Device Security Matters

Local-only processing does not protect your data from:

- Malware
- Browser extensions with broad permissions
- Other people with access to the device
- Compromised browser profiles
- Screen recording or clipboard monitoring
- Operating-system-level compromise
- Malicious code introduced through a compromised deployment

Use a trusted device, keep your browser updated, and protect your operating-system account.

### Password Generation

Passwords are generated with `window.crypto.getRandomValues()`. Do not replace it with `Math.random()`, which is not suitable for generating passwords.

### Clipboard Handling

Copied passwords can remain in the system clipboard until another application replaces them. Avoid copying credentials on shared devices, and clear the clipboard when you finish.

### CSV Export

CSV exports contain plaintext passwords. Store exported files securely, do not upload them to public services, and delete them when they are no longer needed.

### Deployment Security

When you host Raia Vault publicly:

- Use HTTPS.
- Keep dependencies updated.
- Protect the deployment pipeline.
- Avoid inserting untrusted HTML.
- Use a restrictive Content Security Policy where practical.
- Never place API keys, private tokens, or deployment secrets in client-side files.

> [!IMPORTANT]
> Client-side JavaScript cannot keep secrets confidential, because the browser receives it.

## Limitations

**Storage and security**

- Vault data is not encrypted.
- There is no master password.
- There is no synchronization between devices, and no automatic cloud backup.
- CSV exports contain plaintext passwords.
- Browser storage can be cleared or lost.
- The application cannot protect a compromised device.

**Analysis and environment**

- Strength ratings and entropy values are estimates, not guarantees.
- The estimated crack time depends on assumptions and is not an exact prediction.
- Browser extensions may be able to read page content and storage.
- Some features depend on the external resources listed in [Privacy Model](#privacy-model).

> [!NOTE]
> For production credential management, use a dedicated password manager with encryption, an audited cryptographic design, secure synchronization, and account recovery.

## Troubleshooting

### The generated password does not appear

- Check that JavaScript is enabled.
- Wait until the page finishes loading.
- Check that no extension is blocking scripts.
- Open the browser console and look for runtime errors.

### Vault entries are missing

- Browser site data may have been cleared.
- Private browsing sessions do not keep data after the window closes.
- A storage-cleaning extension may have removed the data.
- The site address (origin) may have changed, which creates separate storage.
- The browser profile may have changed.
- The storage quota for the site may have been exceeded.

### CSV export does not start

- Check that at least one vault entry exists.
- Check that the browser allows downloads from the site.
- Check whether a privacy extension is blocking the download.

### Strength analysis does not update

- Check that a password is entered in the Analyze field.
- Check that JavaScript is enabled.
- Check the browser console for errors.

### The language does not change

1. Select the language again.
2. Refresh the page.
3. Check that browser storage is enabled.
4. If the interface is stuck, clear only this site's stored data. This also removes vault entries, so export them first.
5. Test in a current browser with no restrictive extensions.

### The page looks different when offline

Fonts, the animation library, and the logo image load from external servers. Without them, the page uses fallback fonts, shows no animations, and may show a broken logo. To work fully offline, follow the steps in [Self-Hosting for Full Local Use](#self-hosting-for-full-local-use).

## Project Structure

```text
raia-vault/
├── index.html   Page structure, metadata, and structured data
├── style.css    Design tokens, layout, components, and responsive rules
├── script.js    Generator, strength analysis, history, vault, and animations
├── i18n.js      English and Indonesian interface strings
├── README.md    Project documentation
└── LICENSE      MIT License text
```

## Roadmap

Possible future improvements:

**Security and storage**

- Encrypted vault storage with a master password
- Authenticated encryption for stored entries
- Local encrypted backup and restore
- Optional passkey or WebAuthn integration
- Automatic clipboard clearing

**Features and interface**

- Secure import, including CSV import with validation
- Migration support for common password manager formats
- Additional password generation modes
- More detailed explanations of password strength
- Additional languages
- Light and dark theme switching
- Improved accessibility testing
- Automated tests for security and browser compatibility

> [!IMPORTANT]
> Design and review any encryption feature carefully before using it with real credentials.

## Contributing

Contributions are welcome. Helpful areas include:

- New password generation modes
- Better password strength analysis
- Accessibility improvements
- Mobile layout improvements
- Translations and localization fixes
- Tests
- Browser compatibility
- Review of security-sensitive code
- Documentation

### Contribution Workflow

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Test the application locally.
5. Review changes that affect passwords, storage, clipboard access, or exports with extra care.
6. Commit your changes:

   ```bash
   git commit -m "Describe your change"
   ```

7. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a pull request.

> [!IMPORTANT]
> Keep the client-side and privacy-focused design of the project. Do not add a server, analytics, or remote storage without discussing it first.

### Do Not Commit

- Real passwords, API keys, access tokens, or private URLs
- Personal vault exports
- Screenshots that show credentials
- Test fixtures that contain real user data

## Development Setup

Raia Vault is a static application. You need a text editor and a local static server.

1. Clone the repository.
2. Open the project folder.
3. Start a local static server, for example `python -m http.server 8000`.
4. Open `http://localhost:8000` in a browser.

### Development Checklist

Before you submit changes, test:

- [ ] Random, pronounceable, passphrase, and PIN generation
- [ ] Strength analysis
- [ ] Saving, viewing, copying, and deleting vault entries
- [ ] Clearing the vault
- [ ] CSV export
- [ ] Password history
- [ ] Language switching, and that the choice is kept after reload
- [ ] Cookie notice behavior
- [ ] Mobile layout
- [ ] Keyboard navigation and focus indicators
- [ ] Reduced-motion behavior
- [ ] Behavior when browser storage is blocked
- [ ] Error and status messages

## License

Raia Vault is released under the MIT License. See the [LICENSE](LICENSE) file for the full text.

## Author and Support

Developed and maintained by Haiere and HajirStudio.

| Channel | Purpose |
|---|---|
| Bug reports and feature requests | Use the project issue tracker |
| Security concerns | Contact the maintainers through the repository |
| Support the project | [Buy me a coffee](https://buymeacoffee.com/hajirstudio) |

<div align="center">

<br />

<a href="https://raia-vault.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Open_Raia_Vault-3B82F6?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Open Raia Vault" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support_the_Project-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support the Project" />
</a>

<br />
<br />

<sub>Last updated: 13 November 2026 · Raia Vault v1.2.4</sub>

</div>
