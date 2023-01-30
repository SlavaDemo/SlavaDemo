This markdown file is where I took some notes for myself while doing the crashcourse.

---
## Astro files
- Each `astro file` is broken into 2 parts.
    - **_Frontmatter_** - All the things that happen on build, "logic".
    - _**Body**_ - Plain HTML with JSX (react) like syntax.
- You can also write JS logic inside the brackets, not only in the `frontmatter`.  
**example:**
    ```
    <h1>{'slava'.toUpperCase()}</h1>
    ```
- **Looping inside template**:
    - You are using a JSX syntax, so in order to loop for example a list of data (favorites):
    ```
    const obj = {
        name: str,
        number: num,
        favorites: ['python','dart','js']
    };
    ```
    you will do it like so (this will create a `ul` with `li` items for each item in the list):
    ```
    <ul>
        {
            obj.favorites.map(item => (
                <li>{item}</li>
            ))
        }
    </ul>
    ``` 
---
## Public

Everything insde public folder, is not toucehd by astro  


---
## Pages
    - Every astro file inside pages, is automatically a route.
---

## Layouts:
- You can declear props with typescript, it's the better option, like so (this is the `baseLayout.astro`):
```
---
interface Props {
	title?: string;
	description?: string;
}
const {
	title="Default title",
	description="Default description"
} = Astro.props as Props;
---
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>{Astro.props.title}</title>
		<meta name="description" content={description}>
	</head>
	<body>
		<slot>{title}</slot>
	</body>
</html>


```

This will force every page that uses this component, to use the parametes declared in the interface, like so:
```
---
import BaseLayout from "@layouts/baseLayout.astro";
// Components imports
---

<BaseLayout title="Home page" description="This is the Home page"></BaseLayout>
```
----
## Styling:

- If you will use the `<style></style>` inside the component, it will automatiaclly will be scoped to that component.

Cool way of styling:
```
---
// Components imports
import BaseLayout from "@layouts/baseLayout.astro";

const isRed = false;
---

<BaseLayout title="Home page" description="This is the Home page">
	<p>Hello There!</p>
    <p class:list={["big", {red: isRed}]}>Hi from <span>Home!</span></p>
</BaseLayout>

<style>
.big {
    font-size: 2rem;
}
.red {
    color:red;
}
</style>
```

----
## Routing
1. Everything inside pages is a route.
2. Nested routing
----
## Cool stuff.
- FREE THEMES
    - Astro provider free starter project with themes on its [website](https://astro.build/themes/).

- FONT + POSTCSS - [start this video from 8:15](https://youtu.be/KNtax5dHPfI?list=PLoqZcxvpWzzeRwF8TEpXHtO7KYY6cNJeF&t=495)

- Astro Icons - https://github.com/natemoo-re/astro-icon#readme
## IMPORTANT NOTES:

- If you have a problem with importing layouts, view [this](https://docs.astro.build/en/guides/typescript/)
- You can still write vanilla JS which will run on the client, just put it down inside script tags (buttom of page) and it will be bundled.
    ```
    <footer>
        <small>
            Copyright &copy; <span id="copyright">
            </span>
            rights reserved
        </small>
    </footer>

    <script>
        document.querySelector("#copyright")!.textContent = new Date().getFullYear().toString();
    </script>
    ```