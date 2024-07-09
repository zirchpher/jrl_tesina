import { View, StyleSheet, Text } from 'react-native';
import { DropDown } from '@/components/DropDown';
import { RowTarget } from '@/components/RowTarget';
import { PrimaryButton } from '@/components/PrimaryButton';

const proveedores = [
  { label: 'Snack America', value: 'java' },
  { label: 'Lays', value: 'javascript' },
  { label: 'Bodega Don Luis', value: 'python' },
  { label: 'Golosinas Perú', value: 'csharp' },
];

const productos = [{ label: 'Papas Lays Clásicas', value: 'papas lays' }];

export default function ProductosReporteSalida() {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ ...styles.dropDownContainer, marginTop: 24 }}>
          <DropDown label="Selecciona un Proveedor:" items={proveedores} />
        </View>

        <View style={styles.dropDownContainer}>
          <DropDown label="Selecciona un Producto:" items={productos} />
        </View>
      </View>

      <View style={{ marginTop: 24 }}>
        <RowTarget />
        <RowTarget />
        <RowTarget />

        <PrimaryButton title="Guardar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  dropDownContainer: {},
});
