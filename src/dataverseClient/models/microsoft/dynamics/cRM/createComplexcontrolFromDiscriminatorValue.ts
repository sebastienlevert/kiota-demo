import {Complexcontrol} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplexcontrolFromDiscriminatorValue(parseNode: ParseNode | undefined) : Complexcontrol {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Complexcontrol();
}
