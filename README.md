# TaskManager

Aplicativo inicialmente desenvolvido para contagem de tempo e auxílio no foco para a realização de diversas atividades.

- Alarmes
- Temporizador
- Cronômetro

**Você pode visualizar o site do projeto [aqui](https://gustavoraia.github.io/TaskManager/)**

## Header

Seção disponível na parte superior do site, em que há um relógio com a hora atual e 4 botões com funcionalidades diferentes

- Home :house:
- Calendário :date:
- Modo Claro/Escuro :first_quarter_moon:
- Alarmes Ativos:clock1030:

### Home

>[!NOTE]
>Funcionalidade ainda não disponível
### Calendário

>[!NOTE]
>Funcionalidade ainda não disponível
### Modo Claro/Escuro

Funcionalidade para trocar as cores do site, representado pelo ícone de Sol <img width="20px" src="https://github.com/GustavoRaia/TaskManager/blob/main/imagem/brilho-do-sol.png">
quando no modo escuro e de Lua <img width="20px" src="https://github.com/GustavoRaia/TaskManager/blob/main/imagem/forma-de-meia-lua.png"> quando no modo Claro.

A cor de fundo para modo escuro é `#0e101b` e para Modo Claro é `#49515a05`.

### Alarmes Ativos

Você verá na próxima sessão a funcionalidade de cadastrar alarme. Este botão na header <img width="20px" src="https://github.com/GustavoRaia/TaskManager/blob/main/imagem/alarme.png">
abre e fecha a aba com os alarmes ativos (à direita da tela), com a possibilidade de cadastrar mais alarmes (com um limite de 5 alarmes simultâneos) e excluir alarmes.

## Alarmes :alarm_clock:

Funcionalidade na qual você define um despertador a ser tocado em um horário específico. Quando o horário definido chegar, uma aba com as informações do tempo e título do alarme ficarão aparecendo na tela por 20 segundos 
(ou até ser desativado o alarme).
Quand

### Lista de Alarmes

Funcionalidade em que você visualiza seus alarmes já cadastrados em uma div à direita da tela. Você pode ter até 5 alarmes ativos e com possibilidade de exclui-los a qualquer momento.

Quando a quantidade de alarmes ainda não estver cheia, você pode clicar na opção de cadastrar alarmes dentro da própria lista (a opção aparecerá imediatamente abaixo dos alarmes cadastrados, ou sozinho caso não existam), 
que te redirecionará à tela de adicionar novos alarmes. 

Caso a quantidade de alarmes volte a ser menor que o total permitido, a aba voltará a ficar disponível.

## Temporizador :timer_clock:

Funcionalidade em que você define um tempo a ser contado regressivamente (em horas, minutos e segundos). Depois que confirmado o tempo, o temporizador irá diminuir até o tempo zerar.
A funcionalidade possui botões de 'confirmar tempo', 'iniciar contagem', 'pausar contagem' e 'zerar tempo'.

## Cronômetro :alarm_clock:

Funcionalidade para contagem de tempo em um cronômetro com horas, minutos, segundos e milissegundos.
A funcionalidade possui botões de 'iniciar contagem', 'pausar contagem' e 'zerar contagem'.

## Observações Finais

>[!NOTE]
>- O Projeto ainda não está finalizado, está é apenas a primeira versão pronta com todas as três funcionalidades principais (alarmes, temporizador e cronômetro) rodando.
>- A responsividade ainda não está disponível
>- Em algumas situações, existe a possibilidade do contador não funcionar (quando a janela está minimizada)
>- Sugestões de melhorias ou notificações de erro serão aceitas no email: gustavo.raia02@gmail.com
>- Meu [LinkedIn](https://www.linkedin.com/in/gustavo-raia/)