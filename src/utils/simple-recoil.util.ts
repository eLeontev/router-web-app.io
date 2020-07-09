import { atom, selector, RecoilState, RecoilValueReadOnly, RecoilValue } from 'recoil';

export type GetRecoilValue = <T>(recoilVal: RecoilValue<T>) => T;

export type SAtom = <T>(state: RecoilValue<T> | Promise<T> | T) => RecoilState<T>;
export type SSelector = <T>(
    get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T
) => RecoilValueReadOnly<T>;

const hashFn = (() => {
    let index = 0;

    return (): string => `${++index}`;
})();

export const sAtom: SAtom = <T>(state: RecoilValue<T> | Promise<T> | T) =>
    atom<T>({ key: hashFn(), default: state });

export const sSelector: SSelector = <T>(
    get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T
) => selector<T>({ key: hashFn(), get });
