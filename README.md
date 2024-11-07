# Inspirational Morning Background Changer

This Node.js script fetches a new background image and an inspirational quote every morning, edits the image by placing the quote on it, and sets it as your desktop background. Start your day with motivation and beautiful imagery right from your desktop.

## Features
- **Automatic Image Fetching**: Retrieves a high-quality background image daily from a free API.
- **Daily Inspirational Quotes**: Fetches a new quote each day for inspiration.
- **Image Editing**: Places the fetched quote on the image using customizable fonts and styles.
- **Background Automation**: Automatically sets the edited image as your desktop background.

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/inspirational-morning-background.git
   cd inspirational-morning-background
2. **Install Dependencies**:
    ```bash
   git clone https://github.com/yourusername/inspirational-morning-background.git
   cd inspirational-morning-background

## Configuration
Create a `.env` file in your root directory with the variable:
```js
FREEPIK_API_KEP="<freepik-api-key>"
```
Visit [<i style="display:inline-flex;align-items:center;gap:.5rem"><img src="./images/freepik.ico" height="100%" /> Freepik </i>](https://www.freepik.com/) to sign up and get a free api key to access their various wonderful features.

## Usage
Run the script manually from the command line
```bash
node index.js
```
or click the batch file `run.bat` to run it (on windows) or set it to run automatically every day with cron job or task scheduler.

## Dependencies
- <b style="color:dodgerblue">Canvas</b> ( node-canvas not the browser canvas): To manipulate the image and quote
- <b style="color:dodgerblue">Axios</b>: To make http request 
- <b style="color:dodgerblue">Wallpaper</b>: To set the image as the desktop background
- <b style="color:dodgerblue">UUID</b>: For unique file names

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue

## Acknowledgements
- <b>Freepik</b> for free image generation apis
- <b>Zenquote</b> for free quote api


---

Start every morning with fresh inspiration and a beautiful desktop background

---