export const showLogin = () => {
    return {
        type: SHOW_LOGIN,
        payload: true
    };
};

export const hideLogin = () => {
    return {
        type: HIDE_LOGIN,
        payload: false
    };
};