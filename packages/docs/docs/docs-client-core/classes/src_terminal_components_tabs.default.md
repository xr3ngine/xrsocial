---
id: "src_terminal_components_tabs.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
hide_title: true
---

# Class: default

[src/terminal/components/Tabs](../modules/src_terminal_components_tabs.md).default

## Hierarchy

* *Component*<any, any\>

  ↳ **default**

## Constructors

### constructor

\+ **new default**(`props`: *any*): [*default*](src_terminal_components_tabs.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *any* |

**Returns:** [*default*](src_terminal_components_tabs.default.md)

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:469

\+ **new default**(`props`: *any*, `context`: *any*): [*default*](src_terminal_components_tabs.default.md)

**`deprecated`** 

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters:

Name | Type |
:------ | :------ |
`props` | *any* |
`context` | *any* |

**Returns:** [*default*](src_terminal_components_tabs.default.md)

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:471

## Properties

### context

• **context**: *any*

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:469

___

### props

• `Readonly` **props**: *Readonly*<any\> & *Readonly*<{ `children?`: *boolean* \| *ReactElement*<any, string \| JSXElementConstructor<any\>\> \| ReactText \| ReactFragment \| *ReactPortal*  }\>

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:494

___

### refs

• **refs**: *object*

**`deprecated`** 
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:500

___

### state

• **state**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`showingPlus` | *boolean* |

Overrides: void

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:32](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L32)

___

### contextType

▪ `Optional` `Static` **contextType**: *Context*<any\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:451

___

### contextTypes

▪ `Static` **contextTypes**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`instances` | *Requireable*<any[]\> |
`maximise` | *Requireable*<boolean\> |

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:23](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L23)

___

### defaultProps

▪ `Static` **defaultProps**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`style` | *object* |

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:28](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L28)

___

### displayName

▪ `Static` **displayName**: *string*= 'Tabs'

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:13](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L13)

___

### propTypes

▪ `Static` **propTypes**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`active` | *Requireable*<string\> |
`createTab` | *Requireable*<(...`args`: *any*[]) => *any*\> |
`removeTab` | *Requireable*<(...`args`: *any*[]) => *any*\> |
`setActiveTab` | *Requireable*<(...`args`: *any*[]) => *any*\> |
`style` | *Requireable*<object\> |

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:15](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L15)

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:707

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: *Readonly*<any\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<any\> |
`nextContext` | *any* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:739

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: *Readonly*<any\>, `nextState`: *Readonly*<any\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<any\> |
`nextState` | *Readonly*<any\> |
`nextContext` | *any* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:767

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:636

___

### componentDidMount

▸ `Optional`**componentDidMount**(): *void*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:615

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: *Readonly*<any\>, `prevState`: *Readonly*<any\>, `snapshot?`: *any*): *void*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<any\> |
`prevState` | *Readonly*<any\> |
`snapshot?` | *any* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:678

___

### componentWillMount

▸ `Optional`**componentWillMount**(): *void*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:693

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: *Readonly*<any\>, `nextContext`: *any*): *void*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<any\> |
`nextContext` | *any* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:722

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): *void*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:631

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: *Readonly*<any\>, `nextState`: *Readonly*<any\>, `nextContext`: *any*): *void*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<any\> |
`nextState` | *Readonly*<any\> |
`nextContext` | *any* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:752

___

### forceUpdate

▸ **forceUpdate**(`callback?`: () => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | () => *void* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:486

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: *Readonly*<any\>, `prevState`: *Readonly*<any\>): *any*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
:------ | :------ |
`prevProps` | *Readonly*<any\> |
`prevState` | *Readonly*<any\> |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:672

___

### handleBarClick

▸ **handleBarClick**(`e`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *any* |

**Returns:** *void*

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:36](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L36)

___

### handleRemoveClick

▸ **handleRemoveClick**(`e`: *any*, `id`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *any* |
`id` | *any* |

**Returns:** *boolean*

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:49](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L49)

___

### handleTabClick

▸ **handleTabClick**(`e`: *any*, `id`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`e` | *any* |
`id` | *any* |

**Returns:** *void*

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:42](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L42)

___

### removePlus

▸ **removePlus**(): *void*

**Returns:** *void*

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:56](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L56)

___

### render

▸ **render**(): *Element*

**Returns:** *Element*

Overrides: void

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:66](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L66)

___

### setState

▸ **setState**<K\>(`state`: *any*, `callback?`: () => *void*): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`state` | *any* |
`callback?` | () => *void* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:481

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: *Readonly*<any\>, `nextState`: *Readonly*<any\>, `nextContext`: *any*): *boolean*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
:------ | :------ |
`nextProps` | *Readonly*<any\> |
`nextState` | *Readonly*<any\> |
`nextContext` | *any* |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/@types/react/index.d.ts:626

___

### showPlus

▸ **showPlus**(): *void*

**Returns:** *void*

Defined in: [packages/client-core/src/terminal/components/Tabs/index.tsx:61](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/terminal/components/Tabs/index.tsx#L61)