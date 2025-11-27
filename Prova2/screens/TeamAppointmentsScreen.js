import { SectionList, StyleSheet, Text, View } from 'react-native';

const compromissosEquipe = [
  {
    titulo: '(Eu)',
    data: [
      { id: 1, horario: '09h30', descricao: 'Reunião "Daily"' },
      {
        id: 2,
        horario: '14h00',
        descricao: 'Reunião com cliente Carros & Carros',
      },
      { id: 3, horario: '16h30', descricao: 'Prazo final Projeto X' },
    ],
  },
  {
    titulo: 'Jurema (chefe)',
    data: [
      { id: 4, horario: '09h30', descricao: 'Reunião "Daily"' },
      { id: 5, horario: '12h00', descricao: 'Almoço com a diretoria' },
      { id: 6, horario: '15h00', descricao: 'Saída viagem' },
    ],
  },
  {
    titulo: 'Aderbal',
    data: [
      { id: 7, horario: '09h30', descricao: 'Reunião "Daily"' },
      { id: 8, horario: '13h30', descricao: 'Visita técnica Uni-FACEF' },
      { id: 9, horario: '16h30', descricao: 'Prazo final Projeto X' },
    ],
  },
];

export default function TeamAppointmentsScreen() {
  function renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.horario}>{item.horario}:</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    );
  }

  function renderSectionHeader({ section }) {
    return <Text style={styles.header}>{section.titulo}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.nome}>Gabriel David Assed</Text>
        <Text style={styles.turma}>Engenharia de Software</Text>
      </View>

      <SectionList
        sections={compromissosEquipe}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
  nome: {
    fontSize: 16,
  },
  turma: {
    fontSize: 14,
    color: 'gray',
  },
  header: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  horario: {
    width: 70,
    fontWeight: 'bold',
  },
  descricao: {
    flex: 1,
  },
});
