import React from 'react';
import './boards.scss';

export const Board = () => (
    <section className="board">
        {new Array(Math.floor(Math.random() * 10)).fill('').map((e, i) => (
            <p key={i}>{i}</p>
        ))}
    </section>
);

export const Boards = ({ boards: { left, right } }: any) => (
    <section className="boards">
        <section className="boards-left">
            {left.map((key: any) => (
                <Board key={key} />
            ))}
        </section>

        <section className="boards-right">
            {right.map((key: any) => (
                <Board key={key} />
            ))}
        </section>
    </section>
);
