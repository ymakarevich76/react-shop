export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (itemIndex === index) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        };
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'DEC_QUANTITY':
            let newOrderAfterHandle;
            newOrderAfterHandle = state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity <= 0 ? 0 : newQuantity,
                        };
                    } else {
                        return el;
                    }
                });

                newOrderAfterHandle = newOrderAfterHandle.filter(
                    (item) => item.quantity !== 0
                );

            return {
                ...state,
                order: newOrderAfterHandle
            };
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };

        default:
            return state;
    }
}
