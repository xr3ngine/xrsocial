---
id: "src_world_components_editor_assets_videomediasource.default"
title: "Class: default"
sidebar_label: "default"
custom_edit_url: null
hide_title: true
---

# Class: default

[src/world/components/editor/assets/VideoMediaSource](../modules/src_world_components_editor_assets_videomediasource.md).default

VideoMediaSource used as parent class for Videos Source components like BingVideosSource.

**`author`** Robert Long

## Hierarchy

* [*BaseSource*](src_world_components_editor_assets_sources.basesource.md)

  ↳ **default**

  ↳↳ [*default*](src_world_components_editor_assets_sources_bingvideossource.default.md)

  ↳↳ [*default*](src_world_components_editor_assets_sources_tenorsource.default.md)

## Constructors

### constructor

\+ **new default**(`api`: *any*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`api` | *any* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Overrides: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: [packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx:15](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx#L15)

## Properties

### api

• **api**: [*default*](src_world_components_editor_api.default.md)

Defined in: [packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx:15](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx#L15)

___

### assetPanelComponent

• **assetPanelComponent**: *any*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[assetPanelComponent](src_world_components_editor_assets_sources.basesource.md#assetpanelcomponent)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:12](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L12)

___

### component

• **component**: *typeof* [*default*](../modules/src_world_components_editor_assets_videosourcepanel.md#default)

Defined in: [packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx:14](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx#L14)

___

### iconComponent

• **iconComponent**: *any*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[iconComponent](src_world_components_editor_assets_sources.basesource.md#iconcomponent)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:11](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L11)

___

### id

• **id**: *string*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[id](src_world_components_editor_assets_sources.basesource.md#id)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:9](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L9)

___

### name

• **name**: *string*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[name](src_world_components_editor_assets_sources.basesource.md#name)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:10](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L10)

___

### requiresAuthentication

• **requiresAuthentication**: *boolean*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[requiresAuthentication](src_world_components_editor_assets_sources.basesource.md#requiresauthentication)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:13](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L13)

___

### searchDebounceTimeout

• **searchDebounceTimeout**: *number*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[searchDebounceTimeout](src_world_components_editor_assets_sources.basesource.md#searchdebouncetimeout)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:15](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L15)

___

### uploadSource

• **uploadSource**: *boolean*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[uploadSource](src_world_components_editor_assets_sources.basesource.md#uploadsource)

Defined in: [packages/client-core/src/world/components/editor/assets/sources/index.tsx:14](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/sources/index.tsx#L14)

___

### prefixed

▪ `Static` **prefixed**: *string* \| *boolean*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md).[prefixed](src_world_components_editor_assets_sources.basesource.md#prefixed)

Defined in: node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**<T\>(`event`: T, `fn`: (...`args`: *any*[]) => *void*, `context?`: *any*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *any*[]) => *void* |
`context?` | *any* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:45

___

### emit

▸ **emit**<T\>(`event`: T, ...`args`: *any*[]): *boolean*

Calls each of the listeners registered for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`...args` | *any*[] |

**Returns:** *boolean*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

Return an array listing the events for which the emitter has registered
listeners.

**Returns:** (*string* \| *symbol*)[]

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:15

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

Return the number of listeners listening to a given event.

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<T\>(`event`: T): (...`args`: *any*[]) => *void*[]

Return the listeners registered for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |

**Returns:** (...`args`: *any*[]) => *void*[]

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<T\>(`event`: T, `fn?`: (...`args`: *any*[]) => *void*, `context?`: *any*, `once?`: *boolean*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn?` | (...`args`: *any*[]) => *void* |
`context?` | *any* |
`once?` | *boolean* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<T\>(`event`: T, `fn`: (...`args`: *any*[]) => *void*, `context?`: *any*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

Add a listener for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *any*[]) => *void* |
`context?` | *any* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<T\>(`event`: T, `fn`: (...`args`: *any*[]) => *void*, `context?`: *any*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

Add a one-time listener for a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn` | (...`args`: *any*[]) => *void* |
`context?` | *any* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

Remove all listeners, or those of the specified event.

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<T\>(`event`: T, `fn?`: (...`args`: *any*[]) => *void*, `context?`: *any*, `once?`: *boolean*): [*default*](src_world_components_editor_assets_videomediasource.default.md)

Remove the listeners of a given event.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | T |
`fn?` | (...`args`: *any*[]) => *void* |
`context?` | *any* |
`once?` | *boolean* |

**Returns:** [*default*](src_world_components_editor_assets_videomediasource.default.md)

Inherited from: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: node_modules/eventemitter3/index.d.ts:63

___

### search

▸ **search**(`params`: *any*, `cursor`: *any*, `abortSignal`: *any*): *Promise*<{ `hasMore`: *boolean* = !!nextCursor; `nextCursor`: *any* ; `results`: *any* ; `suggestions`: *any*  }\>

search used to search media source by calling Api.

**`author`** Robert Long

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *any* |
`cursor` | *any* |
`abortSignal` | *any* |

**Returns:** *Promise*<{ `hasMore`: *boolean* = !!nextCursor; `nextCursor`: *any* ; `results`: *any* ; `suggestions`: *any*  }\>

Overrides: [BaseSource](src_world_components_editor_assets_sources.basesource.md)

Defined in: [packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx:31](https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/client-core/src/world/components/editor/assets/VideoMediaSource.tsx#L31)