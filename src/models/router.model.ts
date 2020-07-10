export type ComponentsToRender = {
    [path: string]: (props: any) => JSX.Element;
};
