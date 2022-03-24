import {Msdyn_opportunitylinetransactionclassificatio} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitylinetransactionclassificatioFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitylinetransactionclassificatio {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitylinetransactionclassificatio();
}
