import { LoggerTypes } from './types';
export const mixUrl = (props) => {
    const href = globalThis && globalThis.location && globalThis.location.href ? globalThis.location.href : '';
    return Object.assign({}, href !== '' ? { url: href } : {}, props);
};
export const serializeError = (stack, lineNumber) => {
    const alt = {
        stack: [],
        message: '',
        line: lineNumber
    };
    Object.getOwnPropertyNames(stack).forEach(key => {
        if (key === 'stack') {
            alt[key] = stack[key].split('\n');
        }
        else {
            alt[key] = stack[key];
        }
    }, stack);
    return alt;
};
const CRITICAL = 'critical';
export const isCritical = (type) => CRITICAL === type;
export const getCritical = () => CRITICAL;
export const createCritical = (trace, lineNumber) => {
    const criticalError = serializeError(trace, lineNumber);
    return {
        [CRITICAL]: mixUrl(criticalError)
    };
};