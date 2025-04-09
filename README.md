# Food Ordering App with React Native and Expo

A simple food ordering app built with **React Native**, **Expo**, **RTKQuery** for data fetching, and **Redux** for state management. This project was created to learn and explore modern tools for building mobile applications.

## Features

- Real-Time Data: Fetches food items (pizza and desserts) from rapid API (https://rapidapi.com/kaushiksheel9/api/pizza-and-desserts).
- Expo Image for fast image loading and caching
- RTK Query to fetch data from API, to make sure everything is handled smoothly.
- Error Handling: Robust error handling ensures a smooth user experience.
- Light & Dark Mode: Supports both themes for a seamless experience.
- Responsive Design: Works flawlessly across iOS and Android devices.
- State Management: Redux is used for efficient state management.
- Navigation: Built with React Navigation for smooth transitions between screens.

## Tech Stack
- **React Native**: For building cross-platform mobile apps.
- **Expo**: For rapid development and testing.
- **RTK Query**: For API calling and data fetching.
- **Redux**: For effective and reliable state management.
- **Expo Image**: For Image fetching and caching.
- **TypeScript**: For type-safe code.
- **React Native Paper**: For a polished and customizable UI.
- **React Native Size Matters**: For handling responsiveness.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI (install globally using `npm install -g expo-cli`)
- Git

### Installation
1. **Clone the repository**:
   `git clone https://github.com/theharisamjad/Foodisto.git`
   `cd Foodisto`
2. Install dependencies:
 `yarn install`
3. Set up environment variables:
Create a .env file in the root directory.
Add your RAPID API HOST AND KEY:
 `RAPID_API_KEY=your_api_key_here
  RAPID_API_HOST=host_url_here 
  `
5. Start the development server:
 `yarn start`
6. Open the app on your device:
   Scan the QR code with the Expo Go app (available on iOS and Android).
   Alternatively, run on an emulator
   `yarn android` or simulator `yarn ios`
7. To build the app for iOS or Android, use EAS:
   `eas build --platform android` or `eas build --platform ios`
8. The application is still under development, use any email(in correct format) or password to log in since it is not mapped to any API.

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository:
 `git clone https://github.com/theharisamjad/Foodisto.git`
 `cd Foodisto`
3. Create a new branch:
`git checkout -b feature/your-feature`
4. Commit your changes: 
`git commit -m 'Add some feature'`
5. Push to the branch:
`git push origin feature/your-feature`
6. Open a pull request.

## Acknowledgements
1. Expo for the amazing development tools.
2. Redux for effective state management.
3. React Native Paper for the beautiful UI components
4. React Native Size Matters for handling responsiveness.
5. RapidApi for providing the food API data.
 <!-- LICENSE -->
# License
Distributed under the `MIT` License. See [LICENSE](https://github.com/theharisamjad/Foodisto/blob/main/LICENSE) for more information.

Made with ❤️ by Haris Amjad
