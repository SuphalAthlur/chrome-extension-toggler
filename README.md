# chrome-extension-toggler
This is a simple chrome extension to enable/disable other chrome extensions (with plenty of scope - read the last section)

## Manual installation
- Presently manual installation is the only way to use this extension as it has not been published on the chrome store yet
- Clone this repository
- Go to `chrome://extensions/`
- Enable `Developer mode` in the top right corner
- Select `Load unpacked` in the top left corner
- Select the directory `chrome-extension-toggler-main` and click open

## Recommended usage
- After installation, pin this extension to your toolbar for quick access
- Make sure you have the target extension (set to `Screen Reader` right now) installed
- If there is a problem with the initialisation (for eg: extension not found), the icon will remain `blue`
- If the initialisation happens correctly, the icon will be
  - `green` if the target extension is enabled
  - `red` if the target extension is disabled
- Clicking on the extension icon will toggle it (and changing it yourself on extensions page will also reflect in the icon colour)

## Note to developers
- Currently the target extension ID has been set to that of the `Screen Reader` extension inside the `background.js` file
- If you want to toggle a different extension, modify this value to that extension's ID
- Feel free to add your own icons in `icons` folder

## Future Roadmap
- A popup modal to let the user define the target extension with one click
- Pack more features into this modal like
  - Performing other operations directly such as uninstallation of extensions
  - Providing a list of multiple extensions to the user to manage them all directly
- A `dashboard` page to choose which of such above capabilities to have one-click access to
  - This could perhaps be shown only at installation
  - When this tool is published, link to this page could also be provided at the extension's page
  - This is to remain in line with the extension's objective of quick access and avoiding unnecessary context switching and clutter

You may contact me at suphal.athlur@gmail.com
Happy toggling :)
