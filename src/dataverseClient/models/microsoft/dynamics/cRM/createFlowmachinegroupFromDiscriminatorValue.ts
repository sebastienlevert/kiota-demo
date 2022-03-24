import {Flowmachinegroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFlowmachinegroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Flowmachinegroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Flowmachinegroup();
}
