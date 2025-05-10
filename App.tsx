import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  //0th drop down
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>([]); // Multi-select = array
  const [items, setItems] = useState([
    { label: "Fruits", value: "fruits-label", selectable: false },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Vegetables", value: "vegetables-label", selectable: false },
    { label: "Carrot", value: "carrot" },
    { label: "Broccoli", value: "broccoli" },
  ]);

  //1st drop down
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "Apple ", value: "apple" },
    { label: "Banana ", value: "banana" },
    { label: "Orange ", value: "orange" },
  ]);

  //2nd drop down
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "Apple ", value: "apple" },
    { label: "Banana ", value: "banana" },
    { label: "Orange ", value: "orange" },
  ]);

  //3rd drop down
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    { label: "Apple ", value: "apple" },
    { label: "Banana ", value: "banana" },
    { label: "Orange ", value: "orange" },
  ]);
  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select multiple items"
          multiple={true} // ✅ Enable multi-select
          mode="BADGE" // ✅ Optional: shows selected items as badges
          listMode="SCROLLVIEW"
          style={styles.dropdown}
          dropDownContainerStyle={{ maxHeight: 200 }}
          onSelectItem={(item) => {
            console.log("Selected item:", item);
          }}
        />
      </View>

      <View style={styles.container}>
        <DropDownPicker
          open={open1}
          value={value1}
          items={items1}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setItems1}
          placeholder="Select a fruit"
          listMode="SCROLLVIEW"
          style={styles.dropdown}
          onChangeValue={(value) => {
            console.log("Selected value:", value);
          }}
          dropDownContainerStyle={styles.dropdown}
          dropDownDirection="BOTTOM"
        />
      </View>

      <View style={styles.container}>
        <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          placeholder="Select a fruit"
          listMode="FLATLIST"
          style={styles.dropdown}
        />
      </View>

      <View style={styles.container}>
        <DropDownPicker
          open={open3}
          value={value3}
          items={items3}
          setOpen={setOpen3}
          setValue={setValue3}
          setItems={setItems3}
          placeholder="Select a fruit"
          listMode="MODAL"
          style={styles.dropdown}
          modalProps={{
            animationType: "slide",
            presentationStyle: "overFullScreen",
          }}
          modalContentContainerStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "37%",
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  dropdown: {
    borderColor: "green",
  },
});
