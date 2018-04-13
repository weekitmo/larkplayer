/**
 * @file current-time.js 当前时间 UI
 * @author yuhui<yuhui06@baidu.com>
 * @date 2017/11/4
 */

import classnames from 'classnames';

import Component from '../plugin/component';
import * as Dom from '../utils/dom';
import {timeFormat} from '../utils/time-format';

export default class CurrentTime extends Component {
    constructor(player, options) {
        super(player, options);

        this.handleTimeupdate = this.handleTimeupdate.bind(this);

        player.on('timeupdate', this.handleTimeupdate);
    }

    handleTimeupdate(event, data) {
        this.render(data.currentTime);
    }

    render(time) {
        Dom.textContent(this.el, timeFormat(Math.floor(time)));
    }

    reset() {
        this.render(0);
    }

    createEl() {
        const currentTime = this.player.currentTime();

        return (
            <div className={classnames('lark-current-time', this.options.className)}>
                {timeFormat(Math.floor(currentTime))}
            </div>
        );
    }
}

// Component.register(CurrentTime);