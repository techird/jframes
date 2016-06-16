declare module "jframes" {

    namespace jframes {

        /**
         * 表示一个动画执行帧
         * */
        export interface Frame {
            /**
             * 帧执行时的时间戳
             * */
            time: number;

            /**
             * 当前执行帧的编号（首帧为 0）
             * */
            index: number;

            /**
             * 上一帧到当前帧经过的时间，单位 ms
             * */
            dur: number;

            /**
             * 从首帧开始到当前帧经过的时间，单位 ms
             * */
            elapsed: number;

            /**
             * 当前帧指向的处理函数
             * */
            action: Function;

            /**
             * 请求执行下一帧，如果 next() 没有被调用，下一帧不会执行
             * */
            next(): void;
        }

        /**
         * 请求执行一个帧，帧处理函数 action 接收帧信息 frame。
         * 使用 frame.next() 方法让处理函数继续在下一帧执行
         *
         * 返回首帧
         * */
        export function request(action: (frame: Frame) => void): Frame;

        /**
         * 释放一个帧，如果帧还没执行，将取消帧的执行
         * */
        export function release(frame: Frame): void;
    }

    export = jframes;
}
