import * as d3 from 'd3';

const offsetTop = 0;
const offsetRight = 0;
const offsetBottom = 10;
const offsetLeft = 0;

export const renderGraph = (selector: string, modifier: string, dataset: Array<{ y: number }>) => {
    const parent = d3.select(`.${selector}__${modifier}`);
    parent.selectAll('*').remove();

    const {
        width: parentWidth,
        height: parentHeight,
    } = (parent.node() as HTMLElement).getBoundingClientRect();

    const width = parentWidth - offsetLeft - offsetRight;
    const height = parentHeight - offsetTop - offsetBottom;

    const xScale = d3
        .scaleLinear()
        .domain([0, dataset.length - 1])
        .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, 1]).range([0, height]);

    const line = d3
        .line()
        .x((d, i) => xScale(i))
        .y((d: any) => height - yScale(d.y))
        .curve(d3.curveMonotoneX);

    const svg = parent
        .append('svg')
        .attr('width', width + offsetLeft + offsetRight)
        .attr('height', height + offsetTop + offsetBottom);

    svg.append('g')
        .attr('transform', `translate(${offsetLeft}, ${offsetTop})`)
        .append('path')
        .datum(dataset)
        .attr('class', `line__${modifier}`)
        .attr('d', line as any);

    const hAxis = d3
        .axisRight(d3.scaleLinear().range([height, 0])) // to set base border as he first item to simple remove it
        .ticks(6)
        .tickSize(width);

    svg.append('g')
        .attr('class', 'h-oriented-borders')
        .call(hAxis)
        .call((g) => g.select('.domain').remove()) // to remove domain
        .call((g) => g.select('.tick').remove()); // to remove the base border
};
