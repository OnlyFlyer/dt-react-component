import React from 'react';

import CopyUtils from '../utils/copy';
import { HotTable } from '@handsontable/react';
import type { HotTableProps } from '@handsontable/react';
import classNames from 'classnames';
import 'handsontable/dist/handsontable.full.css';
import 'handsontable/languages/zh-CN.js';

type IOptions = HotTableProps & {
    /** 是否展示复制值以及列名 */
    showCopyWithHeader?: boolean;
};

export interface SpreadSheetProps {
    data: Array<Array<string | null | number>>;
    columns: any;
    className?: string;
    options?: IOptions;
}

class SpreadSheet extends React.PureComponent<SpreadSheetProps, any> {
    tableRef: any = React.createRef();
    copyUtils = new CopyUtils();
    _renderTimer: any;

    componentDidUpdate(prevProps: any, _prevState: any) {
        if (prevProps != this.props) {
            if (this.tableRef) {
                this.removeRenderClock();
                this._renderTimer = setTimeout(() => {
                    console.log('render sheet');
                    this.tableRef.current.hotInstance.render();
                }, 100);
            }
        }
    }
    removeRenderClock() {
        if (this._renderTimer) {
            clearTimeout(this._renderTimer);
        }
    }
    componentWillUnmount() {
        this.removeRenderClock();
    }
    getData() {
        const { data, columns = [] } = this.props;
        let showData = data;
        if (!showData || !showData.length) {
            const emptyArr = new Array(columns.length).fill('', 0, columns.length);
            emptyArr[0] = '暂无数据';
            showData = [emptyArr];
        }
        return showData;
    }
    getMergeCells() {
        const { data, columns = [] } = this.props;
        if (!data || !data.length) {
            return [{ row: 0, col: 0, rowspan: 1, colspan: columns.length }];
        }
        return null;
    }
    getCell() {
        const { data } = this.props;
        if (!data || !data.length) {
            return [{ row: 0, col: 0, className: 'htCenter htMiddle' }];
        }
        return null;
    }
    beforeCopy(arr: any, _arr2?: any) {
        /**
         * 去除格式化
         */
        const value = arr
            .map((row: any) => {
                return row.join('\t');
            })
            .join('\n');
        this.copyUtils.copy(value);
        return false;
    }
    getContextMenu() {
        const that = this;
        const { columns = [], options } = this.props;
        const items = {
            copy: {
                name: '复制',
                callback: function (_key) {
                    const indexArr = this.getSelected();
                    // eslint-disable-next-line prefer-spread
                    const copyDataArr = this.getData.apply(this, indexArr[0]);
                    that.beforeCopy(copyDataArr);
                },
            },
        };
        if (options?.showCopyWithHeader) {
            const copyWithHeaderItem = {
                name: '复制值以及列名',
                callback: function (_key, selection) {
                    const indexArr = this.getSelected();
                    // eslint-disable-next-line prefer-spread
                    let copyDataArr = this.getData.apply(this, indexArr[0]);
                    const columnStart = selection?.[0]?.start?.col;
                    const columnEnd = selection?.[0]?.end?.col;
                    let columnArr;
                    if (columnStart !== undefined && columnEnd !== undefined) {
                        columnArr = columns.slice(columnStart, columnEnd + 1);
                    }
                    if (columnArr) {
                        copyDataArr = [columnArr, ...copyDataArr];
                    }
                    that.beforeCopy(copyDataArr);
                },
            };
            // 目前版本不支持 copy_with_column_headers 暂时用 cut 代替，以达到与copy类似的表现
            items['cut'] = copyWithHeaderItem;
        }
        return {
            items,
        } as any;
    }
    render() {
        const { columns = [], className = '', options } = this.props;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { trimWhitespace = true, showCopyWithHeader, ...restOptions } = options || {};
        const showData = this.getData();
        // 空数组情况，不显示colHeaders，否则colHeaders默认会按照 A、B...显示
        // 具体可见 https://handsontable.com/docs/7.1.1/Options.html#colHeaders
        let isShowColHeaders = false;
        if (columns && columns.length > 0) {
            isShowColHeaders = true;
        }
        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <HotTable
                ref={this.tableRef}
                className={classNames('dtc-handsontable-no-border', className)}
                style={{ width: '100%' }}
                language="zh-CN"
                colHeaders={isShowColHeaders ? columns : false}
                data={showData}
                mergeCells={this.getMergeCells()}
                cell={this.getCell()}
                readOnly
                rowHeaders // 数字行号
                fillHandle={false} // 拖动复制单元格
                manualRowResize // 拉伸功能
                manualColumnResize // 拉伸功能
                colWidths={200}
                trimWhitespace={trimWhitespace} // false 表示不去除内容里的空格
                beforeCopy={this.beforeCopy.bind(this)}
                beforeCut={() => false}
                columnHeaderHeight={25}
                contextMenu={this.getContextMenu()}
                stretchH="all" // 填充空白区域
                {...restOptions}
            />
        );
    }
}
export default SpreadSheet;
