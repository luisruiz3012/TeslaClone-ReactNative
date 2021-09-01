import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%'
      },
      titles: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: '500'
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Por si la imagen no cabe en toda la pantalla
        position: 'absolute' // Para que los componentes se pongan encima
      }
})

export default styles;