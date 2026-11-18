
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  function calcularMedia() {
    if (
      !nome.trim() ||
      !nota1.trim() ||
      !nota2.trim() ||
      !nota3.trim()
    ) {
      setErro('Preencha todos os campos.');
      setResultado('');
      return;
    }

    const notas = [nota1, nota2, nota3].map(
      n => Number(n.replace(',', '.'))
    );

    if (
      notas.some(n => !Number.isFinite(n) || n < 0 || n > 10)
    ) {
      setErro('As notas devem estar entre 0 e 10.');
      setResultado('');
      return;
    }

    const media = (notas[0] + notas[1] + notas[2]) / 3;

    const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

    setResultado(
      `${nome}: média ${media.toFixed(2).replace('.', ',')} — ${situacao}`
    );

    setErro('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Média Escolar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do estudante"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Primeira nota"
        keyboardType="decimal-pad"
        value={nota1}
        onChangeText={setNota1}
      />

      <TextInput
        style={styles.input}
        placeholder="Segunda nota"
        keyboardType="decimal-pad"
        value={nota2}
        onChangeText={setNota2}
      />

      <TextInput
        style={styles.input}
        placeholder="Terceira nota"
        keyboardType="decimal-pad"
        value={nota3}
        onChangeText={setNota3}
      />

      <Button
        title="Calcular média"
        onPress={calcularMedia}
      />

      {erro !== '' && (
        <Text style={styles.erro}>{erro}</Text>
      )}

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F1F8F2',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#246B3C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#246B3C',
  },
  erro: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
  },
});
