import {Constraintbasedgroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConstraintbasedgroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Constraintbasedgroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Constraintbasedgroup();
}
