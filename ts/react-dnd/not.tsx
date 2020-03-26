// type EqualityCheck<T> = (a: T, b: T) => boolean
// const strictEquality = <T>(a: T, b: T) => a === b
// EqualityCheck<T> = strictEquality

// export function xor<T extends string | number>(itemsA: T[], itemsB: T[]): T[] {}

// as
// Object.keys(actions).reduce((boundActions: DragDropActions, key: string) => {
//   const action: ActionCreator<any> = (actions as any)[key] as ActionCreator<
//     any
//   >;
//   (boundActions as any)[key] = bindActionCreator(action);
//   return boundActions;
// }, {} as DragDropActions);
// this.mouseMoveTimeoutTimer = (setTimeout(() => {
//   return (
//     this.window &&
//     this.window.addEventListener(
//       'mousemove',
//       this.endDragIfSourceWasRemovedFromDOM,
//       true,
//     )
//   )
// }, MOUSE_MOVE_TIMEOUT) as any) as number

// is
// export function isTouchEvent(
//   e: Touch | TouchEvent | MouseEvent,
// ): e is TouchEvent {
//   return !!(e as TouchEvent).targetTouches;
// }

/**
 * declare
 */
// declare global {
//   interface Window extends HTMLElement {
//     safari: any;
//   }
// }
// declare global {
// 	interface Window {
// 		__isReactDndBackendSetUp: boolean | undefined
// 	}
// }
// declare const process: any

// Record
// const eventNames: Record<ListenerType, EventName> = {
// 	[ListenerType.mouse]: {
// 		start: 'mousedown',
// 		move: 'mousemove',
// 		end: 'mouseup',
// 		contextmenu: 'contextmenu',
// 	},
// 	[ListenerType.touch]: {
// 		start: 'touchstart',
// 		move: 'touchmove',
// 		end: 'touchend',
// 	},
// 	[ListenerType.keyboard]: {
// 		keydown: 'keydown',
// 	},
// }

/**
 * ReturnType
 */
// private timeout: ReturnType<typeof setTimeout> | undefined
// this.timeout = (setTimeout(
//   this.handleTopMoveStart.bind(this, e as any),
//   delay,
// ) as any) as ReturnType<typeof setTimeout>

/**
 * type & generic
 */
// export type DndComponentClass<
//   C extends React.ComponentType<any>,
//   P
// > = React.ComponentClass<JSX.LibraryManagedAttributes<C, P>> &
//   NonReactStatics<C> & { DecoratedComponent: C };

// export type DndProviderProps<BackendContext, BackendOptions> =
// 	| {
// 			manager: DragDropManager
// 	  }
// 	| {
// 			backend: BackendFactory
// 			context?: BackendContext
// 			options?: BackendOptions
// 			debugMode?: boolean
// 	  }
