import { Text, View, Button, SafeAreaView, Image } from "react-native";
import {useState} from "react";

export default function Index() {
  const animalesIniciales = ['Perro', 'Gato', 'Loro', 'Monito'];

  const [animales, setAnimales] = useState(animalesIniciales);

  const onAgregarHandler = () => {
    const animalesNuevos = [...animales, 'Leon'];
    setAnimales(animalesNuevos);
  };

  const onRemoverHandler = () => {
    const animalesNuevos = animales.filter((animal) =>{
      return animal !== 'Loro';
    })
    setAnimales(animalesNuevos);
  };

  const onReemplazarHandler = () => {
    const animalesNuevos = animales.map((animal) =>{
      return animal === 'Monito' ? animal.toUpperCase() : animal;
    });
    setAnimales(animalesNuevos);
  }

  const onOrdenarHandler = () => {
    const animalesNuevos = [...animales].sort();
    setAnimales(animalesNuevos);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        {animales.map((animal) => (
          <Text key={animal}>{animal}</Text>
        ))}
      <Button title='Agregar Leon' onPress={onAgregarHandler} color = 'chartreuse'/>
      <Button title='Remover Loro' onPress={onRemoverHandler} color = 'crimson'/>
      <Button title='Mayuscula Monito' onPress={onReemplazarHandler} color = 'gold'/>
      <Button title='Ordenar ASC' onPress={onOrdenarHandler} color = 'magenta'/>
      {/* <Image source={require("@/assets/images/react-logo.png")} />
      <Image source={{uri: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hqdDRsMzNweWxmcXhrMnhlaXQ4bWJkYmUxeWJkMnBlMHI5cWhheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W7DHaxkSE4Lpm/giphy.gif"}}
       style={{ width:200, height:200 }}/> */}
      </SafeAreaView>
    </View>
  );
}
