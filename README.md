<div align="center">

<img src="tiki3-0/img/MP-immersive.png" alt="Back drop preview for webpage" width="600px" height="auto">

# Modern Potions


_Logo by [@forage_and_frost](https://www.instagram.com/forage_and_frost/)_

## An Immersive E-commerce Experience

### By Danielle Thompson

### Project Began 2.26.21. ![GitHub last commit](https://img.shields.io/github/last-commit/danitcodes/-capstone)

<img src="tiki3-0/img/ModernPotionsLogo.png" alt="Modern Potions logo" width="200px" height="auto">

|  Get In Touch 	|   	|
|---	|---	|
|  GitHub 	|  <a href="https://github.com/danitcodes"> ![GitHub followers](https://img.shields.io/github/followers/danitcodes?style=social)	</a>  |
|  LinkedIn 	|  <a href="https://linkedin.com/in/danielle-thompson74"> <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2"></a>	|
|  Instagram 	|  <a href="https://www.instagram.com/modernpotions.pdx/"><img src="https://img.shields.io/badge/-Instagram-black.svg?style=flat&logo=instagram&logoColor=white&colorB=E4405F"></a>	|

</div>

---

### Known Bugs

- There are some holdovers in the available inventory from the Crystallize's e-commerce template.
- Payment processors are not yet set up.
- Need to connect to working API for utilizing cart functionality.

[Report bugs here.](https://github.com/danitcodes/-capstone/issues) | [Request features here.](https://github.com/danitcodes/-capstone/issues)

___

## Description

Modern Potions is an immersive e-commerce application for a tiki bar to be able to sell merchandise, to go cocktail kits, and cocktail subscriptions. Getting the e-commerce portion of the project fully up and running is the major first phase, which you will currently see reflected in the site. More immersive, elements let interactive animations will be added in additional feature rollouts.

---

### User Stories

|  # 	|  Stories 	|
|---	|---	|
|  1 	|  A user should be able view a vibrant, visual splash page with links to additional pages, shopping cart, account, etc. 	|
|  2 	|   A user should be able to add products to a shopping cart for purchase. 	|

---

### Stretch Goals

- Connect to Crystallize Service API.
- Add in account registering, log in, and log out functionality to save information for future orders.
- Learn and utilize built-in SEO functionality.
- Add page for interactive tiki elements.
- Get a 21+ confirmation page(s).
- Add a shop section for barware & partner producers.
- Add a food section to comply with OLCC rules requiring that every two cocktails ordered require a substantive food purchase.
- Figure out how to do a sliding price scale for gift cards.
- Implementing security features.
- Add PayPal in for purchasing.

### Technologies Used

- [VS Code](https://code.visualstudio.com/download)
- Git & GitHub
- ES6 JavaScript
- JSX
- React Framework v.17.0.1
- npm v.7.5.2
- node.js v.15.8.0
- Next.js v.10.0.7
- Crystallize E-commerce with Next.js + React
- Crystallize Order API ???
- `npx @crystallize/cli my-project-name`
- Vercel - deployment
- Spotify
- webpack v.5.11.1
- Babel v.7.9.6
- ESLint v.7.0.0
- Some graphics from [Hale Pele](halepele.com) & [MunkTiki](munktiki.com)
- Some images from [Unsplash](unsplash.com)
- Modern Potions logo by [@forage_and_frost](https://www.instagram.com/forage_and_frost/)
- [Canva](canva.com) - Modern Potions typography, splash page backdrop
- [Pexels](pexels.com) - videos
- [Nifty Buttons](https://www.niftybuttons.com/) - svg social media icons

---

#### Setup/Installation Requirements

- To access the live page visit [this site](https://capstone-roan.vercel.app/).

<summary> Running the Project Locally </summary>

<details>

###### For Mac Users

- Access Terminal in your Finder, and open a new window.
- Install the package manager in the Terminal, [Homebrew](https://brew.sh/), on your device by entering this line of code:
`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
- Once homebrew is installed, install Git, a version control system for code writers, with this line of code: `brew install git`.
- Now, install Node.js through Homebrew with the following command: `brew install node`.
- Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher).

###### For Windows Users

- Open a new Command Prompt window by typing "Cmd" in your computer's search bar.
- Determine whether you have 32-bit or 64-bit Windows by following these [instructions](https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running).
- Go to [Git Bash](https://gitforwindows.org/), click on the "Download" button, and download the corresponding exe file from the Git for Windows site.
- Follow the instructions in the set up menu.
- Go to the [Node.js website](https://nodejs.org/en/download/) and download the appropriate source code for your Windows operating system.

###### Cloning the Project

- If you are an Epicodus instructor, prospective employer, or personal friend, and you want to run this specific project locally, please contact me for user access keys at modernpotions.pdx@gmail.com.
- Go to this [GitHub repository](https://github.com/danitcodes/-capstone) and click the green 'Code' button.
- In your CLI, after navigating to the Desktop with `cd Desktop`, clone this application with the following command:`git clone https://github.com/danitcodes/-capstone.git`.
- (Optional) If you would like to save your own copy to your GitHub account, click the "Fork" button in the upper right hand corner of the main repository page.
- Navigate to the folder 'capstone' from your CLI with the command `cd capstone`.
- Open the project in the code editing application of your choice, like VS Code, by running the command `code .`.

###### Additional Files Needed for Project to Run

Additionally, a file will also need to be added to the tiki3-0/_repo-utils folder.

- Name the file 'bootstrap-tiki-shapes.js'.
- Next add in the following code snippet:

    <details>
      <summary>Code snippet here.</summary>

    ```js
    /**
     * When run, this file will inject shapes to your tenant that is required for the
    * frntr boilerplate to look properly
    */

    //Your tenant id (not identifier). See the tenant tab https://pim.crystallize.com/settings/tenants
    const TENANT_ID = 'YOUR-TENENT-ID-HERE';

    // Add your tokens https://pim.crystallize.com/settings/access-tokens
    const ACCESS_TOKEN_ID = 'YOUR-ACCESS-TOKEN-HERE';
    const ACCESS_TOKEN_SECRET = 'YOUR-ACCESS-TOKEN-SECRET-HERE';

    const coreUrl = 'https://pim.crystallize.com/graphql';
    const fetch = require('node-fetch');

    const {
      buildCreateShapeMutation,
      shapeTypes,
      componentTypes
    } = require('@crystallize/import-utilities');

    const Product = {
      tenantId: TENANT_ID,
      name: 'Product',
      identifier: 'frntr-product',
      type: shapeTypes.product,
      components: [
        {
          id: 'summary',
          name: 'Summary',
          type: componentTypes.richText
        },
        {
          id: 'Specs',
          name: 'Specs',
          type: componentTypes.propertiesTable
        },
        {
          id: 'description',
          name: 'Description',
          type: componentTypes.paragraphCollection
        },
        {
          id: 'related-products',
          name: 'Related products',
          type: componentTypes.itemRelations
        }
      ]
    };

    const Folder = {
      tenantId: TENANT_ID,
      name: 'Folder',
      identifier: 'frntr-folder',
      type: shapeTypes.folder,
      components: [
        {
          id: 'title',
          name: 'Title',
          type: componentTypes.singleLine
        },
        {
          id: 'brief',
          name: 'Brief',
          type: componentTypes.richText
        },
        {
          id: 'body',
          name: 'Body',
          type: componentTypes.paragraphCollection
        },
        {
          id: 'stackable-content',
          name: 'Stackable content',
          type: componentTypes.itemRelations
        }
      ]
    };

    const Article = {
      tenantId: TENANT_ID,
      name: 'Article',
      identifier: 'frntr-article',
      type: shapeTypes.document,
      components: [
        {
          id: 'title',
          name: 'Title',
          type: componentTypes.singleLine
        },
        {
          id: 'image',
          name: 'Image',
          type: componentTypes.images
        },
        {
          id: 'intro',
          name: 'Intro',
          type: componentTypes.richText
        },
        {
          id: 'body',
          name: 'Body',
          type: componentTypes.paragraphCollection
        },
        {
          id: 'video',
          name: 'Video',
          type: componentTypes.videos
        },
        {
          id: 'featured',
          name: 'Featured',
          type: componentTypes.itemRelations
        }
      ]
    };

    const Banner = {
      tenantId: TENANT_ID,
      name: 'Banner',
      identifier: 'frntr-banner',
      type: shapeTypes.document,
      components: [
        {
          id: 'title',
          name: 'Title',
          type: componentTypes.singleLine
        },
        {
          id: 'description',
          name: 'Description',
          type: componentTypes.richText
        },
        {
          id: 'link',
          name: 'Link',
          type: componentTypes.singleLine
        },
        {
          id: 'link-text',
          name: 'Link text',
          type: componentTypes.singleLine
        },
        {
          id: 'image',
          name: 'Image',
          type: componentTypes.images
        },
        {
          id: 'add-text-as-overlay',
          name: 'Add text as overlay',
          type: componentTypes.boolean
        }
      ]
    };

    const Collection = {
      tenantId: TENANT_ID,
      name: 'Collection',
      identifier: 'frntr-collection',
      type: shapeTypes.document,
      components: [
        {
          id: 'title',
          name: 'Title',
          type: componentTypes.singleLine
        },
        {
          id: 'description',
          name: 'Description',
          type: componentTypes.richText
        },
        {
          id: 'content',
          name: 'Content',
          type: componentTypes.componentChoice,
          config: {
            componentChoice: {
              choices: [
                {
                  id: 'items',
                  name: 'Items',
                  type: componentTypes.itemRelations
                },
                {
                  id: 'grid',
                  name: 'Grid',
                  type: componentTypes.gridRelations
                }
              ]
            }
          }
        }
      ]
    };

    const shapesToInject = [Banner, Article, Folder, Product, Collection];
    (async function injectFurnitureShapes() {
      if (!TENANT_ID) {
        console.log('\x1b[31m', `Missing tenant id`);
        return;
      }
      if (!ACCESS_TOKEN_ID || !ACCESS_TOKEN_SECRET) {
        console.log('\x1b[31m', `Missing token`);
        return;
      }
      let fails = 0;
      for (let i = 0; i < shapesToInject.length; i++) {
        const mutation = buildCreateShapeMutation(shapesToInject[i]);
        const response = await simplyFetchFromGraph({ query: mutation });
        const { errors } = response;
        if (errors) {
          console.log('\x1b[31m', `${shapesToInject[i].name} failed,`);

          for (let i = 0; i < errors.length; i++) {
            console.log('\x1b[37m', `-${errors[i].message}`);
            fails++;
          }
        } else {
          console.log(
            '\x1b[32m',
            `${shapesToInject[i].name} successfully imported`
          );
        }
      }
      console.log(
        fails > 0 ? '\x1b[31m' : '\x1b[32m',
        `Import completed with ${fails} errors`
      );
    })();

    async function simplyFetchFromGraph({ uri = coreUrl, query, variables }) {
      const body = JSON.stringify({ query, variables });
      const response = await fetch(uri, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'x-crystallize-access-token-id': ACCESS_TOKEN_ID,
          'x-crystallize-access-token-secret': ACCESS_TOKEN_SECRET
        },
        body
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
      return response.json();
    }
    ```

    </details>

- After you have created this file, add in your own API keys to the designated areas.
- Navigate inside of the tiki3-0 subdirectory with the CLI command `cd tiki3-0`.
- Run the command `npm install` to generate the package-lock.json file & node_modules folder.
- Additionally, you will need to create a .env file with the following information:

  <details>
    <summary>.env file snippet.</summary>

    ```env
      NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER=your-tenant-name-here
      NEXT_PUBLIC_SERVICE_API_URL=https://service-api-demo.superfast.shop/api/graphql
      ```

  </details>

- More information on setting up the Crystallize project can be found inside the sub README file within tiki3-0.

</details>

##### Available Scripts

Inside of the tiki3-0 subdirectory, you can run the following scripts:

###### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.\

###### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

___

<div align="center">

#### Legal, or License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

![GitHub](https://img.shields.io/github/license/danitcodes/-capstone) Copyright (c) 2021 *_Danielle Thompson_*

</div>