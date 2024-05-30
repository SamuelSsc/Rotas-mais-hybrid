import { Body, VBox, VSeparator } from "@components";
import * as React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";

export default function FaqScreen() {
  return (
    <List.AccordionGroup>
      <List.Accordion title="Como alterar minha senha?" id="1">
        <VBox>
          <VSeparator />
          <Body>
            Para alterar a senha é preciso deslogar da conta e na tela inicial
            clicar em esqueci a senha, isso fará com que o app lhe envie um
            email para o endereço de e-mail informado e assim você poderá
            cadastrar uma nova senha
          </Body>
          <VSeparator />
        </VBox>
      </List.Accordion>
      <List.Accordion title="Como o app sabe qual unidade está cheia?" id="2">
        <VBox>
          <VSeparator />

          <Body>
            Para saber se uma unidade de saúde está cheia o nosso aplicativo faz
            uma média entre a capacidade da unidade, a quantidade de pessoas no
            local o tempo de atendimento e o feedback pedido aos nossos usuários
            ao serem atendidos
          </Body>
          <VSeparator />
        </VBox>
      </List.Accordion>
      <List.Accordion title="Como posso aumentar o tamanho dos textos?" id="3">
        <VBox>
          <VSeparator />

          <Body>
            Para aumentar o tamanho da fonte no app, acesse na aba inferior a
            opção de ajuda e acesse a primeira opção de acessibilidade lá você
            verá a opção de definir o tamanho da fonte desde pequena até muito
            grande
          </Body>
          <VSeparator />
        </VBox>
      </List.Accordion>
      <List.Accordion title="Como posso mudar a cor do app?" id="4">
        <VBox>
          <VSeparator />

          <Body>
            Para alterar a cor no app, acesse na aba inferior a opção de ajuda e
            acesse a primeira opção de acessibilidade lá você verá a opção de
            alterar o tema entre claro e escuro e tambem aumentar o contraste
            caso tenha problemas na identificação de cores
          </Body>
          <VSeparator />
        </VBox>
      </List.Accordion>
    </List.AccordionGroup>
  );
}
