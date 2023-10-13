import { Plus, List } from "@phosphor-icons/react";

import { Button, Menu } from "../Button";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <List/>
      </Menu>
      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  );
}