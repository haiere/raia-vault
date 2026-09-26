# Raia Vault

[![Version](https://img.shields.io/badge/version-1.2.3-blue.svg)](#version-history)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](#license)
[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![Website](https://img.shields.io/badge/website-live-green.svg)](https://raia-vault.haiere.workers.dev/)
[![Privacy](https://img.shields.io/badge/privacy-client--side-success.svg)](#privacy-model)
[![Donate](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-support-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/hajirstudio)

> A privacy-focused, client-side password generator, strength analyzer, and local credential vault.

Raia Vault is a browser-based tool for generating, analyzing, and locally storing passwords.

The application includes multiple password generation modes, real-time strength analysis, password history, CSV export, and a local vault for website credentials. Core processing happens in the browser, and no vault data is intentionally sent to a remote server.

> **Important:** Raia Vault currently stores vault data in browser `localStorage` without encryption. Do not use it as a replacement for a professionally audited password manager when storing highly sensitive credentials.

<p align="center">
  <a href="https://raia-vault.haiere.workers.dev/">
    <img src="https://img.shields.io/badge/Open%20Raia%20Vault-Live%20App-3B82F6?style=for-the-badge" alt="Open Raia Vault" />
  </a>
  <a href="https://buymeacoffee.com/hajirstudio">
    <img src="https://img.shields.io/badge/Support%20Development-Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Support Raia Vault on Buy Me a Coffee" />
  </a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [What's New in v1.2.3](#whats-new-in-v123)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Privacy Model](#privacy-model)
- [Security Considerations](#security-considerations)
- [Limitations](#limitations)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Development Setup](#development-setup)
- [License](#license)
- [Author and Support](#author-and-support)

---

## Overview

Raia Vault is a static web application that runs in a modern browser.

It combines four main tools:

- A configurable password generator.
- A real-time password strength analyzer.
- A local credential vault.
- A password history panel.

The project is designed for users who want a simple, self-contained utility without mandatory accounts, cloud synchronization, or a third-party database.

---

## What's New in v1.2.3

- Improved SEO metadata and page descriptions.
- Added `WebApplication`, `Organization`, and `FAQPage` structured data.
- Added Open Graph and Twitter Card metadata.
- Added a canonical URL.
- Added a non-intrusive floating donation button.
- Added a matching Buy Me a Coffee link in the footer.
- Added a hero feature list for clearer onboarding.
- Improved strength meter layout.
- Improved spacing, typography, and responsive behavior.
- Separated the application into `index.html`, `style.css`, and `script.js`.
- Set English as the default interface language.
- Kept Indonesian language support available.
- Improved documentation and security notes.
- Updated the project version to `1.2.3`.

---

## Features

### Password Generator

- Random character passwords.
- Pronounceable passwords.
- Passphrases.
- Numeric PINs.
- Configurable password length.
- Configurable character sets.
- Uppercase, lowercase, numbers, and symbol options.
- Cryptographically strong random values through the Web Crypto API when supported by the browser.

### Password Strength Analysis

- Real-time strength rating.
- Entropy estimate.
- Crack-time estimate.
- Password length.
- Unique character count.
- Character distribution.
- Uppercase, lowercase, number, and symbol counts.
- Visual strength indicator.

### Local Vault

- Store website names.
- Store usernames.
- Store passwords.
- View saved entries.
- Copy saved credentials.
- Delete vault entries.
- Store data locally in the browser using `localStorage`.

### History

- Keep the latest 20 generated passwords.
- Store generation timestamps.
- Store strength scores.
- Copy a previous generated password.
- Load a history item into the generator display.

### Export

- Export vault entries as CSV.
- Use exported data for backup or migration.
- Generate files directly in the browser.

### Interface

- English and Indonesian languages.
- Responsive desktop and mobile layout.
- Keyboard-friendly controls.
- Optional donation support.
- No required account.
- No required backend service.

---

## Requirements

Raia Vault requires:

- A modern web browser.
- JavaScript enabled.
- Permission to use browser storage.
- A browser with support for the Web Crypto API.

Recommended browsers include:

- Google Chrome.
- Mozilla Firefox.
- Microsoft Edge.
- Apple Safari.
- Other modern Chromium-, Gecko-, or WebKit-based browsers.

An internet connection may be required during the first page load if the application loads web fonts or other external resources.

After the page and required resources have been cached, the core application may continue to work offline.

---

## Installation

Raia Vault is a static web application made up of three primary files:

```text
index.html
style.css
script.js
```

### Use the Hosted Version

Open the live application:

```text
[https://raia-vault.haiere.workers.dev/](https://raia-vault.haiere.workers.dev/)
```

### Run Locally

Clone the repository:

```bash
git clone [https://github.com/haiere/raia-vault.git](https://github.com/haiere/raia-vault.git)
cd raia-vault
```

You can open `index.html` directly in a browser, or use a local static server.

### Python

```bash
python -m http.server 8000
```

### Node.js

```bash
npx serve .
```

### PHP

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000
```

Keep `index.html`, `style.css`, and `script.js` in the same directory unless you update the file paths in the HTML document.

---

## Usage

### Generate a Password

1. Open the `Generator` tab.
2. Choose one of the available modes:
   - Random.
   - Pronounceable.
   - Passphrase.
   - PIN.
3. Adjust the length, word count, or character options.
4. Click `Generate Password`.
5. Review the generated password and strength information.
6. Use the copy button or save the password to the vault.

### Analyze a Password

1. Open the `Analyze` tab.
2. Enter or paste a password into the analysis field.
3. Review the displayed information:
   - Strength rating.
   - Estimated entropy.
   - Password length.
   - Unique character count.
   - Estimated crack time.
   - Character distribution.
4. Avoid entering real credentials into public or shared devices.

### Save an Entry to the Vault

1. Open the vault interface.
2. Enter the website or service name.
3. Enter the username or email address.
4. Enter the password.
5. Click `Save to Vault`.
6. Review the saved entry in the vault list.

You can also use the save action next to a generated password to fill the vault form automatically.

### Manage Vault Entries

Available actions may include:

- View an entry.
- Copy a username.
- Copy a password.
- Delete an entry.
- Export vault entries as CSV.

### Export Vault Data

1. Open the vault tab.
2. Confirm that the entries are correct.
3. Click the `CSV` or `Export` button.
4. Save the generated file securely.
5. Delete the exported CSV after use if it is no longer needed.

A CSV export contains plaintext credential data and should be treated as sensitive.

### Use Password History

1. Open the `History` tab.
2. Select one of the recent generated passwords.
3. Copy it to the clipboard or load it into the generator display.
4. Remove history entries if the browser is shared or publicly accessible.

### Change Language

1. Click the language or globe button.
2. Select English or Indonesian.
3. The selected language is saved for future visits when browser storage is available.

### Support the Project

You can support Raia Vault through:

- The floating `Donate` button.
- The Buy Me a Coffee link in the footer.
- The project repository and issue tracker.

Donation support is optional and does not affect application functionality.

---

## Privacy Model

Raia Vault is designed to process passwords and vault data locally in the browser.

During normal use:

- Password generation occurs in the browser.
- Strength analysis occurs in the browser.
- Vault entries are stored in browser `localStorage`.
- Password history is stored locally when enabled by the application.
- CSV files are generated in the browser.
- No vault API or remote database is required.
- No analytics or telemetry is intentionally used by the application.
- No account is required for the core features.

### External Resources

The hosted version may load external resources such as:

- Google Fonts.
- CDN-hosted libraries, if configured by the deployment.
- Other resources explicitly included in the HTML file.

If you need a fully self-contained offline deployment:

1. Download external dependencies.
2. Store them locally.
3. Replace external URLs with local file paths.
4. Serve the project from a local web server.
5. Test it with the internet disabled.

### Browser Storage

Data stored in `localStorage` is associated with the website origin.

Clearing site data, using private browsing, changing browser profiles, or using storage-cleaning extensions may delete vault entries and password history.

---

## Security Considerations

### Local Storage Is Not Encrypted

Raia Vault currently stores vault data in browser `localStorage`.

`localStorage` should not be treated as an encrypted password database. Any script that executes in the same origin may potentially access stored values, and browser extensions or malware may also access local browser data depending on their permissions.

Do not use the current version to store highly sensitive credentials unless you understand and accept this risk.

### Device Security Matters

Local-only processing does not protect data from:

- Malware.
- Browser extensions with excessive permissions.
- Other users with access to the device.
- Compromised browser profiles.
- Screen recording or clipboard monitoring.
- Operating-system-level compromise.
- Malicious code introduced through a compromised deployment.

Use a trusted device, keep your browser updated, and protect your operating-system account.

### Password Generation

The password generator is designed to use `crypto.getRandomValues()` for cryptographically strong random values when the browser supports the Web Crypto API. [web:38][web:39]

Do not replace cryptographic randomness with `Math.random()` for password generation.

### Clipboard Handling

Copied passwords may remain available in the system clipboard until another application replaces them.

Avoid copying credentials on shared devices, and clear the clipboard when appropriate.

### CSV Export

CSV exports contain plaintext credentials.

Store exported files securely, avoid uploading them to public services, and delete them when they are no longer required.

### Deployment Security

When hosting Raia Vault publicly:

- Use HTTPS.
- Keep dependencies updated.
- Protect the deployment pipeline.
- Avoid inserting untrusted HTML.
- Configure a restrictive Content Security Policy where practical.
- Never hardcode API keys, private tokens, or deployment secrets in client-side files.

Client-side JavaScript cannot keep secrets confidential because it is delivered to the browser.

---

## Limitations

The current version has several important limitations:

- Vault data is not encrypted.
- There is no master password.
- There is no end-to-end encrypted synchronization.
- There is no secure multi-device vault synchronization.
- There is no automatic cloud backup.
- CSV export contains plaintext credentials.
- Browser storage can be cleared or lost.
- The application cannot protect against a compromised device.
- Password strength estimates are approximations, not guarantees.
- Estimated crack time depends on assumptions and should not be treated as an exact prediction.
- Browser extensions may be able to access page content or storage.
- Offline operation depends on cached files and external resources being available locally.

For production credential management, consider a dedicated password manager with encryption, audited cryptographic design, secure synchronization, and recovery mechanisms.

---

## Troubleshooting

### Generated Password Is Not Visible

Check that:

- JavaScript is enabled.
- The page has finished loading.
- The browser supports the required APIs.
- No browser extension is blocking scripts.
- The browser console does not show a runtime error.

### Vault Entries Disappeared

Possible causes include:

- Browser site data was cleared.
- Private browsing mode was used.
- A storage-cleaning extension removed the data.
- The site origin changed.
- The browser profile was changed.
- The application storage quota was exceeded.

### CSV Export Does Not Work

Check that:

- At least one vault entry exists.
- The browser allows file downloads.
- The download was not blocked.
- The browser supports Blob URLs.
- No privacy extension is blocking downloads.

### Strength Analysis Does Not Update

Check that:

- A password has been entered in the analysis field.
- JavaScript is enabled.
- The page is not displaying a runtime error.
- The input is not being blocked by a browser extension.

### Language Does Not Change

Try the following:

1. Select the language again.
2. Refresh the page.
3. Check whether browser storage is enabled.
4. Clear only the site's cached data if the interface is stuck.
5. Test in a modern browser without restrictive extensions.

### Offline Mode Does Not Work

The application may need to load fonts or dependencies during the first visit.

To improve offline reliability:

1. Load the application while online.
2. Wait until all resources finish loading.
3. Visit the application again.
4. Test it with the internet disconnected.
5. Self-host external resources for a fully local deployment.

---

## Roadmap

Potential future improvements include:

- Encrypted vault storage using a master password.
- Authenticated encryption for stored entries.
- Secure import functionality.
- CSV import with validation.
- Migration support for common password manager formats.
- Additional password generation modes.
- More detailed password-strength explanations.
- Additional languages.
- Dark and light theme switching.
- Improved accessibility.
- Automatic clipboard clearing.
- Optional passkey or WebAuthn integration.
- Local encrypted backup and restore.
- Automated security and browser compatibility testing.

Any encryption feature should be designed and reviewed carefully before being used for real credentials.

---

## Contributing

Contributions are welcome.

Areas for contribution include:

- Adding password generation modes.
- Improving password-strength analysis.
- Improving accessibility.
- Improving mobile responsiveness.
- Improving localization.
- Adding tests.
- Improving browser compatibility.
- Reviewing security-sensitive code.
- Improving documentation.

### Contribution Workflow

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.
4. Test the application locally.
5. Review changes involving passwords, storage, clipboard access, and exports carefully.
6. Commit your changes:

   ```bash
   git commit -m "Describe your change"
   ```

7. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a pull request.

Before contributing, preserve the client-side and privacy-focused architecture of the project.

Do not commit:

- Real passwords.
- API keys.
- Access tokens.
- Private URLs.
- Personal vault exports.
- Screenshots containing credentials.
- Test fixtures containing real user data.

---

## Development Setup

Raia Vault is a static application with three primary files:

```text
index.html
style.css
script.js
```

### Local Development

1. Clone the repository.
2. Open the project directory.
3. Start a local static server.
4. Open the local URL in a browser.
5. Test generation, analysis, vault storage, history, export, language switching, and responsive behavior.

Example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Development Checklist

Before submitting changes, test:

- Random password generation.
- Pronounceable password generation.
- Passphrase generation.
- PIN generation.
- Strength analysis.
- Vault saving.
- Vault viewing.
- Vault deletion.
- Clipboard copying.
- CSV export.
- Password history.
- Language switching.
- Browser reload behavior.
- Storage-clearing behavior.
- Mobile layout.
- Keyboard navigation.
- Reduced-motion preferences.
- Offline behavior.
- Error handling.

---

## License

Raia Vault is released under the MIT License.

See the [LICENSE](LICENSE) file for the complete license text.

---

## Author and Support

Raia Vault is developed and maintained by **Haiere** and **HajirStudio**.

For questions, bug reports, feature requests, and security concerns, use the issue tracker or contact the project maintainers through the project repository.

If Raia Vault is useful to you, consider supporting continued development:

<p align="center">
  <a href="https://buymeacoffee.com/hajirstudio">
    <img
      src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support%20Development-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
      alt="Buy Me a Coffee"
    />
  </a>
</p>

<p align="center">
  <a href="https://buymeacoffee.com/hajirstudio">
    Support Raia Vault on Buy Me a Coffee
  </a>
</p>

---

<p align="center">
  Built with privacy in mind and designed to run locally in your browser.
</p>

<p align="center">
  <sub>Last updated: September 2026 · Raia Vault v1.2.3</sub>
</p>