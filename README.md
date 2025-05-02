# 🎯 React Native Expo Dropdown Picker (iOS, Android, Expo Go Compatible)

This repository demonstrates how to use a fully customizable and cross-platform dropdown picker in **React Native using Expo**.  
It works seamlessly on **iOS**, **Android**, and even inside the **Expo Go app** — no need to eject!

> 📦 Built with [`react-native-dropdown-picker`](https://github.com/hossein-zare/react-native-dropdown-picker)

---

## 🚀 Features

- ✅ Works with **Expo Go**
- ✅ Cross-platform (iOS & Android)
- ✅ Supports `listMode`: `SCROLLVIEW`, `FLATLIST`, `MODAL`
- ✅ Custom styling support
- ✅ Searchable dropdowns
- ✅ Easy state handling
- ✅ Z-Index fixes for smooth stacking

---

## 📸 Preview

<img src="https://user-images.githubusercontent.com/your-image-path/dropdown-demo.gif" width="300" />

---

## 📁 Folder Structure

```bash
.
├── App.js                  # Main app with dropdown implementation
├── assets/                # (Optional) Icons/images
├── components/            # Reusable dropdown components
└── README.md              # This file
```

## 📦 Installation

- Clone the repository:

  ```bash
  git clone [https://github.com/SasadaSaumya/React-Native-Expo-Dropdown.git](https://github.com/SasadaSaumya/React-Native-Expo-Dropdown.git)
  cd ReactNativeExpoDropdown
  ```

- Install dependencies:

  ```bash
  npm install
  ```

- Start the Expo app:

  ```bash
  npx expo start
  ```

## Basic Dropdown (ScrollView)

```jsx
<DropDownPicker
  open={open}
  value={value}
  items={items}
  setOpen={setOpen}
  setValue={setValue}
  setItems={setItems}
  placeholder="Select a fruit"
  listMode="SCROLLVIEW"
/>
```

## FlatList Mode

```jsx
<DropDownPicker
  listMode="FLATLIST"
  searchable={true}
/>
```

## Modal Mode with Custom Styling

```jsx
<DropDownPicker
  listMode="MODAL"
  style={{ borderRadius: 12 }}
  dropDownContainerStyle={{ backgroundColor: "#f9f9f9" }}
  searchable={true}
/>
```

## 🧠 ListMode Types Explained

| Mode              | Description                                  |
| ----------------- | -------------------------------------------- |
| `SCROLLVIEW`      | Default scrollable dropdown list             |
| `FLATLIST`        | Better performance for large data sets       |
| `MODAL`           | Displays the dropdown in a full-screen modal |
| `VIRTUALIZEDLIST` | Used for large and complex item sets         |

## 📋 To Do

- Add search bar example
- Show listMode variations
- Add form validation with dropdown
- Add multi-select support

---

## 🙌 Author

Sasanda Saumya  
🔗 Portfolio • Medium • LinkedIn

---

## 💖 Support

If this helped you, please ⭐ star the repo and share it with other Expo + React Native developers.
