import LimitedArray from 'limited-array';
export interface LoggerProps {
    active?: boolean;
    stdout?: Function | undefined;
    stackCollection?: LimitedArray<Action>;
}
export interface LoggerInterface {
    log(message: string, important: boolean): void;
    info(message: string, important: boolean): void;
    debug(message: string, important: boolean): void;
    warn(message: string, important: boolean): void;
    error(message: string, important: boolean): void;
    getCounter(): number;
    setUp(props: LoggerProps): void;
}
export declare enum LoggerTypes {
    log = "log",
    info = "info",
    warn = "warn",
    error = "error",
    debug = "debug",
    critical = "critical"
}
export declare type CriticalError = {
    line: number;
    stack: string[];
    message: string;
    url?: string;
};
export interface Action {
    [LoggerTypes.log]: string;
    [LoggerTypes.info]: string;
    [LoggerTypes.warn]: string;
    [LoggerTypes.error]: string;
    [LoggerTypes.debug]: string;
    [LoggerTypes.critical]: CriticalError;
}
export declare type StackData = {
    [LoggerTypes.log]: string;
} | {
    [LoggerTypes.info]: string;
} | {
    [LoggerTypes.warn]: string;
} | {
    [LoggerTypes.error]: string;
} | {
    [LoggerTypes.debug]: string;
} | {
    [LoggerTypes.critical]: CriticalError;
};
export interface Stack {
    onPrepareStack?: (s: Stack) => Stack;
    session: {
        start: string;
        end: string;
    };
    env: {
        lang?: string;
        href?: string;
    };
    actions: Action[];
    mousePressed: number | null;
    keyboardPressed: number | null;
    sessionId: number | string;
}
export interface PropsUtils {
    getCurrentDate?: () => string;
    onPrepareStack?: (stack: Stack) => Stack;
}