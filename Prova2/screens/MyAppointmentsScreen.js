import { FlatList, StyleSheet, Text, View } from 'react-native';

const meusCompromissos = [
  { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
  {
    id: '2',
    horario: '14h00',
    descricao: 'Reunião com cliente Carros & Carros',
  },
  { id: '3', horario: '16h30', descricao: 'Prazo final Projeto X' },
];

export default function MyAppointmentsScreen() {
  function renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.horario}>{item.horario}:</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.eu}>(Eu)</Text>
        <View style={styles.infoUsuario}>
          <Text style={styles.nome}>Gabriel David Assed</Text>
          <Text style={styles.turma}>Engenharia de Software</Text>
        </View>
      </View>

      <FlatList
        data={meusCompromissos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cabecalho: {
    marginBottom: 16,
    alignItems: 'center',
  },
  eu: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoUsuario: {
    marginTop: 4,
  },
  nome: {
    fontSize: 16,
  },
  turma: {
    fontSize: 14,
    color: 'gray',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  horario: {
    width: 70,
    fontWeight: 'bold',
  },
  descricao: {
    flex: 1,
  },
});
