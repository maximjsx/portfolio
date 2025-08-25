<div align="center">
<a href="https://discord.gg/2UTkYj26B4"><img src="https://img.shields.io/badge/Discord_Server-7289DA?style=flat&logo=discord&logoColor=white" alt="Join Discord Server" style="border-radius: 15px; height: 20px;"></a>  
<a href="/" ><img src="https://wakatime.com/badge/user/018ea406-0db5-4668-8046-69289ce4a09e/project/a77fd0f2-6eee-4a71-aab3-916f96c273ec.svg" alt="Waka Time Stats" style="border-radius: 15px; height: 20px;"></a>  
<a href="https://maxim.cat/"><img src="https://img.shields.io/badge/Preview-4CAF50?style=flat&logo=vercel&logoColor=white" alt="Preview Website" ></a>
<br><br>  
<img width="1000" src="assets/preview.png" />
<br>
</div>


## 🚀 Quick Setup (5 Minutes)

1. [Fork the repository](https://github.com/maximjsx/portfolio/fork)
2. Customize [CONFIG.json](CONFIG.json) in your fork with your personal information 
3. Deploy to Vercel

Or deploy with one click  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maximjsx/portfolio)

<div align="center">
    <a href="assets/features.png">
    <img src="assets/features.png" alt="Features" />
  </a>
</div>

## 📋 Table of Contents

- [Quick Setup](#-quick-setup-5-minutes)  
- [Features](#-features)  
- [Local Development](#-local-development)  
- [Customization](#-customization)  
- [Deployment](#-deployment)  
- [Contributions](#-contributions)  
- [Important Notes](#%EF%B8%8F-important-notes)  
- [License](#-license)  
- [Credits](#-credits)  


## 💻 Local Development

1. [Fork the repository](https://github.com/maximjsx/portfolio/fork)
2. Execute the following commands:
```bash
git clone https://github.com/<your_username>/portfolio.git
cd portfolio
npm install
npm run dev
```

## 🛠 Customization

Edit [CONFIG.json](CONFIG.json) to personalize:
- Site metadata
- Profile information
- Experience timeline
- Project cards
- Social links
- Contact form settings
- & More

You can use placeholders in the config file which are defined in a `.env` file
```env
NEXT_PUBLIC_PLACEHOLDERS={"%full_name%":"Your Name","%email%":"info[at]your.domain"}
```

### Fonts
Change global font in [CONFIG.json](CONFIG.json):
- `roboto`
- `delius`
- `audiowide`
- `geist`

## 🌐 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maximjsx/portfolio)

### Other Platforms
- Ensure Node.js is installed
- Install all dependencies `npm install`
- Build with `npm run build`
- Start with `npm start`

## ⚠️ Important Notes

### Contact Form
**YOU MUST** implement your own contact form logic in [route.js](/src/app/api/contact/route.js). The current implementation is a placeholder.

### Personal Information
Remove or replace **(Please replace these before deployment)**:
- My personal data
- Social media links
- Profile image
- Experience details
- Projects
- Generally everything that is not part of the base template and rather my personal info or assets

**Warning:**

Any attempt to impersonate me or misuse my personal information, including but not limited to my name, contact details, or any other data associated with me, is strictly prohibited. Such actions will lead to **legal consequences**, including but not limited to:

* Reporting to relevant authorities
* Civil claims for damages
* Criminal prosecution under applicable identity theft, data protection, and privacy laws within the European Union and beyond

Protecting my identity and personal information is a priority. Please respect this notice.

### Legal Disclaimer

This template is provided as-is, and you are responsible for:

- Implementing and securing contact form logic, ensuring compliance with GDPR and other privacy laws.
- Removing the original author’s personal information and ensuring no infringement on third-party intellectual property rights.
- Validating the functionality, ensuring security against unauthorized access or breaches, and updating for any legal changes.
- Providing users with the necessary privacy and cookie notices as required by law.
- Addressing any issues that may arise, including compatibility, security, and performance concerns.

By using or modifying this template, you agree to assume full responsibility for any legal or technical issues, including ensuring compliance with relevant legal requirements such as the "Impressum" (if applicable) and privacy laws in your jurisdiction.

## 📜 License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE)

## 🤝 Contributions

Contributions are welcome!  
Here's how you can help:

- **Report Issues:** [Open an issue](https://github.com/maximjsx/portfolio/issues/new?title=Please%20describe%20your%20issue%20or%20feature%20request&body=What%27s%20your%20problem%3F%0AOr%20do%20you%20maybe%20want%20a%20new%20feature%3F%0A%0ATell%20us%21) for bugs or feature requests.  
- **Contribute Code:**  
  1. Fork the repository.  
  2. Create a branch: `git checkout -b feature/your-feature`.  
  3. Commit using the same message style (e.g., `feat: card hover effect`).  
  4. Push changes and submit a pull request.  
- **Improve Docs:** Update the README or add missing info.  

## 🏆 Credits

### Fonts
Font licenses available in [here](src/app/fonts/licenses/)

### Inspiration & Components
- [Custom Cursor](https://www.michieldb.nl/other/cursors/) by Michiel de Boer (Posy) [License](https://creativecommons.org/licenses/by-nc/4.0/deed.en)
- [Card Hover Effect](https://codepen.io/markmiro/pen/wbqMPa) by Mark Miro (MIT License)
- [Infinity Scrolling](https://codepen.io/kevinpowell/pen/BavVLra) by Kevin (MIT License)

## People Using My Template
https://www.lvckyfelix.info/  
https://kawaii-portfolio.vercel.app/    
https://pratik-singh.vercel.app/   


---

**Developed with ❤️ by Maxim**
