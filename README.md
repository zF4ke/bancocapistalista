[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/zF4ke/bancocapistalista">
    <img src="https://cdn.discordapp.com/avatars/717160524349177927/bbe30937938fe1701e7863a59a508dcd.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Banco Capitalista</h3>


<p>Um bot ou selfbot de discord que funciona como um banco para guardar e manipular os seus sonhos da Loritta.</p>

## Conteúdo

* [Como usar](#como-usar)
* [Comandos](#comandos)
* [Licença](#Licença)
* [Contacto](#Contacto)

## Como usar

Configure corretamente as informações dentro do arquivo `settings.json` com o seu BOT_ID e BOT_TOKEN e as contas para a rifa no arquivo `accounts.json`.
Pode alterar também o seu prefixo e a cor padrão.

settings.json
```json
  {
    "token": "YOUR_BOT_TOKEN",
    "prefix": "$",
    "ID": "YOUR_BOT_ID",
    "color": "#034df8"
}
```

accounts.json
```json
  {
    "zF4ke2": "ACCOUNT_TOKEN",
    "xFaker": "ACCOUNT_TOKEN",
    "DiscordOfficialAccount":"ACCOUNT_TOKEN",
    "OConselho": "ACCOUNT_TOKEN",
    "zF4ke0": "ACCOUNT_TOKEN"
  }
```

## Comandos

<h3>Bank</h3>

| Comando | Descrição |
| ------- | --------- |
| `$bank` | Mostra o dinheiro total do banco. |
| `$bank help` | Lista de comandos dentro do discord. |
| `$bank money` | Subcomando que o dinheiro total do banco |
| `$bank withdraw [quantia]` | Use para retirar dinheiro do banco. |
| `$bank pay (usuario) [quantia]` | Use para enviar dinheiro a uma pessoa especifica. |
| `$bank perms` | Use para ver a lista de permissões. |

<h4>Bank Perms</h4>

| Comando | Descrição |
| ------- | --------- |
| `$bank perms help` | Subcomando para ver a lista de permissões. |
| `$bank perms create (usuario)` | Use para criar uma conta no banco. |
| `$bank perms set (usuario) [0-3]` | Use para setar as permissões de um usuário. |
| `$bank perms list` | Use para ver a lista de permissões. |


<h5>Bank Perms List</h5>

| Permissão | Descrição |
| ------- | --------- |
| `0` | Permissão para usar `$bank help` e `$bank money`. |
| `1` | Permissões equivalentes ao nivel 0 + permissão para enviar dinheiro para o banco. |
| `2` | Permissões equivalentes aos níveis 0 e 1 + permissão para usar `$bank pay` e `$bank withdraw`. |
| `3` | Permissões equivalentes aos níveis 0, 1 e 2 + permissão para gerir `$bank perms`. |

<h3>Rifa</h3>

| Comando | Descrição |
| ------- | --------- |
| `$rifa` | Lista de comandos dentro do discord. |
| `$rifa help` | Subcomando para ver a lista de comandos.|
| `$rifa setar [1-5] [numero de rifas]` | Use para comprar as rifas. |
| `$rifa comprar [quantia]` | Use para retirar dinheiro do banco. |
| `$rifa coletar (usuario) [quantia]` | Use para pegar todo o dinheiro de volta. (Inacabado) |
| `$rifa ver` | Use para ver quantas rifas cada bot vai comprar. |
| `$rifa login` | Use para logar todos os bots. |

<h3>Ping</h3>

Use `$bank ping` para checkar o status do bot.

## Contacto

zF4ke - Discord zF4ke#8556 - pedrohsilva955gmail.com

Link do Projeto: [https://github.com/zF4ke/antlia-j](https://github.com/zF4ke/antlia-j)

## Licença

Distributed under the MIT License. See `LICENSE` for more information.

[contributors-shield]: https://img.shields.io/github/contributors/zF4ke/bancocapistalista.svg?style=flat-square
[contributors-url]: https://github.com/zF4ke/bancocapistalista/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/zF4ke/bancocapistalista.svg?style=flat-square
[forks-url]: https://github.com/zF4ke/bancocapistalista/network/members
[stars-shield]: https://img.shields.io/github/stars/zF4ke/bancocapistalista.svg?style=flat-square
[stars-url]: https://github.com/zF4ke/bancocapistalista/stargazers
[issues-shield]: https://img.shields.io/github/issues/zF4ke/bancocapistalista.svg?style=flat-square
[issues-url]: https://github.com/zF4ke/bancocapistalista/issues
[license-shield]: https://img.shields.io/github/license/zF4ke/bancocapistalista.svg?style=flat-square
[license-url]: https://github.com/zF4ke/bancocapistalista/blob/master/LICENSE
