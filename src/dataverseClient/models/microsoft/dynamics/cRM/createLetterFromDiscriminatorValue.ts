import {Letter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLetterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Letter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Letter();
}
