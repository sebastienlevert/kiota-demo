import {Flowsession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFlowsessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Flowsession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Flowsession();
}
