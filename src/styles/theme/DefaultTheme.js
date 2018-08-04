const core = {
    white: '#fff',
    gray: '#484848',
    grayLight: '#82888a',
    grayLighter: '#cacccd',
    grayLightest: '#f2f2f2',

    borderMedium: '#c4c4c4',
    border: '#dbdbdb',
    borderLight: '#e4e7e7',
    borderLighter: '#eceeee',
    borderBright: '#f4f5f5',

    primary: '#00a699',
    primaryShade_1: '#33dacd',
    primaryShade_2: '#66e2da',
    primaryShade_3: '#80e8e0',
    primaryShade_4: '#b2f1ec',
    primary_dark: '#008489',

    secondary: '#007a87',

    yellow: '#ffe8bc',
    yellow_dark: '#ffce71',
};

export default {
    color: {
        core,

        disabled: core.grayLightest,

        background: core.white,
        backgroundDark: '#f2f2f2',
        backgroundFocused: core.white,
        border: 'rgb(219, 219, 219)',
        text: core.gray,
        textDisabled: core.border,
        textFocused: '#007a87',
        placeholderText: '#757575',
    },

    font: {
        size: 14,
        captionSize: 18,
        input: {
            size: 19,
            lineHeight: '24px',
            size_small: 15,
            lineHeight_small: '18px',
            letterSpacing_small: '0.2px',
            styleDisabled: 'italic',
        },
    },
}