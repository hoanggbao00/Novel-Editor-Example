# Novel Editor Example

##### Table of Contents
[Repository](#repository)<br />
[Disclaimer](#disclaimer)<br />
[Removed Feature](#removed-feature)<br />
[Usage](#usage)

## Repository
**Github: [novel](https://github.com/steven-tey/novel)<br />
Author: [Steven Tey](https://github.com/steven-tey)<br />
Source Reference: [(novel/apps/web)](https://github.com/steven-tey/novel)<br />
Version: 0.3**

---
**Please star this [repo](https://github.com/steven-tey/novel) on GitHub and Support the Author [Steven Tey](https://github.com/steven-tey)**

---
## Disclaimer
Because of from version 0.20 and above, they being a breaking release no longer export a single component.

It become harder than 0.1 to setup in my graduate project.

I upload this to the purpose of reuseable, and for anyone who got stuck on new version like me.

---

## Removed Feature
Image Support in Editor in `extensions.ts` <- **This is required to use Image**
/Slash add Image in `slash-command.tsx`
Drag and Drop Image in `advanced-editor.tsx`

*You can find `Feature: Image in Editor` in* **global search(Ctrl+Shift+F in VSCode)** *to find faster*

## Usage
1. Star this **[repo](https://github.com/steven-tey/novel)**
2. Install all package in `package.json`
```bash
npm install
```
3. Clone this repository
```bash
git clone https://github.com/hoanggbao00/Novel-Editor-Example.git
``` 
4. Add following **[Shadcn UI](https://ui.shadcn.com/)** components: **Button, Command, Dialog, Popover, Separator, Sonner**
5. Copy `components/editor` and `components/ui` in components to your project
6. Copy `prosemirror.css` and import it to your project
7. Copy default content `lib/content.ts` to your `lib` folder
8. Add and Import Editor component to your page
```jsx
<TailwindAdvancedEditor />
```
