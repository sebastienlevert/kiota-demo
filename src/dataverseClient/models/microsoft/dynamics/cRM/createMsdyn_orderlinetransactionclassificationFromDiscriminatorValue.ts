import {Msdyn_orderlinetransactionclassification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_orderlinetransactionclassification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_orderlinetransactionclassification();
}
