# Raia Vault

A secure client-side password manager with a built-in password generator, vault storage, and strength analysis tools.

Raia Vault is a privacy-focused web application that runs entirely in your browser. It provides a password generator with multiple modes (random, pronounceable, passphrase, and PIN), a local vault for storing credentials, and real-time password strength analysis. No data is ever sent to a server—all information remains on your device.

The tool is designed for individuals who need a simple, self-contained solution for creating, storing, and evaluating passwords without relying on third-party cloud services.

***

## Features

- Password generator — Supports random characters, pronounceable passwords, passphrases, and numeric PINs with configurable length and character sets.
- Password strength analysis — Real-time entropy calculation, crack time estimation, and visual strength indicators.
- Secure local vault — Store website, username, and password entries in your browser's `localStorage`. No external database or server is used.
- History — Automatically saves generated passwords with timestamps and strength scores for quick reuse.
- CSV export — Export your vault entries as a CSV file for backup or migration.
- Privacy controls — All processing is local; no analytics, tracking, or data transmission occurs.
- Multi-language support — English and Indonesian interfaces are available, with easy switching.

***

## Requirements

- A modern web browser with JavaScript enabled (Chrome, Firefox, Edge, Safari, or similar).
- An internet connection is required only to load the page and its web fonts (Google Fonts). After the first load, the application can be used offline if cached.
- No additional runtime, server, or dependencies are needed.

***

## Installation

Raia Vault is a single-page HTML application and does not require traditional installation.

To use it:

1. Open the hosted URL in your browser.
2. Alternatively, download the `index.html` file and open it directly.

If you wish to serve the application from your own web server, simply place the HTML file on your server. Ensure that the Google Fonts stylesheet and any CDN resources are accessible (or adjust the paths accordingly).

***

## Usage

### Generating a password

1. Select a generation mode: Random, Pronounceable, Passphrase, or PIN.
2. Adjust the length, character sets, or word count using the sliders and checkboxes.
3. Click the "Generate Password" button or the refresh icon.
4. The generated password appears in the display area, along with its strength and entropy information.

### Analyzing a password

1. Switch to the "Analyze" tab.
2. Type or paste a password into the input field.
3. The tool displays:
   - Strength rating
   - Entropy bits
   - Length and unique character count
   - Estimated crack time
   - Character distribution (uppercase, lowercase, numbers, symbols)

### Saving to the vault

- Click the "Save" icon next to the generated password to automatically fill the vault form.
- Alternatively, manually enter a website, username, and password in the vault tab, then click "Save to Vault."
- Stored entries are listed below the form and can be copied, viewed, or deleted.

### Exporting vault data

- Use the "CSV" button in the vault header to download all stored entries as a CSV file.

### Using the history

- The "History" tab stores the last 20 generated passwords.
- Click any history entry to copy it to the clipboard and load it into the generator display.

### Language selection

- Click the globe icon in the header to switch between English and Indonesian.

***

## Security Considerations

- All data is stored in the browser's `localStorage`, which is accessible only to the same origin. No data is transmitted over the network.
- The application does not use encryption for stored data. If you require encrypted storage, consider using a dedicated password manager with end-to-end encryption.
- The password generator uses the Web Crypto API (`crypto.getRandomValues`) for cryptographically secure random number generation.
- The application does not log or track user activity.

***

## Privacy Considerations

Raia Vault is designed with privacy as a primary concern:

- No analytics, tracking, or telemetry.
- No external API calls beyond loading fonts and the initial page.
- No cookies are set unless you explicitly accept them (for preference storage).
- All computation is client-side; no data leaves your device.

***

## Troubleshooting

### Generated passwords not visible

Ensure JavaScript is enabled and the page has fully loaded.

### Vault entries missing after reload

Check that `localStorage` is not cleared by browser settings or extensions.

### CSV export fails

Ensure you have at least one vault entry and that your browser supports Blob downloads.

### Strength analysis not updating

Enter a password in the analyze input field; the analysis updates in real time.

### Language does not change

Try refreshing the page after switching languages.

***

## Roadmap

Future enhancements may include:

- Optional encryption for vault data using a master password.
- Support for additional languages.
- Import functionality for CSV or other password manager exports.
- Dark/light theme toggle.
- Accessibility improvements.

***

## Contributing

Contributions are welcome. If you would like to improve Raia Vault, please fork the repository and submit a pull request. Areas for contribution include:

- Adding new password generation modes.
- Improving strength estimation algorithms.
- Enhancing the user interface and responsiveness.
- Fixing bugs and performance issues.

Before contributing, ensure that your changes preserve the client-side, privacy-first nature of the application.

***

## Development Setup

The application is a single `index.html` file with inline CSS and JavaScript. To develop:

- Edit the `index.html` file directly.
- Open the file in a browser to test changes.
- For local development, you may serve the file using any static server (e.g., `python -m http.server` or `npx serve`).
- No build tools or compilation steps are required.

***

## License

Raia Vault is provided as open source under the MIT license. See the `LICENSE` file for details.

***

## Author and Support

Developed and maintained by Haiere and HajirStudio. For questions, feedback, or support, please use the issue tracker or contact via the project repository.

***

Last updated: 2026