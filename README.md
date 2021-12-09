First, check if you have the latest node version (v16.13.1)

Then, run the following commands to initialize and build the monorepo via lerna:

1. ~ yarn install
2. ~ yarn add lerna or yarn add lerna -W
3. ~ yarn add parcel-bundler or yarn add parcel-bundler -W
4. ~ yarn build

Last, but not least, navigate to packages/react and initialize the storybook with:

~ yarn start-storybook
