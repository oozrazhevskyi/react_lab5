const posts = [
  {
    "id": "1",
    "image": "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png?f=webp&w=256",
    "title": "What is React",
    "shortDescription": "ReactJS, also known as React, is an open-source JavaScript library for building user interfaces...",
    "fullDescription": "ReactJS, also known as React, is an open-source JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers. React allows developers to create reusable UI components and build complex, interactive user interfaces for web and mobile applications.\nReact uses a declarative programming model, which means that developers specify the desired outcome, and React handles the details of how to achieve that outcome. This simplifies the development process and makes it easier to build complex applications.\nReact uses a virtual DOM (Document Object Model) to manage the state and update the UI efficiently. When a user interacts with the application, React updates the virtual DOM, compares it with the previous state, and updates only the necessary changes in the actual DOM. This makes the application faster and more efficient.\nReact has a large and active community of developers who create and maintain a wide range of libraries, tools, and extensions. This makes it easy to integrate React into existing projects and extend its functionality.\nReact is widely used in web development, and many popular websites and applications, including Facebook, Instagram, and Netflix, have been built with React.",
    "category": "react",
    "date": "01.04.2023",
    "rating": 5,
  },
  {
    "id": "2",
    "image": "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
    "title": "About Redux",
    "shortDescription": "Redux is a state management library for React applications...",
    "fullDescription": "Redux is a state management library for React applications. It was created to solve the problem of managing the state of a large-scale application, where the state can become complex and difficult to manage. Redux provides a predictable state container for an application, which makes it easier to manage and update the state.\nIn a Redux application, the state is stored in a single store, which is managed by a set of reducers. A reducer is a pure function that takes the current state and an action, and returns a new state. Actions are dispatched to the store, which triggers the reducers to update the state.\nRedux also provides middleware, which allows developers to intercept and modify actions before they reach the reducers. This can be used to implement features such as logging, caching, and asynchronous behavior.\nOne of the key benefits of using Redux is that it provides a clear separation between the state and the UI components. This makes it easier to reason about the state of the application and the behavior of the UI components.\nRedux is widely used in React applications, and many popular libraries and frameworks, such as React Native, Angular, and Vue, have also been adapted to work with Redux.",
    "category": "react",
    "date": "02.04.2023",
    "rating": 3,
  },
  {
    "id": "3",
    "image": "https://icon-library.com/images/web-developer-icon/web-developer-icon-1.jpg",
    "title": "Frontend web development",
    "shortDescription": "Frontend web development is the process of creating and designing the visible parts of a website or web application that users interact with...",
    "fullDescription": "Frontend web development is the process of creating and designing the visible parts of a website or web application that users interact with. It involves creating the user interface (UI) and the user experience (UX) design, as well as the functionality that is visible to the user.\nFrontend developers use a combination of HTML, CSS, and JavaScript, to create the layout, design, and functionality of a website. They work closely with designers to create a visually appealing and user-friendly interface that meets the needs of the users.\nFrontend development also involves creating responsive designs that work across different devices and screen sizes, as well as ensuring that the website is accessible to users with disabilities.\nIn addition to creating the user interface, frontend developers also handle the interaction between the frontend and the backend of a website or web application. This involves handling user input and making requests to the backend to retrieve data or perform actions.\nOverall, frontend web development plays a crucial role in creating a positive user experience and ensuring that a website or web application is both functional and visually appealing.",
    "category": "web-development",
    "date": "02.04.2023",
    "rating": 2,
  },
  {
    "id": "4",
    "image": "https://destatic.blob.core.windows.net/images/bootstrap-logo.png",
    "title": "Bootstrap",
    "shortDescription": "Bootstrap is a free and open-source CSS framework that is used for building responsive, mobile-first web applications...",
    "fullDescription": "Bootstrap is a free and open-source CSS (Cascading Style Sheets) framework that is used for building responsive, mobile-first web applications. It was created by Twitter and is now maintained by a community of developers.\nBootstrap provides a set of pre-designed templates, styles, and components, such as buttons, forms, and navigation bars, that can be easily customized and used in web development projects. It also provides a grid system that allows developers to create responsive layouts that adjust to different screen sizes.\nBootstrap uses HTML, CSS, and JavaScript, and is compatible with all modern web browsers. It is designed to make web development faster and easier, and to ensure that websites and web applications are consistent and visually appealing.\nBootstrap is widely used in web development and is popular among developers due to its ease of use, versatility, and wide range of features and components. It is also highly customizable and can be used to create unique and customized designs for web applications.",
    "category": "web-development",
    "date": "20.03.2023",
    "rating": 5,
  },
  {
    "id": "5",
    "image": "https://static-00.iconduck.com/assets.00/apps-figma-icon-256x256-paa4u9ra.png",
    "title": "Figma",
    "shortDescription": "Figma is a cloud-based design and prototyping tool used for creating user interfaces, web and mobile app designs, and other digital products...",
    "fullDescription": "Figma is a cloud-based design and prototyping tool used for creating user interfaces, web and mobile app designs, and other digital products. It is a collaborative tool that allows designers to work on a project simultaneously and in real-time.\nFigma provides a wide range of design tools and features, including vector editing, prototyping, and design libraries. It also has a built-in collaboration feature, which allows multiple designers to work on the same project and share feedback and comments.\nOne of the key benefits of Figma is that it is cloud-based, which means that designers can access their projects from anywhere with an internet connection. It also allows for easy sharing and collaboration with team members and clients.\nFigma is widely used in web and mobile app design, and is popular among designers and developers due to its ease of use, collaboration features, and ability to create high-quality designs quickly.",
    "category": "tools",
    "date": "03.04.2023",
    "rating": 4,
  },
  {
    "id": "6",
    "image": "https://code.visualstudio.com/assets/apple-touch-icon.png",
    "title": "Visual Studio Code",
    "shortDescription": "VS Code is a free and open-source code editor developed by Microsoft. It is designed for developers to write, debug, and test code for a wide range of programming languages and platforms...",
    "fullDescription": "Visual Studio Code is a free and open-source code editor developed by Microsoft. It is designed for developers to write, debug, and test code for a wide range of programming languages and platforms.\nVisual Studio Code provides a wide range of features and extensions that make it easy to write and manage code, including syntax highlighting, code completion, debugging, and integrated source control. It also has built-in support for Git, which allows developers to collaborate and manage code changes with others.\nOne of the key benefits of Visual Studio Code is its ability to be customized with extensions and plugins. There is a large and active community of developers who create and maintain extensions for Visual Studio Code, which allows developers to tailor the editor to meet their specific needs.\nVisual Studio Code is cross-platform, which means that it can be used on Windows, macOS, and Linux. It is also lightweight and fast, which makes it easy to use and ideal for developers who work with multiple programming languages and platforms.\nOverall, Visual Studio Code is a powerful and versatile code editor that is widely used by developers around the world. It is free, open-source, and constantly evolving, which makes it an excellent choice for developers looking for a flexible and reliable code editor.",
    "category": "tools",
    "date": "04.04.2023",
    "rating": 5,
  },
  {
    "id": "7",
    "image": "https://static-00.iconduck.com/assets.00/apps-figma-icon-256x256-paa4u9ra.png",
    "title": "Lorem ipsum",
    "shortDescription": "Lorem ipsum short description",
    "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "category": "tools",
    "date": "03.04.2023",
    "rating": 1,
  },
  // auto-generated posts below
  {
  "id": "11",
  "image": "https://picsum.photos/150?random=12985698475",
  "title": "VP Quality Control",
  "shortDescription": "Praesent id massa id nisl venenatis lacinia.",
  "fullDescription": "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
  "category": "tools",
  "date": "19.12.2022",
  "rating": 4
}, {
  "id": "12",
  "image": "https://picsum.photos/150?random=98179",
  "title": "Legal Assistant",
  "shortDescription": "Maecenas ut massa quis augue luctus tincidunt.",
  "fullDescription": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  "category": "react",
  "date": "19.07.2022",
  "rating": 4
}, {
  "id": "13",
  "image": "https://picsum.photos/150?random=4875",
  "title": "Design Engineer",
  "shortDescription": "Ut tellus.",
  "fullDescription": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "category": "web-development",
  "date": "20.01.2023",
  "rating": 1
}, {
  "id": "14",
  "image": "https://picsum.photos/150?random=981743",
  "title": "Geologist II",
  "shortDescription": "Nulla ac enim.",
  "fullDescription": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
  "category": "tools",
  "date": "06.08.2022",
  "rating": 2
}, {
  "id": "15",
  "image": "https://picsum.photos/150?random=98761",
  "title": "Nurse Practicioner",
  "shortDescription": "Morbi a ipsum.",
  "fullDescription": "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  "category": "web-development",
  "date": "30.07.2022",
  "rating": 2
}, {
  "id": "16",
  "image": "https://picsum.photos/150?random=923569",
  "title": "Developer II",
  "shortDescription": "Mauris lacinia sapien quis libero.",
  "fullDescription": "Proin eu mi. Nulla ac enim.",
  "category": "web-development",
  "date": "29.06.2022",
  "rating": 5
}, {
  "id": "17",
  "image": "https://picsum.photos/150?random=123659697",
  "title": "Teacher",
  "shortDescription": "Maecenas tincidunt lacus at velit.",
  "fullDescription": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "category": "tools",
  "date": "13.11.2022",
  "rating": 2
}, {
  "id": "18",
  "image": "https://picsum.photos/150?random=263459726",
  "title": "Developer IV",
  "shortDescription": "In congue.",
  "fullDescription": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
  "category": "web-development",
  "date": "29.10.2022",
  "rating": 2
}, {
  "id": "19",
  "image": "https://picsum.photos/150?random=59721465",
  "title": "Compensation Analyst",
  "shortDescription": "Curabitur gravida nisi at nibh.",
  "fullDescription": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  "category": "web-development",
  "date": "09.11.2022",
  "rating": 4
}, {
  "id": "20",
  "image": "https://picsum.photos/150?random=897264",
  "title": "Senior Sales Associate",
  "shortDescription": "In congue.",
  "fullDescription": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  "category": "react",
  "date": "14.02.2023",
  "rating": 2
}, {
  "id": "21",
  "image": "https://picsum.photos/150?random=157645789",
  "title": "Programmer I",
  "shortDescription": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "fullDescription": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
  "category": "tools",
  "date": "12.03.2023",
  "rating": 2
}, {
  "id": "22",
  "image": "https://picsum.photos/150?random=6934569826",
  "title": "Administrative Officer",
  "shortDescription": "Nullam varius.",
  "fullDescription": "Duis mattis egestas metus. Aenean fermentum.",
  "category": "react",
  "date": "02.03.2023",
  "rating": 2
}, {
  "id": "23",
  "image": "https://picsum.photos/150?random=59876",
  "title": "Design Engineer",
  "shortDescription": "Integer a nibh.",
  "fullDescription": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "category": "tools",
  "date": "07.05.2022",
  "rating": 3
}, {
  "id": "24",
  "image": "https://picsum.photos/150?random=12938",
  "title": "Design Engineer",
  "shortDescription": "Aliquam sit amet diam in magna bibendum imperdiet.",
  "fullDescription": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  "category": "tools",
  "date": "22.05.2022",
  "rating": 1
}, {
  "id": "25",
  "image": "https://picsum.photos/150?random=582371",
  "title": "Sales Representative",
  "shortDescription": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
  "fullDescription": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
  "category": "tools",
  "date": "01.12.2022",
  "rating": 2
}, {
  "id": "26",
  "image": "https://picsum.photos/150?random=9871",
  "title": "Assistant Media Planner",
  "shortDescription": "In hac habitasse platea dictumst.",
  "fullDescription": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
  "category": "react",
  "date": "30.04.2022",
  "rating": 5
}, {
  "id": "27",
  "image": "https://picsum.photos/150?random=958",
  "title": "Technical Writer",
  "shortDescription": "Donec semper sapien a libero.",
  "fullDescription": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
  "category": "web-development",
  "date": "15.09.2022",
  "rating": 4
}, {
  "id": "28",
  "image": "https://picsum.photos/150?random=2985",
  "title": "Product Engineer",
  "shortDescription": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
  "fullDescription": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "category": "web-development",
  "date": "24.08.2022",
  "rating": 1
}, {
  "id": "29",
  "image": "https://picsum.photos/150?random=935721",
  "title": "Teacher",
  "shortDescription": "Quisque porta volutpat erat.",
  "fullDescription": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "category": "react",
  "date": "05.09.2022",
  "rating": 2
}, {
  "id": "30",
  "image": "https://picsum.photos/150?random=978918341",
  "title": "Electrical Engineer",
  "shortDescription": "Donec posuere metus vitae ipsum.",
  "fullDescription": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
  "category": "tools",
  "date": "06.11.2022",
  "rating": 2
},



];

export default posts;