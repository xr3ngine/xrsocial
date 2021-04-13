---
id: "src_terminal_commands"
title: "Module: src/terminal/commands"
sidebar_label: "src/terminal/commands"
custom_edit_url: null
hide_title: true
---

# Module: src/terminal/commands

## Variables

### commands

• `Const` **commands**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ecs` | *object* |
`ecs.method` | (`args`: *any*, `print`: *any*, `runCommand`: *any*) => *void* |
`ecs.options` | ({ `defaultValue`: *string* = 'console.log("Eval says: feed me code!")'; `description`: *string* = 'query the ecs engine for information on the current scene'; `name`: *string* = 'ecs' } \| { `defaultValue`: *undefined* = 'console.log("Eval says: feed me code!")'; `description`: *string* = ''; `name`: *string* = 'a' })[] |
`eval` | *object* |
`eval.method` | (`args`: *any*, `print`: *any*, `runCommand`: *any*) => *void* |
`eval.options` | { `defaultValue`: *string* = 'console.log("Eval says: feed me code!")'; `description`: *string* = 'execute arbitrary js'; `name`: *string* = 'eval' }[] |
`helloworld` | () => *void* |

Defined in: [packages/client-core/src/terminal/commands.ts:41](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/commands.ts#L41)

___

### descriptions

• `Const` **descriptions**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ecs` | *string* |

Defined in: [packages/client-core/src/terminal/commands.ts:274](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/commands.ts#L274)