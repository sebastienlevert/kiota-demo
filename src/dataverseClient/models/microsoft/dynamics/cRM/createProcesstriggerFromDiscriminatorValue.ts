import {Processtrigger} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcesstriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Processtrigger {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Processtrigger();
}
