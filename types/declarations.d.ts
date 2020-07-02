interface CSSModule {
    [className: string]: string;
}

declare module '*.scss' {
    const content: CSSModule;
    export default content;
}
