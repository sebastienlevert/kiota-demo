import {Timezonerule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimezoneruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Timezonerule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Timezonerule();
}
