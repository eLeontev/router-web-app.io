export type SuspenseResourse<R> = {
    read(): R;
};

export const suspenceFetch = <R>(
    promise: Promise<R>
): SuspenseResourse<R | undefined> => {
    return wrapPromise<R>(promise);
};

const wrapPromise = <R>(promise: Promise<R>) => {
    let status = 'pending';
    let result: R;

    const suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );
    return {
        read(): R | undefined {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        },
    };
};
