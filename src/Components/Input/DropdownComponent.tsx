import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface DropdownComponentProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  labelColor: string;
  borderColor: string;
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
  onChange
}) => {
  const [value, setValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, { color: labelColor }]}>
        {label}
      </Text>
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
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Selecione um item" : "..."}
        searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item);
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons
            style={styles.icon}
            color={isFocus ? "white" : borderColor}
            name="weight-lifter"
            size={20}
          />
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
  icon: {
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
    color: "white", // Texto branco para tema dark
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#aaaaaa", // Placeholder em cinza claro
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white", // Texto selecionado em branco
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "white", // Texto branco no campo de busca
    backgroundColor: "black", // Fundo preto no campo de busca
  },
  itemContainerStyle: {
    backgroundColor: "black", // Fundo preto nos itens
  },
  itemTextStyle: {
    color: "white", // Texto branco nos itens
    fontSize: 16,
  },
});
