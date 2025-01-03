import React, { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface DropdownComponentProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  labelColor: string;
  borderColor: string;
  icon: React.ReactNode; // Tipo para aceitar um ícone como parâmetro
  onChange: (item: {
    label: string;
    value: string;
  }) => void;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  data,
  label,
  labelColor,
  borderColor,
  icon,
  onChange
}) => {
  const [value, setValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, { borderColor: isFocus ? "white" : borderColor }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        activeColor="gray"
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Selecione um item" : "..."}
        searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => {setIsFocus(true); Keyboard.dismiss()}}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item);
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <View style={styles.iconContainer}>
            {icon}
          </View>
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "#ff4500",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "black",
  },
  iconContainer: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "black",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "white",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#aaaaaa",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    color: "white",
    backgroundColor: "black",
  },
  itemContainerStyle: {
    backgroundColor: "black",
  },
  itemTextStyle: {
    color: "white",
    fontSize: 16,
  },
});
