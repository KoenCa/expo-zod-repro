# React Native React Hook form with Zod resolver repro

Reproduction repository to reproduce a bug where Zod locales and global error customization are not working correctly
due to new Metro ES Module resolution.

**Steps:**
1. Install dependencies with `bun install`
2. Run the server with `bun start`
3. Open in simulator/device of your choice
4. In app press `Submit` -> "Invalid input" message is shown
    - NOT correct. By default Zod should load its own en locale for messages or custom global config.
5. In the `metro.config.js` file uncomment `config.resolver.unstable_enablePackageExports = false;`, save and restart the server.
6. Reload the app on your simulator/device
7. In app press `Submit` -> "Too small: expected string to have >=1 characters" message is shown.
    - This is the expected behavior.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
