import { StyleSheet } from 'react-native';

const externalStyles = StyleSheet.create({
    rowSB: {
        flexDirection: 'row'
    }, textStyle: {
        color: '#FFFFFF',
    }, eventsEnteries: {
        backgroundColor: '#202020', flexDirection: 'row',
        height: 57, width: '98%',
        justifyContent: 'space-between', borderRadius: 5,
        marginVertical: 5, marginLeft: 4
    }, themeTitle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }

});

export { externalStyles }