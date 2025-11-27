import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>

      <Text style={styles.nome}>Gabriel David Assed</Text>
      <Text style={styles.turma}>Engenharia de Software</Text>

      <View style={styles.spacer} />

      <Button
        title="Meus compromissos"
        onPress={() => navigation.navigate('Meus compromissos')}
      />

      <View style={styles.spacer} />

      <Button
        title="Compromissos da equipe"
        onPress={() => navigation.navigate('Compromissos da equipe')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 24,
  },
  nome: {
    fontSize: 16,
    marginTop: 8,
  },
  turma: {
    fontSize: 14,
    color: 'gray',
  },
  spacer: {
    height: 16,
  },
});
