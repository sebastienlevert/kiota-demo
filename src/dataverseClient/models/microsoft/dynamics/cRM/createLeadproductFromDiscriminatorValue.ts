import {Leadproduct} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeadproductFromDiscriminatorValue(parseNode: ParseNode | undefined) : Leadproduct {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Leadproduct();
}
