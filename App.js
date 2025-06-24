import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import inicio from './views/inicio';
import Login from './views/Login';
import Cadastro from './views/Cadastro';
import Clientes from './views/Clientes';
import NovoCliente from './views/NovoCliente';
import DetalhesCliente from './views/DetalhesCliente';
import Produtos from './views/Produtos';
import NovoProduto from './views/NovoProduto';
import Agenda from './views/AgendaUnica';
import Venda from './views/venda';
import DetalhesProduto from './views/DetalhesProduto';
import AgendaUnica from  './views/AgendaUnica'

import RedefinirSenha from './views/RedefinirSenha';
import Categoria from './views/categoria'
import SubCategoriaCadastro from './views/subcategoria'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="inicio"
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,  // Garantindo que todas as telas serão desmontadas ao sair delas
        }}
      >
        <Stack.Screen name="inicio" component={inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Clientes" component={Clientes} />
        <Stack.Screen name="NovoCliente" component={NovoCliente} />
        <Stack.Screen name="DetalhesCliente" component={DetalhesCliente} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="NovoProduto" component={NovoProduto} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Venda" component={Venda} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
        <Stack.Screen name="AgendaUnica" component={AgendaUnica} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="SubCategoriaCadastro" component={SubCategoriaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

