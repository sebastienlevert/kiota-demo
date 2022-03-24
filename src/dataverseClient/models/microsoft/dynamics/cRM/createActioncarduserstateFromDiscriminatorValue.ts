import {Actioncarduserstate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActioncarduserstateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Actioncarduserstate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Actioncarduserstate();
}
