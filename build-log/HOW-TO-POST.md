# How to Add a New Build Log Post

Do this entirely on GitHub.com — no code needed.

---

## Step 1: Copy the Template

1. Go to https://github.com/MARINBRU/marin/tree/main/build-log
2. Open **`TEMPLATE.html`**
3. Click the **Copy** icon (or select all, Ctrl+C)

---

## Step 2: Create Your Post

1. Back in the `build-log/` folder, click **"Add file" → "Create new file"**
2. Name it: `post-001.html` (then `post-002.html`, etc.)
3. **Paste** the template content
4. Edit these parts:

```
POST NUMBER → Post 001
DATE → Jun 22, 2026
POST TITLE → Found the Donor Bike!
```

Then write your content in the middle section. You can use:
- `<p>text</p>` for paragraphs
- `<h2>heading</h2>` for section titles
- `<img src="../assets/photo.jpg">` for images (upload photos to the `assets/` folder first)
- `<ul><li>item</li></ul>` for bullet lists

5. Scroll down, write a **commit message** like "Add post 001"
6. Click **"Commit new file"**

---

## Step 3: Register the Post (so it shows up on the site)

1. Go to https://github.com/MARINBRU/marin/blob/main/script.js
2. Click the **pencil icon** (Edit)
3. Find the array that starts with `const buildLogEntries = [`
4. Add your new post **at the top** of the list (newest first):

```js
{
    id: 'post-001',
    date: 'Jun 22, 2026',
    title: 'Found the Donor Bike!',
    excerpt: 'Picked up a 2016 Honda Grom...',
    tags: ['donor', 'progress'],
    file: 'post-001.html'
},
```

5. Click **"Commit changes"**

---

## Step 4: Wait 1 Minute

GitHub Pages takes about 60 seconds to rebuild. Then visit:
**https://marinbru.github.io/marin/build-log/**

Your new post will appear at the top.

---

## Tips

- **Photos:** Upload them to the `assets/` folder (Add file → Upload files) and reference them as `../assets/photo-name.jpg`
- **Linking to other pages:** Use `<a href="../specs.html">Specs</a>`
- **Mistake?** Just edit the file on GitHub again and recommit